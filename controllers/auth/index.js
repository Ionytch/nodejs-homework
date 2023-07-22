const registration=require('./registration')
const login=require('./login')
const logout=require('./logout')
const getCurrent=require('./getCurrent')
const refreshTokens=require('./refreshTokens')
const uploadImage=require('../auth/uploadImage')
const verifyEmail=require('./verifyEmail')
const resendVerification=require('./resendVerification')


module.exports={
    registration,
    login,
    logout,
    getCurrent,
    refreshTokens,
    uploadImage,
    verifyEmail,
    resendVerification,
}