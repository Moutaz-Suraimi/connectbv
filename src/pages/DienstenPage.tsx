import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ArrowLeft, Sun, Wind, Layers, Zap, Leaf, Eye, FlameKindling, Shield } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80';

const bouwDiensten = [
  {
    icon: Sun,
    number: '01',
    title: 'Zonnepanelen',
    description: 'Met zonnepanelen kunt u besparen op uw energierekening en laat u de waarde van uw woning of bedrijfsgebouw stijgen. Wij berekenen de juiste constructie op basis van uw projectgegevens en zorgen voor een brandveilige koppeling.',
    detail: 'Volledig ontzorgd traject: van advies en vergunningsaanvraag tot installatie en nazorg.',
  },
  {
    icon: Wind,
    number: '02',
    title: 'Ventilatie & Verkoeling',
    description: 'Goede ventilatie is belangrijk voor de gezondheid. Er kan gebruik worden gemaakt van natuurlijke ventilatie, mechanische afvoer of balansventilatie. Met airconditioning kunt u niet alleen koelen, maar ook energie-efficiënt verwarmen in de winter.',
    detail: 'Wij installeren systemen van A-merken met garantie op de werkzaamheden.',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Spouw & Dak Isolatie',
    description: 'Kies voor KOMO-gecertificeerde dakisolatie met de hoogst mogelijke isolatiewaardes en bespaar direct op uw energierekening. U ervaart meer comfort binnen met een maximale energiebesparing en een lange levensduur.',
    detail: 'Werkt u samen met ons? Dan kunnen wij de subsidieaanvraag voor u verzorgen.',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Warmtepompen',
    description: 'Een volledig elektrische warmtepomp met buitenunit zorgt voor de verwarming van je huis en warm water. Met een volledig elektrische of hybride warmtepomp kan je huis op een energiezuinige manier van het aardgas af.',
    detail: 'Hybride of volledig elektrisch — wij adviseren u op basis van uw situatie.',
  },
  {
    icon: Leaf,
    number: '05',
    title: 'Verduurzamen',
    description: 'Stap voor stap gaan we onze woningen steeds duurzamer verwarmen met hernieuwbare energie. Aardgasvrij wonen begint met goede isolatie, dubbel glas, en het dichten van kieren voordat we overgaan op warmtepompen.',
    detail: 'Een persoonlijk energieplan op maat, gericht op maximale besparing.',
  },
];

const brandDiensten = [
  {
    icon: Eye,
    number: '06',
    title: 'Inspectie & Advies',
    description: 'Tijdens de bouw of verbouwing zorgen voor toezicht door ervaren adviseurs. Een gedegen controle van de uitvoering van de brandveiligheidsvoorzieningen helpt brand te voorkomen en brandschade te beperken.',
    detail: 'Gecertificeerde inspecteurs met kennis van de nieuwste wet- en regelgeving.',
  },
  {
    icon: FlameKindling,
    number: '07',
    title: 'Brandwerend Afdichten',
    description: 'Het afdichten van openingen, doorbrekingen, voegen, en gaten in brandscheidingen met erkend brandwerend product om te voorkomen dat vuur, hitte en rook zich verplaatsen naar andere compartimenten.',
    detail: 'Gecertificeerde producten en aantoonbare kwaliteit voor opdrachtgever en inspectie.',
  },
  {
    icon: Shield,
    number: '08',
    title: 'Brandwerend Bekleden',
    description: 'Passieve bescherming van constructies van staal of beton om tijdwinst te creëren bij brand (tot 60, 90 of 120 minuten), wat voldoende tijd biedt om een gebouw veilig te ontruimen.',
    detail: 'Bescherming conform NEN 6069 en Bouwbesluit eisen.',
  },
  {
    icon: Wind,
    number: '09',
    title: 'Brandkleppen Plaatsen',
    description: 'Installatie van brandkleppen in luchtventilatiekanalen. Bij hitte zorgt een breekbaar slotje ervoor dat de klep het kanaal dicht en voorkomt dat branddoorslag en rookgassen zich naar andere ruimtes verspreiden.',
    detail: 'Inclusief testen, certificering en onderhoud.',
  },
];

const ServiceItem: React.FC<{
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
  detail: string;
  index: number;
}> = ({ icon: Icon, number, title, description, detail, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group flex gap-8 py-10 border-b border-dark/10 last:border-0"
  >
    <div className="flex-shrink-0 flex flex-col items-center pt-1">
      <span className="text-muted/30 font-light text-3xl tracking-tighter leading-none mb-3">{number}</span>
      <div className="w-12 h-12 bg-light group-hover:bg-accent/10 transition-colors duration-300 flex items-center justify-center">
        <Icon size={22} className="text-accent" />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 uppercase tracking-tight">{title}</h3>
      <p className="text-muted leading-relaxed mb-4">{description}</p>
      <p className="text-sm text-accent font-semibold">{detail}</p>
    </div>
  </motion.div>
);

export const DienstenPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={HERO_IMAGE} alt="Connect BV Diensten" className="absolute inset-0 w-full h-full object-cover" />
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
            Onze Diensten
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-tight max-w-3xl"
          >
            Wat Wij Doen
          </motion.h1>
        </div>
      </section>

      {/* Bouw Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-4">
            <div>
              <span className="text-muted/20 font-light text-8xl tracking-tighter select-none block leading-none mb-2">01</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight uppercase">Bouw & Verduurzaming</h2>
            </div>
            <p className="text-muted text-lg max-w-sm leading-relaxed">
              Duurzame oplossingen voor een comfortabeler en energiezuiniger gebouw.
            </p>
          </div>
          <div className="mt-8">
            {bouwDiensten.map((s, i) => (
              <ServiceItem key={s.number} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-light py-1" />

      {/* Brandveiligheid Section */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-4">
            <div>
              <span className="text-muted/20 font-light text-8xl tracking-tighter select-none block leading-none mb-2">02</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight uppercase">Brandveiligheid</h2>
            </div>
            <p className="text-muted text-lg max-w-sm leading-relaxed">
              Gecertificeerde brandveiligheidsoplossingen voor woningen en bedrijfspanden.
            </p>
          </div>
          <div className="mt-8 bg-white px-8">
            {brandDiensten.map((s, i) => (
              <ServiceItem key={s.number} {...s} index={i} />
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
            Interesse in onze diensten?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl max-w-xl mx-auto mb-10"
          >
            Neem contact met ons op voor een vrijblijvende offerte of adviesgesprek.
          </motion.p>
          <Link to="/contact">
            <Button variant="secondary" withArrow>Maak een afspraak</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
