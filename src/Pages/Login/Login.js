import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
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
                <img className={`${styles.wave}`} src={img1} alt="" />
                <div className={`${styles.loginContainer}`}>
                    <div className={`${styles.loginImg}`}>
                        <img src={img3} alt="" />
                    </div>
                    <div className={`${styles.loginContent}`}>
                        <form onSubmit={handleLoginSubmit}>
                            <img src={img2} alt="" />
                            <h2 className={`${styles.title}`}>Welcome</h2>
                            {isLoading && <Spinner animation="border" />}
                            <div className={`${styles.inputDiv} ${styles.one}`}>
                                <div className={`${styles.i} ${styles.insideDiv}`}>
                                    <i className={`${styles.icon} fas fa-user`}></i>
                                </div>
                                <div className={`${styles.div}`}>
                                    <h5>Email</h5>
                                    <input type="email" className={`${styles.input}`} name="email" onChange={handleOnChange} />
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
                            <div className={`${styles.inputDiv} ${styles.pass}`}>
                                <div className={`${styles.i}`}>
                                    <i className={`${styles.icon} fas fa-lock`}></i>
                                </div>
                                <div className={`${styles.div}`}>
                                    <h5>Password</h5>
                                    <input type="password" className={`${styles.input}`} name="password" onChange={handleOnChange} />
                                </div>
                            </div>
                            <NavLink className={`${styles.forget}`} to="/register">New User?Please Register</NavLink>
                            <input type="submit" className={`${styles.submitBtn}`} value="Login" />
                            <br />

                        </form>
                        <input onClick={handleGoogleSignIn} type="submit" className={`${styles.submitBtn}`} value="Google Sign In" />

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