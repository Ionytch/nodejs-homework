const {Schema, model}=require('mongoose')

const schema=new Schema(
    {
        tokenID: String,
        userID: String,
      },
      { versionKey: false, timestamps: true }
)

const Token=model('token', schema)
module.exports=Token