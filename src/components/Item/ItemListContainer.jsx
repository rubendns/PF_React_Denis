import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { brand } = useParams();

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        
        if (brand){
            const queryFilter = query(queryCollection, where("marca", "==", brand.toLowerCase()))
            getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch((err) =>  {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al cargar productos',
                    text: 'Hubo un problema al cargar los productos. Por favor, inténtalo de nuevo.',
                });
            });
        } else{ 
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch((err) =>  {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al cargar productos',
                    text: 'Hubo un problema al cargar los productos. Por favor, inténtalo de nuevo.',
                });
            });
        }
        
    }, [brand])

    return <div>
                {<ItemList products={products} />}
            </div>;
};

export default ItemListContainer;
