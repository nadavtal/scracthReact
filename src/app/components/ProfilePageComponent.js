var React = require('react');
import { Link } from 'react-router';
import { SCRATCHES } from '../../shared/scratches';
var Scratch = require('./scratch');
//CSS requires
require('../css/scratchWindow.css');


export default class ProfilePageComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            // scratch: props.scratch,
            scratches: SCRATCHES
        };
      }
    
    onScratchSelect(scratch) {
        console.log(scratch)
        
    }
  
    render(){
        var profile = this.props.profile
        var profiles = this.props.profiles
        var scratchesIds = profile.scratches;
        var allScratches = this.state.scratches;
        // console.log('scratches ids', scratchesIds);
        var profileScratches = []
        for (var j = 0; j<scratchesIds.length; j++){
            for (var i = 0; i<allScratches.length; i++){
                if (allScratches[i].id == scratchesIds[j]){
                    profileScratches.push(allScratches[i])
                }
            }
        }
        // console.log(profileScratches)
        const scratches = profileScratches.map(function(scratch){
            // console.log(scratch)
            return(<div key={scratch.id} onClick={() => this.onScratchSelect(scratch)}>
                <Link to={`/scratches/${scratch.id}`}>
                    <Scratch key={scratch.id} scratch={scratch} />;
                </Link>
                    </div>)
        }.bind(this));
        return (
                    
            <div className="container">
                <h1>{profile.firstName + ' ' + profile.lastName} </h1>
                
                <div className="row">
                    <div className="col-sm-4">
                        
                    </div>
                    <div className="col-sm-4">
                        
                    </div>
                    <div className="col-sm-4">
                      
                    </div>
                </div>
                <div>
                    <h2>Scratches</h2>
                    <ul>
                        {scratches}
                    </ul>
                </div>
            </div>
        );
    }
}




