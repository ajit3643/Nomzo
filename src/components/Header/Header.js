import "./style.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import LOGO from "../../assets/Nomzo.png";
import { useState } from "react";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

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
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </Button>
        </ul>
      </div>
      <div className="cart">
        <IconButton>
          <ShoppingCartIcon fontSize="small" />
          <CartBadge badgeContent={2} color="primary" overlap="circular" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
