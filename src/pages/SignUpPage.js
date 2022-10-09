import React from 'react';
import Register from "../components/user/Register";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function SignUpPage (){
    return (
        <div>
            <Register/>
            <Link to="/"><Button> go to homepage </Button></Link>
        </div>
    )
}

export default SignUpPage;