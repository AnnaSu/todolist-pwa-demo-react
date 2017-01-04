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
    function render (todoList) {
        renderTodoList(todoList);
    }

}(window, document));
