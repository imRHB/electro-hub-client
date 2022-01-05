import React from 'react';

const Login = () => {
    return (
        <div className={`${styles.login}`}>
            <div className={`${styles.loginContent}`}>
                <div className={`${styles.loginImg}`}>
                    <img src={img1} alt="" />
                </div>

                <div className={`${styles.loginForms}`}>

                    <form action="" className={`${styles.loginRegister}`} id="login-in">
                        <h1 className={`${styles.loginTitle}`}>Please Login</h1>
                        {/* {isLoading && <Spinner animation="border" />} */}


                        <div className={`${styles.loginBox}`}>

                            <input type="text" placeholder="Email" className={`${styles.loginInput}`} />
                        </div>

                        <div className={`${styles.loginBox}`}>

                            <input type="password" placeholder="Password" className={`${styles.loginInput}`} />
                        </div>

                        <NavLink to="/register" className={`${styles.loginForgot}`}>New User?Please Register</NavLink>

                        <button type="button" className={`${'btn btn-primary'}`}>Login</button>
                        <br />
                        <button type="button" className={`${'btn btn-primary mt-2'}`}>Google SignIn</button>


                    </form>


                </div>
            </div>
        </div>
    );
};

export default Login;