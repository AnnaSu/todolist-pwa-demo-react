(function (window, document) {

    const todoListDOM = document.getElementById('todoList');
    let todoList = [];

    // 取得待辦事項清單（GET）
    fetch('http://localhost:3000/todolist')
    .then(res => res.json())
    .then(json => {
        todoList = todoList.concat(json);
    })
    .catch(err => {
        console.log(err);
    })

}(window, document));
