const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  rdFromUs = 0;
  res.render("Pages/ej4", {
    title: "Donation",
  });
});

module.exports = router;
