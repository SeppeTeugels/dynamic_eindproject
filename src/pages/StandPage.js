import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

function StandPage (){
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <Link to="/"><Button> go to homepage </Button></Link>
        </div>
    )
}

export default StandPage;