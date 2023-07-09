
const jwt=require('jsonwebtoken')
const User = require('../models/user')
const {JWT_SECRET}=process.env

const auth=async(req, res, next)=>{
const authHeader=req.headers.authorization||''
const [type, token]=authHeader.split(' ')
if (type!=='Bearer'){
    res.status(401).json({ message: 'token type is not supported' })
}

if(!token){
    res.status(401).json({ message: 'there is no such token' })
}
try {
    const payload=jwt.verify(token, JWT_SECRET)
    const user=await User.findById(payload.id)
    req.user=user
    if(user.token!==token){
        res.status(401).json({ message: 'unauthorized' }) 
    }
    console.log ('verified')
} catch (error) {
    if (error.message==="TokenExpiredError"||error.message==="JsonWebTokenError"){
    res.status(401).json({ message: 'JWT is not valid' })

    }
    throw error
}

next()
}

module.exports=auth