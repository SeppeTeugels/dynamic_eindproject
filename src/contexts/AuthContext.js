import React, {useContext, useEffect, useState} from 'react'
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../services/firebase";


const AuthContext = React.createContext();

export const auth = getAuth(app);

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState();
    const [email, setEmail] = useState();

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user);
                setEmail(email)
                window.location.href = "/#/buildingpage"
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setCurrentUser(user);
                setEmail(email)
                window.location.href = "/#/buildingpage"
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    function logout(){
        signOut(auth).then(() => {
            window.location.href = "/#"
        }).catch((error) => {
            console.log(error)
        });
    }



    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        email,
        signup,
        login,
        logout,

    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}