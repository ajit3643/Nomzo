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
    <div className="bg-white shadow-lg">
      {/* Header Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-12 h-12" src={LOGO} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Contact
              </a>
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
