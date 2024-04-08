import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const index = cart.findIndex(i => i.id === item.id);
        if (index !== -1) {
            console.error('El producto ya está en el carrito!');
            return;
        }
        setCart([...cart, { ...item, quantity }]);
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotalItems = () => {
        let totalItems = 0;
        for (const item of cart) {
            totalItems += item.quantity;
        }
        return totalItems;
    };

    const getCartTotalPrice = () => {
        let totalPrice = 0;
        for (const item of cart) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice;
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getCartTotalItems, getCartTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};