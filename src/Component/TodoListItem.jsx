import React, { Component } from 'react';

export default class TodoListItem extends Component {
	constructor(props) {
		super(props);
        this.modifyList = this.modifyList.bind(this);
        this.state = {
            isComplete: this.props.isComplete
        }
	}

    modifyList(id, desc) {
        this.setState({
            isComplete: !this.state.isComplete
        })
        this.props.toggleTodoList({
            id,
            desc,
            isComplete: !this.state.isComplete
        }, id);
    }

	render() {
		const { isComplete, id, desc } = this.props;
		return (
			<li className="list">
                <a
                	className={ this.state.isComplete ? 'finish' : 'unfinished' }
                	onClick={ () =>{this.modifyList(id, desc);} }
                >
                </a>
                <p
                    className="desc"
                    onClick={ () =>{this.modifyList(id, desc);} }
                >
                    { desc }
                </p>
                <a className="del"></a>
            </li>
		);
	}
}
