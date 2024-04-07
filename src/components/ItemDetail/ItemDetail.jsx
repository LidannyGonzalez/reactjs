import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);
    
    const handleChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (!isNaN(newValue) && newValue <= stock) {
            setCount(newValue);
        }
    };

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [inputType, setInputType] = useState('button');
    const [quantity, setQuantity] = useState(0);
    const ItemCount = inputType === 'input' ? InputCount : ButtonCount;
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (count) => {
        console.log('Producto a agregar:', { id, name, price }, 'Cantidad:', count);
        addItem({ id, name, price }, count); // Pasar solo la cantidad al llamar a addItem
        setQuantity(count); // Actualizar la cantidad en el estado local
    };

    console.log('Cantidad actual en el estado local:', quantity);

    return (
        <article>
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100 }}/>
            </picture>
            <section>
                <p>Categoría: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: {price}</p>
            </section>
            <footer>
                {quantity === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock}/>
                ) : (
                    <>
                        <Link to='/carrito'>Finalizar compra</Link>
                    </>
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;