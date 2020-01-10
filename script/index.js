let todoMessage = document.querySelector('.message'),
    addTodo = document.querySelector('.add'),
    list = document.querySelector('.todo'),
    listTodo = document.querySelector('.todo_list');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    showList();
}

addTodo.addEventListener('click', () => {

    let newTodo = {
        text: todoMessage.value,
        checked: false,
        important: false,
    }

    todoList.push(newTodo);
    localStorage.setItem('todo', JSON.stringify(todoList));

    todoMessage.value = '';

    showList();

    console.log(todoList);

});

function showList() {
    let showMessage = '';
    todoList.map((item, index) => {
        showMessage += `
        <li>
            <input type='checkbox' id='item_${index}' ${item.checked ? 'checked' : ''} />
            <label for='item_${index}'>${item.text}</label>
            <button data-id='item_${index}'>Delete</button>
        </li>
        `
    })
    list.innerHTML = showMessage;
}

list.addEventListener('change', (e) => {
    let inputId = e.target.getAttribute('id');
    let inputLabel = list.querySelector('[for = ' + inputId + ']').innerHTML;

    todoList.map((item) => {
        if (item.text === inputLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
})

list.addEventListener('click', (e) => {
    let buttonId = e.target.getAttribute('data-id');
    let inputLabel = list.querySelector('[for = ' + buttonId + ']').innerHTML;

    todoList.map((item, index) => {
        if (item.text === inputLabel) {
            todoList.splice(index, 1);
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })
    showList();
})

list.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let importantLabel = e.target.innerHTML;

    todoList.map((item) => {
        if (item.text === importantLabel) {
            item.important = !item.important;
        }
    })

    localStorage.setItem('todo', JSON.stringify(todoList));

})













