import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,

    GoogleAuthProvider,
    signInWithPopup,

    FacebookAuthProvider,

    onAuthStateChanged,
} from "firebase/auth";
import { auth } from '../firebase'

const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function signUp(email,password) {
        return createUserWithEmailAndPassword(auth,email, password);
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth)
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    function facebookSignIn() {
        const facebookAuthProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth', currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe()
        }
    },[])

    return (
        <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn, facebookSignIn }}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}