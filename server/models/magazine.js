const mongoose = require("mongoose");

const magazinSchema=mongoose.Schema({
user:{ type: mongoose.Schema.Types.ObjectId,ref:"User" },
title:{type:String},
description:{type:String},
logo:{type:String},
posts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Post"
}],
}, { timestamps: true })

module.exports=mongoose.model("Magazin",magazinSchema)