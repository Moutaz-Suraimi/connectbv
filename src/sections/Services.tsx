import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bouw' | 'brandveiligheid'>('bouw');

  const tabs = [
    { id: 'bouw' as const, label: 'Bouw & Verduurzaming' },
    { id: 'brandveiligheid' as const, label: 'Brandveiligheid' }
  ];

  return (
    <section id="diensten" className="py-32 lg:py-48 bg-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-muted/30 font-light text-8xl tracking-tighter select-none block leading-none mb-4"
            >
              02
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-primary tracking-tight uppercase"
            >
              Diensten
            </motion.h2>
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest mt-4 hover:gap-3 transition-all duration-300"
            >
              Meer informatie <ArrowRight size={14} />
            </Link>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex border border-dark/10 overflow-hidden self-start"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-muted hover:text-primary hover:bg-light'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Service List */}
        <div>
          {services[activeTab].map((service, i) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
