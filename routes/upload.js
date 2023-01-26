const { Router } = require("express");
const path = require("path");

const router = Router();

router.post("/", (req, res) => {
  const newFileName = `${Math.random() * 10000}${path.extname(
    req.files.image.name
  )}`;
  req.files.image.mv(`./assets/${newFileName}`, (err) => {
    if (err) {
      console.log("error");
    } else {
      res.json("Файл загружен");
    }
  });
});

module.exports = router;
