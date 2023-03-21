const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  rdFromUs = 0;
  res.render("Pages/ej3", {
    title: "Cerveceria",
    message: "",
  });
});

router.post("/confirm", (req, res, next) => {
  const age = req.body.age;
  if (age >= 18) {
    res.writeHead(301, { Location: "http://google.com" });
    res.end();
  }
  res.render("Pages/ej3", {
    title: "Cerveceria",
    message: "You are menor de edad",
  });
});

module.exports = router;
