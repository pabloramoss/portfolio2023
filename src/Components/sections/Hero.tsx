'use client';
import { motion } from 'framer-motion';

import ContactBtn from '../ContactButton';

export default function Hero() {
  return (
    <motion.section
      animate="visible"
      className="flex flex-col gap-4 h-screen justify-center md:-mt-20 items-center md:items-start"
      id="home"
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.25 }}
      variants={{
        hidden: {
          opacity: 0,
          y: -100,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      <div className="grid text-center md:text-start">
        <h2 className="font-extrabold text-3xl">Hi, my name is</h2>
        <h1 className="font-extrabold text-7xl">Pablo Ramos</h1>
      </div>
      <div className="grid text-center md:text-start">
        <h2 className="text-3xl">
          I am{' '}
          <span className="text-green-300 font-extrabold whitespace-nowrap">
            Frontend Developer
          </span>
        </h2>
        <h2 className="text-xl">I build things for the web</h2>
      </div>
      <ContactBtn />
    </motion.section>
  );
}
