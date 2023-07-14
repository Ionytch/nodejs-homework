const getInfo=async(req,res)=>{
    console.log(req);
    const {user}=req

res.json({user})
}

module.exports=getInfo