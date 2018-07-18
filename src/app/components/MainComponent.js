import React, { Component } from 'react'
import { Router, browserHistory  } from 'react-router';
import { BrowserRouter, Route, withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import DATA



//import components
import MyNavBar from './MyNavBar';
import Header from './Header';
import Footer from './Footer';
import ScratchesComponent from './ScratchesComponent'
import ProfilesComponent from './ProfilesComponent'
import About from './about';
import Contact from './contactComponent';
// import connect from 'react-redux/lib/connect/connect';



const mapStateToProps = state => {
    return {
        profiles: state.profiles,
        scratches: state.scratches
    }
}
 class MainComponent extends Component {
  render() {
    return (
        
            <div>
                <MyNavBar></MyNavBar>
                <Header />
                <div className="container">
            
                    
                    <div>
                        <Route path={"/"} component={About}></Route>
                        <Route path={"/profiles/:profileId"} component={ProfilesComponent}></Route>
                        <Route path={"/about"} component={About}></Route>
                        <Route path={"/scratches/:scratchId"} component={ScratchesComponent}></Route>
                        <Route exact path={'/contact'} component={Contact} ></Route>
                    </div>
                    
                <Footer></Footer>
                </div>
            </div>
        
    )
  }
}

export default withRouter(connect(mapStateToProps)(MainComponent))