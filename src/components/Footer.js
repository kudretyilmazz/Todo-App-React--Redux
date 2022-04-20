import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveFilter, clearCompleted } from '../redux/todos/todosSlice';
function Footer() {
  const items = useSelector(state => state.todos.items);
  const itemsLeft = items.filter(item => !item.completed);
  const activeFilter = useSelector(state => state.todos.activeFilter);
  const dispatch = useDispatch();
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>
          {itemsLeft.length > 1
            ? `${itemsLeft.length} items left`
            : `${itemsLeft.length} item left`}
        </strong>
      </span>

      <ul className='filters'>
        <li>
          <a
            className={activeFilter === 'All' ? 'selected' : ''}
            onClick={() => dispatch(changeActiveFilter('All'))}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'Active' ? 'selected' : ''}
            onClick={() => dispatch(changeActiveFilter('Active'))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'Completed' ? 'selected' : ''}
            onClick={() => dispatch(changeActiveFilter('Completed'))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className='clear-completed'
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
