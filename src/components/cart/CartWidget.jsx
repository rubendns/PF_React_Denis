import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartList } = useContext(CartContext);

  return (
    <div className="nav-item">
      <button>
        <Link to="/cart-view" >
          Ir al carrito 🛒 | {cartList.length}
      </Link>
      </button>
    </div>
  );
};

export default CartWidget;
