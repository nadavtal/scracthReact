import * as ActionTypes from './ActionTypes';

//create action
export const addComment = (scratchId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        scratchId: scratchId,
        rating: rating,
        author: author,
        comment: comment
    }
})