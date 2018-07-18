var React = require('react');

import { Link } from 'react-router';
import PhotosComponent from './PhotosComponent';
import Profile from './Profile';
import ProfilesWithScratch from './ProfilesWithScratch';
import ScratchButtons from './ScratchButtons';
import ScratchMainText from './ScratchMainText';
import ScratchStats from './ScratchStats';
import Comments from './Comments';
//CSS requires
require('../css/scratchWindow.css');

// console.log(ProfilesWithScratch )

function getAllScratches(profiles) {
    // console.log('getAllScratches', profiles)
    var group = []
    for(var i = 0; i<profiles.length; i++){
        for (var j=0; j<profiles[i].scratches.length; j++){
            group.push(profiles[i].scratches[j])
        }
    }
    // console.log('all scratches', group)
    return group
}

function scratchPercentage(scratch, scratchList){
    // console.log('scratchPercentage', scratchList)
    // console.log(scratch.id)
    var length = scratchList.length
    var scratchAcurrences = scratchList.filter((id) => id == scratch.id).length;
    
    // console.log(scratchAcurrences)
    var scratchPerc = (scratchAcurrences/length*100).toFixed(2)
    return scratchPerc
}

function genderProfiles(gender, profiles){
    var group = profiles.filter((profile) => profile.gender == gender)
        // console.log(group)
        return group;
}

function findProfilesByScratch(profileList, scratchId){
    // console.log(profileList, scratchId)
    var group = []
    for (var i = 0; i<profileList.length; i++){
        for(var j = 0; j<profileList[i].scratches.length; j++){
            // console.log(profiles[i].scratches[j].id)
            // console.log(scratch.id)
            if (profileList[i].scratches[j] == scratchId){
                group.push(profileList[i])
            }
        }
    }
    // console.log('profileswithscratch', group);
    return group;
}












const ScratchWindow = (props) => {
    console.log('scratchwindow props', props)
    let scratch = props.scratch;
    let scratches = props.scratches;
    // console.log(scratches)
    let profiles = props.profiles;
    let comments = props.comments;
    let allScratches = getAllScratches(profiles);
    let scratchPerc = scratchPercentage(scratch, allScratches);
    let males = genderProfiles('male', profiles);
    let allMaleScratches = getAllScratches(males)
    let maleScratchPercent = scratchPercentage(scratch, allMaleScratches);
    // console.log('males', maleScratchPercent)
    let females = genderProfiles('female', profiles);
    let allFemaleScratches = getAllScratches(females)
    let femaleScratchPercent = scratchPercentage(scratch, allFemaleScratches);
    let profilesWithScratch = findProfilesByScratch(profiles, scratch.id)
    let malesWithScratch = genderProfiles('male', profilesWithScratch)
    let femalesWithScratch = genderProfiles('female', profilesWithScratch)
    let stats = {
        femalesWithScratch: femalesWithScratch,
        malesWithScratch: malesWithScratch,
        profilesWithScratch: profilesWithScratch,
        maleScratchPercent: maleScratchPercent,
        scratchPerc: scratchPerc,
        femaleScratchPercent:femaleScratchPercent
    }
        
    
    return (
        <div className="container scratchWindow">
            <ScratchMainText scratch={scratch}/>
            <ScratchButtons scratch={scratch} />
            <ScratchStats stats={stats}/>
            <Comments comments = {comments} addComment={props.addComment} scratchId={scratch.id}/>
            <ProfilesWithScratch profilesWithScratch={profilesWithScratch}/>
            
        </div>
                );
}
    


export default ScratchWindow


