import { Link } from "react-router-dom";
import Cart from "../cart/Cart";

const Navbar = () => {
    return (
        <>
        <div className="cart-container">
            <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/brand/iphone">Iphone</Link></li>
                <li><Link to="/brand/xiaomi">Xiaomi</Link></li>
                <li><Link to="/brand/samsung">Samsung</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <Cart className="cart"/>
            </ul>
            </nav>
        </div>
        </>
    );
};

export default Navbar;
