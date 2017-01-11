import React, { Component } from 'react';

export default class TodoList extends Component {
    componentDidMount() {
        this.props.getTodoList();
    }
    render() {
        console.log('this.props:', this.props);
        return (
            <div></div>
        );
    }
}
