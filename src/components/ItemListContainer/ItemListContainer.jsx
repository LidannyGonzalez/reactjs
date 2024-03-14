import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../Itemlist/Itemlist"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
    })            

    return (
        <main>
             <h1>{ greeting }</h1>
             <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer