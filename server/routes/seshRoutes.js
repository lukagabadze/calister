const express = require("express");
const router = express.Router();
const seshControllers = require("../controllers/seshControllers");
const checkAuth = require("../middleware/checkAuth");

const upload = require("../middleware/diskStorage");

router.post("/add", checkAuth, upload.single("file"), seshControllers.add);
router.get("/seshes", seshControllers.seshesAll);
router.get("/seshes/:id", seshControllers.seshes);
router.get("/single/:id", seshControllers.single);

router.post("/comment-add", checkAuth, seshControllers.comment_add);
router.post("/heart", checkAuth, seshControllers.heart);

module.exports = router;
