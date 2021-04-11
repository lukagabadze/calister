const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const seshRoutes = require("./routes/seshRoutes");

mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db!");
    app.listen(process.env.PORT, () => {
      console.log("listening to port 4000!");
    });
  }
);

// middleware
app.use(express.json());
app.use(express.static("./images"));
app.use(cors());
app.use(authMiddleware);

// app.use((req, res, next) => {
//   console.log(req.body);
//   next();
// });

// routes
app.get("/", (req, res) => {
  res.download("./images/gabo/a.png");
});
app.use("/auth", authRoutes);
app.use("/sesh", seshRoutes);
