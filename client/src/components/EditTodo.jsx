import React, { useState } from 'react'

function EditTodo({todo}) {
    const [description,setDescription] = useState(todo.description);
    // Update description
    const updateDescription = async(e) =>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            window.location = "/"
            
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <div>
<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
        Edit
</button>
<div className="modal fade" id={`id${todo.todo_id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=> setDescription(todo.description)}></button>
      </div>
      <div className="modal-body">
        <input type="text" className="form-control" name="" id="" value={description} onChange={ e => setDescription(e.target.value)}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> setDescription(todo.description)}>Close</button>
        <button type="button" className="btn btn-info text-white" onClick={e => updateDescription(e)}>Edit</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default EditTodo
