import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const sendmail = async(email,title,status,company) => {
let text;
  if (status === "accepted") {
    text = "Congratulations! Your application has been accepted.";
  } else if (status === "rejected") {
    text = "We regret to inform you that your application has been rejected.";
  } else {
    text = "Your application is still under review.";
  } 
   const info = await transporter.sendMail({
    from: '<prathamkumar362@gmail.com>',
    to: email,
    subject: "Status Update for " + title, 
    text: text,
    html: `<br>${text} <br>Position: <b>${title}</b> <br>Status: <b>${status}</b> <br>${company} </br>`,
  });

}

export default sendmail;