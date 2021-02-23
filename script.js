'use strict';

let todoControl = document.querySelector('.todo-control'),
    todoList = document.querySelector('.todo-list'),
    headerInput = document.querySelector('.header-input'),
    todoCompleted = document.querySelector('.todo-completed');

let toDoArr = [
 
];    

let addToDo = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';
    headerInput.value = '';
    toDoArr.forEach(function(item){
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
        } else{
            todoList.append(li);
        }  
        });

        let todoRemoveBtn = li.querySelector('.todo-remove');
        todoRemoveBtn.addEventListener('click', function(){
            li.remove(li);
        });
    });

};



todoControl. addEventListener('submit', function(event){
    event.preventDefault();
   
    let newToDo = {
        value: headerInput.value,
        completed: false,
        };
    toDoArr.push(newToDo);

    addToDo();
});

//  let todoControl = document.querySelector('.todo-control');
// let headerButton = document.querySelector('.header-button');
// let headerInput = document.querySelector('.header-input');
// let list = document.querySelector('.todo-list');
// let listComleted = document.querySelector('.todo-completed');
// let todoItem = list.querySelectorAll('.todo-item');
// let toDoArr = ['Сварить кофе', 'Помыть посуду'];


// // функция возвращает новый элемент
// function createElement(evt){
//     evt.preventDefault();
//     let newElement = document.createElement('li');
//     newElement.classList.add('todo-item');
//     newElement.textContent = headerInput.value;
//     if (newElement.textContent.trim() !== '') {
//      newElement.innerHTML += '<div class="todo-buttons">' +
// 				'<button class="todo-remove"></button>' +
// 				'<button class="todo-complete"></button>' +
// 			    '</div>';
//     headerInput.value = '';
//     list.append(newElement);

//     toDoArr.push(newElement.outerText);   
   
// }
//     let todoItem = list.querySelectorAll('.todo-item');
//     let todoComleteBtn = list.querySelectorAll('.todo-complete');
//     for(let i = 0; i < todoItem.length; i++){
//         todoComleteBtn[i].addEventListener('click', function(){
//             listComleted.append(todoItem[i]);
//         });
//     }
    
// }

// todoControl.addEventListener('submit', createElement);

// let todoRemoveBtn = document.querySelectorAll('.todo-remove');


// for(let i = 0; i < todoItem.length; i++){
//     todoRemoveBtn[i].addEventListener('click', function(){
//         todoItem[i].parentNode.removeChild(todoItem[i]);
//     });
    
// }
// for(let i = 0; i < todoItem.length; i++){
//     todoRemoveBtn[i].addEventListener('click', function(){
//         todoItem[i].parentNode.removeChild(todoItem[i]);
//     });
    
// }






    



   
