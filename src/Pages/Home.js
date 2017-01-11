import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../Container/Main.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <Main />
            </div>
        );
    }
}

export default (Home);
