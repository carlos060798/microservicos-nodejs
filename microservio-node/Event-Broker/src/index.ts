import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
const app = express();

dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post('/api/v1', async(req, res) => {
   const { event} = req.body 

    if (!event) {
        return  res.status(400).send('Event is required');
    }
    if (event.trim()=== 'PRODUCT_GET.ALL') 
      try{
      const {data}= await axios.get('http://localhost:3001/api/products/all')
    

    return res.status(200).json({
        message: 'Event processed',
        data
    });
    
    }catch(error){
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

app.post('/api/v1', (req, res) => {
    res.send('API Gateway v1');
});

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});