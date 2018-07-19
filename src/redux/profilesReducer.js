import { PROFILES } from '../shared/profiles';
import * as ActionTypes from './ActionTypes';


export const Profiles = (state = PROFILES, action) => {
    console.log('profiles reducer', state)
    switch(action.type) {
        case ActionTypes.ADD_PROFILE:
            var profile = action.payload;
            console.log('profile', profile)
            profile.id = state.length;
            
            profile.registrayionDate = new Date().toISOString();
            return state.concat(profile);
        default:
            return state;
    }
}