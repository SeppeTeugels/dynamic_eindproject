import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BuyPage from "./pages/BuyPage";
import BuildingPage from "./pages/BuildingPage";
import StandPage from "./pages/StandPage";
import StandListPage from "./pages/StandlistPage";
import {STANDS_DATA} from "./data/data";
import React from "react";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="dynamic_eindproject/" element={<HomePage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="dynamic_eindproject/buypage" element={<BuyPage/>}/>
                <Route path="dynamic_eindproject/buildingpage" element={<BuildingPage/>}/>
                <Route path="dynamic_eindproject/standlistpage" element={<StandListPage stands={STANDS_DATA} />}/>
                <Route path="dynamic_eindproject/standlist/18" element={<StandListPage stands={STANDS_DATA.filter(s => s.age )}/>}/>
                <Route path="dynamic_eindproject/standlist" element={<StandListPage stands={STANDS_DATA.filter(s => !s.age )}/>}/>
                <Route path="dynamic_eindproject/stands/:Id" element={<StandPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
