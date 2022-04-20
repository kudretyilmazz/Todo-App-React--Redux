import { useState } from 'react';
import { addTodo } from '../redux/todos/todosSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
function Form() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(), title: title, completed: false }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={title}
        onChange={e => setTitle(e.target.value)}
        autoFocus
      />
    </form>
  );
}
export default Form;
