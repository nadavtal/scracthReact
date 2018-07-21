import React, { Component } from 'react'

import Clickable from './genericComponents/Clickable';

function getScratchesById(scratchList, idList){
    var scratchListObject = []
    for (var i=0; i<idList.length; i++) {
        scratchListObject.push(scratchList.filter((scratch) => scratch.id == idList[i])[0])
         }
    return scratchListObject
}

function getNumProfiles(profiles) {
    return profiles.length
}

function genderProfiles(gender, profiles){
    var group = profiles.filter((profile) => profile.gender == gender)
    return group;
}

function getUniqueScratches(profileList) {
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
}

function getAllScratches(profilesList) {
    // console.log('getAllScratches', profilesList)
    var group = []
    for(var i = 0; i<profilesList.length; i++){
        for (var j=0; j<profilesList[i].scratches.length; j++){
            group.push(profilesList[i].scratches[j])
        }
    }
    // console.log('all scratches', group)
    return group
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



function getNumsOfTypeList(scratchList, typeList){
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
}

function getNumsOfSubTypeList(scratchList, subTypeList){
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
}

function getScratchesStats(){

}


export default class Homepage extends React.Component{
    constructor(props) {
        super(props);
        this.state ={showModal :false}
    }
    render() {
        console.log('homepage props', this.props)
        var profiles = this.props.profiles
        var scratches = this.props.scratches
        var allScratchesIds = getAllScratches(profiles)
        var allScratches = getScratchesById(scratches, allScratchesIds)
        // console.log(allScratchesObj)
        var scratchTypes = this.props.scratchTypes
        var scratchSubTypes = this.props.scratchSubTypes
        var numProfiles = profiles.length
        var numScratches = scratches.length
        var MaleProfiles = genderProfiles('male', profiles)
        var FemaleProfiles = genderProfiles('female', profiles)
        // console.log(AllScratches)
        var UniqueScratches = getUniqueScratches(profiles)
        
        var typeNums = getNumsOfTypeList(scratches, scratchTypes);
        console.log(typeNums)
        var subTypeNums = getNumsOfSubTypeList(scratches, scratchSubTypes);
        var allTypeNums = getNumsOfTypeList(allScratches, scratchTypes);
        console.log(allTypeNums)
        var allSubTypeNums = getNumsOfSubTypeList(allScratches, scratchSubTypes);
        
        typeNums = typeNums.map(function(type, index){
            // console.log(type)
            let key = Object.keys(type)[0]
            let count = type[key] 
    
            // console.log('types', key, count)
    
            return (
                <div key={index}>
                    there are {count} scratches of type {key}
                </div>
            )
        })
        subTypeNums = subTypeNums.map(function(type, index){
            // console.log(type)
                let key = Object.keys(type)[0]
                let count = type[key] 
        
                // console.log('subTypes', key, count)
        
                return (
                    <div key={index}>
                        there are {count} scratches of sub type {key}
                    </div>
                )
        })

        allTypeNums = allTypeNums.map(function(type, index){
            // console.log(type)
            let key = Object.keys(type)[0]
            let count = type[key] 
    
            // console.log('types', key, count)
    
            return (
                <div key={index}>
                    there are {count} scratches of type {key}
                </div>
            )
        })
        allSubTypeNums = allSubTypeNums.map(function(type, index){
            // console.log(type)
                let key = Object.keys(type)[0]
                let count = type[key] 
        
                // console.log('subTypes', key, count)
        
                return (
                    <div key={index}>
                        there are {count} scratches of sub type {key}
                    </div>
                )
        })

        
        return(
            <div >
                <h4>{numProfiles} profiles</h4> 
                <h4>{allScratchesIds.length} scratches</h4> 
                <h4>{numScratches} unique scratches</h4>
                <h4>{MaleProfiles.length} male profiles</h4> 
                <h4>{FemaleProfiles.length} female profiles</h4> 
                {typeNums}
                {subTypeNums}
                {allTypeNums}
                {allSubTypeNums}
                
  
            </div>
        );
    }  
}






