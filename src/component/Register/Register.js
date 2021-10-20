import React from 'react';
import './Register.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
// import useFirebse from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const history = useHistory();
    const location = useLocation();
    console.log(location.state?.from)
    const redirect_uri = location.state?.from || '/home';

    const { handleRegistration, handleEmailChange, handlePasswordChange, hanldeUserName, error, setError, setUserName, signInWithGoogle } = useAuth()

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const controlRegistration = (e) => {
        e.preventDefault()
        handleRegistration()
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
                setUserName(user)
                history.push('/home')
                window.location.reload()


            })
    }
    return (
        <div className='register-form row'>
            <div className="col-12 col-lg-12 register-body">
                <h2>Welcome to Meal Life Hospital</h2>
                <h1>Create Account</h1>
                <form onSubmit={controlRegistration}>
                    <input onBlur={hanldeUserName} className='log-input' type="text" name="" id="" placeholder='User Name' /><br />
                    <input onBlur={handleEmailChange} className='log-input' type="email" name="" id="" placeholder='Email' required /><br />
                    <input onBlur={handlePasswordChange} className='log-input' type="password" name="" id="" placeholder='Password' required /><br />
                    <div className='text-danger'>{error}</div>

                    <button className='log-btn' type='submit'>Registration</button>
                    {/* <input type="submit" onClick={handleRegistration} value="Registration" /> */}
                </form>

                <p>Already have an account?<Link to='/login' className='log-option'>Log In</Link></p>
                <div>----------Or----------</div>
                <button onClick={handleGoogleLogIn} className='log-btn'>Google Sign In</button>
            </div>

        </div>
    );
};

export default Register;