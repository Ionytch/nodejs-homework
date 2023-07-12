const User = require("../../models/user")

const getContacts=async(req,res)=>{
    const {user}=req
    console.log ('user =', user)
    const userContacts=await User.findById(user._id).populate('contacts',{
        name:1,
        email:1,
           })

    res.json({contacts:userContacts.contacts})
    }
    
    module.exports=getContacts