import express from 'express';
import cors from 'cors';
import pool from './db.js'

const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
// ROUTES

// create todo

// get all todo
app.post("/todos",async(req,res) => {
    try{
      const {description} = req.body;
      const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
      res.json(newTodo.rows[0]);
    }catch(err){
        console.error(err.message);
    }
})
// get a todo
app.get("/todos", async(req,res)=> {
    try{
        const todos = await pool.query("SELECT * FROM todo");
        res.json(todos.rows);
    }catch(err){
        console.error(err.message);
    }
})
// update a todo

const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is Running on Port ${PORT}`));