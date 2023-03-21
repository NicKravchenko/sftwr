const express = require("express");
const bodyParser = require("body-parser");

const ascRouter = require("./routes/asc");
const numberRouter = require("./routes/number");
const mainRouter = require("./routes/main");

const temblorRouter = require("./routes/temblor");
const ej2Router = require("./routes/ej2");
const ej3Router = require("./routes/ej3");
const ej4Router = require("./routes/ej4");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRouter);
// app.use("/asc", ascRouter);
// app.use("/number", numberRouter);

app.use("/ej1", temblorRouter);
app.use("/ej2", ej2Router);
app.use("/ej3", ej3Router);
app.use("/ej4", ej4Router);

app.listen(3000, (err) => {
  console.log(err);
});
