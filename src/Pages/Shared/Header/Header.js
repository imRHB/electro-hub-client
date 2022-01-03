import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
// import { FaSignOutAlt } from "react-icons/fa";


const pages = [
    {
        pageTitle: "Home",
        pageLink: "/home"
    },
    {
        pageTitle: "About",
        pageLink: "/about"
    },
    {
        pageTitle: "Contact",
        pageLink: "/contact"
    },
    {
        pageTitle: "",
        pageLink: ""
    },
]


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect className={`${styles.navbarBg}`} bg="" variant="light" fixed="top" expand="lg" >
                <Container>
                    <Navbar.Brand className={`me-3 ${styles.navBrand}`}>
                        <NavLink to="/home">
                            <img className="img-fluid" src="https://i.ibb.co/jv7BsTW/electrologo2.png" alt="" width="80%" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#dae2e273' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            {
                                pages?.map((page, p_id) => (
                                    <NavLink key={p_id} className="mx-2 text-decoration-none text-white" to={page?.pageLink}>{page?.pageTitle}</NavLink>
                                ))
                            }

                            {/* <NavLink className="mx-2 text-decoration-none text-white fs-5" to="/products">All Bikes</NavLink>
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" to="/about">About</NavLink>
                            <NavLink className="mx-2 text-decoration-none text-white fs-5" to="/contact">Contact</NavLink> */}

                        </Nav>
                        <Nav>
                            {/* <small className="text-white mx-auto pe-3 pt-1">{user?.displayName}</small> */}
                            <NavLink className="me-3 text-decoration-none text-white" to="/dashboard">Dashboard</NavLink>


                            <NavLink className="mx-2 text-decoration-none text-white" to="/register">Register</NavLink>
                            <NavLink className="mx-2 text-decoration-none text-white" to="/login">Login</NavLink>
                            <Button className="rounded-pill px-4 border-0" size="sm" variant="danger" >
                                {/* <FaSignOutAlt className="me-2" /> */}
                                Log Out</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;