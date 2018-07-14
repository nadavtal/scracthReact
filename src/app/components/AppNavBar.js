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

export default class AppNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
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
              <Nav className="ml-auto" navbar>
                
                <NavItem>
                  <NavLink className="nav-link" href="/scratches/0">scratches </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink className="nav-link" href="/profiles/0">profiles </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/contact">contact </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" href="/contact">login </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}


