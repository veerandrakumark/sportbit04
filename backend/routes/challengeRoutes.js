const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

const Challenge =
require("../models/Challenge");

router.post("/", auth, async(req,res)=>{

  try {
    const challenge =
    await Challenge.create({
      ...req.body,
      userId: req.userId
    });

    res.json(challenge);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

});

router.get("/", async(req,res)=>{

  try {
    const challenges =
    await Challenge.find();

    res.json(challenges);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

});

router.put("/:id", auth, async(req,res)=>{

  try {
    const updated =
    await Challenge.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

});

router.delete("/:id", auth, async(req,res)=>{

  try {
    await Challenge.findByIdAndDelete(
      req.params.id
    );

    res.json("Deleted");
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

});

module.exports = router;

module.exports = router;