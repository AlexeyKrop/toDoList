'use strict';

let todoControl = document.querySelector('.todo-control');
let headerButton = document.querySelector('.header-button');
let headerInput = document.querySelector('.header-input');
let list = document.querySelector('.todo-list');
let listComleted = document.querySelector('.todo-completed');
let todoComleteBtn = document.querySelector('.todo-complete');
let todoItem = document.querySelectorAll('.todo-item');

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
}
}  
todoControl.addEventListener('submit', createElement);