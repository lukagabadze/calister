const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.get("/single/:id", userControllers.single);
router.get("/seshes/:id", userControllers.seshes);

module.exports = router;
