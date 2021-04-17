const express = require("express");
const router = express.Router();
const seshControllers = require("../controllers/seshControllers");
const checkAuth = require("../middleware/checkAuth");

const multer = require("multer");
const storage = require("../middleware/diskStorage");
const upload = multer({ storage });

router.post("/add", checkAuth, upload.single("file"), seshControllers.add);
router.get("/seshes", seshControllers.seshes);
router.get("/single/:id", seshControllers.single);

router.post("/comment-add", checkAuth, seshControllers.comment_add);

module.exports = router;
