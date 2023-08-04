import React, { useEffect, useState } from 'react';
import '../style/nav.css'

const Signup = () => {

    useEffect(() => {
        document.body.classList.add('no-scroll');

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='login'>
            <div className="form-container">
                <p className="title">Sign up</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="" 
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password-confirm"> Confirm Password</label>
                        <input 
                            type="password" 
                            name="password-confirm" 
                            id="password-confirm" 
                            placeholder="" 
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className="sign" type="submit">Sign up</button>
                </form>                
                <p className="signup">Already have an account?
                    <a rel="noopener noreferrer" href="/login">Sign In</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
