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
        <img src={item.imagen} alt="imagen" />
        <p>Modelo: {item.modelo}</p>
        <p>Descripcion: {item.descripcion}</p>
        <p>Precio: ${item.precio}</p>
        <p>Stock: {item.stock}</p>
      </div>
      <div>
        <ItemCounter stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
