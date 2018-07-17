import React from 'react'
import Comment from './Comment';

const Comments = props => {
    let comments = props.comments
    // console.log(comments)
    comments = comments.map(function(comment){
        // console.log('comment',comment)
        return(
            <Comment key={comment.id} comment = {comment}/>
        )
    })
    return (
        <div>
            <h5>comments</h5>
            {comments}
        </div>
        )
        // console.log(comment)
}

export default Comments
