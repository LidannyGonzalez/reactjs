//import Item from "../Item/Item"

//const ItemList = ({products}) => {
//    return (
//        <section>
//            {
//                products.map(products => {
//                    return <Item key={products.id} { ...products}/>
//                })
//            }
//        </section>
//    )
//}

//export default ItemList

import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ display: 'flex', flexDirection: 'column'}} onClick={() => console.log('hice click en itemlist')}>
            {
                products?.map((product) => {
                    // return <Item key={product.id} id={product.id} name={product.name} img={product.img} price={product.price}/>
                    return <Item key={product.id} {...product}/>
                    // return <Item key={product.id} product={product}/>
                })
            }
        </div>
        </div>
    )
}
export default ItemList