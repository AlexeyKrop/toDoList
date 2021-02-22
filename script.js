'use strict';

let todoControl = document.querySelector('.todo-control');
let headerButton = document.querySelector('.header-button');
let headerInput = document.querySelector('.header-input');
let list = document.querySelector('.todo-list');
let listComleted = document.querySelector('.todo-completed');
let todoItem = list.querySelectorAll('.todo-item');
let toDoArr = ['Сварить кофе', 'Помыть посуду'];


// функция возвращает новый элемент
function createElement(evt){
    evt.preventDefault();
    let newElement = document.createElement('li');
    newElement.classList.add('todo-item');
    newElement.textContent = headerInput.value;
    if (newElement.textContent.trim() !== '') {
     newElement.innerHTML += '<div class="todo-buttons">' +
				'<button class="todo-remove"></button>' +
				'<button class="todo-complete"></button>' +
			    '</div>';
    headerInput.value = '';
    list.append(newElement);

    toDoArr.push(newElement.outerText);   
   
}
    let todoItem = list.querySelectorAll('.todo-item');
    let todoComleteBtn = list.querySelectorAll('.todo-complete');
    for(let i = 0; i < todoItem.length; i++){
        todoComleteBtn[i].addEventListener('click', function(){
            listComleted.append(todoItem[i]);
        });
    }
    
}

todoControl.addEventListener('submit', createElement);


function del(){
    let todoRemoveBtn = document.querySelectorAll('.todo-remove');
for(let i = 0; i < todoItem.length; i++){
    todoRemoveBtn[i].addEventListener('click', function(){
    todoItem[i].parentNode.removeChild(todoItem[i]);
});
}
}
del();


    



   
