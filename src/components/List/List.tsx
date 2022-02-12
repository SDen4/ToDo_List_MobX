import React from 'react';
import { observer } from 'mobx-react-lite';

import store from '../../store/store';

import Item from '../Item';

import classes from './List.module.css';

const List = observer(() => {
  return (
    <ul>
      {store.todos.map((el) => {
        return (
          <li key={el.id} className={classes.listItem}>
            <Item todoObj={el} />
          </li>
        );
      })}
    </ul>
  );
});

export default List;
