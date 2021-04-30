const User = require("../models/User");
const Sesh = require("../models/Sesh");

const single = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const search = async (req, res) => {
  let { page, size } = req.query;
  page = parseInt(page);
  size = parseInt(size);

  const limit = size;
  const skip = (page - 1) * size;

  try {
    const { query } = req.query;
    const regex = new RegExp(query, "i");
    const users = await User.find({ username: regex }).limit(limit).skip(skip);
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
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
    return res.status(500).json({ error: "Internal server error" });
  }
};

const follow = async (req, res) => {
  const { userId } = req.body;
  const authorId = req.user._id;
  if (userId === authorId) {
    return res.status(403).json({ error: "You can't follow yourself" });
  }

  try {
    const user = await User.findById(userId);
    const author = await User.findById(authorId);

    if (user.followers.includes(author._id)) {
      user.followers.splice(user.followers.indexOf(author._id), 1);
      author.following.splice(author.following.indexOf(user._id), 1);
    } else {
      user.followers.push(author._id);
      author.following.push(user._id);
    }

    await user.save();
    await author.save();
    res.status(202).json({ followers: user.followers });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
    s;
  }
};

const edit = async (req, res) => {
  const changeFilePath = (filePath) => {
    filePath = filePath.split("/");
    filePath[0] = null;
    return (filePath = filePath.join("/"));
  };

  const userId = req.user._id;
  const { username, description } = req.body;
  const file = req.file;
  try {
    const user = await User.findById(userId);
    user.username = username ? username : user.username;
    user.media = file ? changeFilePath(file.path) : user.media;
    user.description = description ? description : user.description;

    const savedUser = await user.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const password = async (req, res) => {
  const { password1, password2 } = req.body;
  if (!req.user) {
    return res.status(401).json({ error: "You must be logged in" });
  }
  if (password1 !== password2) {
    return res.status(403).json({ error: "Passwords must match" });
  }

  const userId = req.user._id;
  try {
    const user = await User.findById(userId);
    user.password = password1;
    await user.save();
    return res.status(201).json({ message: "Password changed successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  single,
  search,
  seshes,
  follow,
  edit,
  password,
};
