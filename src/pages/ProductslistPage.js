import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {ProductListSection} from "../components/stands/ProductListSection";
import {Button} from "react-bootstrap";
import {collection, query} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useCartContext} from "../contexts/ShoppingCartContext";
import {useUserContext} from "../contexts/userContext";

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

    const navigate = useNavigate();
    const {user} = useUserContext();
    if (user === null) return navigate("/login")


    return (<div style={{backgroundColor: "#757687", height: "412rem"}}>
        <h1 style={{
            color: "white",
            marginLeft: '100px',
            padding: "10px",
            fontWeight: "bold",
            fontSize: "3rem"
        }}>Products</h1>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap",}}>
            {params.Id === "all" && values ? user.age >= 18 ? values.map((s, i) =>
                <Product key={i} product={s}/>) : values.filter(v => !v.age).map((s, i) =>
                <Product key={i} product={s}/>) : ""}
        </div>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {params && values ? values.filter(s => s.standName === params.Id).map((s, i) => <Product key={i}
                                                                                                     product={s}/>) : ""}
        </div>
    </div>)
}

export default ProductsListPage;

export function Product(props) {
    const {product} = props
    const {cart, setCart} = useCartContext();
    return (<>
            <ProductListSection>
                <img src={`images/${product.image}`} alt="stand logo" style={{maxWidth: "500px"}}/>

                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-sm-around align-items-baseline mb-4"
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
                    <Button className="w-100"
                            onClick={cart === null ? () => setCart([product]) : () => setCart([...cart, product])}>+Add
                        To
                        Cart</Button>
                </div>
            </ProductListSection>
        </>
    )
}
