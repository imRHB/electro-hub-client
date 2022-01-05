import React, { useState } from 'react';
import styles from './Login.module.css';
import img1 from './img/img-login.svg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { Spinner } from 'react-bootstrap';
const Login = () => {

    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useNavigate();
    const { user, loginUser, signInWithGogle, isLoading, authError } = useAuth();
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
        signInWithGogle(location, history);
    }
    return (
        <div className={`${styles.login}`}>
            <div className={`${styles.loginContent}`}>
                <div className={`${styles.loginImg}`}>
                    <img src={img1} alt="" />
                </div>

                <div className={`${styles.loginForms}`}>

                    <form onSubmit={handleLoginSubmit} className={`${styles.loginRegister}`} id="login-in">
                        <h1 className={`${styles.loginTitle}`}>Please Login</h1>
                        {isLoading && <Spinner animation="border" />}


                        <div className={`${styles.loginBox}`}>

                            <input type="text"
                                onChange={handleOnChange}
                                placeholder="Email" className={`${styles.loginInput}`} />
                        </div>

                        <div className={`${styles.loginBox}`}>

                            <input type="password"
                                onChange={handleOnChange}
                                placeholder="Password" className={`${styles.loginInput}`} />
                        </div>

                        <NavLink to="/register" className={`${styles.loginForgot}`}>New User?Please Register</NavLink>

                        <button type="button" className={`${'btn btn-primary'}`}>Login</button>
                        <br />
                        <button onClick={handleGoogleSignIn} type="button" className={`${'btn btn-primary mt-2'}`}>Google SignIn</button>


                    </form>


                    {user?.email && <div class="alert alert-primary" role="alert">
                        LogIn Successfully
                    </div>}
                    {authError && <div class="alert alert-danger" role="alert">
                        {authError}
                    </div>}

                </div>
            </div>
        </div>
    );
};

export default Login;