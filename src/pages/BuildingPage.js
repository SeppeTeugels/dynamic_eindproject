import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function BuildingPage (){
    return (
        <div>
            <Button href="/standlistpage">
                Listing of all the stands
            </Button>
            <Link to="/"><Button> go to homepage </Button></Link>
        </div>
    )
}

export default BuildingPage;