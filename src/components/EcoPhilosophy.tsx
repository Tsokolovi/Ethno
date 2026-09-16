import React from 'react';
import { Leaf, ShieldCheck, XCircle, CheckCircle, Sun, Wind, Recycle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface EcoPhilosophyProps {
  currentLang: Language;
}

export const EcoPhilosophy: React.FC<EcoPhilosophyProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang].eco;

  return (
    <section id="eco-philosophy" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#3A5A40] mb-2">
            <Leaf className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D221A] mb-3">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A4D] font-light">
            {t.subheading}
          </p>
        </div>

        {/* 3 Core Ethical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9DEC5] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F0EA] text-[#3A5A40] flex items-center justify-center mb-5">
              <Sun className="w-6 h-6 text-[#2D6A4F]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D221A] mb-2">
              {t.sunWindTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#665547] leading-relaxed font-light">
              {t.sunWindDesc}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9DEC5] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF0E5] text-[#B45309] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-[#B45309]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D221A] mb-2">
              {t.pureTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#665547] leading-relaxed font-light">
              {t.pureDesc}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E9DEC5] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#F4EDE5] text-[#8F532B] flex items-center justify-center mb-5">
              <Recycle className="w-6 h-6 text-[#8F532B]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D221A] mb-2">
              {t.kraftTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#665547] leading-relaxed font-light">
              {t.kraftDesc}
            </p>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#EADBCE] shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#2D221A] text-white p-4 sm:p-6">
            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#DFD3C7] pb-2 md:pb-0 border-b md:border-b-0 md:border-r border-[#45362C]">
              <XCircle className="w-5 h-5 text-[#E63946]" />
              <span>{t.industrialTitle}</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#F3BE7A] pt-2 md:pt-0 md:pl-6">
              <CheckCircle className="w-5 h-5 text-[#52B788]" />
              <span>{t.ethnoTitle}</span>
            </div>
          </div>

          <div className="divide-y divide-[#EADBCE]">
            {t.points.map((point, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 p-5 sm:p-7 gap-4 hover:bg-[#FAF6F0] transition-colors">
                {/* Bad / Industrial */}
                <div className="pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-[#EADBCE] pb-3 md:pb-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#A84242] mb-1">
                    {point.feature}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6C5A4E] leading-relaxed">
                    {point.bad}
                  </p>
                </div>

                {/* Good / Ethno */}
                <div className="pl-0 md:pl-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] mb-1">
                    {t.ethnoStandard}
                  </div>
                  <p className="text-xs sm:text-sm text-[#2D221A] font-medium leading-relaxed">
                    {point.good}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
