import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import store from '../../store/store';

import classes from './Input.module.css';

const Input = observer(() => {
  const [todoText, setTodoText] = useState<string>('');

  const addTodo = (event: any) => {
    event.preventDefault();

    if (!todoText.length) return;

    const newToDoItem = {
      id: String(store.counter + 1),
      title: todoText,
      done: false,
    };

    store.addTodo(newToDoItem);

    setTodoText('');
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        onChange={(event) => setTodoText(event.target.value)}
        value={todoText}
        className={classes.input}
        placeholder="Press enter to add a new todo"
      />
    </form>
  );
});

export default Input;
