const path=require('path');
const fs=require('fs/promises')
const User=require('../../models/user')
const Jimp = require("jimp")


const uploadImage=async(req, res)=>{
    if(!req.file){
        res.status(400).json ({message:'file is required'})
    }
    
    

    const {filename}=req.file
    const tmpPath=path.resolve(__dirname,'../../tmp', filename)
    const publicPath=path.resolve(__dirname,'../../public/avatar', filename)
    console.log(' name = ', filename)


    await Jimp.read(tmpPath)
    .then ((image) => {
        return image.resize(250, 250).writeAsync(tmpPath) 
           })
      .catch((err) => {
        console.error(err);
      });

    
    try {
        await fs.rename(tmpPath, publicPath)
    } catch (error) {
        await fs.unlink(tmpPath)
        throw error

    }
    
const avatarURL=path.join('avatar', filename)
await User.findByIdAndUpdate(req.user._id, {avatarURL})

     
    return res.json({avatarURL,})
}

module.exports=uploadImage