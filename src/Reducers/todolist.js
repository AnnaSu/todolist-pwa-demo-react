const axios = require('axios');
const initialState = [];
const RECEIVE_TODO = 'RECEIVE_TODO';
const URL = 'http://localhost:3000/';

export function receiveTodoList (data) {
    return {
        type: RECEIVE_TODO,
        data: data
    };
}

export function getTodoList() {
    return function(dispatch) {
        return axios.get(`${URL}todolist`)
        .then(res => {
            dispatch(receiveTodoList(res.data));
        });
    }
}

export default function todolist (state = initialState, action) {
    switch (action.type) {
    case RECEIVE_TODO:
        console.log('action:', action);
        return state;
    default:
        return state;
    }
}
