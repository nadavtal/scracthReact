import React from 'react'
import { Profile } from "./Profile";
import { Link } from 'react-router-dom';
import Scratch from './Scratch';
// console.log(Scratch)

const ScratchListComponent = (props) => {
    // console.log('hereeeeee',props.scratches)
    var scratches = props.scratches
    // console.log(scratches)
    scratches = scratches.map(function(scratch){
        // console.log(scratch)
        return(<div key={scratch.id} onClick={() => this.onScratchSelect(scratch.id)}>
                <Link to={`/scratches/${scratch.id}`}>
                    <Scratch key={scratch.id} scratch={scratch} />
                </Link>
                </div>)
    })
    // console.log('now hereee',scratches)
  return (
    <div className="scratchList">
      {scratches}
    </div>
  )
}

export default ScratchListComponent
