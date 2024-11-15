import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
        <>
          <TodoInput></TodoInput>
          <TodoList></TodoList>
        </>
  )
}

export default App
