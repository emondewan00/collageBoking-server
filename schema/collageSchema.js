const mongoose = require("mongoose");
const collageSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  collageName: {
    type: String,
    require: true,
  },
  admissionProcess: {
    type: String,
    require: true,
  },
  event: [
    {
      topic: { type: String },
      details: { type: String },
    },
  ],
  research: [
    {
      topic: { type: String },
      details: { type: String },
    },
  ],
  sports: [
    {
      sport: { type: String },
      details: { type: String },
    },
  ],
  admissionDate: {
    type: String,
    require: true,
  },
});

module.exports = collageSchema;
