import React from 'react';
import { observer } from 'mobx-react-lite';

import store from '../../store/store';

import Input from '../Input';

import classes from './Header.module.css';

const Header = observer(() => {
  return (
    <div className={classes.header}>
      <h1>
        To Do List{' '}
        {Boolean(store.todos.length) && (
          <>
            (
            <span className={classes.green}>
              {store.todos.filter((el) => el.done).length}
            </span>
            <span> / </span>
            <span className={classes.red}>{store.todos.length}</span>)
          </>
        )}
      </h1>

      <Input />
    </div>
  );
});

export default Header;
