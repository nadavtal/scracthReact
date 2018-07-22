import React, { Component } from 'react'
import { Router, browserHistory  } from 'react-router';
import { BrowserRouter, Route, withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Button, Row, Col, Label } from 'reactstrap';

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

function genderProfiles(gender, profiles){
    var group = profiles.filter((profile) => profile.gender == gender)
    return group;
}
function scratchesByTypes(scratchList, type) {
    // console.log(scratchList, type)
    // scratchList = getScratchById(scratchList)
    return scratchList.filter((scratch) => scratch.type == type)
}

function scratchesBySubTypes(scratchList, subtype) {
    // console.log(scratchList, subtype)
    // scratchList = getScratchById(scratchList)
    return scratchList.filter((scratch) => scratch.subType == subtype)
}

// const functions = { 
//     genderProfiles: genderProfiles(gender, profiles),
//     scratchesByTypes: scratchesByTypes(scratches, type),
//     scratchesBySubTypes: scratchesBySubTypes(scratchList, subtype) 
// }

const mapStateToProps = state => {
    return {
        profiles: state.profiles,
        scratches: state.scratches,
        comments: state.comments,
        scratchTypes: state.scratchTypes,
        scratchSubTypes: state.scratchSubTypes,
        
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
        this.genderProfiles = this.genderProfiles.bind(this);
        this.getScratchesById = this.getScratchesById.bind(this);
        this.getUniqueScratches = this.getUniqueScratches.bind(this);
        this.getAllScratches = this.getAllScratches.bind(this);
        this.scratchesByTypes = this.scratchesByTypes.bind(this);
        this.scratchesBySubTypes = this.scratchesBySubTypes.bind(this);
        this.getNumsOfTypeList = this.getNumsOfTypeList.bind(this);
        this.getNumsOfSubTypeList = this.getNumsOfSubTypeList.bind(this);
    }

    genderProfiles(gender, profiles){
        var group = profiles.filter((profile) => profile.gender == gender)
        return group;
    };

    getScratchesById(scratchList, idList){
        var scratchListObject = []
        for (var i=0; i<idList.length; i++) {
            scratchListObject.push(scratchList.filter((scratch) => scratch.id == idList[i])[0])
             }
        return scratchListObject
    };
    
     
    getUniqueScratches(profileList) {
        var idgroup = []
        var group = []
        for(var i = 0; i<profileList.length; i++){
            for (var j=0; j<profileList[i].scratches.length; j++){
                if (!idgroup.includes(profileList[i].scratches[j].id)){
                     idgroup.push(profileList[i].scratches[j].id);
                    // console.log(idgroup)
                    group.push(profileList[i].scratches[j]);
                    // console.log(group)
                }
            }
        }
        // console.log('unique scratches', group)
        return group
    };
    
    getAllScratches(profilesList) {
        // console.log('getAllScratches', profilesList)
        var group = []
        for(var i = 0; i<profilesList.length; i++){
            for (var j=0; j<profilesList[i].scratches.length; j++){
                group.push(profilesList[i].scratches[j])
            }
        }
        // console.log('all scratches', group)
        return group
    };
    
    
    scratchesByTypes(scratchList, type) {
        // console.log(scratchList, type)
        // scratchList = getScratchById(scratchList)
        return scratchList.filter((scratch) => scratch.type == type)
    };
    
    scratchesBySubTypes(scratchList, subtype) {
        // console.log(scratchList, subtype)
        // scratchList = getScratchById(scratchList)
        return scratchList.filter((scratch) => scratch.subType == subtype)
    };
    
    
    
    getNumsOfTypeList(scratchList, typeList){
        let types = []
        // console.log(list)
        for (var i =0; i<typeList.length; i++) {
            var object = {}
            // console.log(list[i])
            var count = scratchesByTypes(scratchList, typeList[i]).length;
            // console.log(count)
            object[typeList[i]] = count
            types.push(object)
        }
        // console.log('object', types)
        return types
    };
    
    getNumsOfSubTypeList(scratchList, subTypeList){
        let types = []
        for (var i =0; i<subTypeList.length; i++) {
            var object = {}
            // console.log(list[i])
            var count = scratchesBySubTypes(scratchList, subTypeList[i]).length;
            // console.log(count)
            object[subTypeList[i]] = count
            types.push(object)
        }
        // console.log('subTypes', types)
        return types
    };
    
    render() {
        var profiles = this.props.profiles;
        var scratches = this.props.scratches;
        var comments = this.props.comments;
        var scratchTypes = this.props.scratchTypes;
        var scratchSubTypes = this.props.scratchSubTypes;
        var functions = {
            genderProfiles : this.genderProfiles,
            getScratchesById :  this.getScratchesById,
            getUniqueScratches : this.getUniqueScratches,
            getAllScratches : this.getAllScratches,
            scratchesByTypes : this.scratchesByTypes,
            scratchesBySubTypes : this.scratchesBySubTypes,
            getNumsOfTypeList : this.getNumsOfTypeList,
            getNumsOfSubTypeList : this.getNumsOfSubTypeList,
    }                   
        
        console.log('main component props', this.props)
        return (
            
                <div >
                    <MyNavBar></MyNavBar>
                    <Header addProfile={addProfile}/>
                    <div style={styles.container} className="container">
                
                        
                        <Container>
                            <Route exact path={"/"} render={() => <Homepage profiles={profiles} scratches={scratches} scratchTypes={scratchTypes}
                             scratchSubTypes={scratchSubTypes} functions={functions}/>} /> 
                            <Route path={"/profiles/:profileId"} component={ProfilesComponent}></Route>
                            <Route path={"/about"} component={About}></Route>
                            <Route path={"/scratches/:scratchId"} component={ScratchesComponent} />
                            <Route exact path={'/contact'} component={ContactRedux} ></Route>
                        </Container>
                        
                    </div>
                    <Footer />
                </div>
            
            )
        }
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))