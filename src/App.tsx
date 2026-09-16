import React, { useState } from 'react';
import { Language, Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { TerroirMap } from './components/TerroirMap';
import { EcoPhilosophy } from './components/EcoPhilosophy';
import { TeaGuide } from './components/TeaGuide';
import { B2BSection } from './components/B2BSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ka');
  const [cart, setCart] = useState<CartItem[]>([
    // Pre-populate with one iconic product so user immediately sees how cart works
    { product: PRODUCTS[0], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartItemIds = new Set(cart.map((item) => item.product.id));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C241E] selection:bg-[#E58332]/30 selection:text-[#2D221A]">
      {/* Navigation Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        cartCount={cartTotalItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenB2B={() => scrollToSection('b2b-supply')}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          currentLang={currentLang}
          onExploreCatalog={() => scrollToSection('catalog')}
          onExploreTerroirs={() => scrollToSection('terroirs')}
          onOpenB2B={() => scrollToSection('b2b-supply')}
        />

        {/* Product Catalog with Dried Fruits and Fruit Teas */}
        <ProductCatalog
          currentLang={currentLang}
          onSelectProduct={setSelectedProduct}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          cartItemIds={cartItemIds}
        />

        {/* Interactive Georgian Mountain Terroirs & Direct Origins */}
        <TerroirMap currentLang={currentLang} />

        {/* Interactive Tea Sommelier / Dried Fruit Tea Guide */}
        <TeaGuide
          currentLang={currentLang}
          onSelectProduct={setSelectedProduct}
          onAddToCart={(p) => handleAddToCart(p, 1)}
        />

        {/* Eco-Craft Philosophy & Zero SO2 / Zero Sugar Comparison */}
        <EcoPhilosophy currentLang={currentLang} />

        {/* Direct Sourcing for B2B / Wholesale & Sample Box Requests */}
        <B2BSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenB2B={() => scrollToSection('b2b-supply')}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        currentLang={currentLang}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currentLang={currentLang}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
