import React from 'react';

import store from '../../store/store';

import { ItemType } from './types';

import classes from './Item.module.css';

const Item: React.FC<ItemType> = ({ todoObj }) => {
  const deleteTodo = (id: string) => {
    store.deleteTodo(id);
  };

  return (
    <div className={classes.li}>
      <div className={classes.itemTitle}>
        <input type="checkbox" checked={todoObj.done} />
        <span>#{todoObj.id}</span>
        <div>{todoObj.title}</div>
      </div>

      <button type="button" onClick={() => deleteTodo(todoObj.id)}>
        Del
      </button>
    </div>
  );
};

export default Item;
