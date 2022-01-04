import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

import { BsTools } from "react-icons/bs";

const NotFound = () => {
    return (
        <div>
            <Container>
                <div className={`${'text-center'} ${styles.notFound}`}>
                    <p className="fs-1">{BsTools}</p>
                    <span className="text-muted"><small>couldn't repair</small></span>
                    <h1 className="fw-bold text-danger">Error 404</h1>
                    <p className="text-muted">The requested URL was not found on this server.</p>
                    <p>Visit <Link to="/home" className={`${styles.redirUrl}`}>Home</Link> until the problem is resolved.</p>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;