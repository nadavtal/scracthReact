import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const styles = {
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
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
class Modal extends Component {
    constructor(props){
        super(props);
        console.log(props)
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
        this.props.addProfile(values.firstName, values.lastName, values.password, values.userName, values.email, values.gender)
    }
    _renderModal() {
        return (
            <div style={styles.background} onClick={this.clickedBackground}>
                <div style={styles.container} onClick={e=> e.stopPropagation()}>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Sign up</h3>
                        </div>
                        <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                    />
                            </Col>
                        </Row>
                        
                        <Row className="form-group">
                            <Col md={{size: 3, offset: 1}}>
                                <Control.select model=".gender" name="gender"
                                validators={{
                                    required
                                }} >                                        
                                    <option>Male</option>
                                    <option>Female</option>
                                    
                                </Control.select>
                                <Errors
                                    className="text-danger"
                                    model=".gender"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        
                                    }} />
                            </Col>
                           
                            <Col md={{size: 3, offset: 1}}>
                                <Button type="submit" color="primary">
                                    Sign up
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal))