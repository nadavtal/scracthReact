import { SCRATCHES } from '../shared/scratches';
import * as ActionTypes from './ActionTypes';


var scratches = SCRATCHES;
var scratchSubTypes = [];
for (var i=0; i < scratches.length; i++) {
    if (!scratchSubTypes.includes(scratches[i].subType)) {
        scratchSubTypes.push(scratches[i].subType)
    }  
}

export const ScratchSubTypes = (state = scratchSubTypes, action) => {
    // console.log('ScratchSubTypes reducer: ', state)
    
        return state
    }

