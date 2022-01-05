import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img1 from './img/img-login.svg';
import styles from './Register.module.css';


const Register = () => {
    return (
        <div className={`${styles.login}`}>
            <div className={`${styles.loginContent}`}>
                <div className={`${styles.loginImg}`}>
                    <img src={img1} alt="" />
                </div>

                <div className={`${styles.loginForms}`}>

                    <form action="" className={`${styles.loginRegister}`} id="login-in">
                        <h1 className={`${styles.loginTitle}`}>Create Account</h1>

                        <div className={`${styles.loginBox}`}>
                            <i className='bx bx-user login__icon'></i>
                            <input type="text" placeholder="Username" className={`${styles.loginInput}`} />
                        </div>

                        <div className={`${styles.loginBox}`}>
                            {/* <i className='bx bx-at login__icon'></i> */}
                            <i className={`${'bx bx-at'} ${styles.loginIcon}`}></i>
                            <input type="text" placeholder="Email" className={`${styles.loginInput}`} />
                        </div>

                        <div className={`${styles.loginBox}`}>
                            {/* <i className='bx bx-lock-alt login__icon'></i> */}
                            <i className={`${'bx bx-lock-alt'} ${styles.loginIcon}`}></i>
                            <input type="password" placeholder="Password" className={`${styles.loginInput}`} />
                        </div>

                        <NavLink to="/login" className={`${styles.loginForget}`}>Already Register?Please LogIn</NavLink>
                        <Link to="#" className={`${styles.loginButton}`}>Register</Link>


                    </form>


                </div>
            </div>
        </div>
    );
};

export default Register;