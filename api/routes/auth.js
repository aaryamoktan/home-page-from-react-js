const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");
router.get("/register", (req, res) => {
  res.send("login sucessfully");
});
router.post("/register", async (req, res) => {
  const userpassword = await bcrypt.hash(req.body.password, 10);
  try {
    const user1 = await new user({
      username: req.body.username,
      email: req.body.email,
      password: userpassword,
    });
    await user1.save();
    res.send("you have register sucesfully");
  } catch (err) {
    console.log(err);
  }
});
router.get("/login", (req, res) => {
  res.send("welcome to login page");
});
router.post("/login", async (req, res) => {
  try {
    const user1 = await user.findOne({ email: req.body.email });
    !user && res.status(400).send("user not found");
    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validpassword && res.status(400).send("wrong password");

    res.status(200).json(user1);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
