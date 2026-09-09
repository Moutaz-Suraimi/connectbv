import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, ArrowLeft, Clock, Send, CheckCircle2 } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1400&q=80';

const contactDetails = [
  {
    icon: Phone,
    label: 'Telefoon',
    value: '085 369 77 00',
    href: 'tel:0853697700',
    sub: 'Bereikbaar op werkdagen',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'info@connectbv.nl',
    href: 'mailto:info@connectbv.nl',
    sub: 'Reactie binnen 1 werkdag',
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Bierbrouwersweg 14 a',
    href: 'https://maps.google.com/?q=Bierbrouwersweg+14a+Woerden',
    sub: '3449HW Woerden, Nederland',
  },
  {
    icon: Clock,
    label: 'Openingstijden',
    value: 'Ma–Vr 08:00–17:00',
    href: null,
    sub: 'Gesloten in het weekend',
  },
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(formData.onderwerp || 'Contactverzoek via website');
    const body = encodeURIComponent(
      `Naam: ${formData.naam}\nE-mail: ${formData.email}\nTelefoon: ${formData.telefoon}\n\nBericht:\n${formData.bericht}`
    );
    window.location.href = `mailto:info@connectbv.nl?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={HERO_IMAGE} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
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
            Neem Contact Op
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-tight max-w-3xl"
          >
            Maak een afspraak
          </motion.h1>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mb-24">
            {contactDetails.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-light p-8"
                >
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 border border-dark/10">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <p className="text-muted text-xs font-bold tracking-widest uppercase mb-2">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-primary font-semibold text-lg hover:text-accent transition-colors block mb-1">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-primary font-semibold text-lg mb-1">{item.value}</p>
                  )}
                  <p className="text-muted text-sm">{item.sub}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-light p-10 lg:p-14"
            >
              <h2 className="text-3xl font-bold text-primary uppercase tracking-tight mb-8">Stuur ons een bericht</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle2 size={52} className="text-accent" />
                  <h3 className="text-2xl font-bold text-primary">Bedankt!</h3>
                  <p className="text-muted max-w-xs">Uw e-mailclient is geopend. Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="naam" className="block text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">Naam *</label>
                      <input
                        id="naam"
                        name="naam"
                        type="text"
                        required
                        value={formData.naam}
                        onChange={handleChange}
                        className="w-full bg-white border border-dark/10 px-4 py-3.5 text-primary focus:outline-none focus:border-accent transition-colors text-sm"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefoon" className="block text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">Telefoon</label>
                      <input
                        id="telefoon"
                        name="telefoon"
                        type="tel"
                        value={formData.telefoon}
                        onChange={handleChange}
                        className="w-full bg-white border border-dark/10 px-4 py-3.5 text-primary focus:outline-none focus:border-accent transition-colors text-sm"
                        placeholder="Uw telefoonnummer"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">E-mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-dark/10 px-4 py-3.5 text-primary focus:outline-none focus:border-accent transition-colors text-sm"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="onderwerp" className="block text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">Onderwerp</label>
                    <select
                      id="onderwerp"
                      name="onderwerp"
                      value={formData.onderwerp}
                      onChange={handleChange}
                      className="w-full bg-white border border-dark/10 px-4 py-3.5 text-primary focus:outline-none focus:border-accent transition-colors text-sm appearance-none"
                    >
                      <option value="">Kies een onderwerp</option>
                      <option value="Zonnepanelen">Zonnepanelen</option>
                      <option value="Ventilatie & Verkoeling">Ventilatie & Verkoeling</option>
                      <option value="Isolatie">Isolatie</option>
                      <option value="Warmtepompen">Warmtepompen</option>
                      <option value="Verduurzaming">Verduurzaming</option>
                      <option value="Brandveiligheid">Brandveiligheid</option>
                      <option value="Algemeen">Algemeen</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="bericht" className="block text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">Bericht *</label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      required
                      rows={5}
                      value={formData.bericht}
                      onChange={handleChange}
                      className="w-full bg-white border border-dark/10 px-4 py-3.5 text-primary focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                      placeholder="Beschrijf uw vraag of project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300 self-start"
                  >
                    Verstuur Bericht <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-1"
            >
              <div className="flex-1">
                <iframe
                  title="Connect BV Locatie"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.348!2d4.878398!3d52.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6759f9b!2sBierbrouwersweg+14a%2C+3449+HW+Woerden!5e0!3m2!1snl!2snl!4v1000000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="bg-dark text-white p-8">
                <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-3">Ons Kantoor</p>
                <p className="text-white text-xl font-semibold mb-1">Connect Bouw & Brandveiligheid</p>
                <p className="text-white/70">Bierbrouwersweg 14 a<br />3449HW Woerden, Nederland</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
