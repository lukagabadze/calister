const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const checkAuth = require("../middleware/checkAuth");

router.post("/signup", authControllers.signup);
router.post("/login", authControllers.login);
router.delete("/logout", authControllers.logout);
router.post("/access_token", authControllers.generateAccessToken);

router.get("/user", checkAuth, (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

// test route
router.get("/test", checkAuth, async (req, res) => {
  console.log(req.user);
  res.send("gabos playgroud");
});

module.exports = router;
