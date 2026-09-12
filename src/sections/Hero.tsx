import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Home, Shield, ArrowRight } from 'lucide-react';

const HERO_VIDEO = '/HEROVIDEO.mp4';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[850px] h-screen w-full flex items-center overflow-hidden">
      {/* Parallax Video & Overlay */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/40 to-[#0f172a]/10" />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-30 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20" style={{ opacity }}>
        
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col items-start pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#38bdf8]"></div>
            <p className="text-white/60 font-medium tracking-[0.2em] uppercase text-xs">
              CONNECT B.V.
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-2xl"
          >
            Verduurzamen.<br />
            Renoveren.<br />
            <span className="text-[#3b82f6]">Brandveilig Bouwen.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            Connect B.V. is een gespecialiseerd bedrijf dat zich richt op het verduurzamen, renoveren en brandveilig maken van bestaande bouwwerken. Wij bieden op maat gemaakte oplossingen van hoogwaardige kwaliteit.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300"
            >
              Maak een afspraak
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a 
              href="#diensten"
              className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/40 text-white px-8 py-4 rounded-full font-medium backdrop-blur-sm transition-all duration-300"
            >
              Ontdek onze diensten
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden lg:flex flex-col gap-5 items-end justify-center perspective-[1000px]"
        >
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-5 flex items-center gap-5 w-[320px] hover:bg-white/10 transition-colors transform translate-x-12">
            <div className="w-12 h-12 min-w-12 rounded-xl border border-white/20 flex items-center justify-center opacity-80">
              <Leaf className="text-white w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium text-lg leading-tight">Duurzaam<br />bouwen</span>
            </div>
          </div>
          
          {/* Card 2 - Offset */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-5 flex items-center gap-5 w-[320px] hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 min-w-12 rounded-xl border border-white/20 flex items-center justify-center opacity-80">
              <Home className="text-white w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium text-lg leading-tight">Renovatie<br />op maat</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl p-5 flex items-center gap-5 w-[320px] hover:bg-white/10 transition-colors transform translate-x-12">
            <div className="w-12 h-12 min-w-12 rounded-xl border border-white/20 flex items-center justify-center opacity-80">
              <Shield className="text-white w-6 h-6" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium text-lg leading-tight">Brandveiligheid<br />voorop</span>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 text-white/50 cursor-pointer hover:text-white transition-colors group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="relative flex items-center justify-center border border-white/30 rounded-full w-[26px] h-[42px] group-hover:border-white/60 transition-colors">
            <motion.div 
               animate={{ y: [0, 12, 0] }} 
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               className="w-1 h-2.5 bg-white/60 group-hover:bg-white rounded-full absolute top-2 transition-colors"
            />
        </div>
        <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-center">
          Scroll naar beneden
        </span>
      </motion.div>
    </section>
  );
};
