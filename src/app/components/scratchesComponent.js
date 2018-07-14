var React = require('react');
var ReactDOM = require('react-dom');
import { Link } from 'react-router';
import  AppNavbar  from './appNavBar';
import ScratchWindow from './ScratchWindow';
import Scratch from './scratch';
var AddItem = require('./addItem');
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
    
    }

    // const ScractWithId = ({match})
    

    onScratchSelect(scratchId) {
        console.log(scratchId)
        // this.setState({selectedScratchId: scratchId})
    };
    //getInitialState
    render(){
        var scratches = this.state.scratches;
        let Id = this.props.params.scratchId
        // console.log(Id)
        var selectedScratch = scratches.filter((scratch) => scratch.id == Id)[0];
        console.log(COMMENTS)
        var comments = COMMENTS.filter((comment) => comment.scratchId == Id)
        console.log(comments)
        comments = comments.map(function(comment){
            console.log(comment)
            return(<div key={comment.id} >
                    <Link to={`/profiles/`}>
                        <div className="row comment">
                            <div className="col-9 ">
                                {comment.comment}
                            </div>
                            <div className="col-3">
                                {comment.author}
                            </div>
                        </div>
                        <br/>
                    </Link>
                </div>)
        }.bind(this));
        
        scratches = scratches.map(function(scratch){
            // console.log(URL.searchParams.get(scratchId))// console.log(scratch)
            return(<div key={scratch.id} onClick={() => this.onScratchSelect(scratch.id)}>
                    <Link to={`/scratches/${scratch.id}`}>
                        <Scratch key={scratch.id} scratch={scratch} onDelete={this.onDelete} />
                    </Link>
                    </div>)
        }.bind(this));
        return(
            <div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <ScratchWindow scratches={this.state.scratches} scratch={selectedScratch} 
                    profiles = {this.state.profiles} comments={comments}></ScratchWindow>
                </div>    
                <div className="col-12 col-md-4 ">
                    <button>Male</button>
                    <button>Female</button>
                    <div >
                        <ul className="scratchList">{scratches}</ul>
                        <AddItem onAdd={this.onAdd} />
                    </div>
                </div>
            </div>
            <div className="row commentsSection">
                 {comments}
            </div>
        </div>
        );
    } //render

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

};

