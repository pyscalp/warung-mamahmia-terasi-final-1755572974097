import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      imageSrc: '/images/product_nasi_goreng.svg',
      title: 'Nasi Goreng Terasi Spesial',
      description: 'Nasi goreng dengan bumbu terasi rahasia Mamahmia, lengkap dengan telur dan kerupuk.',
      price: 'Rp 25.000',
    },
    {
      imageSrc: '/images/product_ayam_bakar.svg',
      title: 'Ayam Bakar Mamahmia',
      description: 'Ayam bakar empuk dengan bumbu meresap, disajikan dengan sambal terasi pedas.',
      price: 'Rp 35.000',
    },
    {
      imageSrc: '/images/product_sambal_terasi.svg',
      title: 'Sambal Terasi Juara',
      description: 'Sambal terasi segar, pedasnya pas, cocok untuk teman makan apa saja.',
      price: 'Rp 10.000',
    },
  ];

  return (
    <React.Fragment>
      <HeroSection />

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-secondary mb-8">Selamat Datang di Warung Mamahmia!</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Kami adalah Warung Mamahmia Terasi, tempat di mana tradisi kuliner Indonesia bertemu dengan sentuhan modern.
          Setiap hidangan kami dibuat dengan cinta, menggunakan bahan-bahan segar pilihan, dan tentu saja, terasi khas Mamahmia yang tak tertandingi.
          Mari rasakan kehangatan masakan rumahan yang autentik dan penuh cita rasa!
        </p>

        <h3 className="text-3xl font-bold text-center text-primary mb-8">Menu Unggulan Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button onClick={() => navigate('/gallery')} variant="secondary" className="text-lg">
            Lihat Semua Menu
          </Button>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 text-accent">Kenapa Memilih Kami?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Cita Rasa Autentik</h4>
              <p className="text-sm">Resep turun-temurun dengan bumbu terasi khas yang tak terlupakan.</p>
            </div>
            <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Bahan Segar Berkualitas</h4>
              <p className="text-sm">Kami hanya menggunakan bahan-bahan terbaik untuk setiap hidangan.</p>
            </div>
            <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Pelayanan Ramah</h4>
              <p className="text-sm">Nikmati pengalaman bersantap yang nyaman dan menyenangkan bersama kami.</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;