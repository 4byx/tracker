const express = require('express');
const EmailController = require('../controllers/email.controller')
const router = express.Router();


router.get('/track-email' , EmailController.track);
router.post('/send-email' , EmailController.send);

module.exports = router;