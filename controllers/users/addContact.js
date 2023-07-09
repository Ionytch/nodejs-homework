const User=require('../../models/user')

const addContact=async(req,res)=>{
    const {user}=req
    const{id:contactID}=req.body

    user.contacts.push({_id:contactID})
    await User.findByIdAndUpdate(user._id, user)

        res.json({contacts:user.contacts})
    }
    
    module.exports=addContact