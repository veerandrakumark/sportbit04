const express = require("express");

const router = express.Router();

const Challenge =
require("../models/Challenge");

router.post("/", async(req,res)=>{

  const challenge =
  await Challenge.create(req.body);

  res.json(challenge);

});

router.get("/", async(req,res)=>{

  const challenges =
  await Challenge.find();

  res.json(challenges);

});

router.put("/:id", async(req,res)=>{

  const updated =
  await Challenge.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );

  res.json(updated);

});

router.delete("/:id", async(req,res)=>{

  await Challenge.findByIdAndDelete(
    req.params.id
  );

  res.json("Deleted");

});

module.exports = router;