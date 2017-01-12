import React, { Component } from 'react';
import Input from './InputContainer.jsx';
import TodoListContainer from './TodoListContainer.jsx';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Input />
                <TodoListContainer />
            </div>
        );
    }
}
