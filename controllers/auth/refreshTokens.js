const jwt=require('jsonwebtoken')
const {JWT_SECRET}=process.env
const Token=require('../../models/token')
const authHelper = require('../../helpers/authHelper')


const refreshTokens=async(req, res)=>{
    const {refreshToken}=req.body

    let payload
    try {
        payload=jwt.verify(refreshToken, JWT_SECRET)
        if(payload.type!=='refresh'){
            return res.status(400).json({message:'invalid token'})
        }
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError){
            return res.status(400).json({message:'token expired!'})
        }
        if(error instanceof jwt.JsonWebTokenError){
            return res.status(400).json({message:'invalild token!'})
        }
    }

    const token=await Token.findOne({tokenID:payload.id})
    if(token===null){
        return res.status(400).json({message:'invalild token!'})
    }

    const newTokens=await authHelper.updateTokens(token.userID)

    return res.json(newTokens)
}

module.exports=refreshTokens