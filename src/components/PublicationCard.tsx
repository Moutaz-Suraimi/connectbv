import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  excerpt: string;
  image?: string;
  category?: string;
  date?: string;
  featured?: boolean;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ title, excerpt, image, category, date, featured }) => {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="col-span-1 lg:col-span-2 bg-dark text-white flex flex-col group cursor-pointer relative overflow-hidden"
      >
        {/* Image */}
        {image && (
          <div className="relative h-64 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
            <span className="absolute top-6 left-6 bg-accent text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
              Uitgelicht
            </span>
          </div>
        )}
        <div className="p-10 lg:p-14 flex flex-col flex-1 relative z-10">
          {!image && <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block">Uitgelicht</span>}
          {category && <span className="text-accent/70 text-xs font-bold tracking-widest uppercase mb-3 block">{category}</span>}
          <div className="absolute inset-0 bg-accent/0 transition-colors duration-700 group-hover:bg-accent/5" />
          <h3 className="text-3xl lg:text-4xl font-semibold mb-4 leading-tight max-w-3xl relative z-10">{title}</h3>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10 flex-1 relative z-10">{excerpt}</p>
          <div className="flex items-center gap-4 text-white group-hover:text-accent transition-colors duration-300 relative z-10">
            <span className="font-semibold text-sm tracking-widest uppercase">Lees artikel</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-3" />
          </div>
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
      className="col-span-1 bg-white/50 flex flex-col group cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-xl border border-dark/10 hover:border-accent/20 overflow-hidden"
    >
      {image && (
        <div className="h-44 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      )}
      <div className="flex flex-col flex-1 p-8 lg:p-10">
        <div className="flex items-center gap-2 mb-3">
          {category && <span className="text-accent text-[11px] font-bold tracking-widest uppercase block">{category}</span>}
          {category && date && <span className="text-muted/40 text-xs">•</span>}
          {date && <span className="text-muted text-xs font-medium">{date}</span>}
        </div>
        <h3 className="text-xl font-semibold text-primary mb-3 leading-tight transition-colors duration-300 group-hover:text-accent">{title}</h3>
        <p className="text-muted leading-relaxed line-clamp-3 mb-8 flex-1 text-sm">{excerpt}</p>
        <div className="flex items-center gap-3 text-primary group-hover:text-accent transition-colors duration-300 mt-auto">
          <span className="font-semibold text-xs tracking-widest uppercase">Lees meer</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
        </div>
      </div>
    </motion.div>
  );
};
