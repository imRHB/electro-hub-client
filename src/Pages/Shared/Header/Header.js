import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { FaSignOutAlt } from "react-icons/fa";
import useAuth from '../../../Hook/useAuth';


const pages = [
    {
        pageTitle: "Home",
        pageLink: "/home"
    },
    {
        pageTitle: "Shop",
        pageLink: "/shop"
    },
    {
        pageTitle: "About",
        pageLink: "/about"
    },
    {
        pageTitle: "Contact",
        pageLink: "/contact"
    }
];


const Header = () => {
    const { user, logOut } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut(location, navigate);
    }
    return (
        <Navbar collapseOnSelect className={`${styles.navbarBg}`} bg="" variant="light" sticky="top" expand="lg" >
            <Container>
                <Navbar.Brand className={`me-3 ${styles.navBrand}`}>
                    <NavLink to="/home">
                        <img className="img-fluid w-75" src="https://i.ibb.co/jv7BsTW/electrologo2.png" alt="" />
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



                    </Nav>
                    <Nav>
                        {
                            user?.email ? (
                                <>
                                    <NavLink className="me-3 text-decoration-none text-white" to="/dashboard">Dashboard</NavLink>
                                    <small className="text-white mx-auto pe-3 pt-1">{user?.displayName}</small>
                                    <Button
                                        onClick={handleLogOut}
                                        className="rounded-pill px-4 border-0" size="sm" variant="danger" >
                                        <FaSignOutAlt className="me-2" />
                                        Log Out
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <NavLink className="mx-2 text-decoration-none text-white" to="/register">Register</NavLink>
                                    <NavLink className="mx-2 text-decoration-none text-white" to="/login">Login</NavLink>
                                </>
                            )

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;