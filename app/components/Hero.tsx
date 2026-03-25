'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=85&fit=crop"
          alt="Peaceful forest light — calm and nature"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D4A3E]/85 via-[#2D4A3E]/55 to-[#8FAF9F]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-sm font-medium tracking-wide border border-white/20">
            BACP Registered · London & Online
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            It&apos;s okay to<br />
            <span className="text-[#8FAF9F]">need support.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            BACP-registered therapy and coaching — warm, confidential,<br className="hidden sm:block" />
            at your pace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-primary font-semibold text-base hover:bg-[#8FAF9F] hover:text-white transition-all duration-300 shadow-lg"
            >
              Talk to someone
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-medium text-base hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              How we can help
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#how-it-works" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1"
            >
              <div className="w-1 h-3 rounded-full bg-white/70" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
