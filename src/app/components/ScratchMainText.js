import React from 'react'
import { Link } from 'react-router';


const ScratchMainText = (props) => {
    var scratch = props.scratch
    return (
    <div className="row scratchText">
    <div className="col-9"> 
        <h2 className="scratchDescMain">{scratch.desc} </h2>
    </div>
    <div className="col-3"> 
        <h1 className="scratchHeaderMain">{scratch.header} </h1>
    </div>
</div>)
}


export default ScratchMainText
