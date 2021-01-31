const express = require("express");
const router = express.Router();
const FileAsync = require("lowdb/adapters/FileAsync");
const low = require("lowdb");
const adapter = new FileAsync("db.json");

low(adapter).then((db) => {
  // Set db default values
  return db.defaults({ posts: [] }).write();
});

/* POST new data */
router.post("/", function (req, res, next) {
  low(adapter).then((db) => {
    console.log(req.body);
    db.get("posts")
      .push(req.body)
      .last()
      .assign({ id: Date.now().toString() })
      .write()
      .then((post) => res.send(post));
  });
});

router.get("/", function (req, res, next) {
  res.send("Send HTTP POST request to this endpoint");
});
module.exports = router;
