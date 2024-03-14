import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; 
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <header className={styles.header}> 
      <h4>AgendasR&R</h4>
      <nav className={styles.nav}> 
        <Link to='/category/agendas'>Agendas</Link>
        <Link to='/category/personalizacion'>Personalización</Link>
        <Link to='/category/stickers'>Stickers</Link>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>
      </nav>
      <CartWidget className={styles.cartButton} /> 
    </header>
  );
};

export default Navbar;

