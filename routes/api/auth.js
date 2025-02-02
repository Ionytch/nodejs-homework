const express=require('express')
const router=express.Router()
const controller=require('../../controllers/auth')
const controllerWrapper=require('../../helpers/controllerWrapper')
const {auth}=require('../../middlewares')
const upload = require('../../middlewares/upload')



router.post('/registration', controllerWrapper(controller.registration))
router.get('/verify/:verificationToken',controllerWrapper(controller.verifyEmail))
router.post('/verify', controllerWrapper(controller.resendVerification))
router.post('/login', controllerWrapper(controller.login))
router.post('/logout', controllerWrapper (auth),controllerWrapper(controller.logout))
router.get('/current',controllerWrapper (auth),controllerWrapper(controller.getCurrent))
router.post('/refresh', controllerWrapper(controller.refreshTokens))
router.patch('/avatars',controllerWrapper (auth),upload.single('avatar'),controllerWrapper(controller.uploadImage))





module.exports=router