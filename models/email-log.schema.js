import mongoose from 'mongoose';

const email_log_schema = new mongoose.Schema({
    uuid : {type : String},
    senderCompany : {type : String},
    senderEmail : {type : String},
    recieverEmail : {type : String},
    sendAt : {type: Date},
    status : {type: String , enum : ['sent' , 'opened'], default : 'sent'},
    openedAt : {type: Date},
},{collection : 'email_logs'})

const EmailLog = mongoose.model('EmailLog' , email_log_schema , 'email_logs');

export default EmailLog;

