import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import './checkoutStyles.css'; // Importar el archivo CSS

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phone: ''
    });
    const { cart, getCartTotalPrice, clearCart } = useContext(CartContext); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const isFormValid = () => {
        const isValid =
            userData.name.trim() !== '' &&
            userData.lastName.trim() !== '' &&
            userData.email.trim() !== '' &&
            userData.email === userData.confirmEmail &&
            userData.phone.trim() !== '';
        return isValid;
    };

    const createOrder = async () => {
        try {
            setLoading(true);
            const total = getCartTotalPrice(); 

            const objOrder = {
                buyer: {
                    name: userData.name,
                    lastName: userData.lastName,
                    email: userData.email,
                    phone: userData.phone
                },
                items: cart,
                total: total
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);

            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;

            docs.forEach(doc => {
                const data = doc.data();
                const stockDb = data.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...data });
                }
            });

            if (outOfStock.length === 0) {
                batch.commit();

                const orderCollection = collection(db, 'orders');
                const { id } = await addDoc(orderCollection, objOrder);

                setOrderId(id);

                // Limpiar el carrito después de que se completa la orden
                clearCart();
            } else {
                console.error('Hay productos que no tienen stock disponible');
            }
        } catch (error) {
            console.error('Hubo un error en la generación de la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Su orden está siendo generada...</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
            <form className="checkout-form">
                <input type="text" name="name" placeholder="Nombre" value={userData.name} onChange={handleInputChange} required />
                <input type="text" name="lastName" placeholder="Apellido" value={userData.lastName} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Correo electrónico" value={userData.email} onChange={handleInputChange} required />
                <input type="email" name="confirmEmail" placeholder="Confirmar correo electrónico" value={userData.confirmEmail} onChange={handleInputChange} required />
                <input type="tel" name="phone" placeholder="Teléfono" value={userData.phone} onChange={handleInputChange} required />
            </form>
            <button className="checkout-button" onClick={createOrder} disabled={!isFormValid()}>Finalizar compra</button>
        </div>
    );
};

export default Checkout;
