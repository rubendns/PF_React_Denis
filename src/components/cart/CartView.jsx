import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const CartView = () => {
    const navigate = useNavigate();
    const { cartList, getTotalItems, getTotalPrice, removeProduct, clearCart } =
        useCartContext();
    const [showCheckout, setShowCheckout] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const [formValidation, setFormValidation] = useState({
        name: false,
        phone: false,
        email: false,
    });

    const handleNameChange = (e) => {
        setFormData({ ...formData, name: e.target.value });
        setFormValidation({ ...formValidation, name: e.target.value.trim() !== "" });
    };

    const handlePhoneChange = (e) => {
        setFormData({ ...formData, phone: e.target.value });
        setFormValidation({ ...formValidation, phone: e.target.value.trim() !== "" });
    };

    const handleEmailChange = (e) => {
        setFormData({ ...formData, email: e.target.value });
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setFormValidation({ ...formValidation, email: emailRegex.test(e.target.value) });
    };

    const areAllFieldsCompleted =
        formValidation.name && formValidation.phone && formValidation.email;

    const handleCheckout = async () => {
        try {
            const db = getFirestore();
            for (const product of cartList) {
                const docRef = doc(db, "products", product.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const currentStock = docSnap.data().stock;
                    const newStock = currentStock - product.quantity;
                    await updateDoc(docRef, { stock: newStock });
                }
            }
            clearCart();
            Swal.fire({
                title: "Compra finalizada!",
                text: "¡Gracias por tu compra!",
                icon: "success",
                confirmButtonText: "OK"
            }).then(() => {
                navigate("/");
            });
        } catch (error) {
            console.error("Error actualizando el stock en Firestore:", error);
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al procesar la compra. Por favor, inténtalo de nuevo.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    };

    const handleClearCart = () => {
        clearCart();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "El carrito se vació correctamente",
            showConfirmButton: false,
            timer: 1500
        })
    };

    const handleRemoveProduct = (productId) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción quitará el producto del carrito.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, quitarlo",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                removeProduct(productId);
                Swal.fire(
                    "Eliminado",
                    "El producto ha sido quitado del carrito.",
                    "success"
                );
            }
        });
    };

    return (
        <div>
            {!showCheckout ? (
                <>
                    <h2>Carrito de Compras</h2>
                    {cartList.length === 0 ? (
                        <h3><strong>El carrito está vacío</strong></h3>
                    ) : (
                        <>
                            <ul className="cart-list">
                                {cartList.map((product) => (
                                    <li  key={product.id}>
                                        Bateria para {product.modelo} - Cantidad: {product.quantity} - Precio: $ {product.precio * product.quantity}
                                        <button onClick={() => handleRemoveProduct(product.id)}>Eliminar</button>
                                    </li>
                                ))}
                            </ul>
                            <h3><u>Total de artículos</u>: {getTotalItems()}</h3>
                            <p className="cart-view">Total a pagar: ${getTotalPrice()}</p>
                            <button onClick={() => setShowCheckout(true)}>Finalizar compra</button>
                            <button onClick={handleClearCart}>Vaciar Carrito</button>
                        </>
                    )}
                </>
            ) : (
                <div>
                    <h3>Resumen de la Compra</h3>
                    <ul className="cart-list">
                                {cartList.map((product) => (
                                    <li  key={product.id}>
                                        Bateria para {product.modelo} - Cantidad: {product.quantity} 
                                    </li>
                                ))}
                            </ul>
                    <h3>Total a pagar: ${getTotalPrice() || 0}</h3>
                    <form className="form">
                        <label className="form-label"> Nombre:{" "}
                            <input placeholder="Ingrese su nombre" type="text" value={formData.name} onChange={handleNameChange} required/>
                        </label>
                        <br />
                        <label className="form-label"> Teléfono:{" "}
                            <input placeholder="Ingrese su teléfono" type="number" value={formData.phone} onChange={handlePhoneChange} required/>
                        </label>
                        <br />
                        <label className="form-label"> Correo Electrónico:{" "}
                            <input placeholder="Ingrese su email" type="email" value={formData.email} onChange={handleEmailChange} required/>
                        </label>
                        <br />
                        <button type="button" onClick={handleCheckout} disabled={!areAllFieldsCompleted}>
                            Comprar
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CartView;
