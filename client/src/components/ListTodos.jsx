import React, { useEffect, useState } from 'react'

function ListTodos() {
    const [todos,setTodos] = useState([]);

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
            <h1>List Todos</h1>
            <table class="table mt-5 text-center">
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
        <tr>
            <td>{todo.todo_id}</td>
            <td>{todo.description}</td>
            <td><button className="btn btn-success">Edit</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
        </tr>
    ))}
  </tbody>
</table>
        </div>
    )
}

export default ListTodos
