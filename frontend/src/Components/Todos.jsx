import React from 'react'

//todos = {
//  id: 1,
//  title: "Sample Todo",
//  description: "This is a sample todo item",
//  completed: false
//}

function Todos({todos}) {
  return (
    <div>
        {/* <div>
            <h1 className='text-xl font-bold'>{todos[0].title}</h1>
            <h2 className='text-lg'>{todos[0].description}</h2>
            <button className={`p-2 rounded ${todos[0].completed ? "bg-green-500" : "bg-red-500"}`}>
              {todos[0].completed === true ? "Completed" : "Not Completed"}
            </button>
        </div> */}
        {todos.map(function(todo){
            return <div className='border p-4 m-2 rounded' key={todo.id}>
                <h1 className='text-xl font-bold m-2'>{todo.title}</h1>
                <h2 className='text-lg m-2'>{todo.description}</h2>
                <button className={`p-2 m-2 rounded ${todo.completed ? "bg-green-500" : "bg-red-500"}`}>{todo.completed === true ? "Completed" : "Mark As Complete"}</button>
            </div>
        })}
    </div>
  )
}

export default Todos