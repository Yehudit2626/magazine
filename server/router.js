const router=require('express').Router() 
const magazineFunctions=require('./controllers/magazine')

router.post('/createMagazine', magazineFunctions.createMagazine)
router.get('/getMagazinesByUser/:userId', magazineFunctions.getMagazinesByUser)
router.get('/deleteMagazine/:magazineId', magazineFunctions.deleteMagazine)
router.get('/getAllMagazines', magazineFunctions.getAllMagazines)

module.exports=router