import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebse from '../../hooks/useFirebase';


import './Login.css'

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(location.state?.from)
    const redirect_uri = location.state?.from || '/home';

    // const reloade = () => {
    //     window.location.reload()
    //     processLogedIn()

    // }

    const { signInWithGoogle, processLogedIn, handleEmailChange, handlePasswordChange, handleRegistration, setError, setUser, setIsLoading, error } = useAuth()
    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const handleProcessLogIn = (e) => {
        e.preventDefault()

        processLogedIn()

            .then(result => {
                const user = result?.user;
                setError('')
                console.log(user)
                setUser(user);
                history.push('/home')


                window.location.reload()


            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(true))

    }
    return (
        <div className='login row'>
            <div className="col-12 col-lg-6 login-body">
                <h1>Mend Life Hospital</h1>
                <p>Welcome to Mend Life Hospital</p>
                <form onSubmit={handleProcessLogIn}>
                    <input className='email log-input' onBlur={handleEmailChange} type="email" name="" id="" placeholder='Email ' /> <br />
                    <input className='password log-input' onBlur={handlePasswordChange} type="password" name="" id="" placeholder='Password' /><br />
                    <div className='text-danger'>{error}</div>
                    <button className='log-btn' type='submit' onClick={handleProcessLogIn}>Log In</button>

                </form>
                <br />
                <p>------------ OR ------------</p>
                <button className='log-btn' onClick={handleGoogleLogIn} >Sign In With Google</button><br /><br />

                <p>New User? <Link to='/register' className='log-option'>Create Account</Link></p>
            </div>






        </div>
    );
};

export default Login;