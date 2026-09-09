import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-dark text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/10 font-light text-8xl tracking-tighter select-none block leading-none mb-4"
            >
              04
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight uppercase mb-6"
            >
              Maak een afspraak
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-xl leading-relaxed max-w-xl mb-12"
            >
              Of u nu wilt verduurzamen, renoveren of de brandveiligheid van uw gebouw wilt verbeteren — wij helpen u graag verder.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                variant="secondary" 
                withArrow 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:info@connectbv.nl';
                }}
              >
                Stuur een e-mail
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white/60 font-semibold text-sm uppercase tracking-widest hover:text-white hover:gap-3 transition-all duration-300"
              >
                Ga naar contactpagina <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center gap-10"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Telefoon</p>
                <a href="tel:0853697700" className="text-white text-2xl font-medium hover:text-accent transition-colors">
                  085 369 77 00
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">E-mail</p>
                <a href="mailto:info@connectbv.nl" className="text-white text-2xl font-medium hover:text-accent transition-colors">
                  info@connectbv.nl
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Adres</p>
                <address className="not-italic text-white text-xl font-medium">
                  Bierbrouwersweg 14 a<br />
                  3449HW WOERDEN
                </address>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
