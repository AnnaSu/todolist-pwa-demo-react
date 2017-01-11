import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../Pages/App.js';
import Home from '../Pages/Home.js';

export default function(store) {
    return (
        <Route path="/" component={ App }>
            <IndexRoute component={ Home }></IndexRoute>
        </Route>
    )
}
