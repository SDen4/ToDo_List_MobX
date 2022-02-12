import { makeAutoObservable } from 'mobx';

import { TodoType } from './types';

class Store {
  todos = [
    { id: '1', title: 'Make coffee', done: false },
    { id: '2', title: 'Make soup', done: false },
    { id: '3', title: 'Make dinner tomorrow', done: false },
    { id: '4', title: 'Read book', done: true },
    { id: '5', title: 'Study mobx', done: false },
  ];

  counter = this.todos.length;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo);
    this.counter += 1;
  }

  deleteTodo(delId: string) {
    this.todos = this.todos.filter((el) => el.id !== delId);
  }

  checkTodo(checkId: string) {
    this.todos = this.todos.map((el) => {
      if (el.id === checkId) {
        return { ...el, done: !el.done };
      } else {
        return el;
      }
    });
  }
}

export default new Store();
