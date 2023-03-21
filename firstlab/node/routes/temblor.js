const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  const mode = req.body.mode ? req.body.mode : "charToAsc";
  res.render("Pages/temblor", {
    title: "Temblor",
  });
});

module.exports = router;
