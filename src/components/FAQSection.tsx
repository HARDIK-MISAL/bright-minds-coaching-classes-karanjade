import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import { CONTACT_INFO, playSound } from '../constants';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions & Boards',
    question: 'Which educational boards and classes are taught at Bright Minds?',
    answer:
      'We provide specialized coaching from Jr. KG to 12th Grade for CBSE, ICSE, and Maharashtra State Board (SSC & HSC). Our study materials, revision schedules, and test series are meticulously customized for each specific board pattern.',
  },
  {
    id: 'faq-2',
    category: 'Batch Size & Attention',
    question: 'What is the student-to-teacher ratio in your batches?',
    answer:
      'Unlike crowded institutes with 50 to 80 students, Bright Minds strictly caps batches at 8 to 15 students. This ensures personalized attention, active participation, and immediate one-on-one doubt clearing for every single student.',
  },
  {
    id: 'faq-3',
    category: 'Brainobrain Abacus',
    question: 'What is Brainobrain Abacus and how does it help young children?',
    answer:
      'Brainobrain is a world-renowned whole-brain cognitive development course for ages 4 to 14. By combining tactile abacus arithmetic with Neuro-Linguistic Programming (NLP), it stimulates both left and right brain hemispheres, drastically improving concentration, photographic memory, visualization, and lightning-fast mental math speed.',
  },
  {
    id: 'faq-4',
    category: 'Assessment & Progress',
    question: 'How do you track and update parents about their child’s progress?',
    answer:
      'We conduct bi-weekly diagnostic unit tests and chapter tests. Detailed progress reports, scorecards, and teacher feedback are communicated directly to parents via WhatsApp and regular scheduled Parent-Teacher Conferences (PTC).',
  },
  {
    id: 'faq-5',
    category: 'Location & Demo',
    question: 'Where is the coaching center located and can we visit for a demo session?',
    answer:
      'Our center is conveniently located at Ambika Niwas, Shop No. 1, Plot No. 27, Sector-R4, Karanjade, Panvel. Parents and students are welcome for a free diagnostic skill assessment, study hall tour, and trial demo class by booking an appointment.',
  },
  {
    id: 'faq-6',
    category: 'Doubt Clearing',
    question: 'Are there separate doubt-clearing sessions for difficult subjects?',
    answer:
      'Yes. In addition to daily classroom lectures, we schedule dedicated Saturday doubt clinics and exam sprint doubt-clearing sessions where students receive individualized step-by-step assistance in Mathematics, Science, and board exam answer-writing.',
  },
];

export const FAQSection: React.FC = React.memo(() => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    playSound('click');
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 px-4 md:px-8 max-w-5xl mx-auto border-t border-slate-200"
      data-purpose="admissions-faq"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#B51F60] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
          <HelpCircle className="w-3.5 h-3.5 text-[#B51F60]" />
          <span>ADMISSIONS &amp; ACADEMICS</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight font-heading">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-2">
          Everything parents need to know about our batch timings, boards, Brainobrain Abacus, and admission procedures.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-3.5">
        {FAQ_LIST.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-[#B51F60] bg-gradient-to-r from-rose-50/80 via-pink-50/40 to-white shadow-md shadow-rose-900/5 ring-1 ring-[#B51F60]/20'
                  : 'border-rose-200/80 hover:border-rose-300 bg-white/90 shadow-sm'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                      isOpen ? 'bg-[#B51F60]' : 'bg-rose-300'
                    }`}
                  />
                  <h3
                    className={`text-sm md:text-base font-bold transition-colors ${
                      isOpen ? 'text-[#B51F60]' : 'text-slate-900'
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#B51F60] text-white' : 'bg-rose-100 text-[#B51F60]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-rose-100 bg-white/70">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Help Desk Prompt */}
      <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-rose-100/90 via-pink-50/90 to-rose-100/70 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900">
            Have a specific question about your child’s grade or batch?
          </h4>
          <p className="text-xs text-slate-600 mt-0.5">
            Our academic advisors are available Mon - Sat from 9:00 AM to 9:00 PM.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CONTACT_INFO.phone1}`}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#B51F60] text-slate-800 text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B51F60]" />
            <span>Call Us</span>
          </a>

          <a
            href={`https://wa.me/919326662376?text=${encodeURIComponent(
              'Hello Bright Minds! I have a question regarding batch timings and admissions.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#B51F60] hover:bg-[#85243F] text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
});

export default FAQSection;
