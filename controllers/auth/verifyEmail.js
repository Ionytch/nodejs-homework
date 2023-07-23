const User = require("../../models/user")

const verifyEmail=async(req, res)=>{
    const {verificationToken}=req.params;
    const user=await User.findOne({verificationToken});
    if (!user){
        res.status(401).json({ message: 'Email is not found' })
    }
    await User.findByIdAndUpdate(user._id,{verify:true, verificationToken:""})
    return res.json({message:"email verified successfully"})
}

module.exports=verifyEmail