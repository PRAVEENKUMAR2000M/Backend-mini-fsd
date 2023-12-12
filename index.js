import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import appRoutes from './src/routes/index.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT
app.use(cors())
app.use(express.json());

app.use('/', appRoutes)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})