import express from 'express';

const app = express();

const PORT = process.env.PORT 
 
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});