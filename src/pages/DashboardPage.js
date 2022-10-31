import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"
import {useUserContext} from "../contexts/userContext";

function DashboardPage() {
    const {logout} = useAuth()
    const {user} = useUserContext()
    const navigate = useNavigate();
    async function handleLogout() {
        try {
            await logout();
            navigate("/")
        } catch {
        }
    }
    return (
        <div>
            <div id="tempnav" className="w-100 float-end" style={{paddingLeft: "80%"}}>
                <Link to={"/profile"} className="btn btn-primary d-inline-flex p-2 mt-1">
                    User Profile
                </Link>
                <Button onClick={handleLogout}> Log out </Button>
            </div>
            <p>{user? user.userName:""}</p>
            <Link to="/standlistpage"><Button>Listing of all the stands</Button></Link>
        </div>
    )
}

export default DashboardPage;