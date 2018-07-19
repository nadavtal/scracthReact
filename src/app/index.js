// var React = require('react');
import React, { Component } from 'react'
var ReactDOM = require('react-dom');
import { BrowserRouter, Route, withRouter, Redirect, Link } from 'react-router-dom';
import { Router, browserHistory  } from 'react-router';
import { Provider } from 'react-redux'
import { ConfigureStore } from '../redux/configureStore'

import MainComponent from './components/mainLayout/MainComponent'
//Module requires



//CSS requires
require('./css/index.css');


const store = ConfigureStore()

class App extends Component {

    constructor(props) {
        super(props)
        
    }

    
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter history={browserHistory}>
                    <MainComponent />
                </BrowserRouter>
            </Provider>
        );
    }
};









ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
