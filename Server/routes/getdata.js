var express = require("express");
var router = express.Router();
const FileAsync = require("lowdb/adapters/FileAsync");
const low = require("lowdb");
const adapter = new FileAsync("db.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  low(adapter).then((db) => {
    let data = db.get("posts").value();
    res.send(data);
  });
});

module.exports = router;
