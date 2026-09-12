import React from 'react';
import { ChevronRight, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Over', href: '/over' },
  { name: 'Diensten', href: '/diensten' },
  { name: 'Publicaties', href: '/publicaties' },
  { name: 'Contact', href: '/contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020a1c] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Crane Watermark */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none translate-x-[20%] translate-y-[20%] w-[800px] h-[800px]">
        <img 
          src="/logo.png" 
          alt="" 
          className="w-full h-full object-contain object-right-bottom brightness-0 invert" 
          style={{ clipPath: 'inset(0 0 0 40%)' }} 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Column 1: Logo & Text */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 flex flex-col pr-4">
            <img
              src="/logo.png"
              alt="Connect B.V."
              className="h-16 object-contain object-left mb-6 brightness-0 invert"
            />
            <div className="w-12 h-1 bg-accent mb-8 rounded-sm"></div>
            <p className="text-white/70 max-w-md leading-relaxed text-base">
              Gespecialiseerd in het verduurzamen, renoveren en brandveilig maken van bestaande bouwwerken.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col md:border-l border-white/10 md:pl-10 lg:pl-16">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-10 relative inline-block w-fit">
              NAVIGATIE
              <div className="absolute -bottom-3 left-0 w-8 h-[3px] bg-accent rounded-full"></div>
            </h4>
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/80 hover:text-white transition-colors group flex items-center justify-between w-full max-w-[220px]">
                    <span className="font-medium text-[15px]">{item.name}</span>
                    <ChevronRight className="w-[18px] h-[18px] text-white/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col md:border-l border-white/10 md:pl-10 lg:pl-16">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-10 relative inline-block w-fit">
              CONTACT
              <div className="absolute -bottom-3 left-0 w-8 h-[3px] bg-accent rounded-full"></div>
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <div className="w-[42px] h-[42px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-white/70" />
                </div>
                <div className="flex flex-col pt-2 text-[15px]">
                  <span className="text-white/90">Bierbrouwersweg 14 a</span>
                  <span className="text-white/50 mt-1 tracking-wider uppercase text-sm">3449HW WOERDEN</span>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-[42px] h-[42px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 text-white/70" />
                </div>
                <a href="mailto:info@connectbv.nl" className="text-white/90 hover:text-accent transition-colors text-[15px]">
                  info@connectbv.nl
                </a>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-[42px] h-[42px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 hover:bg-white/10 transition-colors">
                  <Phone className="w-5 h-5 text-white/70" />
                </div>
                <a href="tel:0853697700" className="text-white/90 hover:text-accent transition-colors text-[15px] font-medium tracking-wide">
                  085 369 77 00
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Certificeringen / Partner Logos */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 py-10 border-t border-white/10 w-full">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="bg-white/95 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/20 flex items-center justify-center p-2 sm:p-3 w-32 sm:w-40 md:w-44 h-16 sm:h-20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <img
                src={`/LOGO${num}.jpg`}
                alt={`Partner ${num}`}
                className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-darken"
              />
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm font-medium tracking-wide">
          <p>&copy; 2026 Connect BV. Alle rechten voorbehouden.</p>
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <span>Website gemaakt door <a href="https://sluisweb.nl/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent underline underline-offset-4 transition-colors font-semibold">sluisweb.nl</a></span>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

