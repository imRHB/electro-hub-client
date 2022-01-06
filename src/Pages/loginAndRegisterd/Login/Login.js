import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert, Button, Form, InputGroup, Spinner } from 'react-bootstrap';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import '../Login/Login.css'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const { user, authError, loginUser, signInWithGoogle, isLoading } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <div className="background">

            <div className="container">
                <div className="login-box">
                    <div className="row">
                        <div className="col-md-6 login-left">



                            <h2> Login Hear</h2>
                            <Form onSubmit={handleLoginSubmit} className="my-5">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                        <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" />
                                    </InputGroup>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                        <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Password" />
                                    </InputGroup>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                                <Link to="/register"><Button variant="text">
                                    New User? Register Here
                                </Button></Link>
                                <hr />

                                {isLoading && <Spinner animation="border" variant="danger" />}
                                {user?.email && <Alert variant="success">
                                    User Created Successfully
                                </Alert>}
                                {authError && <Alert variant="danger">
                                    {authError}
                                </Alert>}
                            </Form>
                            <Button onClick={handleGoogleSignIn} variant="primary" >
                                Google Sign In
                            </Button>
                        </div>
                        <div className="col-md-6 login-right">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;