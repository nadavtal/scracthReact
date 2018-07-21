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
        case ActionTypes.UPDATE_SCRATCH:
            var scratch = action.payload;
            console.log('scratch', scratch)
            scratch.id = state.length;
            scratch.likes = 0;
            scratch.dislikes = 0;
            scratch.addedToProfile = 0;
            scratch.author = ''
            // scratch.date = new Date().toISOString();
            return state (scratch);
        case ActionTypes.INCREMENT_LIKES:
            console.log('state in beigining', state)
            console.log('incrementing likes', action.payload)
            let scratchId = action.payload;
            let i = scratchId
            let scratch = state.filter((scratch) => scratch.id == scratchId)[0]
            console.log('this scratch will be unpdated', scratch)
            scratch.likes += 1
            console.log('scratch updated', scratch)
            console.log('state in end', state)
            return state
            // return [
            //     ...state.slice(0,i),
            //     ...state[i].like +1,
            //     ...state.slice(i + 1),
            // ]
        default:
            return state;
    }
}


