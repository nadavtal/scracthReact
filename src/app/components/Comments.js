import React from 'react'
import Comment from './Comment';
import { Control, LocalForm, Errors } from 'react-redux-form';

import AddCommentForm from './AddCommentForm';



const Comments = props => {
    console.log('comments compoenent props' ,props)
    let comments = props.comments
    comments = comments.map(function(comment){
        // console.log('comment',comment)
        return(
            <Comment key={comment.id} comment = {comment}/>
        )
    })
    return (
        <div>
            <h5>comments</h5>
            <div>
                {comments}
            </div>
            <AddCommentForm scratchId={props.scratchId} addComment={props.addComment}/>
        </div>
        )
        // console.log(comment)
}

export default Comments
