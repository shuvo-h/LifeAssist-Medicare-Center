import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.init';
import { getAuth, signInWithPopup,updateProfile, GoogleAuthProvider, onAuthStateChanged ,createUserWithEmailAndPassword , signInWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider ,sendEmailVerification  , signOut } from "firebase/auth";



firebaseInitialization();

const useFirebase = () => {
    // declear all required states 
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // all 3rd party provider object
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    // login method with google 
    const signInWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider)
        
    }
    
    // update the user on any kind of changes change
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false);
        })
    },[auth,isLoading]);
    
    // create a new account for new user 
    const createAccountWithEmailPassword = (email,password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // login method with email and password
    const SignInExistUserWithEmailPassword = (email,password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    
    // login method with facebook
    const signInWithFacebook = () => {
        setIsLoading(true);
        return signInWithPopup(auth,facebookProvider)
    }
    
    // login method with github
    const signInWithGitHub = () => {
        setIsLoading(true);
        return signInWithPopup(auth,gitHubProvider)
    }
    
    // set the name for new user 
    const updateNewName = (auth,name) =>{
        return updateProfile(auth, name)
    }
    
    // send a verification email to the new user 
    const verifyEmail = () =>{
        setIsLoading(true);
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            setIsLoading(true);
        })
        .catch(error=>setError(error.message))
            .finally(()=>{
                setIsLoading(false);
            })
    }

    // describe logout method 
    const LogOut = () =>{
        setIsLoading(true);
        signOut(auth)
            .then(()=>setUser({}))
            .finally(()=>setIsLoading(false))
    }

    return {
        auth,
        user,
        error,
        isLoading,
        setUser,
        setError,
        verifyEmail,
        setIsLoading,
        signInWithGoogle,
        createAccountWithEmailPassword,
        SignInExistUserWithEmailPassword,
        signInWithFacebook,
        signInWithGitHub,
        updateNewName,
        LogOut
    }
};

export default useFirebase;