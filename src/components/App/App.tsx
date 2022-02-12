import React from 'react';

import Input from '../Input';
import List from '../List';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.header}>
        <h1>To Do List</h1>
        <Input />
      </div>
      <span className={classes.line} />
      <List />
    </div>
  );
}

export default App;
