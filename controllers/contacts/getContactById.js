const Contact=require('../../models/contact')

const getContactById=async (req, res, next) => {
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
    }
    module.exports=getContactById