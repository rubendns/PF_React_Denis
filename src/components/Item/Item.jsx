import { Link } from "react-router-dom";

const Item = ({ product }) => {

    return (
        <div className="product">
        <img src={product.imagen} />
        <p><u>Modelo:</u> {product.modelo}</p>
        <p><u>Precio:</u> ${product.precio}</p>
        <Link className="more" to={`/item/${product.id}`}>
            Ver más
        </Link>
        </div>
    );
};

export default Item;
