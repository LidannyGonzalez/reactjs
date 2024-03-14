import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"
function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Tenemos lo que necesitas' />
      <ItemCount stock={10}/>
      <h1>Bienvenido a Todo en Agendas</h1>
    </>
  )
}

export default App
