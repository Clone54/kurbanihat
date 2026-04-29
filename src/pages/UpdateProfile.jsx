import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { toast } from 'react-hot-toast';
import { User as UserIcon, ImageIcon, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success('Information updated successfully!');
      navigate('/my-profile');
    } catch (error) {
      toast.error('Failed to update information.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-12 space-y-8"
      >
        <button
          onClick={() => navigate('/my-profile')}
          className="flex items-center space-x-2 text-gray-400 hover:text-emerald-600 font-bold transition-colors mb-4"
        >
          <ArrowLeft size={18} />
          <span>Back to Profile</span>
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl font-black text-gray-900">Update Profile</h1>
          <p className="text-gray-500 font-medium">Fine-tune your public identification</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Display Name</label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Photo URL</label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="url"
                  required
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono text-xs"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
             <button
               type="submit"
               disabled={isLoading}
               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
               id="update-info-btn"
             >
               {isLoading ? (
                 <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
               ) : (
                 <>
                   <span>Update Information</span>
                   <CheckCircle2 size={20} />
                 </>
               )}
             </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateProfile;
