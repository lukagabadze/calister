const Sesh = require("../models/Sesh");
const User = require("../models/User");
const { uploadFile } = require("../s3");

const add = async (req, res) => {
  const { title, sets } = req.body;
  const file = req.file;

  try {
    const setsArray = JSON.parse(sets);
    const author = await User.findById(req.user._id);
    const sesh = await new Sesh({
      title,
      sets: setsArray,
      author: author,
    });

    if (file) {
      await uploadFile(file);
      sesh.media = file.filename;
    }

    await sesh.save();
    return res.status(201).json(sesh);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const seshesAll = async (req, res) => {
  let { page, size } = req.query;
  page = parseInt(page);
  size = parseInt(size);

  const limit = size;
  const skip = (page - 1) * size;

  try {
    const seshes = await Sesh.find({})
      .limit(limit)
      .skip(skip)
      .sort([["date", -1]])
      .populate("author")
      .populate("comments.author");
    return res.status(200).json({ seshes });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const seshes = async (req, res) => {
  let { page, size } = req.query;
  page = parseInt(page);
  size = parseInt(size);

  const limit = size;
  const skip = (page - 1) * size;

  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    const seshes = await Sesh.find({ author: { $in: user.following } })
      .limit(limit)
      .skip(skip)
      .sort([["date", -1]])
      .populate("author")
      .populate("comments.author");
    return res.status(200).json({ seshes });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const single = async (req, res) => {
  const { id } = req.params;
  const sesh = await Sesh.findById(id)
    .populate("author")
    .populate("comments.author");
  return res.json(sesh);
};

const comment_add = async (req, res) => {
  const { seshId, text } = req.body;
  const { _id } = req.user;

  const author = await User.findById(_id);
  const sesh = await Sesh.findById(seshId);
  const newComment = {
    text,
    author,
  };

  sesh.comments.push(newComment);
  await sesh.save();

  return res.json(newComment);
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
  seshesAll,
};
