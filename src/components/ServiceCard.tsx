import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  isFirst?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description }) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onClick={() => setActive(a => !a)}
      className="group relative flex flex-col gap-4 p-8 border border-dark/10 bg-white cursor-pointer hover:border-accent transition-colors duration-300 select-none"
    >
      {/* Active underline indicator */}
      <span
        className={`absolute bottom-0 left-0 h-[3px] bg-accent transition-all duration-500 ${active ? 'w-full' : 'w-0 group-hover:w-1/2'}`}
      />

      {/* Number */}
      <span className={`font-light text-5xl transition-colors duration-400 ${active ? 'text-accent' : 'text-muted/25 group-hover:text-accent/60'}`}>
        {number}
      </span>

      {/* Title */}
      <h3 className={`text-2xl lg:text-3xl font-semibold transition-colors duration-300 ${active ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted text-base leading-relaxed flex-1">
        {description}
      </p>

      {/* Arrow */}
      <div className={`self-end w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-400 ${active ? 'bg-accent border-accent shadow-[0_8px_30px_-8px_rgba(37,99,235,0.5)] -translate-y-1' : 'border-dark/10 group-hover:bg-accent group-hover:border-accent group-hover:-translate-y-1'}`}>
        <ArrowUpRight className={`w-5 h-5 transition-colors duration-300 ${active ? 'text-white' : 'text-primary group-hover:text-white'}`} />
      </div>
    </motion.div>
  );
};
