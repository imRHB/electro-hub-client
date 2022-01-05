import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import img1 from './img/wave.png';
import img2 from './img/avatar.svg';
import img3 from './img/bg.svg';
import { Spinner } from 'react-bootstrap';
import useAuth from "../../Hook/useAuth";

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <>
            <div>
                <img className="wave" src={img1} alt="" />
                <div className="login-container">
                    <div className="login-img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="login-content">
                        <form onSubmit={handleLoginSubmit}>
                            <img src={img2} alt="" />
                            <h2 >Welcome</h2>
                            {isLoading && <Spinner animation="border" />}
                            <div className="login-input-div one">
                                <div className="login-i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="login-div">
                                    <h5>Email</h5>
                                    <input type="email" name="email" onChange={handleOnChange} />
                                </div>
                            </div>
                            {/* <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">

                                    <input type="password" className="input" name="password" placeholder="password" onChange={handleOnChange} />
                                </div>
                            </div> */}
                            <div className="login-input-div pass">
                                <div className="login-i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="login-div">
                                    <h5>Password</h5>
                                    <input type="password" name="password" onChange={handleOnChange} />
                                </div>
                            </div>
                            <NavLink to="/register">New User?Please Register</NavLink>
                            <input type="submit" className="login-submit-btn" value="Login" />
                            <br />

                        </form>
                        <input onClick={handleGoogleSignIn} type="submit" className="login-" value="Google Sign In" />

                        {/* {user?.email && <div class="alert alert-primary" role="alert">
                            LogIn Successfully
                        </div>}
                        {authError && <div class="alert alert-danger" role="alert">
                            {authError}
                        </div>} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;