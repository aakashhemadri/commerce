import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

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
              <NavLink href="/commerce/account">Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/commerce/cart">Cart</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Username</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
