import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ItemCounter = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [productAvailable, setProductAvailable] = useState(stock > 0);
  const navigate = useNavigate();

  useEffect(() => {
    setProductAvailable(stock > 0);
  }, [stock]);

  const handleIncrement = () => {
    if (counter < stock) {
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const handleAction = () => {
    if (productAvailable) {
      onAdd(counter);
    } else {
      alert("¡Lo siento, este producto está agotado!");
    }
  };

  return (
    <>
      <h2>Seleccione cantidad</h2>
      <button onClick={handleDecrement} disabled={!productAvailable}> - </button>
      <strong> {counter} </strong>
      <button onClick={handleIncrement} disabled={counter >= stock}> + </button>
      <br />
      <button onClick={handleAction} disabled={!productAvailable && counter === 1}>
        <strong>{productAvailable ? "Agregar al carrito" : "Producto Agotado"}</strong>
      </button>
      <br />
      <button onClick={() => navigate(-1)}>
        <strong>Volver Atrás</strong>
      </button>
    </>
  );
};

export default ItemCounter;
