import { SCRTACHES, SCRATCHES } from './scratches'

var scratches = SCRATCHES;
var scratchTypes = [];
for (var i=0; i < scratches.length; i++) {
    if (!scratchTypes.includes(scratches[i].type)) {
        scratchTypes.push(scratches[i].type)
    }  
}

export default scratchTypes