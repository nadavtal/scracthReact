import { PROFILES } from '../shared/profiles';
import { SCRATCHES } from '../shared/scratches';
import { COMMENTS } from '../shared/comments';

export const initialState = {
        profiles: PROFILES,
        scratches: SCRATCHES,
        comments: COMMENTS

    
}
//pure function
export const Reducer = (state = initialState, action) => {
    return state;
}