const Contact=require('../../models/contact')
const contactsFavoriteSchema=require('../../models/joiSchema')

const updateFavorite=async (req, res, next) => {
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
  }

module.exports=updateFavorite