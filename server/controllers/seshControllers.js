const Sesh = require("../models/Sesh");

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
      author: req.user._id,
    }).save();
    res.json({ sesh });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const seshes = async (req, res) => {
  const seshes = await Sesh.find({}).sort([["date", -1]]);
  console.log(seshes);
  return res.json({ seshes });
};

module.exports = {
  add,
  seshes,
};
