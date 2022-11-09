import React, {useEffect} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"
import {useUserContext} from "../contexts/userContext";
import Toast from "react-bootstrap/Toast";

function DashboardPage(props) {
    const {logout} = useAuth()
    const navigate = useNavigate();
    const {user} = useUserContext();
    const {setLoggedIn, message, setMessage} = props;
    useEffect(() => {
        if (user === null) return navigate("/login")
    })


    async function handleLogout() {
        try {
            await logout();
            setLoggedIn(false)
        } catch {
        }
    }

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
            <div id="tempnav" className="w-100 float-end" style={{paddingLeft: "80%"}}>
                <Button onClick={handleLogout}> Log out </Button>
            </div>
            <Link to="/standlistpage"><Button>Listing of all the stands</Button></Link>
        </div>
    )
}

export default DashboardPage;