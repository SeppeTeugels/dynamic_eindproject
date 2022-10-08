import React from 'react';
import {Button, Container} from "react-bootstrap";
import {allowedIn} from "../components/user/UserInfo";

function HomePage (){
    return (
        <Container style={{margin:0, height:"100%"}} >

                <h1>Welcome to the convention</h1>
            <Button href="/dynamic_eindproject/signup">sign up</Button>
            <Button href="/dynamic_eindproject/login">log in </Button>
            { (allowedIn())? <Button href="/dynamic_eindproject/buildingpage">go to convention</Button> :<Button href="/dynamic_eindproject/buypage">buy ticket</Button>  }

        </Container>
    );
}
export default HomePage;