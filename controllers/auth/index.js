const registration=require('./registration')
const login=require('./login')
const logout=require('./logout')
const getCurrent=require('./getCurrent')
const refreshTokens=require('./refreshTokens')

module.exports={
    registration,
    login,
    logout,
    getCurrent,
    refreshTokens
}