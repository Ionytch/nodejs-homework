const path=require('path');
const fs=require('fs/promises')
const User=require('../../models/user')

const uploadImage=async(req, res)=>{
    console.log ('user =', req.user)
    // const {_id}=req.user
    if(!req.file){
        res.status(400).json ({message:'file is required'})
    }
    // console.log('user id=', req.user.id)
    
    

    const {filename}=req.file
    const tmpPath=path.resolve(__dirname,'../../tmp', filename)
    const publicPath=path.resolve(__dirname,'../../public/avatar', filename)

    try {
        await fs.rename(tmpPath, publicPath)
    } catch (error) {
        await fs.unlink(tmpPath)
        // res.status(400).json ({message:'file is required'})
        throw error

    }
    
const avatarURL=path.join('avatar', filename)
await User.findByIdAndUpdate(req.user._id, {avatarURL})

    // const userID=req.user.id
    // const user=await User.findByIdAndUpdate(userID,
    //     {image:`avatar/${filename}`,},
    //     {new:true,},
    //     )
    
    return res.json({avatarURL,})
}

module.exports=uploadImage