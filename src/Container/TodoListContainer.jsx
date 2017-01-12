import TodoList from '../Component/TodoList.jsx';
import { connect } from 'react-redux';
import { getTodoList, toggleTodoList, delTodoList } from '../Reducers/todolist.js';

export default connect(state => ({
    todos: state.todolist
}), {
    getTodoList,
    toggleTodoList,
    delTodoList
})(TodoList);
