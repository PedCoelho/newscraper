const express = require("express");
const router = express.Router();

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

router.use(requestTime);

/* POST new data */
router.get("/", function (req, res, next) {
  res.send("Send HTTP POST request to this endpoint");
});

/* POST new data */
router.post("/", function (req, res, next) {
  console.log(req.body);
  //   res.send(req);

  console.log(new Date(req.requestTime).toLocaleString());
  res.send("Got a POST request for newData");
});

module.exports = router;
