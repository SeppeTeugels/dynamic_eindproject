import {Alert, Button, Card, Form} from "react-bootstrap";
import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";


function Register() {
    const emailRef = useRef()
    const usernameRef = useRef()
    const ageRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
            window.location.href = "/#/buildingpage"

        } catch (error) {
            console.log(error)
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (<>
            <Card>
                <h1>Make an account</h1>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                <div className={"mx-3"}>
                    <div className={"m-3"}>
                        <Form onSubmit={handleSubmit} action={"/buildingpage"}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" ref={usernameRef}/>
                            </Form.Group>
                            <Form.Group id="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" ref={ageRef}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Form.Group id="confirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={confirmPasswordRef} required/>
                            </Form.Group>
                                <Button disabled={loading} className="w-100" id="Login" type="submit">
                                    Sign up
                                </Button>
                        </Form>

                    </div>
                </div>
            </Card>
            <div className="d-flex align-items-center justify-content-center">
                aleady got an account? <Link to={"/login"}><Button style={{marginLeft: "20px"}}> log in </Button></Link>
            </div>
        </>
    );
}

export default Register;