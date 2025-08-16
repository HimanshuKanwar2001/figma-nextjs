"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "About Us",
    "Academics",
    "For Students",
    "Research & Development",
    "Innovation & Entrepreneurship",
    "Institute Facilities",
    "Contact Us",
  ];

  return (
    <nav className="bg-[#2F3472] text-white">
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-wrap justify-around items-center p-2">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="hover:underline transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center p-4">
        <span className="font-bold">Menu</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-[#2F3472]">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline border-b border-white/20 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
