import React, { useEffect } from 'react';
import '../style/nav.css'

const Login = () => {

    useEffect(() => {
        document.body.classList.add('no-scroll');

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className='login'>
            <div className="form-container">
                <p className="title">Sign in</p>
                <form className="form">
                    <div className="input-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="" />
                        <div className="forgot">
                            {/* FORGOT PASSWORD IMPLEMENTATION AND REFERENCE */}
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div>
                    </div>
                    <button className="sign gradient-bar">Sign in</button>
                </form>
                <p className="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="/sign_up">Sign up</a>
                </p>
            </div>
        </div>
        
    );
};

export default Login;
            