import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {
    const [products, setproducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
        .then(result => {
            setproducts(result)
        })

    }, [categoryId])            

    return (
        <main>
             <h1>{ greeting }</h1>
             <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer