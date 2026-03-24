'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xpwzgkrl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest text-[#8FAF9F] uppercase">Take the first step</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D4A3E] mt-3 mb-4">
            Book your free consultation
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            No commitment, no pressure. Just a friendly conversation to see how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {status === 'success' ? (
              <div className="bg-[#2D4A3E]/5 border border-[#8FAF9F]/40 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#8FAF9F]/30 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2D4A3E] mb-2">Message received!</h3>
                <p className="text-gray-600">We&apos;ll be in touch within 24 hours to arrange your consultation. Thank you for reaching out.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#2D4A3E] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-[#8FAF9F]/40 bg-[#FAF8F5] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8FAF9F] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2D4A3E] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#8FAF9F]/40 bg-[#FAF8F5] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8FAF9F] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#2D4A3E] mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 7700 000000"
                    className="w-full px-4 py-3 rounded-xl border border-[#8FAF9F]/40 bg-[#FAF8F5] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8FAF9F] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2D4A3E] mb-2">
                    What are you looking for? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us a little about what's brought you here — there's no right or wrong answer..."
                    className="w-full px-4 py-3 rounded-xl border border-[#8FAF9F]/40 bg-[#FAF8F5] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8FAF9F] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact_time" className="block text-sm font-semibold text-[#2D4A3E] mb-2">
                    Preferred contact time
                  </label>
                  <select
                    id="contact_time"
                    name="contact_time"
                    className="w-full px-4 py-3 rounded-xl border border-[#8FAF9F]/40 bg-[#FAF8F5] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8FAF9F] focus:border-transparent transition-all"
                  >
                    <option value="">Any time</option>
                    <option value="morning">Morning (9am – 12pm)</option>
                    <option value="afternoon">Afternoon (12pm – 5pm)</option>
                    <option value="evening">Evening (5pm – 8pm)</option>
                    <option value="weekend">Weekend</option>
                  </select>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-full bg-[#2D4A3E] text-white font-semibold text-base hover:bg-[#3d6357] transition-colors disabled:opacity-60 shadow-md"
                >
                  {status === 'sending' ? 'Sending...' : 'Send my message'}
                </button>

                <p className="text-center text-xs text-gray-500">
                  🔒 Your information is fully confidential and never shared.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Contact details */}
            <div className="bg-[#FAF8F5] rounded-2xl p-7 border border-[#8FAF9F]/20">
              <h3 className="font-serif text-xl font-bold text-[#2D4A3E] mb-5">Find us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8FAF9F]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D4A3E] text-sm">Address</p>
                    <p className="text-gray-600 text-sm mt-0.5">12 Harley Street, London, W1G 9PQ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8FAF9F]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D4A3E] text-sm">Email</p>
                    <a href="mailto:hello@mindwave.co.uk" className="text-[#2D4A3E] text-sm hover:text-[#8FAF9F] transition-colors mt-0.5 block">
                      hello@mindwave.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8FAF9F]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#2D4A3E]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D4A3E] text-sm">Hours</p>
                    <p className="text-gray-600 text-sm mt-0.5">Mon–Fri: 9am–8pm · Sat: 10am–4pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D4A3E] text-sm">WhatsApp</p>
                    <a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer" className="text-green-600 text-sm hover:text-green-700 transition-colors mt-0.5 block">
                      +44 7700 000000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#8FAF9F]/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.595!2d-0.14900!3d51.52050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad3bfb77b33%3A0xa10e4e64a82c8e1c!2sHarley%20St%2C%20London!5e0!3m2!1sen!2suk!4v1000000000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MindWave location — 12 Harley Street, London"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
