const Sesh = require("../models/Sesh");
const User = require("../models/User");

const add = async (req, res) => {
  const changeFilePath = (filePath) => {
    filePath = filePath.split("/");
    filePath[0] = null;
    return (filePath = filePath.join("/"));
  };

  const { title, sets } = req.body;
  const file = req.file;
  try {
    const setsArray = JSON.parse(sets);
    const sesh = await new Sesh({
      title,
      sets: setsArray,
      media: file ? changeFilePath(file.path) : null,
      authorId: req.user._id,
    }).save();
    res.json(sesh);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const seshes = async (req, res) => {
  const seshes = await Sesh.find({}).sort([["date", -1]]);
  return res.json({ seshes });
};

const single = async (req, res) => {
  const { id } = req.params;
  const sesh = await Sesh.findById(id);
  return res.json(sesh);
};

const comment_add = async (req, res) => {
  const { seshId, text } = req.body;
  const { username, _id } = req.user;
  const { media } = await User.findById(_id);

  const sesh = await Sesh.findById(seshId);
  sesh.comments.push({ text, username, media });
  sesh.save();

  return res.json(sesh);
};

const heart = async (req, res) => {
  const { seshId } = req.body;
  const { _id } = req.user;
  const sesh = await Sesh.findById(seshId);
  if (sesh.hearts.includes(_id)) {
    // already liked
    const idInd = sesh.hearts.indexOf(_id);
    sesh.hearts.splice(idInd, 1);
  } else {
    // not liked yet
    sesh.hearts.push(_id);
  }
  await sesh.save();
  return res.status(201).json({ hearts: sesh.hearts });
};

module.exports = {
  add,
  seshes,
  single,
  comment_add,
  heart,
};
