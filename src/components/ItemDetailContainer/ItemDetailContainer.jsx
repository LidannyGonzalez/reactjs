import { useState, useEffect } from "react";
import { getProductById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [products, setproducts] = useState(null)

    const { ItemId } = useParams()

    useEffect(() => {
        getProductById(ItemId)
            .then(result => {
                setproducts(result)
            })
    }, [ItemId])
    
    return (
        <main>
            <h1>Detalle de producto</h1>
            <ItemDetail { ...products}/>
        </main>
    )
}

export default ItemDetailContainer