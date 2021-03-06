import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './register.css';

const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const {createAccountWithEmailPassword,auth,updateNewName, setIsLoading, setUser, verifyEmail, error,setError} = useAuth();

    // method to set name during new registration 
    const setUserName = () =>{
        updateNewName(auth.currentUser, {
            displayName: name
          })
          .then((result)=>{})
          .catch(error=>setError(error.message))
          .finally(()=>setIsLoading(false))
    }


    // registration method described 
    const handleRegistration = (e) => {
        e.preventDefault();
        setIsLoading(true)
        
        // validate the input email address 
        if (!/(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})/.test(email)) {
            setError("Please Input a valid email address");
            return;
        }else{
            setError("");
        }

        // validate the password 
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password need atleast two uppercase letters.');
            return;
        }else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password need atleast  one special case letter.');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Password need atleast  two digits.');
            return;
        }
        else if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
            setError('Password need atleast  three lowercase letters.');
            return;
        }else{
            setError('');
        }

        // complete all functionality to create new user 
        createAccountWithEmailPassword(email, password)
        .then(result=>{
            setUser(result.user);
            setError('');
            setUserName();
            verifyEmail();
            history.push('/home');
            window.location.reload();
        })
        .catch(error=>setError(error.message))
        .finally(()=>{
            setIsLoading(false);
        })
        
    }
    return (
        <div className="register-container mt-5" >
            <h2 className="text-center">Registration From</h2>
            <form  className="login-form mx-auto" onSubmit={handleRegistration}>
                <label htmlFor="name">Full Name: </label> <br />
                <input onBlur={(e)=>setName(e.target.value)} type="text" name="name" placeholder="write your full name" id="registration-name"  required/><br />
                <label htmlFor="email">Email: </label> <br />
                <input onBlur={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="write your email" id="registration-email" required/><br />
                <label htmlFor="password">Password: </label><br />
                <input onBlur={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="write your password" id="password" required/><br />
                <p className="text-danger text-center">{error}</p>
                
                <button className="btn-login border-0 d-block mx-auto my-4 px-5 py-1 rounded fs-3 fw-bold"  type="submit">Submit</button>
            </form>
            <div className="text-center">
                <p className="d-inline me-2">Already have an account?</p>
                <Link to="/login">Login here</Link>
            </div>
        </div>
    );
};

export default Register;