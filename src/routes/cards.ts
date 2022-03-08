export {};
const Card = require("../models/Card");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  Card.find().exec((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data });
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Card.findById(id, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data });
  });
});

router.post("/", (req, res) => {
  const { id, update } = req.body;
  Card.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Card.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.put("/", (req, res) => {
  let data = new Card();

  const { name, imageUrl, translations } = req.body;

  if (!name || !imageUrl) {
    return res.json({
      success: false,
      error: "INVALID INPUTS",
    });
  }
  data.name = name;
  data.imageUrl = imageUrl;
  data.translations = translations;

  console.log(data);
  data.save((err, object) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, error: err });
    }
    return res.json({ success: true, object });
  });
});

module.exports = router;
