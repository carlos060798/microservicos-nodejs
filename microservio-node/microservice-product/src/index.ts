import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { productsRoutes } from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT
const corsOptions = {
  origin: 'http://localhost:3006', // Cambia a tu dominio permitido
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeceras permitidas
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", productsRoutes);

app.listen(port, () => {
  console.log(`Microservice Product running on port ${port}`);
});
