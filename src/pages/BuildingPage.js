import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function BuildingPage() {

    function handleLogout(){

    }


    return (
        <div>
            <div id="tempnav" className="w-100 float-end" style={{paddingLeft:"80%"}}>
                    <Link to={"/profile"} className="btn btn-primary d-inline-flex p-2 mt-1">
                        User Profile
                    </Link>
                <Button onClick={handleLogout}> Log out </Button>
            </div>

            <Link to="/standlistpage"><Button>Listing of all the stands</Button></Link>
            <Link to="/"><Button> go to homepage </Button></Link>
        </div>
    )
}

export default BuildingPage;