import React from 'react';
import ProductCard from '../components/ProductCard';

const GalleryPage = () => {
  const products = [
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
    {
      imageSrc: '/images/product_sop_buntut.svg',
      title: 'Sop Buntut Mamahmia',
      description: 'Sop buntut dengan kuah kaldu kaya rasa, daging empuk, dan rempah pilihan.',
      price: 'Rp 45.000',
    },
    {
      imageSrc: '/images/product_sate_ayam.svg',
      title: 'Sate Ayam Madura',
      description: 'Sate ayam empuk dengan bumbu kacang khas Madura, disajikan dengan lontong.',
      price: 'Rp 30.000',
    },
    {
      imageSrc: '/images/product_es_teh.svg',
      title: 'Es Teh Manis Segar',
      description: 'Minuman pelepas dahaga yang sempurna setelah menikmati hidangan pedas.',
      price: 'Rp 8.000',
    },
    {
      imageSrc: '/images/product_ikan_bakar.svg',
      title: 'Ikan Bakar Jimbaran',
      description: 'Ikan segar dibakar dengan bumbu Jimbaran khas, disajikan dengan sambal matah.',
      price: 'Rp 40.000',
    },
    {
      imageSrc: '/images/product_tahu_tempe.svg',
      title: 'Tahu Tempe Penyet',
      description: 'Tahu dan tempe goreng renyah disajikan dengan sambal penyet pedas.',
      price: 'Rp 15.000',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold text-center text-secondary mb-10">Galeri Hidangan Kami</h1>

      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Jelajahi kelezatan visual dari hidangan-hidangan unggulan Warung Mamahmia Terasi.
        Setiap gambar adalah janji akan cita rasa yang tak terlupakan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;