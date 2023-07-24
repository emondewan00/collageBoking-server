const express = require("express");
const mongoose = require("mongoose");
const collageSchema = require("../schema/collageSchema");
const router = express.Router();

const Collage = new mongoose.model("Collage", collageSchema);

router.get("/", async (req, res) => {
  try {
    const result = await Collage.find();
    res.send(result);
  } catch (error) {}
});
router.get("/single", async (req, res) => {
  try {
    const collageName = req.query.collageName;
    const query = {
      collageName: { $regex: new RegExp(collageName, "i") },
    };
    const result = await Collage.find(query);
    res.send(result);
  } catch (error) {}
});

router.get("/collagesName", async (req, res) => {
  try {
    const result = await Collage.find({}, { _id: 1, collageName: 1 });
    res.send(result);
  } catch (error) {}
});
router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await Collage.findOne({ _id });
    res.send(result);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const newCollage = new Collage(req.body);
    const result = await newCollage.save();
    res.send(result);
  } catch (error) {}
});

module.exports = router;
