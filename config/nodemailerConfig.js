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

module.exports = transporter;