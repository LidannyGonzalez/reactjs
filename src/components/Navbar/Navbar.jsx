import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; 
import CartWidget from "../CartWidget/CartWidget";
import cartIcon from "../../components/CartWidget/assets/carrito.png"; // Importa la imagen del icono del carrito



const Navbar = () => {
  return (
    <header className={styles.header}> 
      <h4><Link to="/">AgendasR&R</Link></h4>
      <nav> 
        <Link to='/category/agendas'>Agendas</Link>
        <Link to='/category/personalizacion'>Personalización</Link>
        <Link to='/category/stickers'>Stickers</Link>
      </nav>
      <Link to="/cart"> {/* Agrega un enlace al carrito */}
        <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
      </Link>
      <CartWidget className={styles.carButton} />
    </header>
  );
};

export default Navbar;
