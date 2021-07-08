const Post=require('../models/post')
const Magazin=require('../models/magazine')

const createPost=async(req,res)=>{
    try {
        let post=new Post(req.body)
        await post.save()
        let magazin=Magazin.findById(post.magazin)
        magazin.magazin.push(post._id)
        magazin.save()
        res.status(200).json({post:post})
    } catch (error) {
        res.json({status:400, message:error})
    }
}

const getAllPostsByMagazin=async(req,res)=>{
    try {
        let magazins=await Magazin.findById(req.params.magazinId).populate('posts')
        res.json({magazins})
    } catch (error) {
        res.send(err)
    }
}




const deletePost=async(req,res)=>{
    try {
        let post=await Post.findByIdAndDelete(req.params.postId)
        await Magazin.findByIdAndUpdate(post.magazin,{$pull:{posts:post._id}},{new:true})
        res.status(200).json({post:post})
    } catch (error) {
        res.json(error)
    }
}


module.exports={createPost
,getAllPostsByMagazin
,deletePost
}