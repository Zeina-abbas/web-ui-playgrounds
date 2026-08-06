import { Link } from "react-router-dom";
import "./navBar.css";
import { useState } from "react";
const NavBar = ({ items, className }) => {
    const [showBars, setShowBars] = useState(false);

    return (
        <div className="navBar">
            <Link to="/">
                <img src="../public/images/brand_logo.png" alt="" />
            </Link>

            <ul className={`linkBars ${showBars ? "active" : ""}`}>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.href} onClick={() => setShowBars(false)} className={item.className || ""}>
                            {item.content}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/login" className="login">
                <button className="loginBtn">Login</button>
            </Link>
            <button onClick={() => setShowBars((prev) => !prev)} className="listImg">
                <img src="../public/images/barsicon.png" alt="" />
            </button>
        </div>
    );
};

export default NavBar;
