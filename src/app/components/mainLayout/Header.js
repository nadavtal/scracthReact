import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Container,
     Row, Col, Jumbotron, Button, Label } from 'reactstrap';
    
import { NavLink } from 'react-router-dom';
// import Modal  from './ModalComponent';
import withRouter from 'react-router-dom/withRouter';

//import components
import Clickable from '../genericComponents/Clickable';
import SignUpModal from '../modals&forms/SignUpModal';

//import actions

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
                    <Container >
                        <Row>
                            <Col sm={6}>
                                <h1>SCRATCH</h1>
                                <p>Connect by your personal scracthes</p>
                            </Col>
                            <Col sm={6}>
                                <Clickable onClick={() => this.setState({showModal: true})}>
                                    <h1 className="signUpButton" >Sign up</h1>
                                </Clickable>
                            </Col>

                        </Row>
                {this.state.showModal && <SignUpModal addProfile={this.props.addProfile} onClose={() => this.setState({showModal: false})}></SignUpModal>}
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Header 



