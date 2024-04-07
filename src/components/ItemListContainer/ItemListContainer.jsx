import { useState, useEffect, memo } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";

const ItemListMemoized = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState();
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        );

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error("Error loading products:", error);
            });
    }, [categoryId]);

    return (
        <div style={{ background: 'orange' }} onClick={() => console.log('Hiciste clic en ItemListContainer')}>
            <h1>{greeting}</h1>
            <ItemListMemoized products={products} />
        </div>
    );
};

export default ItemListContainer;
