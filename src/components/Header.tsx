import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Sun, Mountain, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenB2B: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  cartCount,
  onOpenCart,
  onOpenB2B
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DDD0] transition-all">
      {/* Top micro bar for authenticity & origin */}
      <div className="bg-[#EADBCE] text-[#EADBCE] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E58332] animate-pulse"></span>
            <span className="font-medium tracking-wide">
              {currentLang === 'ka' && '🇬🇪 100% ქართული ნატურალური ნედლეული და მზის შრობა'}
              {currentLang === 'ru' && '🇬🇪 100% грузинское сырье из горных садов • Прямые поставки'}
              {currentLang === 'en' && '🇬🇪 100% Natural Georgian Mountain Harvest • Solar Dehydrated'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenB2B}
              className="hover:text-[#F3BE7A] transition-colors hidden sm:inline-flex items-center gap-1 cursor-pointer font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E58332]" />
              {t.nav.orderSample}
            </button>
            <div className="flex items-center gap-1 bg-[#3E3026] rounded px-2 py-0.5">
              <button
                onClick={() => onLanguageChange('ka')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  currentLang === 'ka' ? 'bg-[#C26D27] text-white' : 'text-[#D0C2B4] hover:text-white'
                }`}
                title="ქართული"
              >
                ქართ
              </button>
              <button
                onClick={() => onLanguageChange('ru')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  currentLang === 'ru' ? 'bg-[#C26D27] text-white' : 'text-[#D0C2B4] hover:text-white'
                }`}
                title="Русский"
              >
                RU
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                  currentLang === 'en' ? 'bg-[#C26D27] text-white' : 'text-[#D0C2B4] hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full bg-[#EADBCE] border border-[#C5B59E] flex items-center justify-center text-[#7F3818] shadow-sm group-hover:bg-[#E2CEB9] transition-all">
            <span className="font-serif text-2xl font-bold tracking-tight">ე</span>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold tracking-wider text-[#2D221A]">
                ეთნო
              </span>
              <span className="text-xs uppercase tracking-widest text-[#8F532B] font-semibold">
                Ethno
              </span>
            </div>
            <p className="text-[11px] tracking-wider text-[#736356] uppercase">
              {currentLang === 'ka' ? 'ქართული ჩირი & მთის ჩაი' : currentLang === 'ru' ? 'Сухофрукты & Горные чаи' : 'Georgian Dried Fruits & Teas'}
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#4A3B31]">
          <button
            onClick={() => scrollTo('catalog')}
            className="hover:text-[#B45309] transition-colors py-1 cursor-pointer"
          >
            {t.nav.catalog}
          </button>
          <button
            onClick={() => scrollTo('terroirs')}
            className="hover:text-[#B45309] transition-colors py-1 cursor-pointer"
          >
            {t.nav.terroir}
          </button>
          <button
            onClick={() => scrollTo('tea-sommelier')}
            className="hover:text-[#B45309] transition-colors py-1 cursor-pointer"
          >
            {t.nav.teaSommelier}
          </button>
          <button
            onClick={() => scrollTo('eco-philosophy')}
            className="hover:text-[#B45309] transition-colors py-1 cursor-pointer"
          >
            {t.nav.eco}
          </button>
          <button
            onClick={() => scrollTo('b2b-supply')}
            className="hover:text-[#B45309] transition-colors py-1 cursor-pointer flex items-center gap-1.5 text-[#8F532B] font-semibold"
          >
            <Mountain className="w-3.5 h-3.5" />
            {t.nav.b2b}
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            id="open-cart-button"
            className="relative flex items-center gap-2 bg-[#F1E8DC] hover:bg-[#E8DDD0] text-[#2D221A] border border-[#D5C6B5] px-3.5 py-2 rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#8F532B]" />
            <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
              {t.nav.cart}
            </span>
            {cartCount > 0 && (
              <span className="bg-[#B45309] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4A3B31] hover:text-[#2D221A] cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E6DDD0] px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => scrollTo('catalog')}
            className="block w-full text-left py-2 text-base font-medium text-[#2D221A] border-b border-[#EFE8DD]"
          >
            {t.nav.catalog}
          </button>
          <button
            onClick={() => scrollTo('terroirs')}
            className="block w-full text-left py-2 text-base font-medium text-[#2D221A] border-b border-[#EFE8DD]"
          >
            {t.nav.terroir}
          </button>
          <button
            onClick={() => scrollTo('tea-sommelier')}
            className="block w-full text-left py-2 text-base font-medium text-[#2D221A] border-b border-[#EFE8DD]"
          >
            {t.nav.teaSommelier}
          </button>
          <button
            onClick={() => scrollTo('eco-philosophy')}
            className="block w-full text-left py-2 text-base font-medium text-[#2D221A] border-b border-[#EFE8DD]"
          >
            {t.nav.eco}
          </button>
          <button
            onClick={() => scrollTo('b2b-supply')}
            className="block w-full text-left py-2 text-base font-semibold text-[#8F532B]"
          >
            {t.nav.b2b}
          </button>
        </div>
      )}
    </header>
  );
};
