import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Tenemos lo que necesitas' />
      <h1>Bienvenido a Todo en Agendas</h1>
    </>
  )
}

export default App
