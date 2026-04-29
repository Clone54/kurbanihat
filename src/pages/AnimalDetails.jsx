import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animalsData from '../data/animals.json';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { MapPin, Scale, Calendar, BadgeCheck, Phone, Mail, User as UserIcon, Home as HomeIcon } from 'lucide-react';
import { motion } from 'motion/react';

const AnimalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const animal = animalsData.find((a) => a.id === parseInt(id || '0'));

  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    address: '',
  });

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Animal not found</h2>
          <button onClick={() => navigate('/animals')} className="text-emerald-600 mt-4 underline">Back to all animals</button>
        </div>
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please login to book an animal');
      navigate('/login');
      return;
    }

    const message = `*QurbaniHat Booking Request*%0A%0A` +
      `*Animal Details:*%0A` +
      `- Name: ${animal.name}%0A` +
      `- Breed: ${animal.breed}%0A` +
      `- Price: ৳${animal.price.toLocaleString()}%0A%0A` +
      `*Customer Information:*%0A` +
      `- Name: ${formData.name}%0A` +
      `- Email: ${formData.email}%0A` +
      `- Phone: ${formData.phone}%0A` +
      `- Address: ${formData.address}`;

    const whatsappUrl = `https://wa.me/8801871528249?text=${message}`;

    toast.success('Redirecting to WhatsApp...', {
      duration: 3000,
      icon: '💬',
    });

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: user?.displayName || '',
      email: user?.email || '',
      phone: '',
      address: '',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <img src={animal.image} alt={animal.name} className="w-full h-[500px] object-cover" />
          </motion.div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900">{animal.name}</h1>
                <p className="text-emerald-600 font-bold text-lg mt-1">{animal.breed} • {animal.type}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-emerald-600">৳ {animal.price.toLocaleString()}</p>
                <p className="text-sm text-gray-400 font-medium leading-none mt-1 text-nowrap">Excluding Delivery</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">{animal.description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-50">
              <div className="flex flex-col items-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <Scale className="text-emerald-600 mb-2" size={24} />
                <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Weight</span>
                <span className="text-lg font-bold text-gray-900">{animal.weight} kg</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <Calendar className="text-blue-600 mb-2" size={24} />
                <span className="text-xs text-blue-800 font-bold uppercase tracking-wider">Age</span>
                <span className="text-lg font-bold text-gray-900">{animal.age} yrs</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-purple-50 rounded-2xl border border-purple-100">
                <MapPin className="text-purple-600 mb-2" size={24} />
                <span className="text-xs text-purple-800 font-bold uppercase tracking-wider">Origin</span>
                <span className="text-lg font-bold text-gray-900">{animal.location}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-emerald-700 bg-emerald-50 p-4 rounded-xl border border-emerald-100 font-medium">
               <BadgeCheck size={20} />
               <span>Verified Healthy & Religious Compliant</span>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 h-fit">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Secure Booking</h2>
                <p className="text-gray-400">Fill in the details below to initialize your booking. We will contact you within 2-4 hours.</p>
              </div>

              {!user ? (
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center space-y-4">
                    <p className="text-gray-300">You must be logged in to book an animal.</p>
                    <button
                      onClick={() => navigate('/login')}
                      className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold transition-all w-full"
                    >
                      Login to Book
                    </button>
                 </div>
              ) : (
                <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest pl-1">Full Name</label>
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white/10 transition-all text-white"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest pl-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white/10 transition-all text-white font-mono"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest pl-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white/10 transition-all text-white font-mono"
                        placeholder="+880 1XXX XXXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest pl-1">Address</label>
                    <div className="relative">
                      <HomeIcon className="absolute left-4 top-4 text-gray-500" size={18} />
                      <textarea
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 h-32 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white/10 transition-all text-white resize-none"
                        placeholder="House 12, Road 4, Section..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl text-lg shadow-xl shadow-emerald-950/20 active:scale-[0.98] transition-all mt-4"
                    id="submit-booking-btn"
                  >
                    Confirm Booking Request
                  </button>
                  <p className="text-center text-[10px] text-gray-500 font-medium uppercase tracking-tighter">
                    No payment required upfront. Total booking fee ৳0.00
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
