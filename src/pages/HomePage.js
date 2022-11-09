import React from 'react';
import {MDBBtn} from 'mdb-react-ui-kit';
import {Button, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useUserContext} from "../contexts/userContext";

function HomePage(props) {
    const {user} = useUserContext()
    const {setLoggedIn} = props
    if (user === null) {
        setLoggedIn(false)
    }
    return (
        <Container className='p-1' style={{backgroundColor: "#757687", textAlign: "center", marginBottom: "21%"}}>
            <h1 style={{color: "white", fontWeight: "bold"}}>Welcome to the convention</h1>
            <div style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
            }}>
                <img src="images/banner.jpg" alt="gaming convention"/>
            </div>
            <section style={{marginLeft: "25px", backgroundColor: "var(--dark-color)"}} id="feature">
                <div style={{display: "flex", direction: "row", justifyContent: "center"}}>
                    <div style={{backgroundColor: "#060b26", borderRadius: "5px", marginRight: "20px"}}
                         className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                        <h2 className="mb-3 text-white">New to the Valorant?</h2>
                        <h6 className="mb-4 text-white">join the Valorant community now!</h6>
                        <Link to={"/signup"}><Button style={{marginBottom: "20px", backgroundColor: "#6B8BF5"}}> sign
                            up </Button></Link>
                    </div>
                    <div style={{backgroundColor: "#060b26", borderRadius: "5px"}}
                         className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                        <h2 className="mb-3 text-white">Already a Member?</h2>
                        <h6 className="mb-4 text-white">join the Valorant community now!</h6>
                        <Link to={"/login"}><Button style={{marginBottom: "20px", backgroundColor: "#6B8BF5"}}> log
                            in </Button></Link>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default HomePage;