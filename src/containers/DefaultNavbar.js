import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import config from '../config'


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Walmart</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href={config.BASE_PATH + '/account'}>Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={config.BASE_PATH + '/cart'}>Cart</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Username</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
