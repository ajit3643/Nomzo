import "./style.css";
import LOGO from "../../assets/Nomzo.png";
import CART from "../../assets/carts.png";
import { useState } from "react";
// Header Component
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <button
            className="button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
      <div className="cart">
        <img src={CART} alt="cart-icon" />
        <span>3</span>
      </div>
    </div>
  );
};

export default Header;
