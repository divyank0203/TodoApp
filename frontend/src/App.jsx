import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import Todos from './Components/Todos'


function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(response){ 
      const json = await response.json();
      setTodos(json);
    });



  return (
    <>
      <CreateTodo />
      <Todos todos={todos} ></Todos>
    
    </>
  )
}

export default App
