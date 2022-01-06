import React from 'react'
import CompleteItems from './CompleteItems'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

function ReduxTodoApp() {
  return (
    <div className='container mt-5'>
      <TodoForm /> 
      <TodoList />
     <CompleteItems />
    </div>
  )
}

export default ReduxTodoApp
