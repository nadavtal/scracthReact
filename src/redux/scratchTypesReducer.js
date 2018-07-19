import { SCRATCHES } from '../shared/scratches';
import * as ActionTypes from './ActionTypes';


var scratches = SCRATCHES;
var scratchTypes = [];
for (var i=0; i < scratches.length; i++) {
    if (!scratchTypes.includes(scratches[i].type)) {
        scratchTypes.push(scratches[i].type)
    }  
}

export const ScratchTypes = (state = scratchTypes, action) => {
    console.log('ScratchTypes reducer: ', state)
    
        return state
    }

