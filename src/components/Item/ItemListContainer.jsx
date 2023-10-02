import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { marca } = useParams();

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        
        if (marca){
            const queryFilter = query(queryCollection, where("marca", "==", marca.toLowerCase()))
            getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch((err) => console.log(err));
        } else{ 
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch((err) => console.log(err));
        }
        
    }, [marca])

    return <div>{<ItemList products={products} />}</div>;
};

export default ItemListContainer;
