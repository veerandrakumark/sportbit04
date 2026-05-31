const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },

  category:{
    type:String,
    required:true
  },

  duration:{
    type:Number,
    required:true
  }

});

module.exports =
mongoose.model(
  "Challenge",
  challengeSchema
);