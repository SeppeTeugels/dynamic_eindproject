import React from 'react';
import {Link} from "react-router-dom";
import {StandListSection} from "../components/stands/StandListSection";

function StandListPage (props){
    const {stands} =props
    return (
        <div>
            <div  style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                {stands.map((s, i) => <Stand key={i} stand={s}/>)}
            </div>
            <div>
                <a href="/">homepage</a>
            </div>
        </div>
    )
}

export default StandListPage;

export function Stand(props) {
    const {stand} = props
    return(
            <StandListSection>
                <Link to={`/stands/${stand.id}`}><h1>{stand.name}</h1></Link>
                <img src={stand.logo} alt="stand logo" style={{maxWidth:"500px"}}/>
            </StandListSection>

    )
}
