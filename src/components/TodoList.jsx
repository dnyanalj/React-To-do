import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos=['goto gym','go to school']

  return (
    <ul className='main'>
        {todos.map((todo,todoIndex)=>{
            return (
                <TodoCard key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
