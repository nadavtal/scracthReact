var React = require('react');
var ReactDOM = require('react-dom');
import { Link } from 'react-router';

import ScratchWindow from './ScratchWindow';
import ScratchListComponent from './ScratchListComponent';
import Scratch from './Scratch';


import { PROFILES } from '../../shared/profiles';
import { SCRATCHES } from '../../shared/scratches';
import { COMMENTS } from '../../shared/comments';

require('../css/scratchesComponent.css');



export default class ScratchesComponent extends React.Component {
    constructor(props) {
        super();

        this.state = {
        scratches : SCRATCHES,
        profiles : PROFILES,
        selectedScratchId : 0
                       
        }
        this.updateSelectedScratch = this.updateSelectedScratch.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onScratchSelect = this.onScratchSelect.bind(this);
    }

    //Custom functions

    updateSelectedScratch(item){
        // console.log(item)

    }

    onDelete(item){
        var updatedScratches = this.state.scratches.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            scratches: updatedScratches
        });
    }

    onAdd(item){
        var updatedScratches = this.state.scratches;
        updatedScratches.push(item);
        this.setState({
            scratches: updatedScratches
        })
    }
    onScratchSelect(scratchId) {
        console.log(scratchId)
        // this.setState({selectedScratchId: scratchId})
    };
    
    render(){
        // console.log(this.props.match.params.scratchId)
        let Id = this.props.match.params.scratchId
        var comments = COMMENTS.filter((comment) => comment.scratchId == Id)
        var scratches = this.state.scratches;
        // console.log(scratches)
        var selectedScratch = scratches.filter((scratch) => scratch.id == Id)[0];
        
        return(
            <div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <ScratchWindow scratches={scratches} scratch={selectedScratch} 
                    profiles = {this.state.profiles} comments={comments}></ScratchWindow>
                </div>    
                <div className="col-12 col-md-4 ">
                    <button>Male</button>
                    <button>Female</button>
                    <ScratchListComponent scratches={scratches}></ScratchListComponent>
                </div>
            </div>
            
        </div>
        );
    }

    

};

