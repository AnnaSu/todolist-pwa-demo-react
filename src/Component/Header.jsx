import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render () {
        const { unfinishedCount } = this.props;
        return (
            <header className="header">
                <img
                    className="logo"
                    src="./assets/images/logo_todo.png"
                    alt=""
                />
                <div className="unfinished">
                    <span className="count">{ unfinishedCount }</span>
                    <span>個未完成</span>
                </div>
            </header>
        );
    }
}

export default connect(state => {
    return {
        unfinishedCount: state.todolist
                        .filter((item)=>!item.isComplete).length
    }
})(Header);
