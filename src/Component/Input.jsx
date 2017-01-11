import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        return (
            <div id="todoInput" className="input-content">
                <img
                    className="add"
                    src="./assets/images/ic_add.png"
                    alt=""
                />
                <input
                    className="input"
                    placeholder="What need to be done?"
                    value=""
                    type="text"
                />
            </div>
        );
    }
}
