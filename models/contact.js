const {Schema, model}=require('mongoose')

const contactSchema=new Schema(
    {
        name: {
          type: String,
          required: [true, 'Set name for contact'],
        },
        email: {
          type: String,
        //   match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          required: [true, 'Set email for contact'],
          unique:true,
        },
        phone: {
          type: String,
          required: [true, 'Set phonenumber for contact'],
        },
        favorite: {
          type: Boolean,
          default: false,
        },
      },
      { versionKey: false, timestamps: true }
)

const Contact=model('contact', contactSchema)
module.exports=Contact