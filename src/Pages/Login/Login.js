import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import img1 from './img/wave.png';
import img2 from './img/avatar.svg';
import img3 from './img/bg.svg';

import { Spinner } from 'react-bootstrap';

const Login = () => {
    // const [loginData, setLoginData] = useState({});
    // const location = useLocation();
    // const history = useNavigate();
    // const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    // const handleOnChange = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     console.log(field, value);
    //     const newLoginData = { ...loginData };
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);

    // }
    // const handleLoginSubmit = e => {
    //     loginUser(loginData.email, loginData.password, location, history)
    //     e.preventDefault();
    // }
    // const { signInUsingGoogle } = useAuth();
    return (
        <>
            <div>
                <img className="wave" src={img1} alt="" />
                <div className="login-container">
                    <div className="login-img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="login-content">
                        <form onSubmit="">
                            <img src={img2} alt="" />
                            <h2 className="title">Welcome</h2>
                            {/* {isLoading && <Spinner animation="border" />} */}
                            <div className="input-div one">
                                <div className="i inside-div">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">

                                    <input type="email" className="input" name="email" placeholder="email" onChange="" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">

                                    <input type="password" className="input" name="password" placeholder="password" onChange="" />
                                </div>
                            </div>
                            <NavLink className="forget" to="/register">New User?Please Register</NavLink>
                            <input type="submit" className="submit-btn" value="Login" />
                            <br />




                        </form>
                        <input onClick="" type="submit" className="submit-btn" value="Google Sign In" />
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