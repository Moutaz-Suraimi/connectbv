import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/utils';

interface SectionLabelProps {
  number: string;
  title: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, title, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={cn('flex flex-col mb-12', className)}
    >
      <span className="text-muted/60 font-light text-6xl tracking-tighter mb-4 select-none">
        {number}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary uppercase">
        {title}
      </h2>
    </motion.div>
  );
};
