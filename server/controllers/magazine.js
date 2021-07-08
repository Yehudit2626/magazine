const Magazine=require('../models/magazine')
const User=require('../models/user')



const createMagazine = async(req, res) => 
{
    let magazine=new Magazine(req.body)
    try 
    {
      await magazine.save()
      let user=await User.findById(magazine.user)
      user.magazines.push(magazine._id)
      await user.save()
      res.status(200).json({magazine:magazine})
    } 
    catch (error) 
    {
      res.json({status:400, message:error})
    }
  }

const getMagazinesByUser=async (req, res)=>
{
  let {userId}=req.params
  try 
  {
    let user=await User.findById(userId)
    if(user)
    {
        let magazines=await Magazine.find({ _id: { $in: user.magazines}});
        res.status(200).json({magazines:magazines})
    }
    else
    res.status(404).json({message:"not found user"})
  } 
  catch (error) 
  {
    res.json({error})
  }
 
}

const deleteMagazine = async(req, res) => 
{
  let {magazineId}=req.params
  try 
  {
    let magazine=Magazine.findByIdAndDelete(magazineId)    
    if(magazine)
    {
        await User.findByIdAndUpdate(magazin.user,{$pull:{magazines:magazin._id}},{new:true})
        res.status(200).json({message:"magazine deleted"})
    }
    else
    res.status(404).json({message:"not found magazine"})
  } 
  catch (error) 
  {
    res.json({error})
  }
}
const getAllMagazines = async(req, res) => 
{
  try 
  {
    let magazines=await Magazine.find()
    if(magazines)
    {
        res.status(200).json({magazines:magazines})
    }
    else
    res.status(404).json({message:"not found magazines"})
  } 
  catch (error) 
  {
    res.json({error})
  }
}

module.exports={createMagazine,getMagazinesByUser,deleteMagazine,getAllMagazines}
