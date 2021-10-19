import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
// import useFirebse from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, hanldeUserName, error } = useAuth()
    return (
        <div className='register-form row'>
            <div className="col-12 col-lg-12 register-body">
                <h2>Welcome to Meal Life Hospital</h2>
                <h1>Create Account</h1>
                <form onSubmit={handleRegistration}>
                    <input onBlur={hanldeUserName} className='log-input' type="text" name="" id="" placeholder='User Name' /><br />
                    <input onBlur={handleEmailChange} className='log-input' type="email" name="" id="" placeholder='Email' required /><br />
                    <input onBlur={handlePasswordChange} className='log-input' type="password" name="" id="" placeholder='Password' required /><br />
                    <div className='text-danger'>{error}</div>

                    <button className='log-btn' type='submit'>Registration</button>
                    {/* <input type="submit" onClick={handleRegistration} value="Registration" /> */}
                </form>

                <p>Already have an account?<Link to='/login' className='log-option'>Log In</Link></p>
                <div>----------Or----------</div>
                <button className='log-btn'>Google Sign In</button>
            </div>

        </div>
    );
};

export default Register;