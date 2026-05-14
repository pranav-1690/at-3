import React, { useState } from 'react';
import { PieChart, Apple } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
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
          className="w-full max-w-md bg-white p-8 md:p-10 rounded-[2.5rem] border-2 border-slate-200 shadow-xl shadow-slate-200/40"
        >
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tighter uppercase mb-2">Welcome Back</h1>
            <p className="text-sm font-bold text-slate-400">Access your secure vault.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {authMethod === 'email' ? (
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-3.5 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-300"
                />
              </div>
            ) : (
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
            )}

            <div className="flex justify-start">
              <button 
                type="button" 
                onClick={() => setAuthMethod(authMethod === 'email' ? 'phone' : 'email')}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Use {authMethod === 'email' ? 'phone number' : 'email'} instead
              </button>
            </div>

            <button 
              type="submit"
              className="w-full bg-slate-950 text-white font-black uppercase tracking-widest text-xs px-10 py-4 pt-4.5 pb-3.5 rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-slate-950/20 hover:shadow-emerald-600/30 active:scale-95 flex justify-center items-center"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-8 outline-none">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
              <span className="bg-white px-4 text-slate-400">Or continue with</span>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-white border-2 border-slate-100 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            <button className="w-full bg-white border-2 border-slate-100 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-2xl hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-3">
              <Apple className="w-5 h-5 shrink-0" />
              Continue with Apple
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-semibold text-slate-500">
              New to W/E? <Link to="/register" className="text-emerald-600 hover:text-emerald-700 font-bold">Register here</Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
