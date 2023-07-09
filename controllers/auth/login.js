const User = require("../../models/user")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const{JWT_SECRET}=process.env

const login = async(req,res,next)=>{
const {email, password}=req.body
const user=await User.findOne({email})
if(!user){
    res.status(401).json({ message: 'Email is not valid' })
}

const isValidPassword= await bcrypt.compare(password, user.password)
if(!isValidPassword){
    res.status(401).json({ message: 'Password is not valid' })

}

const token=jwt.sign({id:user._id}, JWT_SECRET, {expiresIn:'1h'})
await User.findByIdAndUpdate(user._id, {token})

res.json({token, id:user._id})
}
module.exports=login