import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useUserContext} from "../contexts/userContext";
import {Button, Container} from "react-bootstrap";
import React from "react";
import {Link, useNavigate} from "react-router-dom";

export default function ProfilePage() {

    const navigate = useNavigate();
    const {user} = useUserContext();
    if (user === null) return navigate("/login")
    return <div>
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{maxWidth: '400px', marginTop: '20px'}}>
                <Card style={{width: '18rem', borderRadius: "15px 15px 5px 5px"}}>
                    <Card.Body>
                        <Card.Title>{user.userName}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{`username: ${user.userName}`}</ListGroup.Item>
                        <ListGroup.Item>{`age: ${user.age}`}</ListGroup.Item>
                        <ListGroup.Item>{`birthday: ${user.birthday}`}</ListGroup.Item>
                        <ListGroup.Item>{`email: ${user.email}`}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>

        </Container>
        <div>
            <Link to="/dashboard"><Button> go to homepage </Button></Link>
        </div>
    </div>
}