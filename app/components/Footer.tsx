import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D4A3E] text-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white mb-3">MindWave</h3>
            <p className="text-sm leading-relaxed mb-4">
              Evidence-based therapy, coaching and wellness — designed around you.
            </p>
            <div className="flex items-center gap-2 text-xs bg-white/10 rounded-full px-3 py-1.5 w-fit">
              <span className="text-[#8FAF9F]">✓</span>
              <span>BACP Registered Practice</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['CBT', 'Hypnotherapy', 'Trauma Healing', 'Nutrition Guidance', 'Yoga & Mindfulness', 'Life Coaching'].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-[#8FAF9F] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Our Team', href: '#team' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#8FAF9F] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@mindwave.co.uk" className="hover:text-[#8FAF9F] transition-colors">
                  hello@mindwave.co.uk
                </a>
              </li>
              <li>
                <a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer" className="hover:text-[#8FAF9F] transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="text-white/50">12 Harley Street</li>
              <li className="text-white/50">London, W1G 9PQ</li>
              <li className="text-white/50">Mon–Fri: 9am–8pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} MindWave Therapy Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="text-[#8FAF9F]/60">BACP Registered · Reg. No. 000000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
