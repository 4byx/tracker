import path from 'path';
import {v4 as uuidv4} from 'uuid';
import {transporter,  mailOptions} from '../config/nodemailerConfig.js';
import {EmailService} from '../service/email.service.js';
import { fileURLToPath } from 'url';





const emailService = new EmailService();

const track = async (req , res) => {
    try {
        const {id} = req.query;
        if(!id) throw new Error('No Id Param is Passed');


        const date = new Date();
        await emailService.updateLog({
            uuid : id , 
            status: 'opened',
            openedAt : date
        })
        console.log("User with id :: " , id , "Opened email at " , date);

    }catch (error) {
        console.log("Something wrong in tracking email");
        throw error;
    }
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const rootDir = path.resolve(__dirname, '..');
    const imagePath = path.join(rootDir, 'image.png');
    res.sendFile(path.join(imagePath));
}

const send = async (req , res) => {
    try {
        // Generate unique identifier for this email
        const uniqueId = uuidv4();

        // HTML content with image source as an API endpoint
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Template</title>
            </head>
            <body>
                <h1>Hello,</h1>
                <p>This is a sample email with a tracking pixel.</p>
                <img src="https://tracker-yjx6.onrender.com/track-email?id=${uniqueId}" width="1" height="1" alt="Tracking Pixel" style="display:none;">
            </body>
            </html>
        `;

        // Send email
        mailOptions['html'] = htmlContent;
        const promises = [];
        const promise1 = transporter.sendMail(mailOptions);
        const promise2 = emailService.createLog({
            uuid : uniqueId,
            senderCompany : 'SIDHu',
            senderEmail : mailOptions.from,
            sendAt : new Date(),
            status : 'sent'
        })
        promises.push(promise1);
        promises.push(promise2);

        await Promise.all(promises);
        console.log("Email sent: ");
        console.log("Successfully logged the data of email to mongoDb");

        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).send("Error sending email!");
    }
}

export {
    track,
    send
}