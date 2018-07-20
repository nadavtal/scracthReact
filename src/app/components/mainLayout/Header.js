import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import Modal  from './ModalComponent';
import withRouter from 'react-router-dom/withRouter';

//import components
import Clickable from '../genericComponents/Clickable';
import SignUpModal from '../modals&forms/SignUpModal';

//import actions
import { addProfile } from '../../../redux/ActionCreaters';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            showModal: false

        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
    }

    toggleModal() {
        console.log('hereeeeeee')
        this.setState({
        isModalOpen: !this.state.isModalOpen
        });
    }

    handleShow() {
        this.setState({showModal: true});
        
        }
        
    handleHide() {
        this.setState({showModal: false});
        }
        
    render() {
        console.log('header props', this.props)
        return(
            <div>
                <Jumbotron>
                    <div className="container">
                    <Nav className="ml-auto" navbar>
                    <Clickable onClick={() => this.setState({showModal: true})}>
                        <h1>Sign up</h1>
                    </Clickable>
                {this.state.showModal && <SignUpModal addProfile={this.props.addProfile} onClose={() => this.setState({showModal: false})}></SignUpModal>}
                    </Nav>
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>SCRATCH</h1>
                                <p>Connect by your personal scracthes</p>
                            </div>
                            <div id='headerModal' className="col-12 col-sm-6">
                                
                            </div>
                        </div>
                    </div>
                    
                </Jumbotron>
                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    
                    </ModalBody>
                </Modal> */}
            </div>
        );
    }
}

export default Header 



