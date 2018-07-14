var React = require('react');
var ReactDom = require('react-dom');
import { Link } from 'react-router';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
//CSS requires


//Create Scratch component
var Scratch = React.createClass({

    

    render: function(){
        // console.log(this.props.scratch);
        const scratch = this.props.scratch
        // console.log(scratch.id)
        return(
            <li>
                {/* <Link to="scratches"> */}
                    <div key={scratch.id} className="row scratchRow">
                        <div className="col-9">
                            <span className="scratchDesc">{scratch.desc}</span>
                        </div>
                        <div className="col-3">
                            <span className="scratchHeader">{scratch.header}</span>
                        </div>

                    </div>
                {/* </Link> */}
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.scratch);
    }
});

module.exports = Scratch;
