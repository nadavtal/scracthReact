import { SCRATCHES } from '../shared/scratches';
import * as ActionTypes from './ActionTypes';


export const Scratches = (state = SCRATCHES, action) => {
    // console.log('scratch reducer: ', state)
    switch(action.type) {
        case ActionTypes.ADD_SCRATCH:
            var scratch = action.payload;
            console.log('scratch', scratch)
            scratch.id = state.length;
            scratch.likes = 0;
            scratch.dislikes = 0;
            scratch.addedToProfile = 0;
            scratch.author = ''
            // scratch.date = new Date().toISOString();
            return state.concat(scratch);
        default:
            return state;
    }
}


