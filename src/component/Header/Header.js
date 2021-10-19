import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

// import useFirebse from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useAuth()
    // const { user, logOut } = useFirebse();
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Meal Life</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>

                            <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                            {
                                user?.email ?
                                    <Nav.Link as={Link} to="/login"> <button onClick={logOut}>Log Out
                                    </button> <small></small> <Navbar.Text>
                                            Signed in as: {user?.displayName}
                                        </Navbar.Text> </Nav.Link>
                                    :
                                    <Nav.Link as={HashLink} to="/login">Log In</Nav.Link>

                            }



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;