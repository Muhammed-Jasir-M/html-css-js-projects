const inputElement = document.querySelector('.todo-name-input');
const dateElement = document.querySelector('.due-date-input');
const timeElement = document.querySelector('.due-time-input');
const addBtnElement = document.querySelector('.add-btn');
const todoListDisplay = document.querySelector('.todolist-display-grid');


const todoList = [{
    name: 'make dinner',
    dueDate: '2024-04-22',
    dueTime: '03:27 PM'
}, {
    name: 'watch youtube',
    dueDate: '2024-04-22',
    dueTime: '03:30 PM'
}];

addBtnElement.addEventListener('click', () => {
    addTodo();
})




renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    todoList.forEach((todo, index) => {

        const { name, dueDate, dueTime } = todo;
        const html = `           
                <div class="todo-name">
                    ${name}
                </div>
                <div class="due-date">
                    ${dueDate}
                </div>
                <div>
                    ${dueTime}
                </div>
                <button class="del-btn">
                    Delete
                </button>          
        `;

        todoListHTML += html;


    })

    todoListDisplay.innerHTML = todoListHTML;

    document.querySelectorAll('.del-btn').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });

}



function addTodo() {

    const name = inputElement.value;
    const dueDate = dateElement.value;
    const dueTime = timeElement.value;


    todoList.push({
        // name: name,
        // dueDate: dueDate
        // shortHand property
        name,
        dueDate,
        dueTime
    });

    console.log(todoList);

    inputElement.value = '';
    dateElement.value = '';
    timeElement.value = '';


    renderTodoList();
}