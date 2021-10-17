var express = require("express");
var router = express.Router();

// Create sample data
const messages = [
  {
    text: "Pizza is much better than burgers. This is a fact.",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "While it's true that pizza is nice, nothing beats a grilled burger!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

/* GET /new page. */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Enter your new message" });
});

/* Handle POST request on /new. */
router.post("/new", function (req, res, next) {
  let author = req.body.author;
  let message = req.body.message;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
