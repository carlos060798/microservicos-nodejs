import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { productsRoutes } from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT


app.use(cors());
app.use(express.json());
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Microservice Product running on port ${port}`);
});
