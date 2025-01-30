"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-white tracking-wide">
          Media<span className="text-purple-500">Boss</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`} className="text-white text-lg font-semibold hover:text-purple-500 transition">
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md absolute w-full left-0 top-16 py-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-4 items-center">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <Link key={index} href={`/${item.toLowerCase()}`} className="text-white text-lg font-semibold hover:text-purple-500 transition" onClick={() => setNavOpen(false)}>
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
