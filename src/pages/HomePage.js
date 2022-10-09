import React from 'react';
import {Button, Container} from "react-bootstrap";
import {allowedIn} from "../components/user/UserInfo";
import {Link} from "react-router-dom";

function HomePage (){
    return (
        <Container style={{margin:0, height:"100%"}} >
                <p> test 4</p>
                <h1>Welcome to the convention</h1>
            <Link to={"/signup"}><Button> sign up </Button></Link>
           <Link to={"/login"}><Button> log in </Button></Link>
            { (allowedIn())? <Link to="/buildingpage"><Button> go to convention </Button></Link>:<Link to="/buypage"><Button> buy ticket </Button></Link>}
        </Container>
    );
}
export default HomePage;