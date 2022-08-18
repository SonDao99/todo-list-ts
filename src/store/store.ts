import { action, makeObservable, observable } from "mobx";
import { v4 as uuidv4 } from 'uuid';

export interface LIST_ITEM {
  id: string; 
  item: string;
  editing: boolean;
  complete: boolean;
};

class TodoStore {
  list: LIST_ITEM[] = [];

  constructor() {
    makeObservable(this, {
      list: observable,

      addTodo: action,
      removeTodo: action,
      toggleEdit: action,
      toggleComplete: action,
      editTodo: action,
    });
  }

  addTodo = (item: string) => {
    this.list.push({id: uuidv4(), item: item, editing: false, complete: false})
  }

  removeTodo = (id: string) => {
    this.list = this.list.filter(item => item.id !== id);
  }

  toggleEdit = (id: string) => {
    this.list = this.list.map(item => {
      if (item.id === id) {
        return {...item, editing: !item.editing};
      }
      return item;
    });
  };

  toggleComplete = (id: string) => {
    this.list = this.list.map(item => {
      if (item.id === id) {
        return {...item, complete: !item.complete};
      }
      return item;
    });
  };

  editTodo = (newTodo: LIST_ITEM) => {
    this.list = this.list.map(item => {
      if (item.id === newTodo.id) {
        return newTodo;
      }
      return item;
    });
  }
}

export const todoStore = new TodoStore();

