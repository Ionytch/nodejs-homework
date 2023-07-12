const Contact=require('../../models/contact')
const contactsSchema=require('../../models/joiSchema')

const updateContact=async (req, res, next) => {
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
    }

module.exports=updateContact