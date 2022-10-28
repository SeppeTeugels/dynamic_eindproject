import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import StandPage from "./pages/StandPage";
import StandListPage from "./pages/StandlistPage";
import {STANDS_DATA} from "./data/data";
import React from "react";
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
                    <div style={{marginLeft:"70px"}}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="signup" element={<SignUpPage/>}/>
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
