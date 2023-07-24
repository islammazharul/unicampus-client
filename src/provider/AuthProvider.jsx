import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const google = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, google)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateProfilePic = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // set and remove token when user login or logOut
            // if (currentUser) {
            //     axios.post("https://park-sports-server.vercel.app/jwt", { email: currentUser.email })
            //         .then(data => {
            //             // console.log(data.data);
            //             localStorage.setItem("access-token", data.data.token)
            //             setLoading(false)
            //         })
            // } else {
            //     localStorage.removeItem("access-token")
            //     setLoading(false)
            // }
        })
        setLoading(false)
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateProfilePic

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;