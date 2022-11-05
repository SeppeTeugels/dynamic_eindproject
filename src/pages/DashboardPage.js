import React, {useEffect} from 'react';
import {Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"
import {useUserContext} from "../contexts/userContext";

function DashboardPage(props) {
    const {logout} = useAuth()
    const navigate = useNavigate();
    const{user} = useUserContext();
    const {setLoggedIn} = props;
    useEffect(() => {if (user === null)return navigate("/login")})


    async function handleLogout() {
        try {
            await logout();
            setLoggedIn(false)
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