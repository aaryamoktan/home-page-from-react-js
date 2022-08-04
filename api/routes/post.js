const router = require("express").Router();
const postuser = require("../models/post");
router.post("/", async (req, res) => {
  const postd = new postuser(req.body);
  try {
    const postuser = await postd.save();
    res.status(200).json(postuser);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", async (req, res) => {
  const updatepost = await postuser.findById(req.params.id);
  try {
    if (updatepost.userId == req.body.userId) {
      await updatepost.UpdateOne({ $set: req.body });
      res.status(200).json("post has been update sucesfully");
    } else {
      res.status(500).json("you can update other picture or post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  const deletepost = await postuser.findById(req.params.id);
  try {
    if (deletepost.userId == req.body.userId) {
      await deletepost.deleteOne();
      res.status(200).json("deleted sucesfully");
    } else {
      res.status(500).json("you cannot delete other post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id/likes", async (req, res) => {
  const likepost = await postuser.findById(req.params.id);
  try {
    if (!likepost.likes.inlcude(req.body.userId)) {
      await postuser.updateOne({ $push: { likes: req.body.userId } });
    } else {
      await postuser.UpdateOne({ $pull: { likes: req.body.userId } });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id",async(req,res)=>
{
    
    try{
        const weget = await postuser.findById(req.params.id)
        res.status(200).json(weget);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

module.exports = router;
