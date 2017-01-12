import React, { Component } from 'react';

export default class TodoListItem extends Component {
	constructor(props) {
		super(props);
        this.modifyList = this.modifyList.bind(this);
	}

    modifyList() {
        const { isComplete, id, desc } = this.props;

        this.props.toggleTodoList({
            id,
            desc,
            isComplete: !isComplete
        });
    }

	render() {
		const { isComplete, id, desc, delTodoList } = this.props;
		return (
			<li className="list">
                <a
                	className={ isComplete ? 'finish' : 'unfinished' }
                	onClick={ () =>{this.modifyList();} }
                >
                </a>
                <p
                    className="desc"
                    onClick={ () =>{this.modifyList();} }
                >
                    { desc }
                </p>
                <a
                    className="del"
                    onClick={ () => { delTodoList(id); } }
                >
                </a>
            </li>
		);
	}
}
