'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description:
      'Share what you\'re going through — there\'s no right or wrong way to start. A brief call or message is all it takes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We match you with the right therapist',
    description:
      'Our team reviews your needs and connects you with a specialist whose approach, experience and availability suit you perfectly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Start your journey',
    description:
      'Begin your first session — in person in London or online from anywhere. At your own pace, on your own terms.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-[#8FAF9F] uppercase">Simple process</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D4A3E] mt-3 mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Three easy steps to start feeling more like yourself again.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#8FAF9F]/50 to-transparent" style={{ left: '20%', right: '20%' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-[#8FAF9F]/20 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#2D4A3E]/10 flex items-center justify-center text-[#2D4A3E] mb-5">
                {step.icon}
              </div>
              <span className="font-serif text-5xl font-bold text-[#8FAF9F]/40 absolute top-6 right-6">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#2D4A3E] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
