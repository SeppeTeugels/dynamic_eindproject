import React from 'react';
import {Link, useParams} from "react-router-dom";
import {StandListSection} from "../components/stands/StandListSection";
import {Button} from "react-bootstrap";
import {collection, query} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useCartContext} from "../contexts/ShoppingCartContext";

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
    const params = useParams();
    return (<>
        <div>
            <Link to="/dashboard"><Button> go to homepage </Button></Link>
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {params === "all" && values ? values.map((s, i) =>
                <Stand key={i} product={s}/>) : values ? values.map((s, i) =>
                <Stand key={i} product={s}/>) : ""}
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {params && values ? [...values].filter(s => s.standName === params.Id).map((s, i) =>
                <Stand key={i} product={s}/>) : values ? values.map((s, i) =>
                <Stand key={i} product={s}/>) : ""}
        </div>
    </>)
}

export default ProductsListPage;

export function Stand(props) {
    const {product} = props
    const quantity = 0;
    const {cart ,setCart} = useCartContext();
    return (
        <StandListSection>
            <img src={`images/${product.image}`} alt="stand logo" style={{maxWidth: "500px"}}/>

            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-baseline mb-4"
                     style={{marginTop: "20px", borderTop: "2px solid gray"}}>
                    <div style={{marginTop: "20px"}}>
                        <h1>{product.name ? product.name : ""}</h1>
                        <h6>{product.standName ? product.standName : ""}</h6>
                    </div>
                    <div style={{marginTop: "20px"}}>
                        <h3>{product.price ? `${product.price} €` : ""}</h3>
                    </div>

                </div>
            </div>
            <div>
                    <Button className="w-100" onClick={cart === null? () => setCart([{product}]) : () => setCart([...cart,{product}]) } >+Add To Cart</Button>
            </div>
        </StandListSection>

    )
}
