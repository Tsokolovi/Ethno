import React, { useState } from 'react';
import { X, MapPin, Mountain, Sun, ShoppingBag, Check, Flame, ShieldAlert, Sparkles, Coffee } from 'lucide-react';
import { Product, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ProductModalProps {
  product: Product | null;
  currentLang: Language;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  currentLang,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const t = TRANSLATIONS[currentLang].modal;
  const tCat = TRANSLATIONS[currentLang].catalog;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E3D7C7] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4A3B31] flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image & Region Badges */}
          <div className="relative h-64 md:h-full min-h-[320px] bg-[#EFE9E0]">
            <img
              src={product.image}
              alt={product.name[currentLang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
            
            <div className="absolute bottom-4 left-4 right-4 md:top-4 md:left-4 md:right-auto flex flex-wrap gap-2">
              <span className="bg-[#2D221A]/85 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                <Mountain className="w-3.5 h-3.5 text-[#E58332]" />
                <span>{product.elevation}</span>
              </span>
              <span className="bg-[#B45309]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5" />
                <span>{product.weight}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div>
              {/* Native Georgian script */}
              <div className="text-sm font-serif italic text-[#8B7765] mb-1">
                {product.georgianName}
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D221A] leading-tight mb-2">
                {product.name[currentLang]}
              </h2>

              {/* Region */}
              <div className="flex items-center gap-1.5 text-xs text-[#8F532B] font-medium mb-4">
                <MapPin className="w-4 h-4 text-[#B45309]" />
                <span>{product.region[currentLang]}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#4E4035] leading-relaxed mb-5 font-light">
                {product.description[currentLang]}
              </p>

              {/* Flavor Profile */}
              {product.flavorNotes && (
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-[#736356] uppercase tracking-wider mb-1.5">
                    {t.flavorProfile}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(product.flavorNotes[currentLang] || []).map((note, idx) => (
                      <span
                        key={idx}
                        className="bg-[#F2ECE3] text-[#5C4A3C] text-xs font-medium px-2.5 py-1 rounded-lg border border-[#E3D8CB]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients */}
              <div className="mb-4 bg-[#F2ECE3] p-3.5 rounded-xl border border-[#E3D9CC]">
                <div className="text-[11px] font-bold text-[#736356] uppercase tracking-wider mb-1">
                  {t.ingredients}
                </div>
                <p className="text-xs text-[#2D221A] font-medium">
                  {product.ingredients[currentLang]}
                </p>
              </div>

              {/* Tea Brewing Guide (if tea) */}
              {product.brewingGuide && (
                <div className="mb-4 bg-[#F5EFE6] p-3.5 rounded-xl border border-[#DECDBB]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#8F532B] uppercase tracking-wider mb-2">
                    <Coffee className="w-4 h-4 text-[#B45309]" />
                    <span>{t.teaBrewing}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-white/70 p-1.5 rounded-lg">
                      <span className="text-[10px] text-[#806E60] block">{t.temp}</span>
                      <span className="font-semibold text-[#2D221A]">{product.brewingGuide.temp}</span>
                    </div>
                    <div className="bg-white/70 p-1.5 rounded-lg">
                      <span className="text-[10px] text-[#806E60] block">{t.time}</span>
                      <span className="font-semibold text-[#2D221A]">{product.brewingGuide.time}</span>
                    </div>
                    <div className="bg-white/70 p-1.5 rounded-lg">
                      <span className="text-[10px] text-[#806E60] block">{t.ratio}</span>
                      <span className="font-semibold text-[#2D221A]">{product.brewingGuide.ratio}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Nutritional facts (if dried fruit) */}
              {product.nutritionalInfo && (
                <div className="mb-5 bg-[#F2ECE3] p-3.5 rounded-xl border border-[#E3D9CC]">
                  <div className="text-[11px] font-bold text-[#736356] uppercase tracking-wider mb-2">
                    {t.nutrition}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-center">
                    <div className="bg-white/70 p-1.5 rounded-lg">
                      <span className="text-[10px] text-[#806E60] block">{t.calories}</span>
                      <span className="font-bold text-[#2D221A]">{product.nutritionalInfo.calories}</span>
                    </div>
                    <div className="bg-white/70 p-1.5 rounded-lg">
                      <span className="text-[10px] text-[#806E60] block">{t.sugar}</span>
                      <span className="font-bold text-[#2D221A]">{product.nutritionalInfo.sugarAdded}</span>
                    </div>
                    <div className="bg-white/70 p-1.5 rounded-lg">
                      <span className="text-[10px] text-[#806E60] block">{t.fiber}</span>
                      <span className="font-bold text-[#2D221A]">{product.nutritionalInfo.fiber}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Eco Guarantee Note */}
              <div className="text-[11px] text-[#786759] flex items-start gap-1.5 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                <span>{t.ecoGuarantee}</span>
              </div>
            </div>

            {/* Price & Add to Cart Controls */}
            <div className="pt-4 border-t border-[#EADBCE] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#7A6B5E] block font-light">
                  {tCat.price}
                </span>
                <span className="font-serif text-2xl font-bold text-[#2D221A]">
                  {(product.price * quantity).toFixed(1)} {tCat.currency}
                </span>
              </div>

              {/* Quantity modifier */}
              <div className="flex items-center gap-1 bg-[#EAE2D5] rounded-xl p-1 border border-[#D8CCBD]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-lg bg-white text-[#2D221A] font-bold text-sm flex items-center justify-center hover:bg-[#F3EFE9] cursor-pointer"
                >
                  -
                </button>
                <span className="w-7 text-center font-bold text-xs text-[#2D221A]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-white text-[#2D221A] font-bold text-sm flex items-center justify-center hover:bg-[#F3EFE9] cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add button */}
              <button
                onClick={handleAdd}
                className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  addedSuccess
                    ? 'bg-[#3A5A40] text-white'
                    : 'bg-[#B45309] hover:bg-[#92400E] text-white shadow-md active:scale-95'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{tCat.inCart}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>{tCat.addToCart}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
