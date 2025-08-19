import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Users, Package, Image, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Tentang Kami', path: '/about', icon: Users },
    { name: 'Layanan', path: '/services', icon: Package },
    { name: 'Galeri', path: '/gallery', icon: Image },
    { name: 'Kontak', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="bg-primary p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold hover:text-accent transition-colors duration-300">
          Warung Mamahmia Terasi
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-white text-lg font-medium hover:text-accent transition-colors duration-300 ${
                  isActive ? 'text-secondary font-bold' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary mt-2 pb-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-white text-lg hover:bg-secondary transition-colors duration-300 ${
                  isActive ? 'bg-secondary font-bold' : ''
                }`
              }
            >
              <link.icon className="inline-block mr-2" size={20} />
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;