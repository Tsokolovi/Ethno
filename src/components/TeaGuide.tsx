import React, { useState } from 'react';
import { Coffee, Sparkles, Clock, Thermometer, Droplets, ArrowRight, Check } from 'lucide-react';
import { Language, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { ASSETS } from '../data/assets';

interface TeaGuideProps {
  currentLang: Language;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const TeaGuide: React.FC<TeaGuideProps> = ({
  currentLang,
  onSelectProduct,
  onAddToCart
}) => {
  const [selectedMood, setSelectedMood] = useState<'evening' | 'immunity' | 'harmony'>('immunity');
  const [added, setAdded] = useState(false);
  const t = TRANSLATIONS[currentLang].teaSommelier;

  // Match mood with authentic fruit tea
  const teaIdMap = {
    evening: 'ethno-tea-alazani-evening',
    immunity: 'ethno-tea-svaneti-alpine',
    harmony: 'ethno-tea-racha-mountain'
  };

  const currentTea = PRODUCTS.find((p) => p.id === teaIdMap[selectedMood]) || PRODUCTS[4];

  const handleAdd = () => {
    onAddToCart(currentTea);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <section id="tea-sommelier" className="py-16 sm:py-24 bg-[#F5EFE6] border-t border-[#E5DACE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-2">
            <Coffee className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D221A] mb-3">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A4D] font-light">
            {t.subheading}
          </p>
        </div>

        {/* Mood Selector Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
          <button
            onClick={() => setSelectedMood('immunity')}
            className={`w-full sm:w-auto px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
              selectedMood === 'immunity'
                ? 'bg-[#B45309] text-white border-[#B45309] shadow-md'
                : 'bg-white hover:bg-[#FBF8F4] text-[#4A3B31] border-[#DFD3C3]'
            }`}
          >
            🏔️ {t.moodImmunity}
          </button>

          <button
            onClick={() => setSelectedMood('evening')}
            className={`w-full sm:w-auto px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
              selectedMood === 'evening'
                ? 'bg-[#B45309] text-white border-[#B45309] shadow-md'
                : 'bg-white hover:bg-[#FBF8F4] text-[#4A3B31] border-[#DFD3C3]'
            }`}
          >
            🌅 {t.moodEvening}
          </button>

          <button
            onClick={() => setSelectedMood('harmony')}
            className={`w-full sm:w-auto px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
              selectedMood === 'harmony'
                ? 'bg-[#B45309] text-white border-[#B45309] shadow-md'
                : 'bg-white hover:bg-[#FBF8F4] text-[#4A3B31] border-[#DFD3C3]'
            }`}
          >
            🍃 {t.moodHarmony}
          </button>
        </div>

        {/* Tea Showcase Card */}
        <div className="bg-white rounded-3xl border border-[#DFD1BF] shadow-lg p-6 sm:p-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden min-h-[260px] bg-[#EAE2D5]">
            <img
              src={currentTea.image}
              alt={currentTea.name[currentLang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#2D221A]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase">
              {t.authenticOrigin}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-[#8F532B] uppercase tracking-wider mb-1">
                {t.recommendation}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D221A] mb-2">
                {currentTea.name[currentLang]}
              </h3>
              <p className="text-xs font-serif italic text-[#8B7765] mb-3">
                {currentTea.georgianName}
              </p>
              <p className="text-xs sm:text-sm text-[#5B4B3F] font-light leading-relaxed mb-4">
                {currentTea.description[currentLang]}
              </p>

              {/* Brewing metrics */}
              {currentTea.brewingGuide && (
                <div className="grid grid-cols-3 gap-2 bg-[#FAF7F2] p-3 rounded-xl border border-[#E9DFD2] mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#2D221A]">
                    <Thermometer className="w-4 h-4 text-[#B45309]" />
                    <span>{currentTea.brewingGuide.temp}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#2D221A]">
                    <Clock className="w-4 h-4 text-[#B45309]" />
                    <span>{currentTea.brewingGuide.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#2D221A]">
                    <Droplets className="w-4 h-4 text-[#B45309]" />
                    <span>{currentTea.brewingGuide.ratio}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#F2EBE1]">
              <div className="font-serif text-2xl font-bold text-[#2D221A]">
                {currentTea.price.toFixed(1)} ₾ <span className="text-xs font-normal text-[#8A7A6E]">/ {currentTea.weight}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectProduct(currentTea)}
                  className="px-4 py-2 rounded-xl border border-[#D5C6B5] text-xs font-semibold text-[#4A3B31] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {t.viewMore}
                </button>
                <button
                  onClick={handleAdd}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    added ? 'bg-[#3A5A40] text-white' : 'bg-[#B45309] hover:bg-[#92400E] text-white shadow-xs'
                  }`}
                >
                  {added ? <Check className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                  <span>{added ? t.added : t.orderTea}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
