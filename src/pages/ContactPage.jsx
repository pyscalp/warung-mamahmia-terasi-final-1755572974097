import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../components/Button';

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // In a real app, you'd send this to a backend
    toast.success('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold text-center text-secondary mb-10">Hubungi Kami</h1>

      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Kami senang mendengar dari Anda! Jangan ragu untuk menghubungi kami untuk pertanyaan, pemesanan, atau masukan.
        Tim kami siap membantu Anda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Informasi Kontak</h2>
          <ul className="space-y-6 text-gray-700 text-lg">
            <li className="flex items-center">
              <MapPin size={28} className="mr-4 text-accent" />
              <div>
                <span className="font-semibold">Alamat:</span><br />
                Jl. Kenangan Indah No. 123, Kebayoran Baru, Jakarta Selatan, 12345
              </div>
            </li>
            <li className="flex items-center">
              <Phone size={28} className="mr-4 text-accent" />
              <div>
                <span className="font-semibold">Telepon:</span><br />
                (021) 123-4567
              </div>
            </li>
            <li className="flex items-center">
              <Mail size={28} className="mr-4 text-accent" />
              <div>
                <span className="font-semibold">Email:</span><br />
                info@mamahmiaterasi.com
              </div>
            </li>
            <li className="flex items-center">
              <Clock size={28} className="mr-4 text-accent" />
              <div>
                <span className="font-semibold">Jam Operasional:</span><br />
                Senin - Sabtu: 09:00 - 21:00 WIB<br />
                Minggu: Tutup
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Kirim Pesan kepada Kami</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Nama lengkap wajib diisi' })}
                className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Nama Anda"
              />
              {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Alamat email tidak valid'
                  }
                })}
                className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                placeholder="email@contoh.com"
              />
              {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Pesan Anda
              </label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Pesan wajib diisi' })}
                className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" variant="primary" className="w-full py-3">
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-12 bg-gray-200 rounded-lg shadow-lg overflow-hidden h-80 flex items-center justify-center text-gray-600 text-xl font-semibold">
        <MapPin size={48} className="mr-4" /> Lokasi Warung Mamahmia Terasi (Placeholder Peta)
      </div>
    </div>
  );
};

export default ContactPage;