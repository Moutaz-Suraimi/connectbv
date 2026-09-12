import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowRight, ArrowLeft, Calendar } from 'lucide-react';

const articles = [
  {
    id: 2,
    category: 'Verduurzaming',
    date: 'Augustus 2026',
    title: 'Hybride warmtepomp: de nieuwe standaard',
    excerpt: 'Om sneller ons aardgasverbruik terug te dringen, heeft het kabinet vanaf 2026 de hybride warmtepomp als nieuwe standaard aangekondigd. Wij verkennen de overstap naar duurzame alternatieven.',
    body: 'De hybride warmtepomp combineert een elektrische warmtepomp met een gasketel. Dit systeem schakelt automatisch over naar de meest efficiënte energiebron. Het kabinet heeft maatregelen getroffen om de overstap te stimuleren. Connect B.V. installeert hybride warmtepompen van toonaangevende A-merken.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 3,
    category: 'Regelgeving',
    date: 'Juli 2026',
    title: 'Hoe zit het met de isolatie-eisen?',
    excerpt: 'In het Bouwbesluit is opgenomen aan welke isolatie-eisen een woning moet voldoen. Ontdek welke materialen u kan kiezen om deze waardes te bereiken en hoe wij adviseren bij aanbouw.',
    body: 'Het Bouwbesluit 2012 stelt eisen aan de minimale warmteweerstand (Rc-waarde) van gevels, daken en vloeren.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    category: 'Klimaatbeheersing',
    date: 'Juni 2026',
    title: 'Koelen en verwarmen in één',
    excerpt: 'Tijdens een hete zomerdag is koeling heerlijk. Gebruik je de airco om te verwarmen, dan wordt warmte uit de buitenlucht gehaald en naar binnen geblazen.',
    body: 'Moderne airconditioningsystemen zijn bidirectioneel: ze koelen in de zomer en verwarmen in de winter.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
];

export const PublicatiesPage: React.FC = () => {
  const featured = articles.find(a => a.featured)!;
  const rest = articles.filter(a => !a.featured);

  return (
    <div className="bg-light min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80"
          alt="Publicaties"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-14 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors group">
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Terug naar Home
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-xs font-bold tracking-[0.22em] uppercase mb-2"
          >
            Nieuws & Artikelen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight uppercase"
          >
            Publicaties
          </motion.h1>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-1 overflow-hidden"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Content */}
            <div className="bg-light p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-accent text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5">
                  Uitgelicht
                </span>
                <span className="text-muted/50">•</span>
                <span className="text-accent text-xs font-bold tracking-widest uppercase">{featured.category}</span>
                <span className="text-muted/50">•</span>
                <div className="flex items-center gap-1.5 text-muted text-xs">
                  <Calendar size={12} />
                  {featured.date}
                </div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-primary uppercase tracking-tight leading-tight mb-5">
                {featured.title}
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">{featured.excerpt}</p>
              <p className="text-primary/60 text-sm leading-relaxed mb-10">{featured.body}</p>

              <div className="flex items-center gap-3 text-accent font-bold text-sm uppercase tracking-widest group cursor-pointer w-fit">
                <span>Lees artikel</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Articles */}
      <section className="py-20 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-primary uppercase tracking-tight mb-10">Meer Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {rest.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white group cursor-pointer flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent text-xs font-bold tracking-widest uppercase">{article.category}</span>
                    <span className="text-muted/40 text-xs">•</span>
                    <div className="flex items-center gap-1.5 text-muted text-xs">
                      <Calendar size={11} />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary uppercase tracking-tight mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest">
                    Lees meer <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6"
          >
            Vragen over onze services?
          </motion.h2>
          <p className="text-white/60 text-xl max-w-xl mx-auto mb-10">
            Wij helpen u graag met persoonlijk advies op maat.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent hover:bg-blue-700 text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-colors duration-300"
          >
            Neem contact op <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
