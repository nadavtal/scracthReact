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

export const addProfile = (firstName, lastName, pw, userName, email, gender) => ({
    type: ActionTypes.ADD_PROFILE,
    payload: {
        
        firstName: firstName,
        lastName: lastName,
        pw: pw,
        userName: userName,
        email: email,
        gender: gender,
        birthDate: new Date,
        photos: [],
        scratches: []

    }
})

export const addScratch = (scratchId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        scratchId: scratchId,
        rating: rating,
        author: author,
        comment: comment
    }
})