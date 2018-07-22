import React, { Component } from 'react'
import { Container, Button, Row, Col, Label } from 'reactstrap';

import Clickable from './genericComponents/Clickable';




export default class Homepage extends React.Component{
    constructor(props) {
        super(props);
        this.state ={showModal :false}
    }
    render() {
        console.log('homepage props', this.props)
        var profiles = this.props.profiles
        var scratches = this.props.scratches
        var scratchTypes = this.props.scratchTypes
        var scratchSubTypes = this.props.scratchSubTypes
        var numProfiles = profiles.length
        var numScratches = scratches.length
        //define functions from props
        var genderProfiles = this.props.functions.genderProfiles;
        var getAllScratches = this.props.functions.getAllScratches;
        var getScratchesById = this.props.functions.getScratchesById;
        var getNumsOfTypeList = this.props.functions.getNumsOfTypeList;
        var getNumsOfSubTypeList = this.props.functions.getNumsOfSubTypeList;
        var getUniqueScratches = this.props.functions.getUniqueScratches;
        var scratchesBySubTypes = this.props.functions.scratchesBySubTypes;
        var scratchesByTypes = this.props.functions.scratchesByTypes;

        //use functions to get data
        var allScratchesIds = getAllScratches(profiles)
        var allScratches = getScratchesById(scratches, allScratchesIds)
        var maleProfiles = genderProfiles('male', profiles)
        var maleScrtaches = getAllScratches(maleProfiles)
        var femaleProfiles = genderProfiles('female', profiles)
        var femaleScrtaches = getAllScratches(femaleProfiles)
        var UniqueScratches = getUniqueScratches(profiles)
        var typeNums = getNumsOfTypeList(scratches, scratchTypes);
        var subTypeNums = getNumsOfSubTypeList(scratches, scratchSubTypes);
        var allTypeNums = getNumsOfTypeList(allScratches, scratchTypes);
        var allSubTypeNums = getNumsOfSubTypeList(allScratches, scratchSubTypes);
        
        typeNums = typeNums.map(function(type, index){
            let key = Object.keys(type)[0]
            let count = type[key] 
             return (
                <div key={index}>
                     {count} scratches of type {key}
                </div>
            )
        })
        subTypeNums = subTypeNums.map(function(type, index){
            let key = Object.keys(type)[0]
            let count = type[key] 
            return (
                    <div key={index}>
                         {count} scratches of sub type {key}
                    </div>
                )
        })

        allTypeNums = allTypeNums.map(function(type, index){
            let key = Object.keys(type)[0]
            let count = type[key] 
            return (
                    <div key={index}>
                        {count} scratches of type {key}
                    </div>
                )
        })

        allSubTypeNums = allSubTypeNums.map(function(type, index){
            let key = Object.keys(type)[0]
            let count = type[key] 
            return (
                <div key={index}>
                     {count} scratches of sub type {key}
                </div>
            )
        })

        
        return(
            <div >
                <Row className="homepageRow">
                    <Col md={4}>
                        <h4>{numProfiles} profiles</h4> 
                        <h4>{maleProfiles.length} male profiles</h4>
                        <h4>{femaleProfiles.length} female profiles</h4>
                    </Col>
                    <Col md={4}>
                        <h4>{allScratchesIds.length} scratches</h4> 
                        <h4>{numScratches} unique scratches</h4>
                        <h4>{maleScrtaches.length} male scratches</h4> 
                        <h4>{femaleScrtaches.length} female scratches</h4>
                    </Col>
                    <Col md={4}>
                        <h4> There are: </h4>
                        {typeNums}
                        {subTypeNums}
                        {allTypeNums}
                        {allSubTypeNums}
                    </Col>
                </Row>
            </div>
        );
    }  
}






