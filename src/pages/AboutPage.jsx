import React from 'react';
import { Users, Heart, Check } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold text-center text-secondary mb-10">Tentang Warung Mamahmia Terasi</h1>

      <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
        <div className="md:w-1/2">
          <img
            src="/images/about_mamahmia.svg"
            alt="Mamahmia"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-3xl font-bold text-primary mb-4">Kisah di Balik Kelezatan</h2>
          <p className="text-lg leading-relaxed mb-4">
            Warung Mamahmia Terasi lahir dari kecintaan mendalam pada kuliner Indonesia, khususnya masakan rumahan yang kaya akan bumbu dan rempah.
            Berawal dari resep keluarga turun-temurun yang selalu menjadi favorit di setiap acara kumpul, Mamahmia memutuskan untuk berbagi kelezatan ini kepada khalayak luas.
            Nama "Mamahmia" sendiri adalah perpaduan dari panggilan akrab sang pendiri, yang selalu memasak dengan hati, dan "mia" yang berarti milikku, menunjukkan keunikan dan kepemilikan resep asli.
          </p>
          <p className="text-lg leading-relaxed">
            Fokus utama kami adalah terasi, bumbu khas Indonesia yang seringkali menjadi bintang utama dalam masakan. Kami mengolah terasi pilihan dengan teknik khusus, menghasilkan aroma dan rasa yang kuat namun seimbang, tidak terlalu menyengat, justru menambah kedalaman rasa pada setiap hidangan.
            Setiap piring yang kami sajikan adalah cerminan dari dedikasi kami untuk melestarikan cita rasa autentik Nusantara.
          </p>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-center text-accent mb-6">Filosofi Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users size={48} className="mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Komunitas & Keluarga</h3>
            <p className="text-sm">Kami percaya makanan adalah perekat sosial. Warung kami adalah tempat berkumpulnya keluarga dan teman.</p>
          </div>
          <div className="flex flex-col items-center">
            <Heart size={48} className="mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Masak dengan Hati</h3>
            <p className="text-sm">Setiap hidangan dibuat dengan cinta dan perhatian, seolah-olah untuk keluarga sendiri.</p>
          </div>
          <div className="flex flex-col items-center">
            <Check size={48} className="mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Kualitas Tanpa Kompromi</h3>
            <p className="text-sm">Kami hanya menggunakan bahan-bahan segar dan berkualitas tinggi untuk menjamin rasa terbaik.</p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-700">
        <h2 className="text-3xl font-bold text-secondary mb-4">Visi Kami</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Menjadi warung makan terkemuka yang dikenal akan kelezatan masakan rumahan autentik dengan sentuhan terasi khas,
          serta menjadi destinasi kuliner favorit bagi pecinta makanan Indonesia di seluruh penjuru.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;