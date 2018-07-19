import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class AddCommentForm extends Component {
  

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.gandleBlur = this.handleBlur.bind(this)
    }

   

    handleSubmit(values) {
        console.log('add comment from values', values)
        this.props.addComment(this.props.scratchId, 1, "nadav", values.comment);
        // event.preventDefault();

    }

  render() {
    
    return (
    <div className="row row-content">
        <div className="col-12">
            {/* <h5>Add comment</h5> */}
        </div>
        <div className="col-12 col-md-9">
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <Row className="form-group">
            {/* <Label htmlFor="comment" md={2}>Add comment</Label> */}
            <Col md={10}>
                <Control.text model=".comment" id="comment" name="comment"
                    placeholder="Write comment here"
                    className="form-control"
                    validators={{
                        required, minLength: minLength(3), maxLength: maxLength(100)
                    }}
                        />
                <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 100 characters or less'
                    }}
                    />
            </Col>
            <Col md={{size: 1, offset: 1}}>
                <Button type="submit" color="primary">
                    Add comment
                </Button>
            </Col>
        </Row>
        
        </LocalForm>
        </div>
    </div>


    )
  }

}            