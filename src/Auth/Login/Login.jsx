import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="login-container">
                <div className="welcome-message">
                    <div className="logo">P</div>
                    <h2>Effortless Attendance, Enhanced Integrity</h2>
                    <h1>Welcome to Proximity</h1>
                    <p>Join the future of attendance management. Sign up now to experience seamless and secure attendance tracking with Proximity.</p>
                    <button className="logo-button">Click Me</button>
                </div>
                <div className="login-form">
                    <h2>Welcome Back to Proximity!</h2>
                    <p>Ready to mark your presence? Log in to continue.</p>
                    <form>
                        <div className="input-group">
                            <FaEnvelope />
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="input-group">
                            <FaLock />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;




