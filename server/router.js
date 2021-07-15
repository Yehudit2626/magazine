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

router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
  });

module.exports=router