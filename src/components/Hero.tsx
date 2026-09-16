import React from 'react';
import { ArrowRight, Sun, Mountain, Leaf, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ASSETS } from '../data/assets';

interface HeroProps {
  currentLang: Language;
  onExploreCatalog: () => void;
  onExploreTerroirs: () => void;
  onOpenB2B: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreCatalog,
  onExploreTerroirs,
  onOpenB2B
}) => {
  const t = TRANSLATIONS[currentLang].hero;

  return (
    <section className="relative overflow-hidden bg-[#2D221A] text-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background hero image with warm atmospheric tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="ეთნო Georgian mountain dried fruits and mountain herbal teas"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-95"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221812] via-[#2A1E17]/90 to-[#221812]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Authentic Region Tag */}
          <div className="inline-flex items-center gap-2 bg-[#E58332]/20 border border-[#E58332]/40 rounded-full px-3.5 py-1.5 mb-6 backdrop-blur-xs">
            <span className="text-sm">🇬🇪</span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F3BE7A]">
              {t.tag}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-[1.15] mb-4">
            {t.titlePrimary} <br />
            <span className="text-[#E58332] italic font-normal">
              {t.titleSecondary}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#DFD3C7] leading-relaxed mb-8 max-w-2xl font-light">
            {t.description}
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onExploreCatalog}
              id="hero-catalog-cta"
              className="px-6 py-3.5 rounded-full bg-[#E58332] hover:bg-[#D47223] text-white font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#E58332]/25 cursor-pointer active:scale-95"
            >
              <span>{t.viewCatalog}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreTerroirs}
              id="hero-terroir-cta"
              className="px-6 py-3.5 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#FAF7F2]/25 font-medium text-sm sm:text-base flex items-center gap-2 transition-all backdrop-blur-xs cursor-pointer"
            >
              <Mountain className="w-4 h-4 text-[#F3BE7A]" />
              <span>{t.exploreRegions}</span>
            </button>

            <button
              onClick={onOpenB2B}
              id="hero-b2b-cta"
              className="text-xs sm:text-sm font-semibold text-[#F3BE7A] hover:text-white underline underline-offset-4 transition-colors cursor-pointer py-2 px-1"
            >
              {t.b2bDirect} →
            </button>
          </div>

          {/* Four Pillar Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#FAF7F2]/15">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF7F2]/10 text-[#F3BE7A]">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base text-white">{t.statOrigin}</div>
                <div className="text-xs text-[#C5B5A5]">{t.statOriginSub}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF7F2]/10 text-[#F3BE7A]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base text-white">{t.statClean}</div>
                <div className="text-xs text-[#C5B5A5]">{t.statCleanSub}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF7F2]/10 text-[#F3BE7A]">
                <Mountain className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base text-white">{t.statAltitude}</div>
                <div className="text-xs text-[#C5B5A5]">{t.statAltitudeSub}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FAF7F2]/10 text-[#F3BE7A]">
                <Sun className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base text-white">{t.statPackaging}</div>
                <div className="text-xs text-[#C5B5A5]">{t.statPackagingSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
