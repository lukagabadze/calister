const multer = require("multer");
const fs = require("fs");
const path = require("path");

const defaultStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, `images`);
  },
  filename: (req, file, cb) => {
    const { _id } = req.user;
    cb(null, `${_id}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: defaultStorage });
module.exports = upload;
