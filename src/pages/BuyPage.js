import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function BuyPage (){
    return (
        <div>
            <h1>Buy Page</h1>
            <Link to="/"><Button> go to homepage </Button></Link>
        </div>
    )
}

export default BuyPage;