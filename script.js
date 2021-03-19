'use strict';

class Todo {
  constructor(
    todoControl,
    headerInput,
    todoList,
    todoCompleted,
    todoContainer
  ) {
    (this.todoControl = document.querySelector(todoControl)),
      (this.headerInput = document.querySelector(headerInput)),
      (this.todoList = document.querySelector(todoList)),
      (this.todoCompleted = document.querySelector(todoCompleted)),
      (this.todoContainer = document.querySelector(todoContainer)),
      (this.todoData = new Map(JSON.parse(localStorage.getItem("todoLIst"))));
  }

  addToStorage() {
    localStorage.setItem("todoLIst", JSON.stringify([...this.todoData]));
  }

  render() {
    this.todoList.textContent = "";
    this.todoCompleted.textContent = "";
    this.headerInput.value = "";
    this.todoData.forEach(this.createElement, this);
    this.addToStorage();
  }

  createElement(element) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.key = element.key;
    li.innerHTML =
      '<span class="text-todo">' +
      element.value +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";
    if (element.completed) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  }

  addToDo(event) {
    event.preventDefault();
    if (this.headerInput.value.trim() !== "") {
      const newToDo = {
        value: this.headerInput.value,
        completed: false,
        key: this.generateKey(),
      };
      this.todoData.set(newToDo.key, newToDo);
      this.render();
    }else{
      alert('Введите задачу')
    }
  }

  generateKey() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  deleteToDo(key) {
    const that = this;
    this.todoData.forEach((item) => {
      if (key === item.key) {
        that.todoData.delete(item.key);
      }
      this.render();
    });
  }

  toDoComplete(key) {
    this.todoData.forEach((item) => {
      if (key === item.key) {
        item.completed = !item.completed;
      }
      this.render();
    });
  }

  handler() {
    this.todoContainer.addEventListener("click", (event) => {
      const target = event.target;
      const key = target.parentNode.parentNode.key;
      if (target.matches(".todo-complete")) {
        this.toDoComplete(key);
      } else if (target.matches(".todo-remove")) {
        this.deleteToDo(key);
      }
    });
  }

  init() {
    this.todoControl.addEventListener("submit", this.addToDo.bind(this));
    this.render();
    this.handler();
  }
}

const todo = new Todo
  (".todo-control",
  ".header-input",
  ".todo-list",
  ".todo-completed",
  ".todo-container");
  todo.init();




   
