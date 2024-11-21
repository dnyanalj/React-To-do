import { useState ,useEffect} from "react"

import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import './index.css'

function App() {
  const[todoValue,setTodoValue]=useState('');//used for taking ip
  const [todos, setTodos] = useState([]);//used for list 

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  function handleAddTodos(newTodo){
    const newTodoList=[newTodo,...todos];
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index){
    const newTodoList=todos.filter((todo,todoIndex)=>{
      return todoIndex!==index;
    })
    setTodos(newTodoList);

    persistData(newTodoList)
  }
  function handleEditTodo(index){
    const valueToBeEdited=todos[index];
    setTodoValue(valueToBeEdited); 
    handleDeleteTodo(index);  //
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    
        <>
          <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}></TodoInput>
          <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}></TodoList>
        </>
  )
}

export default App
