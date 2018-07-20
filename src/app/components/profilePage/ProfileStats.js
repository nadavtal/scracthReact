var React = require('react');
var ReactDom = require('react-dom');


import Proptypes from 'prop-types';


function getTypeNums(profileScratches, type){
    // console.log(profileScratches)
    var count = 0;
    for (var i=0; i<profileScratches.length; i++){
        // console.log(i, profileScratches[i].type)
        if (profileScratches[i].type == type){
            count++
        }
    }
    // console.log('here', type, count)
    return count
}

function getSubTypeNums(profileScratches, subType){
    // console.log(profileScratches)
    var count = 0;
    for (var i=0; i<profileScratches.length; i++){
        // console.log(i, profileScratches[i].type)
        if (profileScratches[i].subType == subType){
            count++
        }
    }
    // console.log('here', subType, count)
    return count
}

function getNumsOfTypeList(profileScratches, list){
    let types = []
    // console.log(list)
    for (var i =0; i<list.length; i++) {
        var object = {}
        // console.log(list[i])
        var count = getTypeNums(profileScratches, list[i]);
        // console.log(count)
        object[list[i]] = count
        types.push(object)
    }
    // console.log('object', object)
    return types
}

function getNumsOfSubTypeList(profileScratches, list){
    let types = []
    for (var i =0; i<list.length; i++) {
        var object = {}
        // console.log(list[i])
        var count = getSubTypeNums(profileScratches, list[i]);
        // console.log(count)
        object[list[i]] = count
        types.push(object)
    }
    // console.log('object', object)
    return types
}

function getProfileScratchesStats(profileScratches) {
    // console.log(profileScratches)
    
}

//Create Scratch component
const ProfileStats = (props) => {
    // console.log('stats', props)
    let profileScratches = props.scratches;
    
    let types= props.types;
    let subTypes= props.subTypes;
    
    let typesStats = getNumsOfTypeList(profileScratches, types)
    console.log('typesStats', typesStats)
    typesStats = typesStats.map(function(type, index){
        let key = Object.keys(type)[0]
        let count = type[key] 

        console.log('types', key, count)

        return (
            <div key={index}>
                you have {count} scratches of type {key}
            </div>
        )
    })

    let subTypesStats = getNumsOfSubTypeList(profileScratches, subTypes)
    console.log('subTypesStats', subTypesStats)
    subTypesStats = subTypesStats.map(function(type, index){
        let key = Object.keys(type)[0]
        let count = type[key] 

        console.log('subTypes', key, count)

        return (
            <div key={index}>
                there are {count} scratches that you {key}
            </div>
        )
    })

    // let subTypesStats = getNumsOfSubTypeList(profileScratches, subTypes)
    // console.log('subTypesStats', subTypesStats)
    

        return(
            <div>
                {typesStats} <br/>
                {subTypesStats}
            </div>
        )
}
export default ProfileStats
