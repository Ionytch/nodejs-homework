const User = require("../../models/user")
const bcrypt=require("bcrypt")
const gravatar=require('gravatar')

const registration = async(req, res, next)=>{
    const {email, password}=req.body
    const salt=await bcrypt.genSalt()
    const hashedPassword=await bcrypt.hash(password,salt)
    const avatarURL=gravatar.url(email)

    const result=await User.create({
        email, 
        password:hashedPassword,
        avatarURL,
     })
    return res.status(201).json({
        id: result._id,
        email,
    })
   
}

module.exports=registration;