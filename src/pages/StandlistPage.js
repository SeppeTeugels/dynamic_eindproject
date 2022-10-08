import React from 'react';
import {Link} from "react-router-dom";
import {StandListSection} from "../components/stands/StandListSection";
import {USERS_DATA} from "../data/data";

function StandListPage(props) {
    const {stands} = props
    let users = USERS_DATA.map(u => u.age)
    let user = users[0]
    return (
           <ShowStand stands={stands} age={user}/>
    )
}

export default StandListPage;

export function ShowStand(props) {
    const {stands, age} = props
    return (<>
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                {(age >= 18)?
                    stands.map((s, i) => <Stand key={i} stand={s}/>)
                : stands.filter(s => !s.age).map((s, i) => <Stand key={i} stand={s}/>)}
            </div>
            <div>
                <a href="/">homepage</a>
            </div>
        </>
    )
}

export function Stand(props) {
    const {stand} = props
    return (

        <StandListSection>
            <Link to={`/stands/${stand.id}`}><h1>{stand.name}</h1></Link>
            <img src={stand.logo} alt="stand logo" style={{maxWidth: "500px"}}/>
        </StandListSection>

    )
}
