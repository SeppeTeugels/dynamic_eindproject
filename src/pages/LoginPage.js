import React from 'react';
import Login from "../components/user/Login";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthProvider} from "../contexts/AuthContext";



function LoginPage (props){
    const{setLoggedIn} = props;
    return (
            <AuthProvider>
                <Container className="d-flex align-items-center justify-content-center" >
                    <div className="w-100" style={{maxWidth: '400px', marginTop:'20px'}}>
                        <Login setLoggedIn={setLoggedIn}/>
                    </div>
                </Container>
                <div className="d-flex w-100 align-items-center justify-content-center" style={{marginTop:'10px'}}>
                    <Link to="/"><Button> go to homepage </Button></Link>
                </div>
            </AuthProvider>
    )
}

export default LoginPage;