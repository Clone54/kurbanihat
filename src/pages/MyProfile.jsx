import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, User as UserIcon, Camera, Edit3, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const MyProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden"
      >
        <div className="h-48 bg-gradient-to-r from-emerald-600 to-teal-500 relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>

        <div className="px-8 pb-12 -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full border-8 border-white bg-white shadow-lg overflow-hidden">
                <img
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white border-4 border-white">
                <ShieldCheck size={20} />
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <h1 className="text-4xl font-black text-gray-900">{user.displayName}</h1>
              <p className="text-emerald-600 font-bold tracking-wide uppercase text-sm">Verified Member</p>
            </div>

            <button
              onClick={() => navigate('/update-profile')}
              className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold flex items-center space-x-2 hover:bg-emerald-600 transition-all shadow-lg shadow-gray-200"
              id="update-profile-nav-btn"
            >
              <Edit3 size={18} />
              <span>Update Information</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-50 pb-4">Account Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                    <UserIcon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</p>
                    <p className="text-lg font-medium text-gray-900">{user.displayName}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                    <p className="text-lg font-medium text-gray-900 italic">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-50 pb-4">Personalization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                    <Camera size={20} />
                  </div>
                  <div className="break-all">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Photo URL</p>
                    <p className="text-sm font-medium text-emerald-600 underline cursor-default line-clamp-1">
                      {user.photoURL || 'Not specified'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyProfile;
