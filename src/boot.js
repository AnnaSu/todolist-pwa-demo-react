import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createStore from './Store/configureStore.js'
import createRoutes from './Router/routing.js';

const store = createStore();
const routes = createRoutes(store);

ReactDOM.render(
<Provider store={ store }>
    <Router history={ browserHistory }>
        { routes }
    </Router>
</Provider>, document.getElementById('root'));
