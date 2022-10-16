import React, {useContext, useEffect, useState} from 'react'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import app from "../services/firebase";
import {composeStories} from "@storybook/react";

const AuthContext = React.createContext();

export const auth = getAuth(app);

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return  createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setCurrentUser(userCredential.user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage)
                // ..
            });
    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
        })

        return unsubscribe;
    }, [])



    const value = {
        currentUser,
        signup
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}