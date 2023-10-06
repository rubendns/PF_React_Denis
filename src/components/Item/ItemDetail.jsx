import { useCartContext } from "../../context/CartContext";
import ItemCounter from './ItemCounter';

const ItemDetail = ({ item }) => {
  const { addProduct } = useCartContext();

  const onAdd = (count) => {
    addProduct({ ...item, quantity: count });
  };

  return (
    <div className="col">
      <h2>Detalle del producto</h2>
      <div className="item">
        
        <img className="item" src={item.imagen} alt="imagen" />
        <p><u>Modelo:</u> {item.modelo}</p>
        <p><u>Descripcion:</u> {item.descripcion}</p>
        <p><u>Precio</u>: ${item.precio}</p>
        <p><u>Stock:</u> {item.stock}</p>
      </div>
      <div>
        <ItemCounter stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
