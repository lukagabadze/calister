const User = require("../models/User");

const single = async (req, res) => {
  const { id } = req.params;
  try {
    const { username, media } = await User.findById(id);
    return res.json({ username, media });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  single,
};
