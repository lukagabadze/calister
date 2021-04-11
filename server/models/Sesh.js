const mongoose = require("mongoose");

const seshSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sets: [
    {
      type: String,
      required: true,
    },
  ],
  media: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  private: {
    type: Boolean,
    default: false,
  },
  author: {
    type: String,
    required: true,
  },
});

const Sesh = mongoose.model("sesh", seshSchema);

module.exports = Sesh;
