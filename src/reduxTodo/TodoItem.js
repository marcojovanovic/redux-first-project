import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteTodo, completedTodos } from './todoSlice';

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  const deleteClickTodo =() =>{

    dispatch(deleteTodo({id:id}))

  }

  const handleChange = () =>{

    dispatch(completedTodos({id:id}))

  }

  return (
    <>
      <li
        className={`list-group-item ${completed && 'list-group-item-success'}`}
      >
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center">
            <input type="checkbox" className="mr-3"
              checked={completed} onChange={handleChange}
            
            
            ></input>
            {title}
          </span>
          <button onClick={deleteClickTodo} className="btn btn-danger">
            Delete
          </button>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
