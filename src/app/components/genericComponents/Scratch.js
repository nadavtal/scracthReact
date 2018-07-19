var React = require('react');
var ReactDom = require('react-dom');
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Proptypes from 'prop-types';
// console.log
//CSS requires


//Create Scratch component
const Scratch = (props) => {
    // console.log(props.scratch)
    let scratch = props.scratch
    // console.log('scrtach', scratch)
        return(
            <div>
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
            </div>
        );
    }
    // Scratch.propTypes = {
    //     scratch: PropTypes.object.isRequired
    // }
export default Scratch
