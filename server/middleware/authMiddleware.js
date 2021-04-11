const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    req.user = null;
    next();
    return;
  }

  let error = null;

  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
    if (err) {
      error = {
        message: err.message,
        redirect: "/auth/login",
      };
      return;
    }

    if (req.app.locals.userId !== decodedToken.id) {
      error = {
        message: "incorrect JWT",
        redirect: "/auth/login",
      };
      return;
    }
  });

  if (error) {
    req.app.locals.userId = null;
    res.json({ error });
    return;
  }

  next();
};

module.exports = authMiddleware;
