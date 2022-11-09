import React, {useContext, useMemo, useState} from 'react'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../services/firebase";
import {useUserContext} from "./userContext";
import {useNavigate} from "react-router-dom";
import {useCartContext} from "./ShoppingCartContext";

const AuthContext = React.createContext();


export const auth = getAuth(app);

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading] = useState();
    const {clearUser} = useUserContext()
    const navigate = useNavigate();
    const {clearCart} = useCartContext()


    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user);
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
                if (user !== null) {
                    navigate('/dashboard')
                }
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }

    function logout() {
        signOut(auth).then(() => {
            clearUser()
            clearCart()
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }

    const value = useMemo(() => ({currentUser, signup, login, logout}), []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}