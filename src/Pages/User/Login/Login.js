import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import styles from './Login.module.css';

const Login = () => {
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
    const githubIcon = <FontAwesomeIcon icon={faGithub} />;

    const { user, signInWithGoogle, signInUsingGithub, logOut } = useAuth();

    return (
        <div className="my-5">
            <div className={`${'p-5 shadow-lg rounded-3 mx-auto'} ${styles.customWidth}`}>
                {
                    !user?.email && <Form>
                        <h3 className="text-primary mb-5">Login as an existing user</h3>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                }

                {
                    !user?.email && <div>
                        <div>
                            <p className="text-center my-3">or</p>
                        </div>

                        <div className="text-center fs-3 my-4">
                            <p onClick={signInWithGoogle} className="bg-light rounded-3 fa-icon">{googleIcon}</p>
                            <p onClick={signInUsingGithub} className="bg-light rounded-3 fa-icon">{githubIcon}</p>
                        </div>
                    </div>
                }

                {
                    user?.email && <div className="text-center fs-3 my-5">
                        <img src={user.photoURL} style={{ width: '64px' }} alt="" />
                        <p className="fs-3 my-4 fw-bold text-success">{user.displayName} <span className="fs-5 fw-light text-dark"><small>(curresnt user)</small></span></p>
                        <button onClick={logOut} className="btn btn-outline-success">Logout</button>
                    </div>
                }

                {
                    !user?.email && <div className="fs-6">
                        <p className="">Forget password? <Link className={`{${styles.defLink}}`} to="/reset-password">Reset password</Link>.</p>
                        <p className="">New user? <Link className={`${styles.defLink}`} to="/register">Registration</Link> is free and easy.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;