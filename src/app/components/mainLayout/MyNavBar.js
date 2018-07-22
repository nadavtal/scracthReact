import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import LoginModal from '../modals&forms/LoginModal';



export default class MyNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showModal: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color="dark"  expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                
                <NavItem>
                  <NavLink className="nav-link" href="/scratches/0">scratches </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink className="nav-link" href="/profiles/0">profiles </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/contact">contact </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink className="nav-link" onClick={() => this.setState({showModal: true})}>login </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        {this.state.showModal && <LoginModal onClose={() => this.setState({showModal: false})}></LoginModal>}
                    
      </div>
    );
  }
}


