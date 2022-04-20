import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, deleteTodo } from '../redux/todos/todosSlice';
let filtered = [];
function Todolist() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.todos.items);
  const activeFilter = useSelector(state => state.todos.activeFilter);
  filtered = items;
  if (activeFilter !== 'All') {
    filtered = items.filter(todo =>
      activeFilter === 'Active'
        ? todo.completed === false
        : todo.completed === true
    );
  }
  return (
    <div>
      <ul className='todo-list'>
        {filtered.map(item => (
          <li key={item.id} className={item.completed ? 'completed' : ''}>
            <div className='view'>
              <input
                className='toggle'
                type='checkbox'
                checked={item.completed}
                onChange={() => dispatch(toggle({ id: item.id }))}
              />
              <label>{item.title}</label>
              <button
                className='destroy'
                onClick={() => dispatch(deleteTodo({ id: item.id }))}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
