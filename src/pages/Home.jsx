import React from 'react';
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import animalsData from '../data/animals.json';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, ShieldCheck, HeartPulse } from 'lucide-react';

const Home = () => {
  const featuredAnimals = animalsData.slice(0, 4);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Premium <span className="text-emerald-400">Livestock</span> for your Holy Qurbani
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Explore the finest selection of cows and goats from verified farms across Bangladesh. Healthy, ethical, and ready for your booking.
            </p>
            <div className="pt-4">
              <Link
                to="/animals"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-emerald-900/40"
                id="hero-browse-btn"
              >
                Browse Animals
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Animals</h2>
            <div className="w-20 h-1.5 bg-emerald-600 rounded-full"></div>
          </div>
          <Link to="/animals" className="text-emerald-600 font-bold hover:underline mb-2">
            View All Collection →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Most Wanted Breeds</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Discover the most popular and respected breeds sought after for Qurbani every year.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-600">
             <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="border border-red-500 rounded-3xl p-2"><img src="/images/deshishahi.png" alt="" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deshi Shahi</h3>
                <p className="text-sm">The local pride of Bangladesh. Known for its distinct red color and lean meat quality.</p>
             </div>
             <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="border border-red-500 rounded-3xl p-2"><img src="/images/brahmanbull.png" alt="" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brahman</h3>
                <p className="text-sm">The heavyweights. Famous for their massive humps and superior growth rates.</p>
             </div>
             <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="border border-red-500 rounded-3xl p-2"><img src="/images/jamunapariking.png" alt="" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jamunapari</h3>
                <p className="text-sm">The elegant king of goats. Prized for their height and large frames.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Essential Qurbani Tips</h2>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Health Check", text: "Ensure the eyes are bright and the animal is active with no visible wounds." },
                  { icon: HeartPulse, title: "Natural Feeding", text: "Look for animals fed on grass and natural grains rather than growth stimulants." },
                  { icon: CheckCircle2, title: "Age Verification", text: "Cows should be at least 2 years old and goats 1 year old for Qurbani." },
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-2 bg-emerald-800 rounded-lg text-emerald-400">
                      <tip.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{tip.title}</h4>
                      <p className="text-emerald-100/70 text-sm">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
               <img
                  src="/images/hat1.png"
                  alt="Tips Section Image"
                  className="rounded-2xl shadow-2xl rotate-3"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
