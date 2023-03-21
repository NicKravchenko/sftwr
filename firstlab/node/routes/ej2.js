const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  rdFromUs = 0;
  res.render("Pages/ej2", {
    title: "Currency convertor",
    rdFromUs: rdFromUs,
    usFromRd: 0,
    rdFromEu: 0,
    euFromRd: 0,
  });
});

router.post("/UStoRD", (req, res, next) => {
  const us = req.body.usToRd;
  const rd = us * 50;
  res.render("Pages/ej2", {
    title: "Currency convertor",
    rdFromUs: rd,
    usFromRd: 0,
    rdFromEu: 0,
    euFromRd: 0,
  });
});

router.post("/RDtoUS", (req, res, next) => {
  const rd = req.body.rdToUs;
  const us = rd / 50;
  res.render("Pages/ej2", {
    title: "Currency convertor",
    rdFromUs: 0,
    usFromRd: us,
    rdFromEu: 0,
    euFromRd: 0,
  });
});

router.post("/EUtoRD", (req, res, next) => {
  const eu = req.body.euToRd;
  const rd = eu * 60;
  res.render("Pages/ej2", {
    title: "Currency convertor",
    rdFromUs: rd,
    usFromRd: 0,
    rdFromEu: rd,
    euFromRd: 0,
  });
});

router.post("/RDtoEU", (req, res, next) => {
  const rd = req.body.rdToEu;
  const eu = rd / 60;
  res.render("Pages/ej2", {
    title: "Currency convertor",
    rdFromUs: 0,
    usFromRd: 0,
    rdFromEu: 0,
    euFromRd: eu,
  });
});

module.exports = router;
