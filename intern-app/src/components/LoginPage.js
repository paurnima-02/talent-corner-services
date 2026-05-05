import React from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-xl border border-purple-100"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-purple-700 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Talent Corner <span className="text-purple-700">Services</span>
          </h1>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase ml-1">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400" size={20} />
              <input type="email" placeholder="name@company.com" required className="w-full pl-12 pr-4 py-4 bg-purple-50/30 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400" size={20} />
              <input type="password" placeholder="••••••••" required className="w-full pl-12 pr-4 py-4 bg-purple-50/30 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-purple-600" />
            </div>
          </div>

          <button type="submit" className="w-full py-5 bg-purple-700 hover:bg-purple-800 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all active:scale-95">
            LOGIN TO RESEARCH
            <ArrowRight className="w-6 h-6" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// Ensure this says 'LoginPage'
export default LoginPage;