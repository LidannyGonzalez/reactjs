import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Asegúrate de importar CartContext desde el archivo correcto
import { Link } from 'react-router-dom'; 

const CartView = () => {
    const { cart, getCartTotalPrice } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de compras</h2>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <span>Cantidad: {item.quantity}</span>
                                <span>Precio unitario: ${item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${getCartTotalPrice()}</p>
                    <Link to='/checkout'>Finalizar compra</Link>
                </>
            ) : (
                <p>No hay productos en el carrito</p>
            )}
        </div>
    );
};

export default CartView;