const Contact=require('../../models/contact')

const getContactsList=async (req, res, next) => {
    try {
      const result=await Contact.find();
       res.json(result)
    } catch (error) {
      next(error)
    }
  }
  module.exports=getContactsList