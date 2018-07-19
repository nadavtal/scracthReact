var React = require('react');
import { Link } from 'react-router';

import ScratchListComponent from '../genericComponents/ScratchListComponent';
import PhotosComponent from '../genericComponents/PhotosComponent';
import Clickable from '../genericComponents/Clickable'
import Scratch from '../genericComponents/Scratch';
import AddScratchModal from '../modals&forms/AddScratchModal'
//CSS requires
require('../../css/scratchWindow.css');



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

class ProfilePageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        // console.log('scratches ids', scratchesIds);
    }

    render(){
        var profile = this.props.profile
        var photos = profile.photos
        var profiles = this.props.profiles
        var scratchesIds = profile.scratches;
        var allScratches = this.props.scratches;
        var profileScratches = getProfileScratches(profile, scratchesIds, allScratches)
        
        return (
                    
            <div className="container">
                <h1>{profile.firstName + ' ' + profile.lastName} </h1>
                
                <div className="row photos">
                    <PhotosComponent photos={photos} />
                </div>
                    <h2>Scratches</h2>
                    <Clickable onClick={() => this.setState({showModal: true})}>
                        <h3>add scratch</h3>
                    </Clickable>
                    {this.state.showModal &&<AddScratchModal onClose={() => this.setState({showModal: false})}/>}
                <div className="scratchList">
                    <ScratchListComponent scratches={profileScratches} />
                </div>
            </div>
        );
    }
}
    export default ProfilePageComponent




