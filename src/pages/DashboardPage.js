import React from 'react';
import {Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"

function DashboardPage() {
    const {logout} = useAuth()
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
                <Button onClick={handleLogout}> Log out </Button>
            </div>
            <Link to="/standlistpage"><Button>Listing of all the stands</Button></Link>
        </div>
    )
}

export default DashboardPage;