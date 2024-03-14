import { EMAIL, PASSWORD } from "./serverConfig.js";
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.in',
    port: 465,
    secure: true, // SSL
    auth: {
        user: EMAIL,
        pass: PASSWORD,
        method: 'PLAIN' // Try specifying the authentication method explicitly
    }
});

export const mailOptions = {
    from: EMAIL,
    to: "abhimanyu.ahuja.ug20@nsut.ac.in",
    subject: "Subject",
};
