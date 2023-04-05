const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes will be added here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

client.connect((err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");

  db = client.db('<your_db_name>');

  app.locals.db = db;
});

app.post('/detained', (req, res) => {
    const { nombre, cargo } = req.body;
    const collection = req.app.locals.db.collection('detenidos');

    collection.insertOne({ nombre, cargo }, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(result.ops[0]);
      }
    });
  });
