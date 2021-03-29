import React, { useState } from 'react'

function InputTodo() {
    const [description,setDescription] = useState('');

    const onSubmitForm = async(e)=> {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form action="" className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" name="" id="" className="form-control" value={description}
                 onChange={e => setDescription(e.target.value) }/>
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default InputTodo
