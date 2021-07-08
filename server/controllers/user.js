const User=require('../models/user')

const createUser=async(req,res)=>{
    try {
        let user=new User(req.body)   
        await user.save()
        res.status(200).json({user:user})
    } catch (error) {
        res.json({status:400, message:error})
    }
}

const getAllUsers=async(req,res)=>{
    try {
        let users=await User.find();
        res.json({users})
    } catch (error) {
        res.send(err)
    }
}

const getUserById=async(req,res)=>{
    try {
        let user=await User.findById(req.params.userId);
        res.send(user)
    } catch (error) {
        res.send(err)
    }
}

const deleteUser=async(req,res)=>{
    try {
        let student=await Student.findByIdAndDelete(req.params.userId)
        res.json({student})
    } catch (error) {
        res.json(error)
    }
}

module.exports={createUser
,getAllUsers
,getUserById
,deleteUser
}