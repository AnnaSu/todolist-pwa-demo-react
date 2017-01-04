(function (window, document) {

    const todoListDOM = document.getElementById('todoList');
    const todoInputDOM = document.getElementById('todoInput');
    let todoList = [];

    // 取得待辦事項清單（GET）
    fetch('http://localhost:3000/todolist')
    .then(res => res.json())
    .then(json => {
        todoList = todoList.concat(json);
        render(todoList);
    })
    .catch(err => {
        console.log(err);
    })

    // 顯示待辦事項清單 - render 所有 todoList item
    function renderTodoList (todoList) {
        const html = todoList.map((item, index) => `<li class="list">
                <a class="${item.isComplete ? 'finish' : 'unfinished'}" data-id=${item.id}></a>
                <p class="desc" data-id=${item.id}>
                    ${item.desc}
                </p>
                <a class="del" data-id=${item.id}></a>
            </li>`).join('')
        todoListDOM.innerHTML = html;
    }

    // 新增待辦事項清單（POST）
    const addItem = item => {
        fetch('http://localhost:3000/todolist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(json => {
            todoList.push(json);
            render(todoList);
        })
    }

    const newItem = value => ({ desc: value, isComplete: false});
    // const newItem = value => { return {name: value, isComplete: false} };

    // 監聽輸入框的 keydown 事件
    // 按下 Enter 後，給予待辦事項 isComplete 狀態並 addItem
    // 最後清空輸入框
    todoInputDOM.addEventListener('keydown', event => {
        if (event.keyCode === 13 && event.target.value) {
            addItem(newItem(event.target.value));
            event.target.value = '';
        }
    });
    function render (todoList) {
        renderTodoList(todoList);
    }

}(window, document));
