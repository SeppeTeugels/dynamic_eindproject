import React, {useEffect} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useUserContext} from "../contexts/userContext";
import Toast from "react-bootstrap/Toast";

function DashboardPage(props) {

    const navigate = useNavigate();
    const {user} = useUserContext();
    const {message, setMessage} = props;
    useEffect(() => {
        if (user === null) return navigate("/login")
    })

    return (
        <div>
            {
                message ?
                    <Row style={{position: "absolute", right: "10px"}}>
                        <Col>
                            <Toast onClose={() => setMessage(false)} show={message} delay={5000} autohide>
                                <Toast.Header>
                                    <strong className="me-auto">Bought</strong>
                                    <small>just now</small>
                                </Toast.Header>
                                <Toast.Body variant={'Success'}>everything in cart is bought.</Toast.Body>
                            </Toast>
                        </Col>
                    </Row> : ""
            }
            <h1 style={{
                color: "white",
                marginLeft: '100px',
                padding: "10px",
                fontWeight: "bold",
                fontSize: "3rem"
            }}> Dashboard </h1>

            <Container className='p-1' style={{backgroundColor: "#757687", textAlign: "center", marginBottom: "21%"}}>

                <div style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                }}>
                </div>
                <section style={{marginLeft: "25px", backgroundColor: "var(--dark-color)"}} id="feature">
                    <div style={{display: "flex", direction: "row", justifyContent: "center"}}>
                        <div style={{backgroundColor: "#060b26", borderRadius: "5px", marginRight: "20px"}}
                             className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                            <h2 className="mb-3 text-white">Who is at the Convention?</h2>
                            <h6 className="mb-4 text-white">Check now!</h6>
                            <Link to={"/standlistpage"}><Button
                                style={{marginBottom: "20px", backgroundColor: "#6B8BF5"}}> stands </Button></Link>
                        </div>
                        <div style={{backgroundColor: "#060b26", borderRadius: "5px"}}
                             className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                            <h2 className="mb-3 text-white">You want to see what products are for sale?</h2>
                            <h6 className="mb-4 text-white">Go to products and see!</h6>
                            <Link to={"/productslistpage/all"}><Button
                                style={{marginBottom: "20px", backgroundColor: "#6B8BF5"}}> products</Button></Link>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default DashboardPage;