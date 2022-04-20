import React from 'react';
import Todolist from './Todolist';
function Main() {
  return (
    <section className='main'>
      <input className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'>Mark all as complete</label>

      <Todolist />
    </section>
  );
}

export default Main;
