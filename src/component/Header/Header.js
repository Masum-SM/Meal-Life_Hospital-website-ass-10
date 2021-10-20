import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

// import useFirebse from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='logo'>Mend <span>Life</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto ">
                            <Nav.Link as={HashLink} to="/home#home" className='nav-anchor'>Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services#services" className='nav-anchor'>Services</Nav.Link>

                            <Nav.Link as={HashLink} to="/doctors" className='nav-anchor'>Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/about" className='nav-anchor'>About Us</Nav.Link>
                            {
                                user?.email ?
                                    <Nav.Link as={Link} to="/login"> <button className='inout-btn' onClick={logOut}>Log Out
                                    </button> <small></small> <Navbar.Text className='signed-user'>
                                            Signed in as: {user?.displayName}
                                        </Navbar.Text> </Nav.Link>
                                    :
                                    <Nav.Link as={HashLink} className='inout-btn' to="/login">Log In</Nav.Link>

                            }



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;