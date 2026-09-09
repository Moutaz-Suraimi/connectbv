import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80';

const articles = [
  {
    id: 1,
    category: 'Brandveiligheid',
    date: 'September 2026',
    title: 'Brand door zonnepanelen',
    excerpt: 'Twee jaar geleden sloegen diverse experts al alarm vanwege de toename in branden door zonnepanelen. De onderzoeksredactie van RTL Nieuws zocht uit hoeveel branden te wijten waren aan zonne-installaties...',
    body: 'Zonnepanelen zijn een duurzame oplossing, maar vereisen een brandveilige installatie. Incorrect gemonteerde zonnepanelen kunnen leiden tot kortsluitingen en in het ergste geval brand. Bij Connect Bouw & Brandveiligheid zorgen wij voor een brandveilige koppeling en leggen wij de installatie aan conform de geldende NEN-normen. Zo profiteert u van groene energie zonder extra risico\'s.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    category: 'Verduurzaming',
    date: 'Augustus 2026',
    title: 'Hybride warmtepomp: de nieuwe standaard',
    excerpt: 'Om sneller ons aardgasverbruik terug te dringen, heeft het kabinet vanaf 2026 de hybride warmtepomp als nieuwe standaard aangekondigd.',
    body: 'De hybride warmtepomp combineert een elektrische warmtepomp met een gasketel. Dit systeem schakelt automatisch over naar de meest efficiënte energiebron. Het kabinet heeft maatregelen getroffen om de overstap te stimuleren. Connect Bouw & Brandveiligheid installeert hybride warmtepompen van toonaangevende A-merken en begeleidt u in het gehele aanvraagproces voor subsidies.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    category: 'Regelgeving',
    date: 'Juli 2026',
    title: 'Hoe zit het met de isolatie-eisen?',
    excerpt: 'In het Bouwbesluit is opgenomen aan welke isolatie-eisen een woning moet voldoen. Ontdek welke materialen u kunt kiezen.',
    body: 'Het Bouwbesluit 2012 stelt eisen aan de minimale warmteweerstand (Rc-waarde) van gevels, daken en vloeren. Bij nieuwbouw gelden strengere eisen dan bij renovatie. Als gespecialiseerd isolatiebedrijf adviseren wij u over de meest geschikte isolatiematerialen voor uw situatie en zorgen wij dat uw woning voldoet aan alle eisen.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    category: 'Klimaatbeheersing',
    date: 'Juni 2026',
    title: 'Koelen en verwarmen in één',
    excerpt: 'Tijdens een hete zomerdag is koeling heerlijk. Gebruik je de airco om te verwarmen, dan wordt warmte uit de buitenlucht gehaald.',
    body: 'Moderne airconditioningsystemen zijn bidirectioneel: ze koelen in de zomer en verwarmen in de winter. De warmte wordt aan de buitenlucht onttrokken, waardoor het systeem zeer energie-efficiënt is. Met een correcte dimensionering en installatie is een airco een waardevolle aanvulling op uw verwarmingssysteem.',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
];

export const PublicatiesPage: React.FC = () => {
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={HERO_IMAGE} alt="Publicaties" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={16} /> Terug naar Home
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/60 text-xs font-bold tracking-widest uppercase mb-3"
          >
            Nieuws & Artikelen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-tight max-w-3xl"
          >
            Publicaties
          </motion.h1>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="bg-light p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent text-xs font-bold tracking-widest uppercase">{featured.category}</span>
                  <span className="text-muted/40">•</span>
                  <div className="flex items-center gap-2 text-muted text-sm">
                    <Calendar size={13} />
                    {featured.date}
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary uppercase tracking-tight mb-5 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed mb-4">{featured.excerpt}</p>
                <p className="text-primary/70 leading-relaxed text-sm mb-8">{featured.body}</p>
                <span className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest cursor-default">
                  Uitgelicht artikel <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Articles */}
      <section className="py-24 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-primary uppercase tracking-tight mb-12">Meer Artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {rest.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white flex flex-col group"
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
                  <h3 className="text-xl font-bold text-primary uppercase tracking-tight mb-3 leading-snug">{article.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                  <p className="text-primary/60 text-xs leading-relaxed border-t border-dark/10 pt-4 mt-2">{article.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6"
          >
            Vragen over onze services?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl max-w-xl mx-auto mb-10"
          >
            Wij helpen u graag met persoonlijk advies op maat.
          </motion.p>
          <Link to="/contact">
            <Button variant="secondary" withArrow>Neem contact op</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
