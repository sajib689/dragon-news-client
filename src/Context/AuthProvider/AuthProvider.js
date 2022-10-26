import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from './../../Firebase.init';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const providerLogIn = (provider) => {
            return signInWithPopup(auth, provider)
    }

    const logOut = () => {
       return signOut (auth)
    }

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
        console.log('providerLogIn',currentUser);
        setUser(currentUser)
     })
        return ()=> {
            unsubscribe();
        }
    },[])
    const authInfo = {user, providerLogIn, logOut, createUser, signIn}
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;