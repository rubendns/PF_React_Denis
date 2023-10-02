import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contacto from "./components/contact/Contact";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import ItemListContainer from "./components/Item/ItemListContainer";
import { CartContextProvider } from "./context/CartContext";
import CartView from "./components/Cart/CartView";

function App() {
    return (
        <>
        <BrowserRouter>
            <CartContextProvider>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/marca/:marca" element={<ItemListContainer />} />
                <Route path="/marca/:marca" element={<ItemListContainer />} />
                <Route path="/marca/:marca" element={<ItemListContainer />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/cart-view" element={<CartView />} />
            </Routes>
            <Footer />
            </CartContextProvider>
        </BrowserRouter>
        </>
    );
}

export default App;
