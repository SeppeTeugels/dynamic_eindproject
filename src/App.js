import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
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
import {UserProvider} from "./contexts/userContext";
import BuyPage from "./pages/Buypage";

function App() {

    return (
        <Router>
            <UserProvider>
                <AuthProvider>
                    <Navbar/>
                    <div style={{marginLeft:"70px", backgroundColor:"#598392"}}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="signup" element={<SignUpPage />}/>
                        <Route path="profile" element={<ProfilePage/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="home" element={<DashboardPage/>}/>
                        <Route path="buyPage" element={<BuyPage/>}/>
                        <Route path="dashboard" element={<DashboardPage/>}/>
                        <Route path="standlistpage" element={<StandListPage/>}/>
                        <Route path="stands/:Id" element={<StandPage/>}/>
                    </Routes>
                    </div>
                </AuthProvider>
            </UserProvider>
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