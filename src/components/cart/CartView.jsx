import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

const CartView = () => {
    const { cartList, getTotalItems, getTotalPrice, removeProduct, clearCart } =
        useCartContext();
    const [showCheckout, setShowCheckout] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const areAllFieldsCompleted = name && phone && email;

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
        } catch (error) {
        console.error("Error actualizando el stock en Firestore:", error);
        }

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
                        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                    </li>
                    ))}
                </ul>
                <p>Total de artículos: {getTotalItems()}</p>
                <p>Total a pagar: ${getTotalPrice()}</p>
                <button onClick={() => setShowCheckout(true)}>Finalizar compra</button>
                <button onClick={handleClearCart}>Vaciar Carrito</button>
                </>
            )}
            </>
        ) : (
            <div>
            <h3>Resumen de la Compra</h3>
            <ul>{}</ul>
            <p>Total a pagar: ${getTotalPrice()}</p>

            <form>
                <label>
                Nombre:{" "}
                <input
                    placeholder="Ingrese su nombre"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                </label>
                <br />
                <label>
                Teléfono:{" "}
                <input
                    placeholder="Ingrese su teléfono"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                />
                </label>
                <br />
                <label>
                Correo Electrónico:{" "}
                <input
                    placeholder="Ingrese su email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                </label>
                <br />
                <button
                onClick={handleCheckout}
                type="submit"
                disabled={!areAllFieldsCompleted}
                >
                Comprar
                </button>
            </form>
            </div>
        )}
        </div>
    );
};

export default CartView;
