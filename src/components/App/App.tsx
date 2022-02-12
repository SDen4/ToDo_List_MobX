import React from 'react';

import Header from '../Header';
import List from '../List';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <span className={classes.line} />
      <List />
    </div>
  );
}

export default App;
