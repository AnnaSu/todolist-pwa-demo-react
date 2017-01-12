const axios = require('axios');
const initialState = [];
const RECEIVE_TODO = 'RECEIVE_TODO';
const ADD_TODO = 'ADD_TODO';
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

export function receiveAddTodoList (payload) {
    return {
        type: ADD_TODO,
        payload: payload
    };
}

export function addTodoList (value) {
    return function(dispatch) {
        return axios({
            method: 'post',
            url: `${URL}todolist`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                isComplete: false,
                desc: value
            }
        })
        .then(res => {
            dispatch(receiveAddTodoList(res.data));
        })
        .catch(error => { console.log(error) })
    }
}

export default function todolist (state = initialState, action) {
    switch (action.type) {
    case RECEIVE_TODO:
        return action.data;
    case ADD_TODO:
        state.push(action.payload);
        return [...state];
    default:
        return state;
    }
}
