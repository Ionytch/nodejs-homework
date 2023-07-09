const User = require("../../models/user")

const logout = async(req,res)=>{
// const {_id}=req.user
const {user}=req
await User.findByIdAndUpdate(user._id,{token:""})
res.json({message:'logout success'})
}

module.exports=logout