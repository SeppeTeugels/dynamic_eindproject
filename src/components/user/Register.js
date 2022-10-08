import {Button, Container} from "react-bootstrap";
import React from "react";

function Register (){
    return (
        <Container style={{margin:0, height:"100%"}} >
            <h1>Make an account</h1>
            <Button href="/login">aleady got on log in</Button>
        </Container>
    );
}
export default Register;