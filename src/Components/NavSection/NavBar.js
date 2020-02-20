import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css';

const NasaNavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return(
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto"><img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt=""/></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://apod.nasa.gov/apod/archivepix.html" target="blank_">APOD Archive</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/nasa/apod-api" target="blank_">APOD API</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NasaNavBar;



 