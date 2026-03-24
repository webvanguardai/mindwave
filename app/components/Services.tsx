'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 'cbt',
    name: 'Cognitive Behavioural Therapy (CBT)',
    tagline: 'Rewire unhelpful thought patterns and build lasting coping skills.',
    whoFor: 'Anxiety, depression, OCD, phobias, and stress-related conditions.',
    duration: '50 minutes per session',
    price: 'From £80',
    icon: '🧠',
    description:
      'CBT is a structured, evidence-based therapy that helps you identify and change negative thought patterns and behaviours. It\'s one of the most researched forms of therapy and is highly effective for a wide range of mental health challenges.',
  },
  {
    id: 'hypno',
    name: 'Hypnotherapy',
    tagline: 'Access your subconscious mind to create deep, lasting change.',
    whoFor: 'Phobias, habits, confidence issues, anxiety, and pain management.',
    duration: '60–90 minutes per session',
    price: 'From £95',
    icon: '🌀',
    description:
      'Clinical hypnotherapy uses guided relaxation and focused attention to reach a heightened state of awareness — allowing you to explore thoughts, feelings and memories you might normally block out. It\'s safe, gentle, and deeply transformative.',
  },
  {
    id: 'trauma',
    name: 'Trauma Healing',
    tagline: 'Safe, gentle processing of past experiences holding you back.',
    whoFor: 'PTSD, complex trauma, childhood experiences, relationship trauma.',
    duration: '60 minutes per session',
    price: 'From £90',
    icon: '🌿',
    description:
      'Our trauma-informed practitioners use EMDR, somatic approaches and compassion-focused methods to help you safely process and integrate painful experiences. Healing is possible — and you deserve to feel free.',
  },
  {
    id: 'nutrition',
    name: 'Nutrition Guidance',
    tagline: 'Nourish your mind and body through personalised nutritional support.',
    whoFor: 'Gut health, mood regulation, low energy, disordered eating recovery.',
    duration: '45 minutes per session',
    price: 'From £75',
    icon: '🥗',
    description:
      'Our registered nutritional therapists take a whole-body approach, understanding how food choices impact mood, cognition and wellbeing. Expect practical, personalised guidance — never restrictive or prescriptive.',
  },
  {
    id: 'yoga',
    name: 'Yoga & Mindfulness',
    tagline: 'Ground yourself in the present moment through movement and breath.',
    whoFor: 'Stress, burnout, anxiety, chronic pain, and anyone wanting calm.',
    duration: '60 minutes per session',
    price: 'From £60',
    icon: '🧘',
    description:
      'Our therapeutic yoga and mindfulness sessions are trauma-sensitive and suitable for all bodies and abilities. Whether you\'re a beginner or experienced practitioner, our classes offer a safe space to return to yourself.',
  },
  {
    id: 'coaching',
    name: 'Life Coaching',
    tagline: 'Clarify your direction and take purposeful steps toward the life you want.',
    whoFor: 'Career transitions, relationships, goal-setting, confidence, and identity.',
    duration: '55 minutes per session',
    price: 'From £85',
    icon: '🎯',
    description:
      'Life coaching is for people who aren\'t in crisis, but who know they\'re capable of more. Our coaches help you identify what\'s holding you back, design clear goals, and build the accountability to make real change happen.',
  },
];

export default function Services() {
  const [openId, setOpenId] = useState<string | null>('cbt');

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest text-[#8FAF9F] uppercase">What we offer</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D4A3E] mt-3 mb-4">
            Our services
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Each pathway is tailored to you. Not sure which is right? We&apos;ll help you find out.
          </p>
        </motion.div>

        <div className="space-y-3">
          {services.map((service, i) => {
            const isOpen = openId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-[#8FAF9F]/30 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors ${
                    isOpen ? 'bg-[#2D4A3E] text-white' : 'bg-[#FAF8F5] hover:bg-[#8FAF9F]/10 text-gray-800'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-2xl flex-shrink-0">{service.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-serif font-semibold text-lg leading-tight ${isOpen ? 'text-white' : 'text-[#2D4A3E]'}`}>
                      {service.name}
                    </h3>
                    <p className={`text-sm mt-0.5 ${isOpen ? 'text-[#8FAF9F]' : 'text-gray-500'}`}>
                      {service.tagline}
                    </p>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform ${isOpen ? 'rotate-45 bg-white/20' : 'bg-[#8FAF9F]/20'}`}>
                    <svg className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-[#2D4A3E]'}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-6 bg-white border-t border-[#8FAF9F]/20">
                        <p className="text-gray-700 leading-relaxed mb-5">{service.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="flex items-start gap-3">
                            <span className="text-[#8FAF9F] mt-0.5">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Best for</p>
                              <p className="text-sm text-gray-700">{service.whoFor}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-[#8FAF9F] mt-0.5">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                              <p className="text-sm text-gray-700">{service.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="text-[#8FAF9F] mt-0.5">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Investment</p>
                              <p className="text-sm font-semibold text-[#2D4A3E]">{service.price}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D4A3E] hover:text-[#8FAF9F] transition-colors"
                          >
                            Book a consultation for this service
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
