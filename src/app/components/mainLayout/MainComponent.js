import React, { Component } from 'react'
import { Router, browserHistory  } from 'react-router';
import { BrowserRouter, Route, withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import actions
import { addScratch } from '../../../redux/ActionCreaters';
import { addComment } from '../../../redux/ActionCreaters';
import { addProfile } from '../../../redux/ActionCreaters';

// import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import DATA



//import components
import MyNavBar from './MyNavBar';
import Header from './Header';
import Footer from './Footer';
import ScratchesComponent from '../ScratchesComponent'
import ProfilesComponent from '../ProfilesComponent'
import About from '../about';
// import Contact from '../modals&forms/contactComponent';
import ContactRedux from '../modals&forms/ContactReduxForm';
import Homepage from '../Homepage';
// import connect from 'react-redux/lib/connect/connect';



const mapStateToProps = state => {
    return {
        profiles: state.profiles,
        scratches: state.scratches,
        comments: state.comments,
        scratchTypes: state.scratchTypes,
        scratchSubTypes: state.scratchSubTypes
    }
}

const mapDispatchToProps = (dispatch) => ({
    addScratch: (header, desc, type, subtype) => dispatch(addScratch(header, desc, type, subtype)),
    addComment: (scratchId, rating, author, comment) => dispatch(addComment(scratchId, rating, author, comment)),
    addProfile: (firstName, lastName, pw, userName, email, gender) => dispatch(addProfile(firstName, lastName, pw, userName, email, gender))
});

const styles = {
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        background: `Linear-gradient(to top right, purple, pink`,
        // border: '1px solid black'
    }
}

 class MainComponent extends Component {
     constructor(props) {
         super(props);
     }

  render() {
    var profiles = this.props.profiles;
    var scratches = this.props.scratches;
    var comments = this.props.comments;
    var scratchTypes = this.props.scratchTypes;
    var scratchSubTypes = this.props.scratchSubTypes;
      console.log('main component props', this.props)
    return (
        
            <div >
                <MyNavBar></MyNavBar>
                <Header addProfile={addProfile}/>
                <div style={styles.container} className="container">
            
                    
                    <div>
                        <Route exact path={"/"} render={() => <Homepage profiles={profiles} scratches={scratches} scratchTypes={scratchTypes} scratchSubTypes={scratchSubTypes} />} /> 
                        <Route path={"/profiles/:profileId"} component={ProfilesComponent}></Route>
                        <Route path={"/about"} component={About}></Route>
                        <Route path={"/scratches/:scratchId"} component={ScratchesComponent} />
                        <Route exact path={'/contact'} component={ContactRedux} ></Route>
                    </div>
                    
                </div>
                <Footer />
            </div>
        
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))