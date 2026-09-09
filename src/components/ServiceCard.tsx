import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  isFirst?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, isFirst }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`group flex flex-col md:flex-row gap-6 md:gap-16 py-12 ${isFirst ? 'border-y' : 'border-b'} border-dark/10 cursor-pointer`}
    >
      <div className="w-full md:w-1/6 flex flex-col justify-start">
        <span className="text-muted/30 font-light text-5xl transition-colors duration-500 group-hover:text-accent">
          {number}
        </span>
      </div>

      <div className="w-full md:w-3/6 flex flex-col">
        <h3 className="text-3xl lg:text-4xl font-semibold text-primary mb-4 transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <p className="text-muted text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      <div className="w-full md:w-2/6 flex justify-start md:justify-end items-start mt-4 md:mt-0">
        <div className="w-16 h-16 rounded-full border border-dark/10 flex items-center justify-center transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)]">
          <ArrowUpRight className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
        </div>
      </div>
    </motion.div>
  );
};
