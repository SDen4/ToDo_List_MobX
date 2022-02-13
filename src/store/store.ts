import { makeAutoObservable } from 'mobx';

import { TodoType } from './types';

class Store {
  todos: TodoType[] = [];

  counter: number = this.todos.length;
  modalFlag: boolean = false;
  delTodo: TodoType = { id: '', title: '', done: false };

  constructor() {
    makeAutoObservable(this);
  }

  initTodos(localTodos: TodoType[]) {
    this.todos = localTodos;
  }

  addTodo(todo: TodoType) {
    this.todos.push(todo);
    this.counter += 1;

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(delId: string) {
    this.todos = this.todos.filter((el) => el.id !== delId);

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  checkTodo(checkId: string) {
    this.todos = this.todos.map((el) => {
      if (el.id === checkId) {
        return { ...el, done: !el.done };
      } else {
        return el;
      }
    });

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  counterUpdate(num: number) {
    this.counter = num;
  }

  deleteTodoFunc(flag: boolean, delTodo: TodoType) {
    this.modalFlag = flag;
    this.delTodo = delTodo;
  }

  setModalFlag(flag: boolean) {
    this.modalFlag = flag;
  }
}

export default new Store();
