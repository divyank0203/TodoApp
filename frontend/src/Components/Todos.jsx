import React from 'react'

//todos = {
//  id: 1,
//  title: "Sample Todo",
//  description: "This is a sample todo item",
//  completed: false
//}

function Todos({todos}) {
  if (!todos || todos.length === 0) {
    return <div>No todos available</div>;
  }
  return (
    <div>
      {/* <div>
        <h1 className='text-xl font-bold'>{todos.title}</h1>
        <h2 className='text-lg'>{todos.description}</h2>
        <button className={`p-2 rounded ${todos.completed ? "bg-green-500" : "bg-red-500"}`}>
          {todos.completed === true ? "Completed" : "Not Completed"}
        </button>
      </div> */}
      {todos.map(function(todo){
        return <div className='border-solid border-2 border-gray-300 p-4 m-2 rounded' key={todo.id}>
          <h1 className='text-xl font-bold m-2'>{todo.title}</h1>
          <h2 className='text-lg m-2'>{todo.description}</h2>
          <button className={`p-2 m-2 rounded ${todo.completed ? "bg-green-500" : "bg-red-500"}`}>{todo.completed === true ? "Completed" : "Mark As Complete"}</button>
        </div>
      })}
    </div>
  )
}


export default Todos