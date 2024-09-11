import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { eventBrokerController } from './controller/event-broker.controller';
import morgan from 'morgan';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(cors());
app.use(morgan('dev'));

app.post('/events', eventBrokerController); 


app.listen(port, () => {
    console.log(`
    Event Broker running on port
        ${port}`);
});