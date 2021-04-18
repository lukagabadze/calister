const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const seshRoutes = require("./routes/seshRoutes");
const userRoutes = require("./routes/userRoutes");

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

// routes
app.use("/auth", authRoutes);
app.use("/sesh", seshRoutes);
app.use("/user", userRoutes);
