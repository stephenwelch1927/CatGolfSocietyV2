import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';


export  async function POST(request: NextRequest) {
    try {
    const  { email, name, message } = await request.json();
 
    const transport = nodemailer.createTransport({
        service: "gmail",
        headers: {
          'Content-Type' : 'application/json',   
        },
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    const mailOptions: Mail.Options = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `Message from ${name} (${email})`,
      text: message,
    };
  
    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            reject(err.message);
          }
        });
      });
  
   
      await sendMailPromise();
      
      return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
      console.error('Error sending email: ', err);
      return NextResponse.json({ errror: err }, { status: 500 });
    }
}