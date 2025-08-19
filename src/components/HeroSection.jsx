import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-cover bg-center h-[60vh] md:h-[70vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/hero_background.svg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg text-accent">
          Warung Mamahmia Terasi
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md">
          Rasakan Kelezatan Otentik Masakan Rumahan dengan Sentuhan Terasi Khas yang Menggugah Selera!
        </p>
        <Button onClick={() => navigate('/gallery')} variant="primary" className="text-lg px-8 py-4">
          Lihat Menu Kami
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;