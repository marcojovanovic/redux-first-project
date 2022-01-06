import React from 'react';
import TodoItem from './TodoItem';

import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ul className="list-group">
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <TodoItem id={item.id} title={item.title} completed={item.completed} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
