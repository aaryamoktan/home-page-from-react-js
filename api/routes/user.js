const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      } catch (err) {
        res.status(400).json("empty");
      }
    }
    try {
      const update = await user.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("account has been update");
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    return res.status(403).json("you can update you acccount only");
  }
});
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    try {
      const userdelete = await user.deleteOne({ _id: req.params.id });
      res.status(200).json("account has been delete sucesfully");
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(401).json("you can delete your own personal account");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user2 = await user.findById(req.params.id);
    res.status(200).json(user2);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id/followers", async (req, res) => {
  if (req.body.userId != req.params.id) {
    try {
      const fan = await user.findById(req.params.id);
      const currentuser = await user.findById(req.body.userId);
      if (!fan.followers.includes(req.body.userId)) {
        await fan.updateOne({ $push: { followers: req.body.userId } });
        await currentuser({ $push: { following: req.body.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(400).json("you already follow");
      }
    } catch (err) {
      res.status(400).json(err);
    }
  }
});
router.put(":/id/unflow", async (req, res) => {
  if (req.body.userId != req.params.id) {
    try {
      const fan = await user.findById(req.params.id);
      const me = await user.findById(req.body.userId);
      if (fan.followers.includes(req.body.userId))
      {
        await fan.updateOne({ $pop: { followers: req.body.userId } });
      await me({ $pop: { following: req.params.id } });
      res.status(200).json("user has been unfollowed sucesfully");
      }
      else{
        res.status(500).json("user already unfollowed")
      }
    } catch (err) {
        res.status(400).json(err)
    }
  } else {
    res.status(500).json(err);
  }
});
module.exports = router;
