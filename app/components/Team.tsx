'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Dr Sarah Mitchell',
    title: 'Lead Therapist & Clinical Psychologist',
    speciality: 'CBT · Trauma Healing · Anxiety',
    bio: 'With over 12 years in clinical practice, Sarah brings warmth and precision to every session. She trained at the Institute of Psychiatry, King\'s College London, and specialises in complex trauma and anxiety disorders.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    credentials: 'DClinPsych · BACP Accredited',
  },
  {
    name: 'James Okafor',
    title: 'Hypnotherapist & CBT Practitioner',
    speciality: 'Hypnotherapy · Life Coaching · Phobias',
    bio: 'James blends clinical hypnotherapy with evidence-based CBT techniques to help clients break long-standing patterns. His calm, direct style has helped hundreds overcome fears, habits and confidence barriers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    credentials: 'NCH Certified · NLP Practitioner',
  },
  {
    name: 'Priya Sharma',
    title: 'Wellness Coach & Nutritional Therapist',
    speciality: 'Nutrition · Yoga & Mindfulness · Burnout',
    bio: 'Priya takes a whole-person approach to wellness, weaving together nutritional science, mindful movement and somatic coaching. She is a specialist in burnout recovery and women\'s health.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop&crop=face',
    credentials: 'mBANT · Yoga Alliance 500hr',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest text-[#8FAF9F] uppercase">The people behind MindWave</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D4A3E] mt-3 mb-4">
            Meet your practitioners
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Highly trained, deeply human. Our team is here because they genuinely care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#8FAF9F]/20 hover:shadow-md transition-shadow group"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.title}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A3E]/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2D4A3E]">{member.name}</h3>
                    <p className="text-sm text-gray-500 font-medium mt-0.5">{member.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                  {member.speciality.split(' · ').map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#8FAF9F]/20 text-[#2D4A3E] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <p className="text-xs text-[#8FAF9F] font-semibold tracking-wide">{member.credentials}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
