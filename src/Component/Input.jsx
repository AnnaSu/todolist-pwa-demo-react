import React, { Component } from 'react';

export default class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }
    }

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
                    value={ this.state.value }
                    type="text"
                    onChange={
                        (event) => {
                            this.setState({
                                value: event.target.value
                            });
                        }
                    }
                />
            </div>
        );
    }
}
