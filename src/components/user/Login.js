import {Alert, Button, Card, Form} from "react-bootstrap";
import React, {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import {collection, query} from "firebase/firestore";
import {firestoreDB} from "../../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useUserContext} from "../../contexts/userContext";

const personConverter = {
    toFirestore: function (dataInApp) {
        return {
            userName: dataInApp.userName,
            age: Number(dataInApp.age),
            email: dataInApp.email,
        }

    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};

const collectionRef = collection(firestoreDB, 'User').withConverter(personConverter);
const queryRef = query(collectionRef)

function Login(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [values] = useCollectionData(queryRef);
    const {setUser} = useUserContext();
    const {setLoggedIn} = props
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            setUser(values.find(v => emailRef.current.value === v.email))
            await login(emailRef.current.value, passwordRef.current.value)
            console.log(values.find(v => emailRef.current.value === v.email))
            setLoggedIn(true)
        } catch (e) {
            console.log(error)
        }
        setError('Failed to log in')
        setLoading(false)

    }

    return (<>
            <Card onLoad={() => setLoggedIn(false)}>
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