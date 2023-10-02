import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db, "products", id)
    getDoc(queryDoc)
    .then (resp=>({id: resp.id, ...resp.data()}))
    .then (resp => setItem(resp))
  }, [])

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
