const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const reviewSchema = require("../schema/reviewSchema");
const Review = new mongoose.model("review", reviewSchema);

router.get("/", async (req, res) => {
  try {
    const result = await Review.find({});
    res.send(result);
  } catch (error) {
    console.log(req.body)
    console.log(error,"review error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const result = await newReview.save();
    res.send(result);
  } catch (error) {}
});

module.exports = router;
