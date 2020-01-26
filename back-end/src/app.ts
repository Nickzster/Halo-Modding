import express from 'express';
import router from './routes';
import { connectDB } from './config/db';
import cors from 'cors';
const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 5000, () => console.log('Server Running!'));
connectDB();
