'use client';

import { motion } from 'framer-motion';
import {skills} from '../lib/data';

export type Skill = {
  name: string;
  icon: string;
};

export default function Skills() {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#FFD482] mb-12"
        >
          Stack tecnógico
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center hover:scale-110 transition-transform"
            >
             <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 transition duration-300 group-hover:brightness-150 filter invert"
              />
              <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition mt-2">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
