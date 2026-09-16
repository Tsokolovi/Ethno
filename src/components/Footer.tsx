import React from 'react';
import { Mountain, MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onOpenB2B: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenB2B }) => {
  const t = TRANSLATIONS[currentLang].footer;
  const tNav = TRANSLATIONS[currentLang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#201712] text-[#D0C2B4] pt-14 pb-8 border-t border-[#3B2D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3B2D24]">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E58332]/20 border border-[#E58332]/40 flex items-center justify-center text-[#F3BE7A]">
                <span className="font-serif text-xl font-bold">ე</span>
              </div>
              <span className="font-serif text-3xl font-bold tracking-wider text-white">
                ეთნო
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                Ethno
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#AFA193] font-light leading-relaxed max-w-sm">
              {t.about}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#E58332]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#52B788]"></span>
              <span>{t.rawOriginBadge}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.navigationHeading}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  {tNav.catalog}
                </a>
              </li>
              <li>
                <a href="#terroirs" className="hover:text-white transition-colors">
                  {tNav.terroir}
                </a>
              </li>
              <li>
                <a href="#tea-sommelier" className="hover:text-white transition-colors">
                  {tNav.teaSommelier}
                </a>
              </li>
              <li>
                <a href="#eco-philosophy" className="hover:text-white transition-colors">
                  {tNav.eco}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenB2B}
                  className="hover:text-[#F3BE7A] text-[#E58332] font-semibold transition-colors cursor-pointer"
                >
                  {tNav.b2b}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts & Workshops */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.contactTitle}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#C5B5A5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E58332] shrink-0 mt-0.5" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E58332] shrink-0" />
                <a href="tel:+995599123456" className="hover:text-white transition-colors">
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E58332] shrink-0" />
                <a href="mailto:info@ethno-georgia.ge" className="hover:text-white transition-colors">
                  {t.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#2C211A] hover:bg-[#3D2E24] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#2C211A] hover:bg-[#3D2E24] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom micro bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7A6E]">
          <div>
            © {new Date().getFullYear()} «ეთნო» (Ethno Georgia). {t.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#C5B5A5] hover:text-white transition-colors cursor-pointer"
          >
            <span>{t.toTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
