import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        console.log('Agregando al carrito:', item, 'Cantidad:', quantity);
        const index = cart.findIndex(i => i.id === item.id);
        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart[index].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    console.log('Estado actual del carrito:', cart);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getCartTotalItems, getCartTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};