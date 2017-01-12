import React, { Component } from 'react';
import TodoListItem from './TodoListItem.jsx';

export default class TodoList extends Component {
    componentDidMount() {
        this.props.getTodoList();
    }
    render() {
        const { todos, toggleTodoList, delTodoList } = this.props;
        return (
            <ul id="todoList">
            {
                todos.map((item, index) => {
                    return (
                        <TodoListItem
                            key={`todolist_${index}`}
                            id={ item.id }
                            desc={ item.desc }
                            isComplete={ item.isComplete }
                            toggleTodoList={ toggleTodoList }
                            delTodoList={ delTodoList }
                        />
                    )
                })
            }
            </ul>
        );
    }
}
