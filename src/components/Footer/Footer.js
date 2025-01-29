import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">Nomzo</h2>
            <p className="mt-2 text-sm">
              Delivering delicious food to your doorstep, fast and fresh. Order
              now!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-2 text-sm">ajitinfotech28@gmail.com</p>
            <p className="text-sm">8789387512</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <FaFacebook className="hover:text-blue-500" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-red-500" />
              </a>
              <a href="#">
                <FaXTwitter className="hover:text-gray-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Nomzo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
