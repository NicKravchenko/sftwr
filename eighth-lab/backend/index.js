const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
const mongoString = process.env.MONGODB_URI;

const corsOptions = {
  origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));


//Mongo config
mongoose.connect(mongoString);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

var detenidoSchema = new mongoose.Schema({
  nombre: String,
  cargo: String,
});

var Detenido = mongoose.model("Detenido", detenidoSchema);

app.post("/api/detenidos", (req, res) => {
  var detenido = new Detenido(req.body);
  detenido
    .save()
    .then((item) => {
      res.status(200).send({
        status: "ok",
        message: "Detenido guardado",
        data: item,
      });
      console.log(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/api/detenidos", async (req, res) => {
  try {
    const detenidos = await Detenido.find({});
    res.send(detenidos);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving detenidos");
  }
});
