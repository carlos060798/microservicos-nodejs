import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { eventBrokerController } from './controller/event-broker.controller';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(cors());

app.post('/events', eventBrokerController); 


app.listen(port, () => {
    console.log(`
    Event Broker running on port
        ${port}`);
});