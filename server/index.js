import express from 'express';
import cors from 'cors';
import pool from './db';


const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
// ROUTES

// create todo

// get all todo

// get a todo

// update a todo

const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is Running on Port ${PORT}`));