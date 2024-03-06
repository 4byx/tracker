const { EMAIL, PASSWORD } = require("./serverConfig");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.in',
    port: 465,
    secure: true, // SSL
    auth: {
        user: EMAIL,
        pass: PASSWORD,
        method: 'PLAIN' // Try specifying the authentication method explicitly
    }
});

const mailOptions = {
    from: EMAIL,
    to: "abhimanyu.ahuja.ug20@nsut.ac.in",
    subject: "Subject",
};

module.exports = {
    nodemailer : transporter , 
    mailOptions
};