import React from 'react';
import { MessageSquare, Phone, MapPin, Award, BookOpen, HelpCircle } from 'lucide-react';
import { CONTACT_INFO, playSound } from '../constants';

export const Footer: React.FC = React.memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t-2 border-[#B51F60] bg-[#0F172A] py-14 px-4 md:px-8 text-xs text-slate-300 relative z-10 shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#85243F] to-[#B51F60] flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                BM
              </div>
              <div>
                <span className="block text-xs font-black tracking-wider text-white leading-tight">
                  BRIGHT MINDS
                </span>
                <span className="block text-[10px] font-extrabold tracking-wider leading-tight text-[#FB7185]">
                  COACHING CLASSES
                </span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              Premier academic coaching from Jr. KG to 12th and certified Brainobrain Abacus cognitive acceleration center in Karanjade, Panvel.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#FB7185] font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>Certified Brainobrain NLP &amp; Abacus Partner</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white font-heading">
              Academic Programs
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="#programs"
                  onClick={() => playSound('click')}
                  className="hover:text-[#FB7185] text-slate-300 transition-colors"
                >
                  Jr. KG to 5th Foundation
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={() => playSound('click')}
                  className="hover:text-[#FB7185] text-slate-300 transition-colors"
                >
                  6th to 10th Board (CBSE / SSC / ICSE)
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={() => playSound('click')}
                  className="hover:text-[#FB7185] text-slate-300 transition-colors"
                >
                  11th &amp; 12th Streams (PCMB / Commerce)
                </a>
              </li>
              <li>
                <a
                  href="#abacus"
                  onClick={() => playSound('click')}
                  className="text-[#FB7185] font-bold hover:underline transition-colors"
                >
                  ★ Brainobrain Abacus &amp; Speed Math
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white font-heading">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="#hero"
                  onClick={() => playSound('click')}
                  className="hover:text-[#FB7185] text-slate-300 transition-colors"
                >
                  Admission Enquiry
                </a>
              </li>
              <li>
                <a
                  href="#why-choose"
                  onClick={() => playSound('click')}
                  className="hover:text-[#FB7185] text-slate-300 transition-colors"
                >
                  The Bright Minds Standard
                </a>
              </li>
              <li>
                <a
                  href="#speed-simulator"
                  onClick={() => playSound('click')}
                  className="hover:text-[#FB7185] text-slate-300 transition-colors"
                >
                  Mental Speed Simulator
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => playSound('click')}
                  className="hover:text-[#FB7185] text-slate-300 transition-colors"
                >
                  Parent FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Center Contact (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white font-heading">
              Karanjade Center
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Ambika Niwas, Shop No. 1, Plot No. 27, Sector-R4, Karanjade, Panvel, Navi Mumbai.
            </p>
            <div className="pt-1 flex flex-col gap-1.5 font-mono text-xs">
              <a
                href={`tel:${CONTACT_INFO.phone1}`}
                className="font-bold text-[#FB7185] hover:text-white transition-colors"
              >
                {CONTACT_INFO.phone1}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone2}`}
                className="font-bold text-[#FB7185] hover:text-white transition-colors"
              >
                {CONTACT_INFO.phone2}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {currentYear} Bright Minds Coaching Classes &amp; Brainobrain Abacus. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>CBSE • ICSE • Maharashtra State Board</span>
            <span>•</span>
            <span>Karanjade, Panvel Center</span>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Quick Contact / WhatsApp Helpline) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={`https://wa.me/919326662376?text=${encodeURIComponent(
            'Hello! I would like to inquire about admissions and Brainobrain Abacus classes at Bright Minds Karanjade.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wider">
            WhatsApp Helpdesk
          </span>
        </a>
      </div>
    </>
  );
});

export default Footer;
