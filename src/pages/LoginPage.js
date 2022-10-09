import React from 'react';
import Login from "../components/user/Login";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function LoginPage (){
    return (
        <div>
            <Login/>
            <Link to="/"><Button> go to homepage </Button></Link>
        </div>
    )
}

export default LoginPage;