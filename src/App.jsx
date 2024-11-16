import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"
import './index.css'

function App() {
  const [todos, setTodos] = useState(['goto gym','go to school']);

  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo];
    setTodos(newTodoList);
  }
  return (
    
        <>
          <TodoInput handleAddTodos={handleAddTodos}></TodoInput>
          <TodoList todos={todos}></TodoList>
        </>
  )
}

export default App
