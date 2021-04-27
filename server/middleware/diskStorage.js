const multer = require("multer");
const fs = require("fs");
const path = require("path");

const defaultStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const { username } = req.user;
    const dir = `./images/${username}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    cb(null, `images/${username}`);
  },
  filename: (req, file, cb) => {
    const { _id } = req.user;

    cb(null, `${_id}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ defaultStorage });
module.exports = upload;
