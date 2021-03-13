import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from './media/logoja/necama_logo_lightblue.png';
import Routes from './Routes';


class Navigation extends React.Component {



    render() {


        return (

     
        <>
        <Navbar collapseOnSelect expand="md" variant="dark" className="customNav">
        <Navbar.Brand href="/">
        <img
            src={ logo }
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav defaultActiveKey={this.props.defaultTab}>

        <Nav.Link eventKey="/" href="/" className="customNavItem">Home</Nav.Link>
        <Nav.Link eventKey="/Releases" href="/Releases" className="customNavItem">Releases</Nav.Link>
        <Nav.Link eventKey="/Photos" href="/Photos" className="customNavItem">Photos</Nav.Link>
        <Nav.Link eventKey="/Contact" href="/Contact" className="customNavItem">Contact us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Routes/>

        </>
        )
    }
}

export default Navigation;