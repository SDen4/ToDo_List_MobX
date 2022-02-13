import React, { useEffect } from 'react';

import store from '../../store/store';
import { TodoType } from '../../store/types';

import Header from '../Header';
import List from '../List';

import classes from './App.module.css';

function App() {
  useEffect(() => {
    const localTodos: TodoType[] = JSON.parse(
      localStorage.getItem('todos') || '[]',
    );

    if (localTodos?.length) {
      store.initTodos(localTodos);
      store.counterUpdate(Number(localTodos.at(-1)?.id));
    }
  }, []);

  return (
    <div className={classes.App}>
      <Header />
      <span className={classes.line} />
      <List />
    </div>
  );
}

export default App;
