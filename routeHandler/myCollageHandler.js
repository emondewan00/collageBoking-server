const mongoose = require("mongoose");
const express = require("express");
const myCollageSchema = require("../schema/myCollage");
const router = express.Router();

const MyCollage = new mongoose.model("myCollage", myCollageSchema);

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await MyCollage.findOne({ _id });
    res.send(result);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    const collage = new MyCollage(req.body);
    const result = await collage.save();
  } catch (error) {}
});

module.exports=router