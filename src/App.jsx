import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
          <Route path='/Item/:ItemId' element={<ItemDetailContainer />}/>
        </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
