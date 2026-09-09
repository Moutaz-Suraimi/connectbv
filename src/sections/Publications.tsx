import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PublicationCard } from '../components/PublicationCard';
import { publications } from '../data/publications';

export const Publications: React.FC = () => {
  const featured = publications.find(p => p.featured);
  const rest = publications.filter(p => !p.featured);

  return (
    <section id="publicaties" className="py-32 lg:py-48 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted/30 font-light text-8xl tracking-tighter select-none block leading-none mb-4"
            >
              03
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-primary tracking-tight uppercase"
            >
              Publicaties
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-xl max-w-md leading-relaxed self-end"
          >
            Blijf op de hoogte van de laatste ontwikkelingen in de bouw en duurzaamheid.
          </motion.p>
          <Link
            to="/publicaties"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest self-end hover:gap-3 transition-all duration-300"
          >
            Alle publicaties <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {featured && (
            <PublicationCard
              title={featured.title}
              excerpt={featured.excerpt}
              featured
            />
          )}
          <div className="col-span-1 flex flex-col gap-1">
            {rest.map((pub) => (
              <PublicationCard
                key={pub.id}
                title={pub.title}
                excerpt={pub.excerpt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
