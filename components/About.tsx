'use client';

import { motion } from 'framer-motion';
import {aboutme} from '../lib/data';

export type Aboutme = {
  text: React.ReactNode;
};

export default function About() {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#FFD482] mb-4"
        >
          Sobre mí
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          {aboutme[0].text}
          <br /><br />
          {aboutme[1].text}
          <br /><br />
          {aboutme[2].text}
          <br /><br />
          {aboutme[3].text}
        </motion.p>
      </div>
    </section>
  );
}
