import React from 'react';
import { Package, Truck, Users, Clock } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Package,
      title: 'Dine-in Nyaman',
      description: 'Nikmati suasana hangat dan nyaman di warung kami. Tempat yang sempurna untuk makan siang atau makan malam bersama keluarga dan teman.',
      details: [
        'Area makan yang bersih dan luas',
        'Pelayanan ramah dan cepat',
        'Suasana kekeluargaan',
      ],
    },
    {
      icon: Truck,
      title: 'Layanan Pesan Antar',
      description: 'Tidak sempat datang? Kami siap mengantar hidangan favorit Anda langsung ke pintu rumah atau kantor. Praktis dan cepat!',
      details: [
        'Pengiriman cepat dan aman',
        'Area jangkauan luas',
        'Pemesanan mudah melalui telepon atau aplikasi',
      ],
    },
    {
      icon: Users,
      title: 'Catering Acara Khusus',
      description: 'Rayakan momen spesial Anda dengan hidangan lezat dari Warung Mamahmia Terasi. Kami melayani pesanan catering untuk berbagai acara.',
      details: [
        'Menu disesuaikan kebutuhan',
        'Porsi besar untuk berbagai acara',
        'Kualitas rasa terjamin',
      ],
    },
    {
      icon: Clock,
      title: 'Takeaway Cepat',
      description: 'Untuk Anda yang sibuk, layanan takeaway kami memungkinkan Anda menikmati hidangan Mamahmia di mana saja dan kapan saja.',
      details: [
        'Pemesanan via telepon atau langsung',
        'Pengemasan rapi dan higienis',
        'Siap dalam waktu singkat',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold text-center text-secondary mb-10">Layanan Kami</h1>

      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Warung Mamahmia Terasi berkomitmen untuk memberikan pengalaman kuliner terbaik bagi Anda.
        Kami menyediakan berbagai layanan untuk memenuhi kebutuhan Anda, mulai dari bersantap di tempat hingga catering untuk acara spesial.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-6">
              <service.icon size={64} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-center text-primary mb-4">{service.title}</h2>
            <p className="text-gray-600 text-center mb-6">{service.description}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-accent mr-2">&bull;</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-accent text-secondary p-8 rounded-lg shadow-lg mt-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Punya Pertanyaan Lebih Lanjut?</h3>
        <p className="text-lg mb-6">Jangan ragu untuk menghubungi kami untuk informasi lebih detail mengenai layanan kami atau untuk membuat pesanan khusus.</p>
        <a href="/contact" className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors duration-300">
          Hubungi Kami Sekarang
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;