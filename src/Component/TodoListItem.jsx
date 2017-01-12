import React, { Component } from 'react';

export default class TodoListItem extends Component {
	render() {
		const { isComplete, id, desc } = this.props;
		return (
			<li className="list">
                <a className={ isComplete ? 'finish' : 'unfinished' } data-id={ id }></a>
                <p className="desc" data-id={ id }>
                    { desc }
                </p>
                <a className="del" data-id={ id }></a>
            </li>
		);
	}
}
