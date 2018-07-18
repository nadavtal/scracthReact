import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state = COMMENTS, action) => {
    console.log('here', state)
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log('comment', comment)
            comment.id = state.length;
            
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}