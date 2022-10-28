import {Alert, Button, Card, Form} from "react-bootstrap";
import React, {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/dashboard')
        } catch (e) {
            console.log(error)
        }
        await setError('Failed to log in')
        setLoading(false)

    }

    return (<>
            <Card>
                <h1>Log in</h1>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                <div className={"mx-3"}>
                    <div className={"m-3"}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100" style={{marginTop: "10px"}} id="Login" type="submit">
                                Log in
                            </Button>
                        </Form>

                    </div>
                </div>
            </Card>
            <div className="d-flex align-items-center justify-content-center">
                no account? <Link to={"/signup"}><Button style={{marginLeft: "20px"}}> Sign-up </Button></Link>
            </div>
        </>
    );
}

export default Login;