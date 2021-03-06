import React,  { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import './login.css';
import { IconContext } from "react-icons";
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const {SignInExistUserWithEmailPassword, signInWithGoogle, signInWithFacebook, signInWithGitHub, setIsLoading, error,setError} = useAuth();

    const registerFormHistory = useHistory();
    const location = useLocation();

    // login form method described 
    const handleLoginForm = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        setError("");
        SignInExistUserWithEmailPassword(email,password)
            .then(()=>{
                history.push(location.state?.from)
                setError("")
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsLoading(false))
    }

    // login with 3rd pary authorization method described 
    const handleLoginWithGoogle = () =>{
        setIsLoading(true);
        signInWithGoogle()
            .then(()=>{
                history.push(location.state?.from)
                setError("");
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsLoading(false))
    }
    const handleLoginWithFacebook = () =>{
        setIsLoading(true);
        signInWithFacebook()
        .then(()=>{
            history.push(location.state?.from)
            setError("");
        })
        .catch(error=>setError(error.message))
            .finally(()=>setIsLoading(false))
    }
    const handleLoginWithGitHub = () =>{
        setIsLoading(true);
        signInWithGitHub()
        .then(()=>{
            history.push(location.state?.from)
            setError("");
            window.location.reload();
        })
        .catch(error=>setError(error.message))
            .finally(()=>setIsLoading(false))
    }

    // change the login form to registration form 
    const handleRegisterToggle = () =>{
        setError("");
        registerFormHistory.push('/register');
    }
    return (
        <div className="login-container mt-5">
            <h2 className="text-center">Login From</h2>
            <form className="login-form mx-auto">
                <label htmlFor="email">Email: </label> <br />
                <input onBlur={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="write your email" id="email" /><br />
                <label htmlFor="password">Password: </label><br />
                <input onBlur={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="write your password" id="password" /><br />
                <p className="text-center text-danger mt-4">{error}</p>
                <button className="btn-login border-0 d-block mx-auto my-4 px-5 py-1 rounded fs-3 fw-bold" onClick={handleLoginForm}>Login</button>
            </form>
            <div className="text-center">
                <p className="d-inline me-2">New here?</p>
                <button onClick={handleRegisterToggle} className="border-0 text-decoration-underline bg-white text-primary">Register first</button>
            </div>
                <p className="text-center mt-4"><strong>Or login with</strong></p>
            <div className="d-flex justify-content-center mt-4">
                <button onClick={handleLoginWithGoogle} className="login-icon-btn border-0 "><IconContext.Provider value={{  size:"60", className: " global-class-name " }}><FcGoogle /></IconContext.Provider></button>
                <button onClick={handleLoginWithFacebook} className="login-icon-btn border-0 "><IconContext.Provider value={{ size:"60", color: "RoyalBlue", className: "global-class-name" }}><GrFacebook /></IconContext.Provider></button>
                <button onClick={handleLoginWithGitHub} className="login-icon-btn border-0 "><IconContext.Provider value={{ size:"60", color: "black", className: "global-class-name" }}><BsGithub /></IconContext.Provider></button>
            </div>
        </div>
    );
};

export default Login;