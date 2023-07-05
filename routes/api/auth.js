const express=require('express')
const router=express.Router()
const controller=require('../../controllers/auth')
const controllerWrapper=require('../../helpers/controllerWrapper')

router.post('/', controllerWrapper(controller.registration))

module.exports=router