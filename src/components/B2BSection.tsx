import React, { useState } from 'react';
import { Truck, Award, PackageCheck, Send, CheckCircle2, MessageCircle, FileText } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface B2BSectionProps {
  currentLang: Language;
}

export const B2BSection: React.FC<B2BSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const t = TRANSLATIONS[currentLang].b2b;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="b2b-supply" className="py-16 sm:py-24 bg-[#2D221A] text-white relative overflow-hidden">
      {/* Decorative mountain background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E58332]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3A5A40]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Supply Pillars */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-[#E58332]/20 border border-[#E58332]/40 rounded-full px-3.5 py-1.5 mb-4 backdrop-blur-xs">
              <Truck className="w-4 h-4 text-[#F3BE7A]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F3BE7A]">
                {t.tag}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {t.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#D0C2B4] font-light leading-relaxed mb-8">
              {t.subheading}
            </p>

            {/* Badges */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-[#3A2D23] p-4 rounded-2xl border border-[#4D3D30]">
                <div className="p-2 rounded-xl bg-[#E58332]/20 text-[#E58332] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#FAF7F2]">{t.badge1}</h4>
                  <p className="text-xs text-[#BFAF9E]">
                    {t.badge1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#3A2D23] p-4 rounded-2xl border border-[#4D3D30]">
                <div className="p-2 rounded-xl bg-[#E58332]/20 text-[#E58332] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#FAF7F2]">{t.badge2}</h4>
                  <p className="text-xs text-[#BFAF9E]">
                    {t.badge2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#3A2D23] p-4 rounded-2xl border border-[#4D3D30]">
                <div className="p-2 rounded-xl bg-[#E58332]/20 text-[#E58332] shrink-0">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#FAF7F2]">{t.badge3}</h4>
                  <p className="text-xs text-[#BFAF9E]">
                    {t.badge3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/995599123456"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappWholesale}</span>
              </a>
              <span className="text-xs text-[#BFAF9E]">+995 599 12-34-56</span>
            </div>
          </div>

          {/* Right Column: Request Wholesale Form */}
          <div className="lg:col-span-6 bg-[#3B2E24] p-6 sm:p-10 rounded-3xl border border-[#524134] shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              {t.formTitle}
            </h3>
            <p className="text-xs text-[#C5B5A5] mb-6">
              {t.freeSampleNotice}
            </p>

            {submitted ? (
              <div className="bg-[#2D3A2C] border border-[#486345] p-6 rounded-2xl text-center">
                <CheckCircle2 className="w-10 h-10 text-[#52B788] mx-auto mb-3" />
                <h4 className="font-serif text-xl font-bold text-white mb-2">{t.requestSent}</h4>
                <p className="text-xs sm:text-sm text-[#DFD3C7]">
                  {t.successMsg}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-[#F3BE7A] underline cursor-pointer"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#DFD3C7] mb-1">
                    {t.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder={t.companyPlaceholder}
                    className="w-full bg-[#2A1F18] border border-[#5A483B] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#857262] focus:outline-hidden focus:border-[#E58332] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#DFD3C7] mb-1">
                      {t.emailPlaceholder}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="info@example.com"
                      className="w-full bg-[#2A1F18] border border-[#5A483B] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#857262] focus:outline-hidden focus:border-[#E58332] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#DFD3C7] mb-1">
                      {t.phonePlaceholder}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+995 ..."
                      className="w-full bg-[#2A1F18] border border-[#5A483B] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#857262] focus:outline-hidden focus:border-[#E58332] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#DFD3C7] mb-1">
                    {t.volumePlaceholder}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.notesPlaceholder}
                    className="w-full bg-[#2A1F18] border border-[#5A483B] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#857262] focus:outline-hidden focus:border-[#E58332] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E58332] hover:bg-[#D47223] text-white font-semibold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
