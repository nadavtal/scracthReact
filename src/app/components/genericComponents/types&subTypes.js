var React = require('react');
var ReactDom = require('react-dom');
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Proptypes from 'prop-types';


const required = (val) => val && val.length;
//Create Scratch component
const TypesAndSubTypes = (props) => {
  var types = props.types;
  var subTypes = props.subTypes
  types = types.map(function(type, index){
    // console.log(scratch)
    return(
            <option key={index}> {type} </option>
            
    )})



  subTypes = subTypes.map(function(type, index){
  // console.log(scratch)
  return(
          <option key={index}> {type} </option>
          
      )})
  return (
    <Row className="form-group">
       <Col md={6}>
            <Control.select model=".scratchSubType" name="scratchSubType"
            validators={{
                required
            }} >                                        
                {types}
                
            </Control.select>
            <Errors
                className="text-danger"
                model=".scratchType"
                show="touched"
                messages={{
                    required: 'Required',
                    
                }} />
        </Col>
        <Col md={6}>
            <Control.select model=".scratchSubType" name="scratchSubType"
            validators={{
                required
            }} >                                        
                {subTypes}
                
            </Control.select>
            <Errors
                className="text-danger"
                model=".scratchSubType"
                show="touched"
                messages={{
                    required: 'Required',
                    
                }} />
        </Col>
         
    </Row>
  )
}

export default TypesAndSubTypes
