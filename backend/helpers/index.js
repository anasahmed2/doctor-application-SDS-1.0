import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM", // enter your email 
        pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",   // enter your ap password 
    },
});

export default transporter;