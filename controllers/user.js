const { User } = require("../models/user");

async function handleUserCreate(req, res) {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({ name, email, password });
    return res.json({ status: true, msg: newUser });
  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
}

module.exports = {
  handleUserCreate,
};
