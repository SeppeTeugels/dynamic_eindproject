import {Button, Container} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

function Register (){
    return (
        <Container style={{margin:0, height:"100%"}} >
            <h1>Make an account</h1>
            <Link to={"/login"}><Button> aleady got on log in </Button></Link>
        </Container>
    );
}
export default Register;