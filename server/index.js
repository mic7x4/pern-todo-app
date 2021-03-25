import express from 'express';
import cors from 'cors';


const app = express();
// Middlewares
app.use(cors());
const PORT = 5000;


app.listen(PORT,()=>console.log(`Server is Running on Port ${PORT}`));