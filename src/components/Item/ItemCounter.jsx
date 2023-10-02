import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemCounter = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1);
    const navigate = useNavigate();

    const handleIncrement = () => {
        if (counter < stock) {
        setCounter(counter + 1);
        }
    };

    const handleDecrement = () => {
        if (counter > 1) {
        setCounter(counter - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(counter);
    };

    const handleBuyNow = () => {
        onAdd(counter);
        navigate("/cart-view");
    };

    return (
        <>
        <h2>Seleccione cantidad</h2>
        <button onClick={handleDecrement}> - </button>
        <strong> {counter} </strong>
        <button onClick={handleIncrement}> + </button>
        <br />
        <button onClick={handleAddToCart}>
            <label>
            <strong>Agregar al carrito</strong>
            </label>
        </button>
        <br />
        <button onClick={handleBuyNow}>
            <label>
            <strong>Comprar ahora</strong>
            </label>
        </button>
        <br />
        <button onClick={() => navigate(-1)}>
            <label>
            <strong>Volver Atrás</strong>
            </label>
        </button>
        </>
    );
};
