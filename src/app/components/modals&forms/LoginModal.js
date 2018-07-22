import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const styles = {
    background: {
        position: 'absolute',
        // backgroundColor: 'gray',
        // opacity: 0.5,
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
        position: 'relative',
        borderRadius: 10,
        boxShadow: '0 0 10px #00000088',
        width: 650,
        height: 'auto',
        color: 'white',
        padding: 50,
        left: "20%",
        
    },

    buttons: {
        padding: 10,
        border: '1px solid orange'
    }
}

class LoginModal extends Component {
    constructor(props){
        super(props);
        console.log('SignUpModal', props)
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
        console.log(this.props)
        
        
    }
    _renderModal() {
        return (
            <div style={styles.background} onClick={this.clickedBackground}>
                <div style={styles.container} onClick={e=> e.stopPropagation()}>
                    
                        <div className="col-12">
                            <h3>Login</h3>
                        </div>
                                       
                        {/* <div className="col-12 col-md-9"> */}
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="password" md={3}>Password</Label>
                                <Col md={9}>
                                    <Control.text model=".password" id="password" name="password"
                                        placeholder="password"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                            />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={3}>Email</Label>
                                <Col md={9}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                            />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required! ',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                        />
                                </Col>
                            </Row> 
                            <Row style={styles.buttons} className="form-group">
                                                           
                                <Col sm={{size: 3, offset: 1}}>
                                    <Button  type="submit" color="primary">
                                        Sign up
                                    </Button>
                                </Col>
                                <Col sm={{size: 3, offset: 1}}>
                                    <Button onClick={this.props.onClose} type="button" color="primary">
                                        Close
                                    </Button>
                                </Col>  
                            </Row>
                            
                        </LocalForm>
                        </div>
                    </div>

               
            
        )
    }

    render() {
        return ReactDOM.createPortal(this._renderModal(), this.element)
    }

    
}

export default LoginModal