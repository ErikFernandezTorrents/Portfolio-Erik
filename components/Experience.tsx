'use client';

import { motion } from 'framer-motion';
import {experience} from '../lib/data';

export interface Job {
  company: string;
  role: string;
  period: string;
  tasks: string[];
  technologies: string[];
}

const techTagStyle =
  'border-[#FFD482]/40 text-[#FFD482]/80 bg-[#FFD482]/5';

export default function Experience() {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#FFD482] mb-12 text-center"
        >
          Experiencia Profesional
        </motion.h2>

        <div className="space-y-10">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1E293B] rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-indigo-400">
                {job.role}
              </h3>
              <div className="text-gray-300 text-sm mb-2">
                {job.company} · <span className="italic">{job.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm mt-2">
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className=
                      {`px-3 py-1 text-xs font-medium rounded-full
                      border border-white/15
                      bg-white/5
                      backdrop-blur-sm ${techTagStyle}`}                    
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
