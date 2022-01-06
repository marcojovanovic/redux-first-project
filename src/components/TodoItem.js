import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from './todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const deleteClickTodo = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            onChange={handleComplete}
            checked={completed}
          ></input>
          {title}
        </span>
        <button onClick={deleteClickTodo} className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
