var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");

const ROOT_URL = "https://catfact.ninja";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "CAT FACT" });
});
// GET random cat fact
router.get("/cats/fact", function (req, res, next) {
  fetch(`${ROOT_URL}/fact`)
    .then(res => res.json())
    .then(fact => res.render("cats/facts", { fact }));
});

module.exports = router;
