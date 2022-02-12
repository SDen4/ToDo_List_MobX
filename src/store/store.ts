import { makeAutoObservable } from 'mobx';

import { TodoType } from './types';

class Store {
  todos = [
    { id: '123', title: 'Make coffee', done: false },
    { id: '124', title: 'Make soup', done: false },
    { id: '125', title: 'Make dinner tomorrow', done: false },
    { id: '126', title: 'Read book', done: true },
    { id: '127', title: 'Study mobx', done: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo);
  }
}

export default new Store();
