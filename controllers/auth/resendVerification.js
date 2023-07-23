const User = require("../../models/user")
const {emailSchema}=require('../../models/joiSchema')
const {BASE_URL}=process.env;
const sendEmail=require('../../helpers/sendEmail')




const resendVerification=async(req, res)=>{
    const {error}=emailSchema.validate(req.body)  
    if(error){
      res.status(400).json ({message:'incorrect email'})
    }
    const {email}=req.body;
const user=await User.findOne({email});
if (!user){
    res.status(401).json({ message: 'Email is not found' })
}

if (user.verify){
    res.status(401).json({ message: 'Email is verified' })
}

const verifyEmail={
    to:email,
    subject:"Verify email",
    html:`<a target="_blank" href="${BASE_URL}/api/auth/verufy/${user.verificationToken}">Click verify email</a>`
 }
 await sendEmail(verifyEmail)

 return res.json({message:"verification email sent successfully"})

}
module.exports=resendVerification