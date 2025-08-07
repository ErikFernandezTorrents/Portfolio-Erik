'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <div className='mb-4'>
          <img
            src='../images/erik.jpg'
            alt='Erik'
            height={100}
            width={100}
            className="rounded-full aspect-square object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Erik Fernandez Torrents
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-indigo-400 mt-2">
          Fullstack Web Developer
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          CODE. CREATE. INNOVATE.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="/cv/CurrículumErikFernandez.pdf"
            target="_blank"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl transition hover:shadow-[0_0_10px_#ffffff] hover:shadow-white transition-shadow"
            download
          >
            Descargar CV
          </a>
          <a
            href="https://www.linkedin.com/in/erik-fernandez-torrents-b54996279"
            target="_blank"
            className="flex items-center gap-2 border border-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-xl transition hover:text-[#FFD482] hover:shadow-[0_0_10px_#ffffff] hover:shadow-white transition-shadow"
          >
            <img
              src="../icons/linkedin.svg"
              alt="linkedin"
              className="w-5 h-5 filter invert"
            />
            LinkedIn
          </a>

        </div>
      </motion.div>
    </section>
  );
}