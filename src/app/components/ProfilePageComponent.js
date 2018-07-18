var React = require('react');
import { Link } from 'react-router';

import ScratchListComponent from './ScratchListComponent';
import PhotosComponent from './PhotosComponent';
// import Carousell from './CarousellComponent';
import Scratch from './Scratch';
//CSS requires
require('../css/scratchWindow.css');

// console.log(Carousel)

// function onScratchSelect(scratch) {
//         // console.log(scratch)
        
//     }

function getProfileScratches(profile, scratchesIds, allScratches){
    var profileScratches = []
    for (var j = 0; j<scratchesIds.length; j++){
        for (var i = 0; i<allScratches.length; i++){
            if (allScratches[i].id == scratchesIds[j]){
                profileScratches.push(allScratches[i])
            }
        }
    }
    return profileScratches
}

const ProfilePageComponent = (props) => {
    var profile = props.profile
    var photos = profile.photos
    var profiles = props.profiles
    var scratchesIds = profile.scratches;
    var allScratches = props.scratches;
    var profileScratches = getProfileScratches(profile, scratchesIds, allScratches)
    // console.log('scratches ids', scratchesIds);

    
        
        
        return (
                    
            <div className="container">
                <h1>{profile.firstName + ' ' + profile.lastName} </h1>
                
                <div className="row photos">
                    <PhotosComponent photos={photos} />
                </div>
                    <h2>Scratches</h2>
                <div className="scratchList">
                    <ScratchListComponent scratches={profileScratches} />
                </div>
            </div>
        );
    }

    export default ProfilePageComponent




