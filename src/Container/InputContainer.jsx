import { connect } from 'react-redux';
import Input from '../Component/Input.jsx';
import { addTodoList } from '../Reducers/todolist.js';

export default connect(null, {
    addTodoList
})(Input);
