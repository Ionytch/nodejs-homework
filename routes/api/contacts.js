const express = require('express')
const router = express.Router()
const controller=require('../../controllers/contacts')
const controllerWrapper=require('../../helpers/controllerWrapper')


router.get('',controllerWrapper(controller.getContactsList))

router.get('/:contactId',controllerWrapper(controller.getContactById))

router.post('/',controllerWrapper(controller.addContact))

router.delete('/:contactId',controllerWrapper(controller.deleteContact))

router.put('/:contactId',controllerWrapper(controller.updateContact))

router.patch('/:contactId/favorite',controllerWrapper(controller.updateFavorite))

module.exports = router
