import {Button, Container} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

function Login (){
    return (
        <Container style={{margin:0, height:"100%"}} >
            <h1>Log in</h1>
            <Link to={"/signup"}><Button>no account? make one here! </Button></Link>
        </Container>
    );
}
export default Login;