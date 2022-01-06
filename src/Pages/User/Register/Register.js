import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import initializeFirebase from "../../../Firebase/firebase.config";
import useAuth from "../../../Hook/useAuth";
import styles from './Register.module.css';

initializeFirebase();

const auth = getAuth();

const Register = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const { user, signout } = useAuth();

    const handleUserEmail = event => {
        setUserEmail(event.target.value);
    }

    const handleUserPassword = event => {
        setUserPassword(event.target.value);
    }

    const handleSignUp = event => {
        event.preventDefault();
        console.log(userEmail, userPassword);

        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then(res => {
                console.log('logged in', res.user);
            });
    };

    return (
        <div className="my-5">
            <div className={`${'p-5 shadow-lg rounded-3 mx-auto'} ${styles.customWidth}`}>
                {
                    !user?.email && <Form onSubmit={handleSignUp}>
                        <h3 className="text-primary mb-5">Register as a new user</h3>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleUserEmail} type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleUserPassword} type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                }

                {
                    !user?.email && <div className="fs-6 mt-3">
                        <p className="">Already have an account? <Link className={`${styles.defLink}`} to="/login">Login</Link> is very simple.</p>
                    </div>
                }

                {
                    user?.email && user?.email && <div className="text-center fs-3 my-5">
                        <img src={user.photoURL} style={{ width: '64px' }} alt="" />
                        <p className="fs-3 my-4 fw-bold text-success">{user.displayName} <span className="fs-5 fw-light text-dark"><small>(curresnt user)</small></span></p>
                        <button onClick={signout} className="btn btn-outline-success">Logout</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Register;