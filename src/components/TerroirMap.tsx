import React, { useState } from 'react';
import { Mountain, Sun, Compass, Sparkles, Trees, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { REGIONS } from '../data/regions';
import { TRANSLATIONS } from '../data/translations';
import { ASSETS } from '../data/assets';

interface TerroirMapProps {
  currentLang: Language;
  onFilterByRegion?: (regionName: string) => void;
}

export const TerroirMap: React.FC<TerroirMapProps> = ({ currentLang }) => {
  const [selectedRegionId, setSelectedRegionId] = useState(REGIONS[0].id);
  const t = TRANSLATIONS[currentLang].terroir;

  const currentRegion = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];

  return (
    <section id="terroirs" className="py-16 sm:py-24 bg-[#F2ECE1] border-y border-[#E2D6C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#8F532B] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D221A] mb-3">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#685648] font-light">
            {t.subheading}
          </p>
        </div>

        {/* Region selector navigation buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {REGIONS.map((region) => {
            const isSelected = region.id === selectedRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#2D221A] text-white border-[#2D221A] shadow-md -translate-y-0.5'
                    : 'bg-white/80 hover:bg-white text-[#3B2D23] border-[#DFD1BF]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono tracking-wider opacity-75">
                    {region.elevation}
                  </span>
                  <Mountain className={`w-4 h-4 ${isSelected ? 'text-[#E58332]' : 'text-[#8F532B]'}`} />
                </div>
                <div className="font-serif text-lg font-bold">
                  {region.georgianTitle}
                </div>
                <div className={`text-xs truncate ${isSelected ? 'text-[#D0C2B4]' : 'text-[#7B6A5D]'}`}>
                  {region.name[currentLang]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Region Deep Dive Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DFD1BF] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual column with terroir harvest image */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[340px] bg-[#EFE8DD] shadow-inner">
            <img
              src={ASSETS.terroirHarvest}
              alt={currentRegion.name[currentLang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#221812]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-xs font-medium uppercase tracking-wider text-[#F3BE7A] mb-1 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#E58332]" />
                <span>{currentRegion.sunDays} {t.sunDays}</span>
              </div>
              <div className="font-serif text-2xl font-bold">
                {currentRegion.name[currentLang]}
              </div>
            </div>
          </div>

          {/* Details column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF4ED] text-[#8F532B] border border-[#E9DFD0] mb-3">
                {currentRegion.climate[currentLang]}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D221A] mb-4">
                {currentRegion.name[currentLang]} — {t.elevationLabel} {currentRegion.elevation}
              </h3>

              <p className="text-[#55463A] text-sm sm:text-base leading-relaxed mb-6 font-light">
                {currentRegion.description[currentLang]}
              </p>

              {/* Key harvests in this region */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8F532B] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.harvestHighlights}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentRegion.keyHarvests.map((harvest, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EBE1D3] flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0" />
                      <span className="text-xs font-semibold text-[#2D221A]">
                        {harvest[currentLang]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro pledge */}
            <div className="p-3.5 rounded-xl bg-[#F6F1E9] border border-[#E3D7C7] flex items-center justify-between text-xs text-[#716153]">
              <div className="flex items-center gap-2">
                <Trees className="w-4 h-4 text-[#3A5A40]" />
                <span>{t.ecoPledge}</span>
              </div>
              <span className="font-semibold text-[#2D221A] hidden sm:inline">ეთნო Georgia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
