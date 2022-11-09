import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {StandListSection} from "../components/stands/StandtListSection.js";
import {useUserContext} from "../contexts/userContext";
import {collection, query} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";

const standsConverter = {
    toFirestore: function (dataInApp) {
        return {}

    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};

const collectionRef = collection(firestoreDB, 'Stands').withConverter(standsConverter);


function StandListPage() {
    const queryRef = query(collectionRef)
    const [values] = useCollectionData(queryRef);

    const navigate = useNavigate();
    const {user} = useUserContext();
    if (user === null) return navigate("/login")
    return (<>
        <h1 style={{
            color: "white",
            marginLeft: '100px',
            padding: "10px",
            fontWeight: "bold",
            fontSize: "3rem"
        }}>Brands </h1>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {user !== null && values ?
                (user.age >= 18) ?
                    values.map((s, i) => <Stand key={i} stand={s}/>)
                    : [...values].filter(s => !s.age).map((s, i) => <Stand key={i} stand={s}/>) : ""}
        </div>
    </>)
}

export default StandListPage;

export function Stand(props) {
    const {stand} = props
    return (
        <StandListSection>
            <Link to={`/productslistpage/${stand.name}`}><img src={`${stand.logo}`} alt="stand logo" style={{maxWidth: "200px"}}/></Link>
        </StandListSection>

    )
}
