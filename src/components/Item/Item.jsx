import { Link } from "react-router-dom";

const Item = ({ product }) => {
  //   console.log(product);
    return (
        <div className="producto">
        <img src={product.imagen} />
        <p>Modelo: {product.modelo}</p>
        <p>Precio: ${product.precio}</p>
        <Link className="ver-mas" to={`/item/${product.id}`}>
            Ver más
        </Link>
        </div>
    );
};

export default Item;
