const path = require('path');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('../config/nodemailerConfig')

const track = async (req , res) => {
    try {
        const {id} = req.query;
        if(!id) throw new Error('No Id Param is Passed');
        const date = new Date();
        console.log("User with id :: " , id , "Opened email at " , date);
    }catch (error) {
        console.log("Something wrong in tracking email");
    }
    const rootDir = path.resolve(__dirname, '..'); // This will give you the parent directory of the current module
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
        const info = await nodemailer.sendMail(mailOptions);
        console.log("Email sent: ", info.messageId);

        res.status(200).send("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).send("Error sending email!");
    }
}

module.exports = {
    track,
    send
}