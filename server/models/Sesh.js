const mongoose = require("mongoose");
const commentSchema = require("./commentSchema");

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
  media: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  private: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  hearts: [String],
  comments: [commentSchema],
});

const Sesh = mongoose.model("sesh", seshSchema);

module.exports = Sesh;
