import React from 'react';

const Register = () => {
    return (
        <>
            <div className={`${styles.login}`}>
                <div className={`${styles.loginContent}`}>
                    <div className={`${styles.loginImg}`}>
                        <img src={img1} alt="" />
                    </div>

                    <div className={`${styles.loginForms}`}>

                        <form action="" className={`${styles.loginRegister}`} id="login-in">
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

                                <input type="text" placeholder="Name" className={`${styles.loginInput}`} />
                            </div>
                            <div className={`${styles.loginBox}`}>

                                <input type="text" placeholder="Email" className={`${styles.loginInput}`} />
                            </div>

                            <div className={`${styles.loginBox}`}>

                                <input type="password" placeholder="Password" className={`${styles.loginInput}`} />
                            </div>
                            <div className={`${styles.loginBox}`}>

                                <input type="password" placeholder="Re-type your Password" className={`${styles.loginInput}`} />
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