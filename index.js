import express from 'express';
import router from './routes/index.js'
import { connectToMongoDb } from './config/mongoose.config.js';
import cors from 'cors';

const setupAndStartServer = async () => {
    const app = express();
    app.use(cors());
    const PORT = process.env.PORT || 3000;
    await connectToMongoDb();
    app.use('',router);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

setupAndStartServer();