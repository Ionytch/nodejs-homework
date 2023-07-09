const express = require('express')
const Contact=require('../../models/contact')
// const contacts=require('../../models/contacts')


const router = express.Router()
const joi=require('joi');

const contactsSchema=joi.object({
  name:joi.string().required(),
  email:joi.string().required(),
  phone:joi.string().required(),
  favorite: joi.boolean()
})

const contactsFavoriteSchema=joi.object({
    favorite: joi.boolean().required()
})

router.get('', async (req, res, next) => {
  try {
    const result=await Contact.find();
     res.json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
try {
  const {contactId}=req.params
   const result=await Contact.findById(contactId)
  if(!result){
    res.status(404).json ({message:'not found'})
  }
  res.json(result)
} catch (error) {
  next(error)
}
})

router.post('/', async (req, res, next) => {
try {
  const result= await Contact.create(req.body)
  return res.status(201).json(result)
} catch (error) {
 next(error)
}
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const {contactId}=req.params
    const result= await Contact.findByIdAndDelete(contactId)
    if(!result){
      res.status(404).json ({message:'not found'})
        }
res.json({message:'contact deleted' })
  } catch (error) {
    next (error)
  }
})

router.put('/:contactId', async (req, res, next) => {
try {
  const {error}=contactsSchema.validate(req.body)  
  if(error){
    res.status(400).json ({message:'missing fields'})
  }
  const {contactId}=req.params
  const result= await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
  if(!result){
    res.status(404).json ({message:'not found'})
      }
  res.json(result)
} catch (error) {
  next(error)
}
})

router.patch('/:contactId/favorite', async (req, res, next) => {
  try {
    const {error}=contactsFavoriteSchema.validate(req.body)  
  if(error){
    res.status(400).json ({message:'missing field favorite'})}
    const { contactId } = req.params
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
    if (!result) {
      res.status(404).json ({message:'not found'})
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
})

module.exports = router
