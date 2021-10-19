import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h1>Register: Create Account</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Email' /><br />
                    <input type="password" name="" id="" placeholder='Password' /><br />
                    <small>Re-enter Password</small><br />
                    <input type="password" name="" placeholder='Re-enter Password' id="" /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account?<Link to='/login'>Log In</Link></p>
                <div>----------Or----------</div>
                <button className='cart-btn'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;