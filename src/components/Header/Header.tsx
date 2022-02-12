import React from 'react';
import { observer } from 'mobx-react-lite';

import store from '../../store/store';

import Input from '../Input';

import classes from './Header.module.css';

const Header = observer(() => {
  const greenNum = store.todos.filter((el) => el.done).length;
  const redNum = store.todos.length;

  return (
    <div className={classes.header}>
      <h1>
        To Do List{' '}
        {Boolean(redNum) && (
          <>
            (
            {Boolean(greenNum) && (
              <span className={classes.green}>{greenNum}</span>
            )}
            {Boolean(greenNum > 0 && greenNum !== redNum) && <span> / </span>}
            {Boolean(greenNum < redNum) && (
              <span className={classes.red}>{redNum}</span>
            )}
            )
          </>
        )}
      </h1>

      <Input />
    </div>
  );
});

export default Header;
