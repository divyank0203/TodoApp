import React from 'react'
import '../index.css'


function CreateTodo() {
  return (
    <>
        <input type="text" placeholder='Title' className='p-3 border border-gray-300 rounded m-2'/> <br />
        <input type="text" placeholder='Description' className='p-3 border border-gray-300 rounded m-2'/> <br />
        <button className='bg-blue-500 text-white p-3 rounded m-3 border-solid border-2 border-blue-700'>Add Todo</button>
    </>
  )
}

export default CreateTodo