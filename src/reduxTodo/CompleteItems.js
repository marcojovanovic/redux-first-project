import React from 'react';

import { useSelector } from 'react-redux';

function CompleteItems() {

  const completedTodos = useSelector(state => state.todos.filter((item)=> item.completed === true) )
  

  return (
    <div className="mt-3">ukupno komplete items: {completedTodos.length}</div>
  );
}

export default CompleteItems;
