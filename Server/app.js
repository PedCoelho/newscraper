const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const getDataRouter = require("./routes/getdata");
const newDataRouter = require("./routes/newdata");

const app = express();

// low(adapter)
//   .then(db => {
//     // Routes
//     // GET /posts/:id
//     app.get('/posts/:id', (req, res) => {
//       const post = db.get('posts')
//         .find({ id: req.params.id })
//         .value()

//       res.send(post)
//     })

//     // POST /posts
//     app.post('/posts', (req, res) => {
//       db.get('posts')
//         .push(req.body)
//         .last()
//         .assign({ id: Date.now().toString() })
//         .write()
//         .then(post => res.send(post))
//     })

//     // Set db default values
//     return db.defaults({ posts: [] }).write()
//   })
app.disable("etag");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/getdata", getDataRouter);
app.use("/api/newdata", newDataRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
