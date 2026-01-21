import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Clients", path: "/clients" },
    { name: "Enquiry", path: "/enquiry" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={clsx(
          "fixed w-full z-50 top-0 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-4",
        )}
      >
        {/* Top Bar - Hidden on scroll for cleaner look */}
        <div
          className={clsx(
            "container mx-auto px-4 transition-all duration-300 overflow-hidden",
            scrolled ? "h-0 opacity-0" : "h-auto opacity-100 mb-2",
          )}
        >
          <div className="flex justify-between items-center text-sm text-gray-500 border-b border-gray-100 pb-2">
            <p className="hidden md:block">
              Complete Hotel Kitchen & Ventilation Solutions
            </p>
            <div className="flex space-x-6 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-primary" />
                <span>+91 9049506110</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-primary" />
                <span>info@visionairsolution.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Vision Air Solution"
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative font-medium text-gray-600 hover:text-primary transition-colors duration-300 group"
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-0.5 w-full bg-primary"
                  />
                )}
                <span className="absolute left-0 top-full block h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              to="/products"
              className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark transition shadow-md hover:shadow-lg active:scale-95 duration-200"
            >
              View Products
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[60px] w-full bg-white/95 backdrop-blur-xl shadow-xl z-40 border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-800 text-lg font-medium hover:text-primary py-2 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/products"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition shadow-md mt-4"
                onClick={() => setIsOpen(false)}
              >
                View Products
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
