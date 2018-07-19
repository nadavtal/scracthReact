var React = require('react');
var ReactDOM = require('react-dom');
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import ScratchWindow from './ScratchWindow/ScratchWindow';
import ScratchListComponent from './genericComponents/ScratchListComponent';
import Scratch from './genericComponents/Scratch';

//import actions
import { addComment } from '../../redux/ActionCreaters';



require('../css/scratchesComponent.css');

const mapStateToProps = state => {
    return {
        profiles: state.profiles,
        scratches: state.scratches,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (scratchId, rating, author, comment) => dispatch(addComment(scratchId, rating, author, comment))
});

class ScratchesComponent extends React.Component {
    constructor(props) {
        super();

        this.state = {
            showModal: false
        }
        this.updateSelectedScratch = this.updateSelectedScratch.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        // this.onScratchSelect = this.onScratchSelect.bind(this);
    }

    //Custom functions

    updateSelectedScratch(item){
        // console.log(item)

    }
    
    onDelete(item){
        var updatedScratches = this.props.scratches.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            scratches: updatedScratches
        });
    }

    onAdd(item){
        var updatedScratches = this.props.scratches;
        updatedScratches.push(item);
        this.setState({
            scratches: updatedScratches
        })
    }
    // onScratchSelect(scratchId) {
    //     console.log('onScratchSelect envoked', scratchId)
    //     // this.setState({selectedScratchId: scratchId})
    // };
    


    render(){
        
        let Id = this.props.match.params.scratchId
        var scratchComments = this.props.comments.filter((comment) => comment.scratchId == Id)
        var scratches = this.props.scratches;
        var profiles = this.props.profiles;
        // console.log(scratches)
        var selectedScratch = scratches.filter((scratch) => scratch.id == Id)[0];
        
        return(
            <div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <ScratchWindow scratches={scratches} scratch={selectedScratch} 
                    profiles = {profiles} comments={scratchComments} 
                    addComment={this.props.addComment}></ScratchWindow>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScratchesComponent))