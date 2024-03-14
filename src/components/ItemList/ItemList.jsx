const ItemList = ({products}) => {
    return (
        <section>
            {
                products.map(product => {
                    return <p key={product.id}>{product.name}</p>
                })
            }
        </section>
    )
}

export default ItemList