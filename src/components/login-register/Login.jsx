import React , {useState} from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useUserAuth } from '../../context/UserAuthContext'

import Helmet from '../helmet/Helmet'
import Button from '../button/Button'

import GoogleButton from "react-google-button";
// import FacebookLogin from "react-facebook-login";
import { toast } from 'react-toastify';


import './login-register.scss'

const Login = () => {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const { logIn, googleSignIn, facebookSignIn } = useUserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setError('');
        try {
            await logIn(email, password);
            navigate('/')
        } catch (error) {
            toast.error(error.message)
            // setError(error.message)
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    };

    // const handleFacebookSignIn = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await facebookSignIn();
    //         navigate('/')
    //     } catch (error) {
    //         setError(error.message)
    //     }
    // };

    // const responseFacebook = (response) => {
    //     console.log(response);
    // };

    return (
        <Helmet title='Đăng nhập'>
            <div className='login'>
                <div className='login__name'>Login</div>
                <form className='form' onSubmit={handleSubmit}>
                    {/* Form group email */}
                    <div className='form__group'>
                        <input 
                            type='email'
                            placeholder='Enter your email...'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* Form group password */}
                    <div className='form__group'>
                        <input 
                            type='password'
                            placeholder='Enter your password...'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button size='sm'>Đăng nhập</Button>

                    {/* Google btn */}
                    <div className='google__btn' onClick={handleGoogleSignIn}>
                        <GoogleButton type='dark'/>
                    </div>

                    {/* Facebook btn
                    <div className='facebook__btn'>
                        <FacebookLogin 
                            appId="475756517477511"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            cssClass="my-facebook-button-class"
                            icon="fa-facebook"
                            onClick={handleFacebookSignIn}
                        />
                    </div> */}
                </form>
                {/* Error */}
                {/* {error && <span className='error'>{error}</span>} */}
                {/* Login register */}
                <div className='login__regis'>
                    Do you have account ? <Link to='/register'>Create account</Link>
                </div>
            </div>
        </Helmet>
    );
};

export default Login;
