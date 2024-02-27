import React from "react";
import styles from "./Navbar.module.css"; 
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <header className={styles.header}> 
      <h4>AgendasR&R</h4>
      <nav className={styles.nav}> 
        <a href="/">Agendas</a>
        <a href="/">Personalizacion</a>
        <a href="/">Stickers</a>
      </nav>
      <CartWidget className={styles.cartButton} /> 
    </header>
  );
};

export default Navbar;
