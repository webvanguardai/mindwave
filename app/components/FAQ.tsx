'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How do I know which therapy is right for me?',
    answer:
      'You don\'t need to know — that\'s what our free 20-minute consultation is for. One of our practitioners will listen to what you\'re going through and suggest the most appropriate approach. There\'s no pressure, no commitment. Many clients find that a combination of therapies works best, and we\'ll guide you through all your options.',
  },
  {
    question: 'Is everything confidential?',
    answer:
      'Absolutely. Everything discussed in your sessions is strictly confidential. We follow the BACP\'s ethical guidelines, which means your privacy is always protected. The only exceptions are rare situations where there is an immediate risk to your safety or the safety of others — and even then, we would always discuss this with you first where possible.',
  },
  {
    question: 'Do you offer online sessions?',
    answer:
      'Yes — all of our services are available both in-person at our London clinic and online via a secure video platform. Many clients appreciate the flexibility and comfort of working from home, and research shows that online therapy is equally as effective as face-to-face for most conditions.',
  },
  {
    question: 'How long does therapy take?',
    answer:
      'This varies widely depending on what you\'re working on and the approach we take. Some people see significant shifts in 6–8 sessions of CBT; trauma healing may take longer. We work without rigid timelines — your progress guides the pace. We\'ll review regularly and you\'re always in control of when to continue, pause or stop.',
  },
  {
    question: 'What are your prices?',
    answer:
      'Sessions start from £60 for yoga and mindfulness through to £95 for hypnotherapy. Initial consultations (20 minutes) are completely free. We also offer concession rates for students, NHS workers and those experiencing financial hardship — please mention this when you get in touch and we\'ll do our best to accommodate.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply fill in the contact form on this page, send us a WhatsApp message, or email us at hello@mindwave.co.uk. We\'ll respond within 24 hours to arrange your free initial consultation. From there, we\'ll match you with the most suitable practitioner and you can book your first session at a time that works for you.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest text-[#8FAF9F] uppercase">Got questions?</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D4A3E] mt-3 mb-4">
            Frequently asked
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            We want you to feel informed and at ease before you take the first step.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-[#8FAF9F]/30 overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#8FAF9F]/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#2D4A3E] pr-4">{faq.question}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-[#8FAF9F]/20 flex items-center justify-center transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    <svg className="w-3.5 h-3.5 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
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
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-[#8FAF9F]/20 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-600 mb-4">Still have questions? We&apos;re happy to help.</p>
          <a
            href="mailto:hello@mindwave.co.uk"
            className="inline-flex items-center gap-2 text-[#2D4A3E] font-semibold hover:text-[#8FAF9F] transition-colors"
          >
            Email us at hello@mindwave.co.uk
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
