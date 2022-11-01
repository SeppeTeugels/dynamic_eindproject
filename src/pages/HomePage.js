import React from 'react';
import {Button, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <Container style={{margin: 0, marginTop:"50px", height: "100%"}}>
            <Row>
                <div className="col-lg-6 col-md-6 landscape-m-auto tab-m-auto">
                    <img src="/images/banner.jpg"  alt="gaming convention"/>
                </div>
            </Row>
            <h1>Welcome to the convention</h1>
            <Link to={"/signup"}><Button> sign up </Button></Link>
            <Link to={"/login"}><Button> log in </Button></Link>
        </Container>
    );
}

export default HomePage;