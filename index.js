const express = require('express');
const path = require('path')
const app = express();

const {PORT} = require('./config/serverConfig');

app.get('/tracking-email' , (req , res) => {
    console.log("user opened email");
    res.sendFile(path.join(__dirname + '/image.png'));
})

app.listen(PORT,() => {
    console.log("Server started on PORT ::" , PORT);
})