let todoMessage = document.querySelector('.message'),
    addTodo = document.querySelector('.add'),
    list = document.querySelector('.todo');

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
            <input type='checkbox' id='item_${index}' />
            <label for='item_${index}'>${item.text}</label>
        </li>
        `
    })
    list.innerHTML = showMessage;
}







