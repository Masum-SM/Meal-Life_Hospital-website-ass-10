import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebse from '../../hooks/useFirebase';


import './Login.css'

const Login = () => {
    const { signInWithGoogle, processLogedIn, handleEmailChange, handlePasswordChange, handleRegistration } = useAuth()
    return (
        <div className='login row'>
            <div className="col-12 col-lg-6 login-body">
                <h1>Meal Life Hospital</h1>
                <p>Welcome to Meal Life Hospital</p>
                <form onSubmit={handleRegistration}>
                    <input className='email' onBlur={handleEmailChange} type="email" name="" id="" placeholder='Email' /> <br />
                    <input className='password' onBlur={handlePasswordChange} type="password" name="" id="" placeholder='Password' /><br />
                    <button type='submit' onClick={processLogedIn}>Log In</button>

                </form>
                <br />
                <p>------------ OR ------------</p>
                <button onClick={signInWithGoogle} >Sign In With Google</button><br /><br />

                <p>New User? <Link to='/register'>Create Account</Link></p>
            </div>






        </div>
    );
};

export default Login;