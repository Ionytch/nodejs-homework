const {Schema, model, Types}=require('mongoose')

const userSchema=new Schema(
    {
        password: {
          type: String,
          required: [true, 'Set password for user'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        contacts:{
          type:[Types.ObjectId],
          ref:'contact'
        },
        token:{
          type: String,
          default:""
        },
        avatarURL:{
          type: String,
          required: true,
        }, 
      },
      {
        timestamps:true,
        versionKey:false,
      }
)

const User=model('user', userSchema)
module.exports=User