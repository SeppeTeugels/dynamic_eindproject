import React from 'react';
import {Button} from "react-bootstrap";

function BuildingPage (){
    return (
        <div>

            <Button href="/standlist/18">
                stands for 18+
            </Button>
            <Button href="/standlist">
                stands for all ages
            </Button>
            <Button href="/standlistpage">
                Listing of all the stands
            </Button>
            <a href="/">homepage</a>
        </div>
    )
}

export default BuildingPage;