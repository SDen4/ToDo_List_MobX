import React from 'react';

import List from '../List';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <h1>To Do List</h1>
      <span className={classes.line} />
      <List />
    </div>
  );
}

export default App;
