import React from 'react';

import { ItemType } from './types';

import classes from './Item.module.css';

const Item: React.FC<ItemType> = ({ todoObj }) => {
  return (
    <div className={classes.li}>
      <div className={classes.itemTitle}>
        <input type="checkbox" checked={todoObj.done} />
        <span>#{todoObj.id}</span>
        <div>{todoObj.title}</div>
      </div>

      <button type="button">Del</button>
    </div>
  );
};

export default Item;
