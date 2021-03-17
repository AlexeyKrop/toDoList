'use strict';

function Todo(){
    this.todoControl = document.querySelector('.todo-control');
    this.todoList = document.querySelector('.todo-list');
    this.headerInput = document.querySelector('.header-input');
    this.todoCompleted = document.querySelector('.todo-completed');
    this.toDoArr = [];  
    this.addToDo = function(){
        if (localStorage.getItem('value')){
            this.toDoArr = JSON.parse(localStorage.getItem('value'));
        }
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.headerInput.value = '';
        this.toDoArr.forEach((item, index) => {
            let li = document.createElement('li');
            li.classList.add('todo-item');
            li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
                           '<div class="todo-buttons">' +
                                '<button class="todo-remove"></button>' +
                                '<button class="todo-complete"></button>' +
                           '</div>';
            if(item.completed){
              this.todoCompleted.append(li);  
            } else{
                this.todoList.append(li);
            }  
    
            let toDoCompleteBtn = li.querySelector('.todo-complete');
            toDoCompleteBtn.addEventListener('click', () => {
                item.completed = !item.completed;
                 if(item.completed){
              this.todoCompleted.append(li);
              localStorage.setItem('value', JSON.stringify(this.toDoArr)); 
            } else{
                this.todoList.append(li);
                localStorage.setItem('value', JSON.stringify(this.toDoArr)); 
            }  
            });
    
            let todoRemoveBtn = li.querySelector('.todo-remove');
            todoRemoveBtn.addEventListener('click', () => {
                this.toDoArr.splice(index, 1);
                localStorage.setItem('value', JSON.stringify(this.toDoArr)); 
                this.addToDo();
            });
        });
    this.todoControl. addEventListener('submit', (event) => {
            event.preventDefault();
            if(this.headerInput.value.trim() !== ''){
                let newToDo = {
                value: this.headerInput.value,
                completed: false,
                };
                this.toDoArr.push(newToDo);
                localStorage.setItem('value', JSON.stringify(this.toDoArr));
            }
            this.addToDo();
        });
    };
}
let toDo = new Todo();
toDo.addToDo();




   
