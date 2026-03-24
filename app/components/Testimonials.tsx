'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rachel',
    quote:
      'After 6 sessions of CBT with Sarah, I genuinely feel like a different person. I finally understand why I react the way I do — and now I have the tools to change it. I wish I\'d done this years ago.',
    service: 'CBT with Dr Sarah Mitchell',
    stars: 5,
  },
  {
    name: 'Marcus',
    quote:
      'I was sceptical about hypnotherapy but James completely changed my mind. My fear of flying that had kept me grounded for 8 years is gone. I flew to Barcelona last month without a second thought.',
    service: 'Hypnotherapy with James Okafor',
    stars: 5,
  },
  {
    name: 'Amelia',
    quote:
      'Priya\'s nutrition and mindfulness sessions helped me understand the link between what I eat and how I feel mentally. The burnout fog lifted after about 3 months of working with her. Truly life-changing.',
    service: 'Wellness Coaching with Priya Sharma',
    stars: 5,
  },
  {
    name: 'Daniel',
    quote:
      'MindWave matched me with the right therapist from the very first call. The whole process felt human and personal — nothing like the NHS waiting lists. I felt heard from day one.',
    service: 'Trauma Therapy',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#2D4A3E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest text-[#8FAF9F] uppercase">Real people, real change</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Stories of transformation
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Our clients&apos; words, shared with permission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/15 transition-colors"
            >
              <Stars count={t.stars} />
              <blockquote className="text-white/90 text-base leading-relaxed mb-5 font-light">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8FAF9F]/40 flex items-center justify-center">
                  <span className="font-serif font-bold text-[#8FAF9F] text-lg">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-[#8FAF9F] text-xs">{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-10 text-white/50 text-sm"
        >
          Verified testimonials from real clients · Names and details shared with permission
        </motion.div>
      </div>
    </section>
  );
}
