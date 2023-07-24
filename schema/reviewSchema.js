const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    require: true,
  },
  name: { type: String, require: true },
  collageName: {
    type: String,
    require: true,
  },
  rating: { type: Number, require: true },
  review: {
    type: String,
    require,
  },
});
module.exports = reviewSchema;
