import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import store from '../../store/store';
import { TodoType } from '../../store/types';

import Header from '../Header';
import List from '../List';
import Modal from '../Modal';

import classes from './App.module.css';

const App = observer(() => {
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

      {store.modalFlag && <Modal />}
    </div>
  );
});

export default App;
