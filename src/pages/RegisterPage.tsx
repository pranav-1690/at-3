import React from 'react';
import { PieChart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      <div className="max-w-6xl mx-auto px-6 py-6 w-full">
        <header className="flex items-center justify-between pb-6 border-b-2 border-slate-200/50">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 md:h-12 md:w-12 shrink-0 rounded-2xl bg-slate-950 flex items-center justify-center text-white font-bold shadow-xl shadow-slate-950/20">
              <PieChart className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-950">W<span className="text-slate-300">/</span>E</span>
          </Link>
        </header>
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg bg-white p-8 md:p-10 rounded-[2.5rem] border-2 border-slate-200 shadow-xl shadow-slate-200/40"
        >
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tighter uppercase mb-2">Create Account</h1>
            <p className="text-sm font-bold text-slate-400">Join W/E to secure your family's future.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name (As on Aadhar)</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
              <div className="flex gap-2">
                <div className="w-20 shrink-0 bg-slate-50 border-2 border-slate-100 rounded-2xl px-3 py-3.5 text-sm font-bold text-slate-500 flex items-center justify-center">
                  +91
                </div>
                <input 
                  type="tel" 
                  required
                  pattern="[0-9]{10}"
                  placeholder="9999999999"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="name@example.com"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date of Birth</label>
              <input 
                type="date" 
                required
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-all text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Employment Type</label>
                <select 
                  required
                  defaultValue=""
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-all appearance-none"
                >
                  <option value="" disabled>Select...</option>
                  <option value="salaried">Salaried</option>
                  <option value="self_employed">Self Employed</option>
                  <option value="business_owner">Business Owner</option>
                  <option value="retired">Retired</option>
                  <option value="student">Student</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Marital Status</label>
                <select 
                  required
                  defaultValue=""
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-all appearance-none"
                >
                  <option value="" disabled>Select...</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-slate-950 text-white font-black uppercase tracking-widest text-xs px-10 py-4 pt-4.5 pb-3.5 rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-slate-950/20 hover:shadow-emerald-600/30 active:scale-95 flex justify-center items-center"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-8 text-center border-t-2 border-slate-100 pt-6">
            <p className="text-sm font-semibold text-slate-500">
              Already have an account? <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-bold">Sign in here</Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
