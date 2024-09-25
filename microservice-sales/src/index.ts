import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import salesRoutes from './routes/sales.routes';


dotenv.config();

const app = express();
const port = process.env.PORT
app.use(cors());
app.use(express.json());

app.use('/sales',salesRoutes );

app.listen(port, () => {
  console.log(`Microservice Sales ${port}`);
});
