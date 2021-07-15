const User=require( '../models/user')
const jwt=require('jsonwebtoken')

const checkPermission= async (req, res, next) => {
    console.log('in middlware');
    if (!req.path.startsWith('/createNewUser')) {
    try{
    const currentUser = await jwt.verify(req.headers.token, process.env.SECRET)
    await User.find({email: currentUser.email, name: currentUser.name })
    next()
   }
   catch(error){
    res.json({ status: 400, message: "No permisstion! please register as real user" })
   }
}
else{
    console.log("else");
    next()
}
}
module.exports={checkPermission}