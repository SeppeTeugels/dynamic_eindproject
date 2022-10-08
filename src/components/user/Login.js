import {Button, Container} from "react-bootstrap";
import React from "react";

function Login (){
    return (
        <Container style={{margin:0, height:"100%"}} >
            <h1>Log in</h1>
            <Button href="/signup">no account? make one here!</Button>
        </Container>
    );
}
export default Login;