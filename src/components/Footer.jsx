import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <footer className="bg-secondary text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-accent">Warung Mamahmia Terasi</h3>
          <p className="text-sm">
            Menyajikan hidangan lezat dengan sentuhan terasi khas Mamahmia. Rasakan kelezatan masakan rumahan yang otentik dan menggugah selera.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-accent">Tautan Cepat</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-white hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-accent">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MapPin size={18} className="mr-2 text-primary" />
              Jl. Kenangan Indah No. 123, Jakarta
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-2 text-primary" />
              (021) 123-4567
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-2 text-primary" />
              info@mamahmiaterasi.com
            </li>
            <li className="flex items-center">
              <Clock size={18} className="mr-2 text-primary" />
              Senin - Sabtu: 09:00 - 21:00
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary mt-8 pt-4 text-center text-sm">
        <p>&copy; {currentYear} Warung Mamahmia Terasi. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;