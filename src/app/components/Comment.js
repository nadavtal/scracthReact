import React from 'react'
import { Link } from 'react-router-dom';

const Comment = (props) => {
    let comment = props.comment
    // console.log('hereeeee',comment)
    return(<div className="row commentRow" >
                <div className="col-9 commentText ">
                    <Link to={`/profiles/${comment.author.id}`}>
                        {comment.comment}
                    </Link>
                </div>
                <div className="col-3 commentAuthor">
                    <Link to={`/profiles/${comment.author.id}`}>
                        {comment.author.firstName}
                    </Link>
                </div>
                <br/>
            </div>)
}

export default Comment
