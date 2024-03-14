import express from 'express';
import {track , send} from '../controllers/email.controller.js';
const router = express.Router();


router.get('/track-email' , track);
router.post('/send-email' , send);

export default router;