import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initFirebase } from './firebase/config';
import { CartContextProvider } from "./context/CartContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import ItemListContainer from "./components/Item/ItemListContainer";
import CartView from "./components/cart/CartView";


initFirebase()

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
                <Route path="/brand/:brand" element={<ItemListContainer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart-view" element={<CartView />} />
            </Routes>
            <Footer />
            </CartContextProvider>
        </BrowserRouter>
        </>
    );
}

export default App;
