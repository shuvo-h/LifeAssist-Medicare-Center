import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.init';
import { getAuth, signInWithPopup,updateProfile, GoogleAuthProvider, onAuthStateChanged ,createUserWithEmailAndPassword , signInWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider ,sendEmailVerification  , signOut } from "firebase/auth";



firebaseInitialization();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signInWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider)
            
    }

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

    const createAccountWithEmailPassword = (email,password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignInExistUserWithEmailPassword = (email,password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }

    const signInWithFacebook = () => {
        setIsLoading(true);
        return signInWithPopup(auth,facebookProvider)
    }

    const signInWithGitHub = () => {
        setIsLoading(true);
        return signInWithPopup(auth,gitHubProvider)
    }
    
    const updateNewName = (auth,name) =>{
        return updateProfile(auth, name)
    }
    
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