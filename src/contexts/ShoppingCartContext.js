import {createContext, useContext} from "react";
import {useCallback, useMemo, useState} from "react";

const ShoppingCartContext = createContext({})

export function ShoppingCartProvider(props) {
    const [cart, setCart] = useState(null)

    const clearCart = useCallback(() => setCart(null), []);

    const api = useMemo(() =>
        ({cart, setCart, clearCart }), [{cart, setCart, clearCart}]);

    return (
        <ShoppingCartContext.Provider value={api}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}


export const useCartContext = () =>useContext(ShoppingCartContext)