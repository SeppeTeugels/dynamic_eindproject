import React from 'react';
import {Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useCartContext} from "../contexts/ShoppingCartContext";
import {useUserContext} from "../contexts/userContext";

function BuyPage() {
    const {cart} = useCartContext()
    const navigate = useNavigate();
    const{user} = useUserContext();
    if (user === null)return navigate("/login")
    if (!cart) return


    const price = cart.map(p => p.price).reduce((a, b) => a + b).toFixed(2)

    console.log(price)
    return (<>
        <div style={{marginLeft:"22%"}}>
            <div id="tempnav" className="w-100 float-end" style={{padding:"20px"}}>
                {cart ?
                    cart.map((item, index) => <ShowCart key={index} item={item}/>) : ""
                }
            </div>
            <div style={{
                marginTop: "20px",
                width: " 70%",
                height: "85%",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0px 25px 40px #1687d933"
            }}>
                <div style={{
                    margin: "auto",
                    width: "95%",
                    height: "30%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center"
                }}>

                    <div style={{display: "flex", wordBreak: "break-all", flexWrap:"nowrap", alignItems:"flex-end", flexDirection: "column" ,width: "300px"}}>
                        <h2 style={{marginTop: "20px",float: "right"}}>
                            {`Total: €${price}`}
                        </h2>
                        <Button style={{marginTop: "20px", marginLeft:"40px", width:"70%", marginBottom:" 10px"}}>
                        pay now
                    </Button>
                    </div>
                </div>
            </div>


        </div>
    </>
    )
}

export default BuyPage;


export function ShowCart(props) {
    const {item} = props;
    if (!item) return
    return (
        <>
            <div style={{
                width: " 70%",
                height: "85%",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0px 25px 40px #1687d933",
            }}>
                <div style={{
                    margin: "auto",
                    width: "90%",
                    height: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                    ,marginTop:"20px"
                }}>
                    <div style={{width: "15%", textAlign: "center", display: "flex", justifyContent: "space-between", padding:"10px"}}>
                        <img src={`/images/${item.image}`} alt={"product image"} height={"120px"}/>
                    </div>
                    <div>
                        <h3 style={{
                            paddingTop: "5px",
                            textAlign:"center"
                        }}>{item.name}</h3>
                    </div>
                    <div>
                        <h3 style={{
                            paddingTop: "5px",
                        }}>{`€${item.price.toFixed(2)}`}</h3>
                    </div>
                </div>
            </div>
        </>
    )

}


