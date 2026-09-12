import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ArrowLeft, CheckCircle2, Building2, ShieldCheck, MapPin } from 'lucide-react';

const HERO_IMAGE = '/hero-bouw.jpg';
const TEAM_IMAGE = '/hero-office.jpg';
const OFFICE_IMAGE = '/hero-office.jpg';

const values = [
  { title: 'Kwaliteit', desc: 'Wij leveren geen compromissen op het gebied van materialen en vakmanschap.' },
  { title: 'Betrouwbaarheid', desc: 'Transparante communicatie en nakomen van afspraken staan bij ons voorop.' },
  { title: 'Duurzaamheid', desc: 'Energie-efficiënte oplossingen voor nu én de toekomst.' },
  { title: 'Veiligheid', desc: 'Brandveiligheid en werkplekveiligheid zijn fundamenteel in alles wat wij doen.' },
];

const divisions = [
  {
    icon: Building2,
    tag: 'Bouwafdeling',
    title: 'Bouw & Verduurzaming',
    desc: 'Gespecialiseerd in ventilatie, isolatie, warmtepompen en volledige verduurzaming van uw woning of bedrijfspand. Wij begeleiden u van A tot Z: van advies en calculatie tot installatie.',
    services: ['Ventilatie & Verkoeling', 'Spouw- & Dakisolatie', 'Warmtepompen', 'Verduurzamen'],
  },
  {
    icon: ShieldCheck,
    tag: 'Brandveiligheidsafdeling',
    title: 'Brandveiligheid',
    desc: 'Gespecialiseerd in inspectie & advies, brandwerend afdichten, brandwerend bekleden en het plaatsen van brandkleppen. Ons gecertificeerde team zorgt dat uw gebouw voldoet aan alle wettelijke eisen.',
    services: ['Inspectie & Advies', 'Brandwerend Afdichten', 'Brandwerend Bekleden', 'Brandkleppen Plaatsen'],
  },
];

export const OverPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={HERO_IMAGE} alt="Connect BV team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={16} /> Terug naar Home
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/60 text-xs font-bold tracking-widest uppercase mb-3"
          >
            Over Ons
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-tight max-w-3xl"
          >
            Wie Zijn Wij?
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-2xl lg:text-3xl font-light text-primary/80 leading-snug mb-8 max-w-xl">
                Connect B.V. is uw betrouwbare partner voor duurzaam bouwen en brandveiligheid.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Wij hebben ons gespecialiseerd in het verduurzamen, renoveren en brandveilig maken van bestaande gebouwen. In Nederland speelt energie-efficiëntie en duurzaamheid een steeds prominentere rol in bouwmethoden en materialen.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Een goede start begint met goede voorbereiding en nauwkeurige calculatie. Ons toegewijde team begeleidt u stap voor stap door het gehele proces. Ons kantoor is gevestigd in Woerden.
              </p>
              <div className="flex items-center gap-3 text-primary">
                <MapPin size={18} className="text-accent" />
                <span className="font-medium">Bierbrouwersweg 14 a, 3449HW Woerden</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={TEAM_IMAGE} alt="Connect BV kantoor" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white p-5 border-l-4 border-accent shadow-lg">
                <p className="text-primary font-semibold">Gevestigd in Woerden</p>
                <p className="text-muted text-sm">Al jarenlang actief in de regio</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-primary uppercase tracking-tight mb-16"
          >
            Onze Kernwaarden
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10"
              >
                <CheckCircle2 className="text-accent mb-6" size={28} />
                <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-primary uppercase tracking-tight mb-16"
          >
            Onze Afdelingen
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {divisions.map((div, i) => {
              const Icon = div.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="bg-light p-10 lg:p-14"
                >
                  <Icon size={36} className="text-accent mb-8" />
                  <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">{div.tag}</span>
                  <h3 className="text-2xl font-bold text-primary mb-4">{div.title}</h3>
                  <p className="text-muted leading-relaxed mb-8">{div.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {div.services.map((s, j) => (
                      <li key={j} className="flex items-center gap-3 text-primary/80 font-medium text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Image */}
      <section className="py-24 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video overflow-hidden">
                <img src={OFFICE_IMAGE} alt="Connect BV office" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary uppercase tracking-tight mb-6">
                Klaar om aan de slag te gaan?
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Of u nu wilt verduurzamen, renoveren of de brandveiligheid van uw gebouw wilt verbeteren — wij helpen u graag verder. Neem contact met ons op voor een vrijblijvend gesprek.
              </p>
              <Link to="/contact">
                <Button variant="primary" withArrow>Neem contact op</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
