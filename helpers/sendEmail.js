
const nodemailer = require('nodemailer');

require('dotenv').config();

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'ionytch@meta.ua',
    pass: process.env.META_PASSWORD,
  },
};
const transporter = nodemailer.createTransport(config);

const sendEmail=async(data)=>{
    const email={...data, from:"ionytch@meta.ua"}
//     await sgMail.send(email);
transporter
  .sendMail(email)
  .then(info => console.log(info))
  .catch(err => console.log(err.message));
    return true;
}

module.exports=sendEmail;
