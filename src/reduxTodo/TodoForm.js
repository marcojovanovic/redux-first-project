import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {addTodo} from './todoSlice'

function TodoForm() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({ title: inputValue }));

    setInputValue('')
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
        <label className="sr-only">Name</label>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>

        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
