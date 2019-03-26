import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CustomNavbar.css'; 

export default class CustomNavbar extends Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" fixed="top"> 
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/assets/invLogo.png"
            width="50"
            height="50"
            className="d-inline-block align-center"
          />
          {'Icelandic nouns and verbs'}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav id="contactLinks">
            <Nav.Link eventKey={1} href="https://www.facebook.com/IcelandicNounsAndVerbs/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook-f' ]} color="white" id="icon" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="mailto:icelandic.nouns.verbs@gmail.com">
                <FontAwesomeIcon icon='at' color='white' id="icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}