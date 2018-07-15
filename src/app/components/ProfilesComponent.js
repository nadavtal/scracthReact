var React = require('react');
var ReactDOM = require('react-dom');
import { Media } from 'reactstrap';
import { Link } from 'react-router';
import { PROFILES } from '../../shared/profiles';
import { SCRATCHES } from '../../shared/scratches';
import  ProfilePageComponent  from './ProfilePageComponent';
var Profile = require('./profile');

export default class ProfilesComponent extends React.Component{
    constructor(props) {
        super();

        this.state = {
            profiles: PROFILES,
            scratches: SCRATCHES,
            selectedProfileId : 0
        }
    }

    onProfileSelect(profileId) {
        // console.log(profileId);
        // this.setState({selectedProfileId: profileId})
        
    }

    render(){
        var profiles = this.state.profiles;
        // console.log('profiles', profiles)
        let Id = this.props.params.profileId
        // console.log(Id)
        var selectedProfile = profiles.filter((profile) => profile.id == Id)[0];
        // console.log('selected profile', selectedProfile)
        profiles = profiles.map(function(profile){
            return(
                <div key={profile.id} onClick={() => this.onProfileSelect(profile.id)}>
                  <Link to={`/profiles/${profile.id}`}>  
                    <Profile key= {profile.id} profile={profile} />
                  </Link>  
                </div>
                );
        }.bind(this));
        return(
            <div className="row"> 
                <div className="col-sm-7">   
                    <div id="profiles-list">
                        <ProfilePageComponent profile={selectedProfile}></ProfilePageComponent>
                    </div>
                </div>
                <div className="col-sm-3 profilesList">   
                    <div id="profiles-list">
                        <h1>profiles:</h1>
                        <ul> {profiles} </ul>
                    </div>
                </div>
            </div>
        )
    }
}


