import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import StandPage from "./pages/StandPage";
import StandListPage from "./pages/StandlistPage";
import React, {useState} from "react";
import "./services/firebase";
import {AuthProvider} from "./contexts/AuthContext";
import ProfilePage from "./pages/profile";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import {UserProvider, useUserContext} from "./contexts/userContext";
import BuyPage from "./pages/Buypage";
import ProductsListPage from "./pages/ProductslistPage";
import {ShoppingCartProvider} from "./contexts/ShoppingCartContext";

function App() {
    const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", false);
    return (
        <Router>
            <ShoppingCartProvider>
                <UserProvider>
                    <AuthProvider setLoggedIn={setLoggedIn}>
                        <Navbar loggedIn={loggedIn}/>
                        <div style={{marginLeft: "70px"}}>
                            <Routes>
                                <Route path="/" element={<HomePage setLoggedIn={setLoggedIn}/>}/>
                                <Route path="signup" element={<SignUpPage setLoggedIn={setLoggedIn}/>}/>
                                <Route path="login" element={<LoginPage setLoggedIn={setLoggedIn}/>}/>
                                <Route path="profile" element={<ProfilePage/>}/>
                                <Route path="home" element={<DashboardPage setLoggedIn={setLoggedIn}/>}/>
                                <Route path="buyPage" element={<BuyPage/>}/>
                                <Route path="dashboard" element={<DashboardPage/>}/>
                                <Route path="standlistpage" element={<StandListPage/>}/>
                                <Route path="productslistpage/:Id" element={<ProductsListPage/>}/>
                                <Route path="stands/:Id" element={<StandPage/>}/>
                            </Routes>
                        </div>
                    </AuthProvider>
                </UserProvider>
            </ShoppingCartProvider>
        </Router>
    );
}

export default App;

function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}