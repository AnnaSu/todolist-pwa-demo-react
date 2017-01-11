import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        const { unfinished, addTodoList } = this.props;
        return (
            <header className="header">
                <img
                    className="logo"
                    src="./assets/images/logo_todo.png"
                    alt=""
                />
                <div className="unfinished">
                    <span className="count">0</span>
                    <span>個未完成</span>
                </div>
            </header>
        );
    }
}
