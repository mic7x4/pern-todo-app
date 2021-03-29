import React, { useEffect, useState } from 'react'

function ListTodos() {
    const [todos,setTodos] = useState([]);

    // Delete Function
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error.message)
        }
    }

    const getTodos = async ()=> {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();
            setTodos(jsonData);
            
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(()=>{
        getTodos(); 
    },[]);
    return (
        <div>
            <h1 className="text-center mt-5 ">List Todos</h1>
            <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo => (
        <tr key={todo.todo_id}>
            <td>{todo.todo_id}</td>
            <td>{todo.description}</td>
            <td><button className="btn btn-success">Edit</button></td>
            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
    ))}
  </tbody>
</table>
        </div>
    )
}

export default ListTodos
