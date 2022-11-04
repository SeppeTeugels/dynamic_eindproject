import React from 'react';
import {Link, useParams} from "react-router-dom";
import {StandListSection} from "../components/stands/StandListSection";
import {Button} from "react-bootstrap";
import {collection, query} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";

const productsConverter = {
    toFirestore: function (dataInApp) {
        return {}

    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};

const collectionRef = collection(firestoreDB, 'Products').withConverter(productsConverter);


function ProductsListPage() {
    const queryRef = query(collectionRef)
    const [values] = useCollectionData(queryRef);
    const params  = useParams();
    console.log(params)
    console.log(values? values.map(v => v):"")
    console.log(values? [...values].filter(s => s.standName === params.Id):"")
    return (<>
        <div>
            <Link to="/dashboard"><Button> go to homepage </Button></Link>
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {params === "all" && values? values.map((s, i) => <Stand key={i} product={s}/>):values? values.map((s, i) => <Stand key={i} product={s}/>):""}
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {params && values? [...values].filter(s => s.standName === params.Id).map((s, i) => <Stand key={i} product={s}/>):values? values.map((s, i) => <Stand key={i} product={s}/>):""}
        </div>
    </>)
}

export default ProductsListPage;

export function Stand(props) {
    const {product} = props
    return (
        <StandListSection>
            <h1>{product.name? product.name:""}</h1>
            <h6>{product.standName? product.standName:""}</h6>
            <img src={`images/${product.image}`} alt="stand logo" style={{maxWidth: "500px"}}/>
            <h3>{product.price? `${product.price} €`:""}</h3>
        </StandListSection>

    )
}
