import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SideNavbar.css'; 

export default class SideNavbar extends Component {

    render() {
      return (
        <Navbar fixed="top" className="justify-content-end">
            <Nav id="sideNav" className="flex-column" as="ul">
            <NavItem as="li" href="/" >
                    <Link smooth to="/#home"><FontAwesomeIcon icon={['far', 'circle' ]} color="white" id="sideIcons" /></Link>
                </NavItem>
                <NavItem as="li" href="/" >
                    <Link smooth to="/#about"><FontAwesomeIcon icon={['far', 'circle' ]} color="white" id="sideIcons" /></Link>
                </NavItem>
                <NavItem as="li" href="/" >
                    < Link smooth to="/#features"><FontAwesomeIcon icon={['far', 'circle' ]} color="white" id="sideIcons" /></Link>
                </NavItem>
            </Nav>
        </Navbar>
      )
    }
}