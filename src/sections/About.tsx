import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80';

export const About: React.FC = () => {
  return (
    <section id="over" className="py-32 lg:py-48 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* Left: Typography */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-muted/30 font-light text-8xl tracking-tighter select-none block leading-none mb-4">01</span>
              <h2 className="text-5xl lg:text-6xl font-bold text-primary tracking-tight uppercase leading-tight">Over</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-2xl lg:text-3xl font-light text-primary/80 leading-snug mb-8 max-w-lg">
                Bij het verkennen van mogelijkheden voor een nieuwe woning of renovatie is professioneel advies onschatbaar.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-6 max-w-lg">
                Connect Bouw & Brandveiligheid heeft zich gespecialiseerd in het verduurzamen, renoveren en brandveilig maken van bestaande gebouwen. In Nederland speelt energie-efficiëntie en het streven naar duurzaamheid een steeds prominentere rol in bouwmethoden en materialen.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-12 max-w-lg">
                Een goede start begint met goede voorbereiding en nauwkeurige calculatie. Ons toegewijde team begeleidt u stap voor stap door het gehele proces. Ons kantoor is gevestigd in Woerden.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact">
                  <Button variant="primary" withArrow>Neem contact op</Button>
                </a>
                <Link
                  to="/over"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest border-b-2 border-primary/20 hover:border-accent hover:text-accent transition-all duration-300 pb-1"
                >
                  Meer informatie <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:top-16 overflow-hidden"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Connect BV Team aan het werk"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 border-l-4 border-accent">
              <p className="text-primary font-semibold text-lg">Woerden, Nederland</p>
              <p className="text-muted text-sm">Bierbrouwersweg 14 a, 3449HW</p>
            </div>
          </motion.div>
        </div>

        {/* Divisions Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-32">
          {[
            {
              tag: 'Bouwafdeling',
              desc: 'Gespicialiseerd in zonnepanelen, ventilatie, isolatie, warmtepompen en volledige verduurzaming van uw woning of bedrijfspand.'
            },
            {
              tag: 'Brandveiligheidsafdeling',
              desc: 'Gespicialiseerd in inspectie & advies, brandwerend afdichten, bekleden en het plaatsen van brandkleppen.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-light p-10 lg:p-14"
            >
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block">{item.tag}</span>
              <p className="text-primary text-xl font-medium leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
