import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Modal  from './ModalComponent';
import withRouter from 'react-router-dom/withRouter';

// console.log(Modal)

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
        const modal = this.state.showModal ? (
            <Modal>
              <div className="modal">
                <div>
                  With a portal, we can render content into a different
                  part of the DOM, as if it were any other React child.
                </div>
                This is being rendered inside the #modal-container div.
                <button onClick={this.handleHide}>Hide modal</button>
              </div>
            </Modal>
          ) : null;
        return(
            <div>
                <Jumbotron>
                    <div className="container">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.handleShow}><span className=""></span> Login</Button>
                        </NavItem>
                    </Nav>
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>SCRATCH</h1>
                                <p>Connect by your personal scracthes</p>
                            </div>
                        </div>
                    </div>
                    {modal}
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



