import React from 'react'
import { Link } from 'react-router-dom';


const ScratchButtons = (props) => {
    let scratch = props.scratch;
    console.log('buttons props', props)
    console.log(typeof(props.increment))
    return (
        <div>
        <h5>Rate scratch</h5>
        <div className="row scratchButtons">
            <div className="col-sm-4 button ">
                <button onClick={props.increment.bind(null, scratch.id)}>i like that <br/>{scratch.likes}</button>
            </div>
            <div className="col-sm-4 button">
                <button >add to profile <br/>{scratch.addedToProfile}</button>
            </div>
            <div className="col-sm-4 button">
                <button >deal breaker <br/> {scratch.dislikes}</button>
            </div>
        </div>
        </div>
    )
}


export default ScratchButtons
