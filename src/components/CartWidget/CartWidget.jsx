import React from "react";
import styles from "./CartWidget.module.css"; 
import carrito from "./assets/carrito.png";

const CartWidget = () => {
  return (
    <button className={styles.cartButton}>
      <img src={carrito} alt="carrito" className={styles.cartIcon} />
      <span className={styles.cartCount}>0</span>
    </button>
  );
};

export default CartWidget;
