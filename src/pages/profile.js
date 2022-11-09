import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useUserContext} from "../contexts/userContext";
import {Container} from "react-bootstrap";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function ProfilePage() {

    const navigate = useNavigate();
    const {user} = useUserContext();
    if (user === null) return navigate("/login")
    return <div>
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{display:"flex", maxWidth: '400px', marginTop: '20px', justifyContent:"center", textAlign:"center"}}>
                <Card style={{width: '25rem', borderRadius: "15px 15px 5px 5px"}}>
                    <Card.Body>
                        <Card.Title>{user.userName}</Card.Title>
                    </Card.Body>
                    <ListGroup style={{fontSize:"large"}} className="list-group-flush">
                        <ListGroup.Item>{`username: ${user.userName}`}</ListGroup.Item>
                        <ListGroup.Item>{`age: ${user.age}`}</ListGroup.Item>
                        <ListGroup.Item>{`birthday: ${user.birthday}`}</ListGroup.Item>
                        <ListGroup.Item>{`email: ${user.email}`}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>

        </Container>
    </div>
}