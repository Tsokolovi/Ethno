import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare, Truck, ShieldCheck } from 'lucide-react';
import { CartItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currentLang: Language;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currentLang,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang].cart;
  const tCat = TRANSLATIONS[currentLang].catalog;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingLimit = 50;
  const isFreeShipping = subtotal >= freeShippingLimit;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  // Generate WhatsApp quick text with order details
  const whatsappOrderText = encodeURIComponent(
    `${t.whatsappOrderGreeting}\n` +
      items.map(i => `• ${i.product.name[currentLang]} x ${i.quantity} (${(i.product.price * i.quantity).toFixed(1)} ₾)`).join('\n') +
      `\n${t.whatsappOrderTotal}: ${subtotal.toFixed(1)} ₾\n${t.whatsappOrderName}: ${customerName || '—'}\n${t.whatsappOrderAddress}: ${deliveryAddress || 'თბილისი'}`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#E3D8CB] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8DDD0] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#B45309]" />
            <h2 className="font-serif text-xl font-bold text-[#2D221A]">
              {t.title}
            </h2>
            <span className="text-xs bg-[#F2EAE0] text-[#786759] px-2 py-0.5 rounded-full font-bold">
              {items.reduce((sum, i) => sum + i.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#F0E6D8] text-[#55463A] flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {orderComplete ? (
            <div className="text-center py-12 px-4 bg-white rounded-2xl border border-[#EADBCE]">
              <CheckCircle2 className="w-12 h-12 text-[#2D6A4F] mx-auto mb-3" />
              <h3 className="font-serif text-2xl font-bold text-[#2D221A] mb-2">
                {currentLang === 'ka' ? 'მადლობა! შეკვეთა მიღებულია!' : currentLang === 'ru' ? 'Спасибо за заказ!' : 'Thank you for your order!'}
              </h3>
              <p className="text-xs sm:text-sm text-[#6C5B4E] leading-relaxed mb-6">
                {t.successOrdered}
              </p>
              <button
                onClick={() => {
                  setOrderComplete(false);
                  onClearCart();
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#2D221A] text-white text-xs font-semibold cursor-pointer"
              >
                {t.backToSite}
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-[#EFE8DD] text-[#A59483] flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2D221A] mb-1">
                {t.empty}
              </h3>
              <p className="text-xs text-[#7B6A5D] mb-6">
                {t.emptySub}
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#B45309] text-white text-xs font-semibold hover:bg-[#92400E] cursor-pointer"
              >
                {t.toCatalog}
              </button>
            </div>
          ) : (
            <>
              {/* Free delivery badge */}
              <div className="bg-[#FAF2E8] p-3 rounded-xl border border-[#EEDCC7] text-xs text-[#8F532B] flex items-center gap-2">
                <Truck className="w-4 h-4 shrink-0 text-[#B45309]" />
                <span>
                  {isFreeShipping
                    ? t.freeShippingActivated
                    : t.addMoreForFreeShipping.replace('{amount}', (freeShippingLimit - subtotal).toFixed(1))}
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 bg-white p-3 rounded-xl border border-[#EADBCE] shadow-2xs"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name[currentLang]}
                      className="w-16 h-16 object-cover rounded-lg bg-[#EFE9E0] shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h4 className="font-serif text-sm font-bold text-[#2D221A] line-clamp-1">
                            {item.product.name[currentLang]}
                          </h4>
                          <span className="text-[10px] text-[#8C7B6E]">
                            {item.product.weight} • {item.product.price.toFixed(1)} ₾
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#A39283] hover:text-[#C1121F] p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1 bg-[#F5EFE6] rounded-lg p-0.5 border border-[#E5DACE]">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="w-6 h-6 rounded bg-white text-xs font-bold flex items-center justify-center cursor-pointer hover:bg-[#FAF7F2]"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#2D221A]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="w-6 h-6 rounded bg-white text-xs font-bold flex items-center justify-center cursor-pointer hover:bg-[#FAF7F2]"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-serif text-sm font-bold text-[#2D221A]">
                          {(item.product.price * item.quantity).toFixed(1)} ₾
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkout Form */}
              <div className="pt-2 border-t border-[#EADBCE]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A695C] mb-3">
                  {t.deliveryDetails}
                </h4>
                <form id="cart-checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder={t.nameInputPlaceholder}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-white border border-[#DACDBD] rounded-xl px-3 py-2 text-xs text-[#2D221A] focus:outline-hidden focus:border-[#B45309]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder={t.phoneInputPlaceholder}
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-white border border-[#DACDBD] rounded-xl px-3 py-2 text-xs text-[#2D221A] focus:outline-hidden focus:border-[#B45309]"
                  />
                  <input
                    type="text"
                    required
                    placeholder={t.addressInputPlaceholder}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full bg-white border border-[#DACDBD] rounded-xl px-3 py-2 text-xs text-[#2D221A] focus:outline-hidden focus:border-[#B45309]"
                  />
                </form>
              </div>
            </>
          )}
        </div>

        {/* Footer actions */}
        {!orderComplete && items.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#E8DDD0] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#7B6A5D]">{t.total}</span>
              <span className="font-serif text-2xl font-bold text-[#2D221A]">
                {subtotal.toFixed(1)} ₾
              </span>
            </div>

            <button
              type="submit"
              form="cart-checkout-form"
              className="w-full bg-[#B45309] hover:bg-[#92400E] text-white py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer active:scale-98"
            >
              <span>{t.checkoutBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Quick WhatsApp order button */}
            <a
              href={`https://wa.me/995599123456?text=${whatsappOrderText}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1EBE5D] border border-[#25D366]/30 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.directContact}</span>
            </a>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8C7B6E]">
              <ShieldCheck className="w-3 h-3 text-[#3A5A40]" />
              <span>{t.paymentOnDelivery}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
