const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');

const nodemailer = require("nodemailer");

const ejs = require('ejs');


// router.get('/sendMailText' , async(req,res) => {

//    // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     // host: "gmail",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Mayma 👻" <benamaraaoumaymaa98@gmail.com>', // sender address
//     to: "maymaabenamaraa@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Katouta?", // plain text body
//     // html: "<b>Katouta?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

//   res.json({message: "mail sent.", url: nodemailer.getTestMessageUrl(info)});
// });




router.get('/sendMail' , async(req,res) => { 
   let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: process.env.EMAIL, 
           pass: process.env.PASSWORD
       }
   });
   
   const registerTemplatePath = path.resolve('./mailTemplate', 'register.html');
//    console.log(registerTemplatePath);
   const registerTemplate = fs.readFileSync(registerTemplatePath, {encoding: 'utf-8'});
//    console.log(registerTemplate);

   const render = ejs.render(registerTemplate, {name: "Katouta"});
   console.log(render);
   
   let info = await transporter.sendMail({
     from: '"Mayma 👻" <benamaraaoumaymaa98@gmail.com>', 
     to: "maymaabenamaraa@gmail.com", 
     subject: "Hello", 
    //  text: "Katouta?", 
    //  html: "<b>Katouta?</b>",
    //  html: registerTemplate,
     html: render,
     attachments: [
         {
             filename: 'img.jpg',
             path: './mailTemplate/attachements/img.jpg'
         }
     ]
   });
 
   res.json({message: "mail sent."});
 });
 
 module.exports = router;