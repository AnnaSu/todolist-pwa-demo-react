import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../Reducers/';
import thunk from 'redux-thunk'

export default function(initialState) {
    return createStore(reducers, initialState, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}
