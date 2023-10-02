import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const CartView = () => {
    const { cartList, getTotalItems, getTotalPrice, removeProduct, clearCart } =
        useCartContext();
    const [showCheckout, setShowCheckout] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = () => {
        clearCart();
        alert("¡Compra finalizada! Carrito vaciado.");
        navigate("/");
    };

    const handleClearCart = () => {
        clearCart();
        alert("Carrito vaciado.");
    };

    return (
        <div>
        {!showCheckout ? (
            <>
            <h2>Carrito de Compras</h2>
            {cartList.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                <ul>
                    {cartList.map((product) => (
                    <li key={product.id}>
                        {product.modelo} - Cantidad: {product.quantity} - Precio: $
                        {product.precio * product.quantity}
                        <button onClick={() => removeProduct(product.id)}>
                        Eliminar
                        </button>
                    </li>
                    ))}
                </ul>
                <p>Total de artículos: {getTotalItems()}</p>
                <p>Total a pagar: ${getTotalPrice()}</p>

                <button onClick={() => setShowCheckout(true)}>
                    Finalizar compra
                </button>
                <button onClick={handleClearCart}>Vaciar Carrito</button>
                </>
            )}
            </>
        ) : (
            <div>
            <h3>Resumen de la Compra</h3>
            <ul>
                {cartList.map((product) => (
                <li key={product.id}>
                    {product.modelo} - Cantidad: {product.quantity} - Precio: $
                    {product.precio * product.quantity}
                </li>
                ))}
            </ul>
            <p>Total a pagar: ${getTotalPrice()}</p>
            <button onClick={handleCheckout}>Comprar</button>
            </div>
        )}
        </div>
    );
};

export default CartView;
