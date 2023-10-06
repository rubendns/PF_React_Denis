import { Link } from "react-router-dom";

const Item = ({ product }) => {

    return (
        <div className="producto">
        <img src={product.imagen} />
        <p><u>Modelo:</u> {product.modelo}</p>
        <p><u>Precio:</u> ${product.precio}</p>
        <Link className="ver-mas" to={`/item/${product.id}`}>
            Ver más
        </Link>
        </div>
    );
};

export default Item;
