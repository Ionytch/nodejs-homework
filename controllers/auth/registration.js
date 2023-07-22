const User = require("../../models/user")
const bcrypt=require("bcrypt")
const gravatar=require('gravatar')
const { nanoid } = require("nanoid")
const sendEmail=require('../../helpers/sendEmail')
const {BASE_URL}=process.env;


const registration = async(req, res, next)=>{
    const {email, password}=req.body
    const salt=await bcrypt.genSalt()
    const hashedPassword=await bcrypt.hash(password,salt)
    const avatarURL=gravatar.url(email)
    const verificationToken=nanoid()

    const result=await User.create({
        email, 
        password:hashedPassword,
        avatarURL,
        verificationToken,
     })

     const verifyEmail={
        to:email,
        subject:"Verify email",
        html:`<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`
     }
     await sendEmail(verifyEmail)

    return res.status(201).json({
        id: result._id,
        email,
    })
   
}

module.exports=registration;