const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const upload = require("../middleware/diskStorage");
const userControllers = require("../controllers/userControllers");

router.get("/search", userControllers.search);
router.get("/single/:id", userControllers.single);
router.get("/seshes/:id", userControllers.seshes);

router.post("/follow", checkAuth, userControllers.follow);
router.post("/edit", checkAuth, upload.single("file"), userControllers.edit);
router.post("/password", checkAuth, userControllers.password);

module.exports = router;
