import React, { useState } from 'react';
import styles from './Register.module.css';
import img1 from './img/img-login.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>
            <div className={`${styles.login}`}>
                <div className={`${styles.loginContent}`}>
                    <div className={`${styles.loginImg}`}>
                        <img src={img1} alt="" />
                    </div>

                    <div className={`${styles.loginForms}`}>

                        <form onSubmit={handleLoginSubmit} className={`${styles.loginRegister}`} id="login-in">
                            <h1 className={`${styles.loginTitle}`}>Please Register</h1>

                            {/* 
                              {user?.email &&
                    [

                        'success',

                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            User created {variant}successfully!
                        </Alert>
                    ))
                }

                {authError &&
                    [

                        'danger',

                    ].map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            {authError}
                        </Alert>
                    ))
                }

                {!isLoading && <form onSubmit={handleLoginSubmit}>
                             */}



                            <div className={`${styles.loginBox}`}>

                                <input type="text" placeholder="Name" onChange={handleOnBlur} className={`${styles.loginInput}`} />
                            </div>
                            <div className={`${styles.loginBox}`}>

                                <input type="text" placeholder="Email" onChange={handleOnBlur} className={`${styles.loginInput}`} />
                            </div>

                            <div className={`${styles.loginBox}`}>

                                <input type="password" placeholder="Password" onChange={handleOnBlur} className={`${styles.loginInput}`} />
                            </div>
                            <div className={`${styles.loginBox}`}>

                                <input type="password" placeholder="Re-type your Password" onChange={handleOnBlur} className={`${styles.loginInput}`} />
                            </div>

                            <NavLink to="/login" className={`${styles.loginForgot}`}>Already have an Account?Please Login</NavLink>

                            <button type="button" className={`${'btn btn-primary'}`}>Register</button>


                        </form>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;