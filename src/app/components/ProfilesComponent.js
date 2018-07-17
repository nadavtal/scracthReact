var React = require('react');
var ReactDOM = require('react-dom');
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PROFILES } from '../../shared/profiles';
import { SCRATCHES } from '../../shared/scratches';
import  ProfilePageComponent  from './ProfilePageComponent';
import Profile from './Profile';

export default class ProfilesComponent extends React.Component{
    constructor(props) {
        super();

        this.state = {
            profiles: PROFILES,
            scratches: SCRATCHES,
            selectedProfileId : 0
        }
        // this.onProfileSelect = this.onProfileSelect(bind(this))
    }

    onProfileSelect(profileId) {
        // console.log(profileId);
        // this.setState({selectedProfileId: profileId})
        
    }

    render(){
        var profiles = this.state.profiles;
        var scratches = this.state.scratches;
        // console.log(this.props)
        let Id = this.props.match.params.profileId
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
                        <ProfilePageComponent profile={selectedProfile} profiles={profiles} scratches={scratches}></ProfilePageComponent>
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


