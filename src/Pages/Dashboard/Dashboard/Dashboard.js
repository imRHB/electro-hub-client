import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPlus, faSignOutAlt, faTh, faThLarge, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import styles from './Dashboard.module.css';

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const dashboardIcon = <FontAwesomeIcon icon={faTh} />;
const reviewIcon = <FontAwesomeIcon icon={faCommentAlt} />;
const listIcon = <FontAwesomeIcon icon={faThList} />;
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const userPlus = <FontAwesomeIcon icon={faUserPlus} />;
const serviceIcon = <FontAwesomeIcon icon={faThLarge} />;
const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

const Dashboard = () => {
    const { user, logOut, admin } = useAuth();
    console.log(admin);

    return (
        <div>
            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                    <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-3 g-lg-4">
                        <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                            <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                <Nav variant="light" className={`${'flex-column'} ${styles.dashNav}`}>
                                    <>
                                        <Link to="/home"><span className="me-3">{homeIcon}</span>Home</Link>

                                        {
                                            user && !admin && <>
                                                <Link to="/dashboard"><span className="me-3">{dashboardIcon}</span>Dashboard</Link>
                                                <Link to="my-order"><span className="me-3">{listIcon}</span>My Order</Link>

                                                <Link to="add-review"><span className="me-3">{reviewIcon}</span>Add Review</Link>
                                            </>
                                        }

                                        {
                                            admin && <>
                                                <Link to="manage-product"><span className="me-3">{serviceIcon}</span>Manage Product</Link>
                                                <Link to="manage-order"><span className="me-3">{serviceIcon}</span>Manage Order</Link>
                                                <Link to="add-product"><span className="me-3">{plusIcon}</span>Add Product</Link>
                                                <Link to="make-admin"><span className="me-3">{userPlus}</span>Make Admin</Link>
                                            </>
                                        }

                                        <Link to='/login' onClick={logOut}><span className="me-3">{logoutIcon}</span>Logout</Link>
                                    </>
                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={9} lg={9} xl={9}>
                            <div className="bg-light rounded-3 px-2 py-4 border">

                                <Outlet />
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Dashboard;