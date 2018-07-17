// var React = require('react');
import React, { Component } from 'react'
var ReactDOM = require('react-dom');
import { Router, browserHistory, Link, Redirect } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'

// import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import DATA
import { PROFILES } from '../shared/profiles';
import { SCRATCHES } from '../shared/scratches';


//import components
import MyNavBar from './components/MyNavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScratchesComponent from './components/ScratchesComponent'
import ProfilesComponent from './components/ProfilesComponent'
import About from './components/about';
import Contact from './components/contactComponent';
//Module requires



//CSS requires
require('./css/index.css');


//SETUP ROUTING
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profiles: PROFILES
        };
    }


    
    render(){
        return(
            <div>
                <MyNavBar></MyNavBar>
                <Header />
                <div className="container">
             
                    <BrowserRouter history={browserHistory}>
                    <div>
                        <Route path={"/"} component={About}></Route>
                        <Route path={"/profiles/:profileId"} component={ProfilesComponent}></Route>
                        <Route path={"/about"} component={About}></Route>
                        <Route path={"/scratches/:scratchId"} component={ScratchesComponent}></Route>
                        <Route exact path={'/contact'} component={Contact} ></Route>
                    </div>
                    </BrowserRouter>
                <Footer></Footer>
                </div>
            </div>
            
        );
    }
};

//Create a component







ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
