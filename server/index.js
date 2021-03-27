import express from 'express';
import cors from 'cors';
import pool from './db.js'

const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
// ROUTES

// create todo
app.post("/todos",async(req,res) => {
    try{
      const {description} = req.body;
      const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
      res.json(newTodo.rows[0]);
    }catch(err){
        console.error(err.message);
    }
})
// get a todos
app.get("/todos", async(req,res)=> {
    try{
        const todos = await pool.query("SELECT * FROM todo");
        res.json(todos.rows);
    }catch(err){
        console.error(err.message);
    }
})
// get a single todo
app.get("/todos/:id",async(req,res) => {
    try{
        const {id} =  req.params;
        const todo =  await pool.query("SELECT * FROM todo WHERE todo_id = $1 ",[id]);
        res.json(todo.rows[0]);
    }catch(err) {
        console.error(err.message);
    }
})
// update a todo
app.put("/todos/:id",async(req,res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description=$1 WHERE todo_id=$2",[description,id]);
        res.json({
            message:"Todo Updated Successfully",
            todo:updateTodo
        })
    } catch (error) {
        console.error(error.message);
    }
})
// Delete todo
app.delete("/todos/:id",async(req,res)=>{
  try {
    const {id} =  req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]);
    res.json({
        message: "Todo Deleted Successfully!",
        todo: deleteTodo.rows[0]
    })
  } catch (error) {
      console.error(error.message);
  }
})
const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is Running on Port ${PORT}`));