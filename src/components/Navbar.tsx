import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/utils';

const navItems = [
  { name: 'Over', href: '/over' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Publicaties', href: '/publicaties' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 w-full pointer-events-none">
        {/* Floating Navbar Container */}
        <div className="relative w-full max-w-[1100px] h-[68px] md:h-[76px] rounded-full bg-[#121E36] shadow-2xl overflow-hidden flex items-center p-2 pointer-events-auto border border-white/5">

          {/* Foreground Elements container */}
          <div className="relative w-full h-full flex items-center justify-between z-10 px-3 lg:px-5">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center group overflow-hidden">
              <img src="/logo.png" alt="Connect B.V." className="h-[44px] md:h-[56px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-[14px] lg:text-[15px] font-medium transition-all duration-300 group",
                      isActive 
                        ? "text-white" 
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.name}
                    
                    {/* Hover Background - only show if not active */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    {/* Active underline */}
                    {isActive && (
                      <div className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2 w-8 h-[3px] bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Group: Contact CTA & Mobile Toggle */}
            <div className="flex items-center">
              {/* Contact Button */}
              <Link 
                to="/contact"
                className="hidden md:flex items-center bg-gradient-to-r from-[#2563eb]/80 to-[#1e40af]/80 rounded-full border border-white/10 p-[5px] pl-1 pr-6 transition-all duration-300 hover:from-[#2563eb] hover:to-[#1e40af] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] group"
              >
                <div className="w-10 h-10 rounded-full bg-[#38bdf8] flex items-center justify-center mr-3 shadow-lg flex-shrink-0 relative overflow-hidden">
                  <Phone size={18} className="text-white fill-white relative z-10" />
                </div>
                <span className="text-white text-[14px] font-medium flex items-center gap-2">
                  Neem contact op
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </Link>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2.5 ml-2 focus:outline-none transition-colors border border-white/10 rounded-full bg-white/5 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0F172A]/95 flex flex-col justify-center items-center backdrop-blur-xl pointer-events-auto"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    key={item.href}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-3xl font-semibold transition-colors block",
                        isActive ? "text-[#38bdf8]" : "text-white hover:text-[#38bdf8]"
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div 
                          layoutId="mobile-active"
                          className="w-12 h-1 bg-[#38bdf8] mx-auto mt-2 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            {/* Mobile Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 + 0.1 }}
            >
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-12 flex items-center bg-[#1E305C] rounded-full p-2 pr-6 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#2563eb] flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white fill-white" />
                </div>
                <span className="text-white font-semibold">Neem contact op</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
