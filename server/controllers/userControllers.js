const User = require("../models/User");
const Sesh = require("../models/Sesh");

const single = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const seshes = async (req, res) => {
  const { id } = req.params;
  try {
    const seshes = await Sesh.find({ author: id })
      .populate("author")
      .populate("comments.author");
    return res.json({ seshes });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  single,
  seshes,
};
