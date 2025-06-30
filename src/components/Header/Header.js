import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import LOGO from "../../assets/Nomzo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-white shadow-lg">
      {/* Header Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img className="w-12 h-12" src={LOGO} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Login/Logout Button */}
          <Button
            variant="contained"
            color={btnName === "Login" ? "success" : "error"}
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </Button>
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center">
          <IconButton>
            <Badge badgeContent={2} color="primary" overlap="circular">
              <ShoppingCartIcon fontSize="medium" />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
