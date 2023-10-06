import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

const Navbar = () => {
    return (
        <>
        <div className="cart-container">
            <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/marca/iphone">Iphone</Link></li>
                <li><Link to="/marca/xiaomi">Xiaomi</Link></li>
                <li><Link to="/marca/samsung">Samsung</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <Cart className="cart"/>
            </ul>
            </nav>
        </div>
        </>
    );
};

export default Navbar;
