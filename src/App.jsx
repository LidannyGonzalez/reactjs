import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importa CartProvider solo aquí
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // Corrige la ruta de importación
import CartView from "./components/CartView/CartView";
import Checkout from './components/Checkout/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; // Asegúrate de importar ItemDetailContainer si se necesita
import "./styles/styles.css";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <CartProvider> {/* Envuelve toda la aplicación con CartProvider */}
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'} />} />
                        <Route path='/item/:itemId' element={<ItemDetailContainer />} /> {/* Agrega la ruta para ItemDetailContainer */}
                        <Route path='/cart' element={<CartView />} />
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    );
};
export default App;