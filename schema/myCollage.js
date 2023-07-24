const mongoose = require("mongoose");
const myCollage = new mongoose.Schema({
  studentEmail: {
    type: String,
    require: true,
  },
  collage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "collage",
    require: true,
  },
});

module.exports = myCollage;
