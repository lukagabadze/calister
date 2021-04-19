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
  media: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  private: {
    type: Boolean,
    default: false,
  },
  authorId: {
    type: String,
    required: true,
  },
  hearts: [String],
  comments: [commentSchema],
});

const Sesh = mongoose.model("sesh", seshSchema);

module.exports = Sesh;
