import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//import components
import TypesAndSubTypes from '../genericComponents/types&subTypes'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const styles = {
    background: {
        position: 'absolute',
        top: '60%',
        left: '20%',
        width: '100%',
        height: '100%',
        display: 'flex',
        JustfyContent: 'center',
        alignItems: 'center'

    },
    container: {
        backgroundColor: 'black',
        borderRadius: 10,
        boxShadow: '0 0 10px #00000088',
        width: 650,
        height: 'auto',
        color: 'white',
        padding: 50
    }
}

// const mapStateToProps = state => {
//     return {
//         scratchTypes: state.scratchTypes,
//         scratchSubTypes: state.scratchSubTypes
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     addScratch: (header, desc, type, subtype) => dispatch(addScratch(header, desc, type, subtype))
// });


class AddScratchModal extends Component {
    constructor(props){
        super(props);
        console.log('AddScratchModal', props)
        this.element = document.createElement('div')
        this.modalRoot = document.getElementById('modal-root');
        this.modalRoot.appendChild(this.element)
        this.clickedBackground = this.clickedBackground.bind(this);
        this.keyup = this.keyup.bind(this)
        this._renderModal = this._renderModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('keyup', this.keyup, false)
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.keyup, false)
        this.modalRoot.removeChild(this.element)
    }

    keyup(e) {
        if((e.key == 'Escape')) {
            // alert('here')
            this.props.onClose()
        }
    }

    clickedBackground() {
        // console.log(this.props)
        // alert('here')
        this.props.onClose()
    }

    handleSubmit(values) {
        console.log('new profile values',values)
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.addScratch(values.scratchHeader, values.scratchDesc, values.types, values.subTypes)
    }
    _renderModal() {
        var types = this.props.types;
        var subTypes = this.props.subTypes;
        
        console.log('types', types)
        console.log('subTypes', subTypes)

    
        
        console.log(types)
        
        
        return (
            <div style={styles.background} onClick={this.clickedBackground}>
                <div style={styles.container} onClick={e=> e.stopPropagation()}>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Add scratch</h3>
                        </div>
                        <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="scratchHeader" md={2}>Header</Label>
                            <Col md={10}>
                                <Control.text model=".scratchHeader" id="scratchHeader" name="scratchHeader"
                                    placeholder="give your scratch a title"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(40)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".scratchHeader"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 40 characters or less'
                                    }}
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="scratchDesc" md={2}>Detail</Label>
                            <Col md={10}>
                                <Control.textarea model=".scratchDesc" id="scratchDesc" name="scratchDesc"
                                    placeholder="Describe your scratch here"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(200)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".scratchDesc"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 200 characters or less'
                                    }}
                                    />
                            </Col>
                        </Row>
                        
                        <TypesAndSubTypes types={types} subTypes={subTypes} />
                        <Row>
                            <Col md={{size: 2, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Add scratch
                                </Button>
                            </Col>
                        </Row> 
                    </LocalForm>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    render() {
        return ReactDOM.createPortal(this._renderModal(), this.element)
    }

    
}

export default AddScratchModal