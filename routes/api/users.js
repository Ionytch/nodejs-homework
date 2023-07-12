const express=require('express')
const router=express.Router()
const controller=require('../../controllers/users')
const controllerWrapper=require('../../helpers/controllerWrapper')
const {auth}=require('../../middlewares')

router.post('/contacts', controllerWrapper (auth), controllerWrapper(controller.addContact))
router.get('/contacts', controllerWrapper (auth),controllerWrapper(controller.getContacts))
router.get('/info', controllerWrapper (auth),controllerWrapper(controller.getInfo))



module.exports=router