import "./style.css";
import LOGO from "../../assets/Nomzo.png";
import CART from "../../assets/carts.png";
// Header Component
const Header = () => {
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
