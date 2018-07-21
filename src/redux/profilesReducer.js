import { PROFILES } from '../shared/profiles';
import * as ActionTypes from './ActionTypes';


export const Profiles = (state = PROFILES, action) => {
    console.log('profiles reducer', state)
    switch(action.type) {
        case ActionTypes.ADD_PROFILE:
            console.log('here33333')
            var profile = action.payload;
            console.log('profile', profile)
            profile.id = state.length;
            profile.birthDate = new Date,
            profile.photos = [],
            profile.scratches = []
            
            // profile.registrationDate = new Date().toISOString();
            console.log('new profile created in Profiles reducer', profile)
            return state.concat(profile);
        default:
            return state;
    }
    console.log('profiles reducer after profile added', state)
}