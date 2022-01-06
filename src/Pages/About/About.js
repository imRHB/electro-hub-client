import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import styles from './About.module.css';

const teamMembers = [
    {
        designation: "Founder",
        name: "Edward Nash",
        image: "https://i.ibb.co/3dnRtNV/team-1-1.jpg"
    },
    {
        designation: "Manager",
        name: "Roxie Palmer",
        image: "https://i.ibb.co/0jCBbpj/team-1-4.jpg"
    },
    {
        designation: "CEO",
        name: "Hellen Lowe",
        image: "https://i.ibb.co/FXSB4Ss/team-1-3.jpg"
    }
]

const About = () => {
    return (
        <div>
            <Header />
            <div>
                <div className={`d-flex align-items-center justify-content-center ${styles.aboutBanner}`}>
                    <h1 className=" text-uppercase text-white fw-bold">About Us</h1>
                </div>
                <div className={`${styles.membersSection}`}>
                    <Container>
                        <div className="mx-auto">
                            <div className="mx-auto">
                                <h2 className={`text-center mx-auto text-uppercase py-5 fw-bold ${styles.title}`}>Team Members</h2>
                            </div>
                            <Row xs={1} md={2} lg={3} className="pb-5 mx-auto">
                                {
                                    teamMembers?.map((member, m_id) => <Col key={m_id} className="mx-auto my-3">
                                        <div className="mx-auto shadow-sm p-3 bg-white  rounded-3">
                                            <img className="img-fluid w-100 mx-auto pb-3" src={member?.image} alt="" />
                                            <h5 className="text-secondary">{member?.designation}</h5>
                                            <h3 className={`${styles.memberName}`}>{member?.name}</h3>
                                        </div>
                                    </Col>)
                                }
                            </Row>
                        </div>
                    </Container>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;