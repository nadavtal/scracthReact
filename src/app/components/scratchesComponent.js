var React = require('react');
var ReactDOM = require('react-dom');
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Proptypes from 'prop-types';
//import components
import ScratchWindow from './ScratchWindow/ScratchWindow';
import ScratchListComponent from './genericComponents/ScratchListComponent';
import Scratch from './genericComponents/Scratch';
import Clickable from './genericComponents/Clickable'
import TypesAndSubTypes from './genericComponents/types&subTypes'
//import modals
import AddScratchModal from './modals&forms/AddScratchModal'


//import actions
import { addScratch } from '../../redux/ActionCreaters';
import { addComment } from '../../redux/ActionCreaters';
import { increment } from '../../redux/ActionCreaters';

// import css
require('../css/scratchesComponent.css');



const mapStateToProps = state => {
    return {
        profiles: state.profiles,
        scratches: state.scratches,
        comments: state.comments,
        scratchTypes: state.scratchTypes,
        scratchSubTypes: state.scratchSubTypes
    }
}

const mapDispatchToProps = (dispatch) => ({
    addScratch: (header, desc, type, subtype) => dispatch(addScratch(header, desc, type, subtype)),
    addComment: (scratchId, rating, author, comment) => dispatch(addComment(scratchId, rating, author, comment)),
    increment: (index) => dispatch(increment(index))
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
        console.log('scratches component props', this.props)
        let Id = this.props.match.params.scratchId
        var scratchComments = this.props.comments.filter((comment) => comment.scratchId == Id)
        var scratches = this.props.scratches;
        var profiles = this.props.profiles;
        var types = this.props.scratchTypes
        var subTypes = this.props.scratchSubTypes
        console.log('subTypes', subTypes)
        var selectedScratch = scratches.filter((scratch) => scratch.id == Id)[0];
        
        return(
            <div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <ScratchWindow scratches={scratches} scratch={selectedScratch} 
                    profiles = {profiles} comments={scratchComments} addScratch={this.props.addScratch}
                    addComment={this.props.addComment} increment={this.props.increment}></ScratchWindow>
                </div>    
                <div className="col-12 col-md-4 ">
                    <Clickable onClick={() => this.setState({showModal: true})}>
                        <h4>add scratch</h4>
                    </Clickable>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <button>Male</button>
                        <button>Female</button>
                        <TypesAndSubTypes types={types} subTypes={subTypes} />
                    </LocalForm>
                    {this.state.showModal &&<AddScratchModal addScratch={this.props.addScratch} types={types} subTypes={subTypes} onClose={() => this.setState({showModal: false})}/>}
                    <ScratchListComponent scratches={scratches}></ScratchListComponent>
                </div>
            </div>
            
        </div>
        );
    }

    
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScratchesComponent))