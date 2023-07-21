
module.exports={
    jwt:{
        tokens:{
            access:{
                type:"access",
                expiresIn:"105m"
            },
            refresh:{
                type:'refresh',
                expiresIn:'150m'

            },
        },
    },
}