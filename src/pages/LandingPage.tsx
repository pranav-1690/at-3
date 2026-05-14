import React, { useState } from 'react';
import { PieChart, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <div className="max-w-6xl mx-auto px-6 py-6 w-full">
        {/* Header */}
        <header className="flex items-center justify-between pb-6 border-b-2 border-slate-200/50">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 md:h-12 md:w-12 shrink-0 rounded-2xl bg-slate-950 flex items-center justify-center text-white font-bold shadow-xl shadow-slate-950/20">
              <PieChart className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-950">W<span className="text-slate-300">/</span>E</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Sign In</Link>
          </div>
        </header>
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 flex items-center justify-center -mt-20">
        <div className="max-w-3xl space-y-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[1.1] md:leading-[1.05]"
          >
            Manage your <br className="hidden md:block"/> wealth, estate, and <br className="hidden md:block"/> family access 
            <span className="text-slate-400"> in one secure place.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-semibold text-slate-500 max-w-xl"
          >
            Track assets, organise policies, and securely share access with family members.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Link 
              to="/register"
              className="w-full sm:w-auto bg-slate-950 text-white font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-slate-950/20 hover:shadow-emerald-600/30 flex justify-center active:scale-95"
            >
              Get Started
            </Link>
            <Link 
              to="/login"
              className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-950 font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all flex justify-center active:scale-95"
            >
              Sign In
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
