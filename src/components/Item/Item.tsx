import React from 'react';
import clsx from 'clsx';

import store from '../../store/store';

import { ItemType } from './types';

import classes from './Item.module.css';
import { TodoType } from '../../store/types';

const Item: React.FC<ItemType> = ({ todoObj }) => {
  const deleteTodo = (todoObj: TodoType) => {
    store.deleteTodoFunc(true, todoObj);
  };

  const checkTodo = (id: string) => {
    store.checkTodo(id);
  };

  return (
    <div className={classes.li}>
      <div className={classes.itemTitle}>
        <input
          type="checkbox"
          checked={todoObj.done}
          onChange={() => checkTodo(todoObj.id)}
        />
        <span className={clsx(todoObj.done && classes.checked)}>
          #{todoObj.id}
        </span>
        <div className={clsx(todoObj.done && classes.checked)}>
          {todoObj.title}
        </div>
      </div>

      <button type="button" onClick={() => deleteTodo(todoObj)}>
        Del
      </button>
    </div>
  );
};

export default Item;
