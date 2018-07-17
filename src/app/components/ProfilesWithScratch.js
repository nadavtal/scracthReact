import React from 'react'
import { Link } from 'react-router';
import Profile from './Profile';

const ProfilesWithScratch = (props) => {
    var profilesWithScratch = props.profilesWithScratch
    // console.log('hereee',profilesWithScratch)
    profilesWithScratch = profilesWithScratch.map(function(profile){
        return(
                       
                <div key={profile.id} className="col-4 relatedProfile">
                    <div key={profile.id} onClick={() => this.onProfileSelect(profile.id)}>
                        {/* <Link to={`/profiles/${profile.id}`}>   */}
                            <Profile key= {profile.id} profile={profile} />
                        {/* </Link>   */}
                    </div>
                </div>
             )   
        })

        return(
            <div className="row relatedProfiles">
                <h5>profiles with the scratch</h5>
                {profilesWithScratch}
            </div>


        )
}


export default ProfilesWithScratch
