const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const userControllers = require("../controllers/userControllers");

router.get("/single/:id", userControllers.single);
router.get("/seshes/:id", userControllers.seshes);

router.post("/follow", checkAuth, userControllers.follow);

module.exports = router;
