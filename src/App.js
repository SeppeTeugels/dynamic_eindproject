import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BuildingPage from "./pages/BuildingPage";
import StandPage from "./pages/StandPage";
import StandListPage from "./pages/StandlistPage";
import {STANDS_DATA} from "./data/data";
import React from "react";
import "./services/firebase";
import {AuthProvider} from "./contexts/AuthContext";
import ProfilePage from "./pages/profile";


function App() {


    return (
        <Router>
            {/*<AuthProvider>*/}
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home" element={<BuildingPage/>}/>
                    <Route path="/dashboard" element={<StandListPage/>}/>
                    <Route path="/buildingpage" element={<BuildingPage/>}/>
                    <Route path="/standlistpage" element={<StandListPage stands={STANDS_DATA}/>}/>
                    <Route path="stands/:Id" element={<StandPage/>}/>
                </Routes>
        {/*</AuthProvider>*/}
        </Router>
    );
}

export default App;
