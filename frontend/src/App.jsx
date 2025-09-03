import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import Todos from './Components/Todos'
import { useEffect } from 'react'


function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(async function(response){ 
        const json = await response.json();
        setTodos(json);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <CreateTodo onTodoAdded={fetchTodos} />
      <Todos todos={todos} />
    </>
  )
}


export default App
