import React, { useState } from 'react';
import { ShoppingBag, Eye, MapPin, Sparkles, Check, Coffee, Sun } from 'lucide-react';
import { Product, ProductCategory, Language } from '../types';
import { PRODUCTS } from '../data/products';
import { TRANSLATIONS } from '../data/translations';

interface ProductCatalogProps {
  currentLang: Language;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartItemIds: Set<string>;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  currentLang,
  onSelectProduct,
  onAddToCart,
  cartItemIds
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const t = TRANSLATIONS[currentLang].catalog;

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const nameMatch = product.name[currentLang].toLowerCase().includes(q) ||
      product.georgianName.toLowerCase().includes(q) ||
      ((product.flavorNotes[currentLang] || []).some(fn => fn.toLowerCase().includes(q)));
    return matchesCategory && nameMatch;
  });

  return (
    <section id="catalog" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#B45309] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D221A] mb-3">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A4D] font-light">
            {t.subheading}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#2D221A] text-white shadow-sm'
                : 'bg-[#EFE7DC] hover:bg-[#E5DBCF] text-[#4A3B31]'
            }`}
          >
            {t.filterAll}
          </button>
          <button
            onClick={() => setActiveCategory('dried_fruits')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'dried_fruits'
                ? 'bg-[#B45309] text-white shadow-sm'
                : 'bg-[#EFE7DC] hover:bg-[#E5DBCF] text-[#4A3B31]'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{t.filterDried}</span>
          </button>
          <button
            onClick={() => setActiveCategory('fruit_teas')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'fruit_teas'
                ? 'bg-[#654321] text-white shadow-sm'
                : 'bg-[#EFE7DC] hover:bg-[#E5DBCF] text-[#4A3B31]'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>{t.filterTeas}</span>
          </button>
          <button
            onClick={() => setActiveCategory('gift_sets')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === 'gift_sets'
                ? 'bg-[#405338] text-white shadow-sm'
                : 'bg-[#EFE7DC] hover:bg-[#E5DBCF] text-[#4A3B31]'
            }`}
          >
            {t.filterGifts}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = cartItemIds.has(product.id);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EADBCE] hover:border-[#CBB7A2] hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image Container */}
                <div className="relative h-56 overflow-hidden bg-[#EFE9E0]">
                  <img
                    src={product.image}
                    alt={product.name[currentLang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#2D221A]/85 backdrop-blur-xs text-[#FAF7F2] text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full uppercase">
                      {product.badge[currentLang]}
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#5C4B3E] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {product.weight}
                  </div>

                  {/* Quick view hover button */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white text-xs font-semibold tracking-wider transition-opacity cursor-pointer backdrop-blur-[2px]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{t.details}</span>
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Region / Terroir tag */}
                    <div className="flex items-center gap-1 text-[11px] font-medium text-[#8F532B] mb-1.5">
                      <MapPin className="w-3 h-3 text-[#B45309]" />
                      <span className="truncate">{product.region[currentLang]}</span>
                    </div>

                    {/* Georgian native name */}
                    <div className="text-xs font-serif italic text-[#8B7765] mb-1">
                      {product.georgianName}
                    </div>

                    {/* Main Name */}
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-lg font-bold text-[#2D221A] line-clamp-2 hover:text-[#B45309] cursor-pointer transition-colors leading-snug mb-2"
                    >
                      {product.name[currentLang]}
                    </h3>

                    {/* Flavor notes tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {(product.flavorNotes[currentLang] || []).slice(0, 3).map((note, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F8F4EE] text-[#69584B] text-[10px] font-medium px-2 py-0.5 rounded-full border border-[#EBE2D5]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Cart Button */}
                  <div className="pt-3 border-t border-[#F2EAE0] flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-xs text-[#8A7A6E] block font-light">
                        {t.price}
                      </span>
                      <span className="font-serif text-xl font-bold text-[#2D221A]">
                        {product.price.toFixed(1)} {t.currency}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isAdded
                          ? 'bg-[#3A5A40] text-white'
                          : 'bg-[#B45309] hover:bg-[#92400E] text-white shadow-xs active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t.inCart}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>{t.addToCart}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#EADBCE]">
            <p className="text-[#6B5A4D]">{t.notFound}</p>
          </div>
        )}
      </div>
    </section>
  );
};
