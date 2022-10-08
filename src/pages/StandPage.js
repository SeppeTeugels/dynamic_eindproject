import React from 'react';
import {useParams} from "react-router-dom";

function StandPage (){
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <a href="/">homepage</a>
        </div>
    )
}

export default StandPage;