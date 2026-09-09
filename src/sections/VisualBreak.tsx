import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BREAK_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2560&q=80';

export const VisualBreak: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={BREAK_IMAGE}
          alt="Bouw en constructie"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-primary/50" />
      </motion.div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight tracking-tight"
        >
          Kwaliteit en veiligheid in elk project.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-xl mt-6 max-w-lg"
        >
          Ons team bestaat uit ervaren vakmensen, elk met hun eigen specialisaties in het bouwproces.
        </motion.p>
      </div>
    </section>
  );
};
