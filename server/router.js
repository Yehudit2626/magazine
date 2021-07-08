const router=require('express').Router() 
const magazineFunctions=require('./controllers/magazine')
const userFunctions=require('./controllers/user')
const postFunctions=require('./controllers/post')


router.post('/createMagazine', magazineFunctions.createMagazine)
router.get('/getMagazinesByUser/:userId', magazineFunctions.getMagazinesByUser)
router.get('/deleteMagazine/:magazineId', magazineFunctions.deleteMagazine)
router.get('/getAllMagazines', magazineFunctions.getAllMagazines)

router.post('/createNewUser',userFunctions.createUser)
router.get('/getAllUsers',userFunctions.getAllUsers)
router.get('/getUserById/:userId',userFunctions.getUserById)
router.delete('/deleteUser/:userId',userFunctions.deleteUser)

router.post('/createnewPost',postFunctions.createPost)
router.get('/getAllPostsByMagazin/:magazinId',postFunctions.getAllPostsByMagazin)
router.delete('/deletePost/:postId',postFunctions.deletePost)

module.exports=router