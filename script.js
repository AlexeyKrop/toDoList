'use strict';

let todoControl = document.querySelector('.todo-control'),
    todoList = document.querySelector('.todo-list'),
    headerInput = document.querySelector('.header-input'),
    todoCompleted = document.querySelector('.todo-completed');

let toDoArr = [
 
];  

let addToDo = function(){
    if (localStorage.getItem('value')){
        toDoArr = JSON.parse(localStorage.getItem('value'));
    }
    todoList.textContent = '';
    todoCompleted.textContent = '';
    headerInput.value = '';
    toDoArr.forEach(function(item, index){
        let li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
                       '<div class="todo-buttons">' +
                            '<button class="todo-remove"></button>' +
                            '<button class="todo-complete"></button>' +
                       '</div>';
        if(item.completed){
          todoCompleted.append(li);  
        } else{
            todoList.append(li);
        }  

        let toDoCompleteBtn = li.querySelector('.todo-complete');
        toDoCompleteBtn.addEventListener('click', function(){
            item.completed = !item.completed;
             if(item.completed){
          todoCompleted.append(li);
          localStorage.setItem('value', JSON.stringify(toDoArr)); 
        } else{
            todoList.append(li);
            localStorage.setItem('value', JSON.stringify(toDoArr)); 
        }  
        });

        let todoRemoveBtn = li.querySelector('.todo-remove');
        todoRemoveBtn.addEventListener('click', function(){
            toDoArr.splice(index, 1);
            localStorage.setItem('value', JSON.stringify(toDoArr)); 
            addToDo();
        });
    });
};

todoControl. addEventListener('submit', function(event){
    event.preventDefault();
    if(headerInput.value.trim() !== ''){
        let newToDo = {
        value: headerInput.value,
        completed: false,
        };
        toDoArr.push(newToDo);
        localStorage.setItem('value', JSON.stringify(toDoArr));
    }
    addToDo();
});
addToDo();





   
