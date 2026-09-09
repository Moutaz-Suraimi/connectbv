import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  excerpt: string;
  featured?: boolean;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ title, excerpt, featured }) => {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="col-span-1 lg:col-span-2 bg-dark text-white p-12 lg:p-20 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-accent/0 transition-colors duration-700 group-hover:bg-accent/5" />
        <div className="relative z-10">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-8 block">Uitgelicht</span>
          <h3 className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight max-w-3xl">{title}</h3>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-16">{excerpt}</p>
        </div>
        <div className="flex items-center gap-4 text-white group-hover:text-accent transition-colors duration-300 relative z-10">
          <span className="font-semibold text-sm tracking-widest uppercase">Lees artikel</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-3" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="col-span-1 border border-dark/10 bg-white/50 p-8 lg:p-12 flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-xl hover:border-accent/20"
    >
      <div>
        <h3 className="text-2xl font-semibold text-primary mb-4 leading-tight transition-colors duration-300 group-hover:text-accent">{title}</h3>
        <p className="text-muted leading-relaxed line-clamp-4 mb-12">{excerpt}</p>
      </div>
      <div className="flex items-center gap-3 text-primary group-hover:text-accent transition-colors duration-300 mt-auto">
        <span className="font-semibold text-xs tracking-widest uppercase">Lees meer</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
      </div>
    </motion.div>
  );
};
