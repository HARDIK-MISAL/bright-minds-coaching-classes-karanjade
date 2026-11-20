import React, { useState } from 'react';
import { Phone, Smartphone, Menu, X, MessageSquare, Award, Clock } from 'lucide-react';
import { ASSETS, CONTACT_INFO, playSound } from '../constants';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = React.memo(({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    playSound('click');
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEnquiryClick = () => {
    playSound('click');
    setMobileMenuOpen(false);
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const el = document.getElementById('enquiry-form') || document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Top Announcement Bar - Arihant Academy Style */}
      <div className="bg-gradient-to-r from-[#85243F] via-[#B51F60] to-[#85243F] text-white text-[11px] sm:text-xs py-1.5 px-4 md:px-8 border-b border-rose-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-wider">
              ADMISSIONS OPEN 2026-27
            </span>
            <span className="hidden sm:inline font-medium">
              Jr. KG to 12th (State / CBSE / ICSE) &amp; Certified Brainobrain Abacus
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-medium text-[11px]">
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="hidden md:flex items-center gap-1.5 hover:text-rose-100 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{CONTACT_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/919326662376?text=${encodeURIComponent(
                'Hello! I would like to inquire about admissions at Bright Minds Coaching Classes Karanjade.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white hover:text-emerald-200 transition-colors font-semibold"
            >
              <MessageSquare className="w-3 h-3 text-[#25D366] fill-current" />
              <span className="hidden sm:inline">WhatsApp Helpdesk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Academy Header */}
      <header className="sticky top-0 z-50 px-4 md:px-8 py-3 transition-all duration-300 backdrop-blur-md bg-[#FFFBFD]/95 border-b border-rose-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="group flex items-center gap-3 shrink-0"
          >
            <div className="border-2 border-rose-200 group-hover:border-[#B51F60] px-3 py-1.5 rounded-xl group-hover:shadow-glow-magenta transition-all duration-300 bg-white shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#B51F60]/40 bg-rose-50/60 p-0.5 flex items-center justify-center shadow-sm">
                <img
                  src={ASSETS.logo}
                  alt="Bright Minds Coaching Classes Logo"
                  width={40}
                  height={40}
                  decoding="async"
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="block text-xs md:text-sm font-extrabold tracking-wider leading-tight text-slate-900 font-heading">
                  BRIGHT MINDS
                </span>
                <span className="block text-[10px] md:text-xs font-extrabold tracking-wider leading-tight text-[#B51F60] font-heading">
                  COACHING CLASSES
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 font-heading text-xs font-bold tracking-wider">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero')}
              className="text-slate-800 hover:text-[#B51F60] px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors"
            >
              HOME
            </a>
            <a
              href="#programs"
              onClick={(e) => handleNavClick(e, 'programs')}
              className="text-slate-700 hover:text-[#B51F60] px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors"
            >
              COURSES &amp; BOARDS
            </a>
            <a
              href="#abacus"
              onClick={(e) => handleNavClick(e, 'abacus')}
              className="text-[#B51F60] font-bold px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors flex items-center gap-1.5"
            >
              <span>BRAINOBRAIN ABACUS</span>
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse"></span>
            </a>
            <a
              href="#why-choose"
              onClick={(e) => handleNavClick(e, 'why-choose')}
              className="text-slate-700 hover:text-[#B51F60] px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors"
            >
              THE STANDARD
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="text-slate-700 hover:text-[#B51F60] px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors"
            >
              FAQS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-slate-700 hover:text-[#B51F60] px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors"
            >
              CENTER
            </a>
          </nav>

          {/* Action CTAs: Enquire Now & Helplines */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-[#B51F60] border border-slate-200 hover:border-[#B51F60] bg-white transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#B51F60]" />
              <span className="font-mono text-xs">{CONTACT_INFO.phone1}</span>
            </a>

            <button
              onClick={handleEnquiryClick}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B51F60] to-[#E11D48] hover:from-[#9F1239] hover:to-[#BE185D] text-white text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              ENQUIRE NOW
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-200 flex flex-col gap-1.5 pb-2 text-sm animate-fadeIn bg-white rounded-2xl p-4 shadow-xl">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero')}
              className="px-3.5 py-2 rounded-xl bg-rose-50 text-[#B51F60] font-bold"
            >
              HOME
            </a>
            <a
              href="#programs"
              onClick={(e) => handleNavClick(e, 'programs')}
              className="px-3.5 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium"
            >
              COURSES &amp; BOARDS (JR. KG TO 12TH)
            </a>
            <a
              href="#abacus"
              onClick={(e) => handleNavClick(e, 'abacus')}
              className="px-3.5 py-2 rounded-xl text-[#B51F60] font-bold hover:bg-rose-50 flex items-center justify-between"
            >
              <span>BRAINOBRAIN ABACUS</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-[#B51F60] border border-rose-200 uppercase font-bold">
                Flagship
              </span>
            </a>
            <a
              href="#why-choose"
              onClick={(e) => handleNavClick(e, 'why-choose')}
              className="px-3.5 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium"
            >
              THE BRIGHT MINDS STANDARD
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="px-3.5 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium"
            >
              FREQUENTLY ASKED QUESTIONS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-3.5 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium"
            >
              CENTER &amp; LOCATION
            </a>

            <div className="pt-2 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={handleEnquiryClick}
                className="w-full py-2.5 rounded-xl bg-[#B51F60] text-white font-bold text-xs uppercase tracking-wider shadow-md text-center"
              >
                REQUEST ADMISSION CALLBACK
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
});

export default Header;

