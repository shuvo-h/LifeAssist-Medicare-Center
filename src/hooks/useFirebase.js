import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,createUserWithEmailAndPassword , signInWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider  , signOut } from "firebase/auth";



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

    const LogOut = () =>{
        setIsLoading(true);
        signOut(auth)
            .then(()=>setUser({}))
            .finally(()=>setIsLoading(false))
    }

    return {
        user,
        isLoading,
        setUser,
        setIsLoading,
        signInWithGoogle,
        createAccountWithEmailPassword,
        SignInExistUserWithEmailPassword,
        signInWithFacebook,
        signInWithGitHub,
        LogOut
    }
};

export default useFirebase;