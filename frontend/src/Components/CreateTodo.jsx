import React from 'react'
import { useState, useEffect } from 'react';
import '../index.css'


function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
  return (
    <>
        <input id='tits' type="text" placeholder='Title' className='p-3 border border-gray-300 rounded m-2' value={title} onChange={e => setTitle(e.target.value)} /> <br />
        <input id='desc' type="text" placeholder='Description'  className='p-3 border border-gray-300 rounded m-2' value={description} onChange={e => setDescription(e.target.value)} /> <br />
        <button className='bg-blue-500 text-white p-3 rounded m-3 border-solid border-2 border-blue-700'
onClick={function(){
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description })
          })
          .then(async function(res){
            await res.json();
            alert("Todo Added");
            if (onTodoAdded) onTodoAdded(); // Trigger re-fetch
          })
        }}>Add Todo</button>
    </>
  )
}

export default CreateTodo