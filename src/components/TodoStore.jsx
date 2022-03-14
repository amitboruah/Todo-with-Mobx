import { action, makeObservable, observable } from "mobx";

export class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, 
      { todos: observable, 
        addTodo: action 
      });
  }

  addTodo(title) {
    const item = {
      id: +Math.random().toFixed(4),
      title,
      completed: false,
    };
    this.todos.push(item);
  }
}

export default new TodoStore();
