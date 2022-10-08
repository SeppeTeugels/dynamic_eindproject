import React from 'react';
import {Button, Container} from "react-bootstrap";
import {allowedIn} from "../components/user/UserInfo";

function HomePage (){
    return (
        <Container style={{margin:0, height:"100%"}} >

                <h1>Welcome to the convention</h1>
            <p> test path</p>
            <Button href="signup/">sign up</Button>
            <Button href="login/">log in </Button>
            { (allowedIn())? <Button href="buildingpage/">go to convention</Button> :<Button href="buypage/">buy ticket</Button>  }

        </Container>
    );
}
export default HomePage;