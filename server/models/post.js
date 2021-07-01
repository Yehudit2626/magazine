
const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},
    content:{type:String},
    editor:{type:String},
    img:{type:String},
    color:{type:String},
    magazin:{ type: mongoose.Schema.Types.ObjectId,
    ref:"Magazin"
   }
}, { timestamps: true })

module.exports=mongoose.model("Post",postSchema)


