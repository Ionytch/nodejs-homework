const Contact=require('../../models/contact')

const deleteContact=async (req, res, next) => {
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
  }

  module.exports=deleteContact