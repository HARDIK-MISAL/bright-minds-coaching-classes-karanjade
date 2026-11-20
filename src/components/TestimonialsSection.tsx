import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { playSound } from '../constants';
import { AnimatedContent } from './AnimatedContent';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
  tag: string;
  featured?: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sunita Mehta',
    role: 'Mother of 4th Grader • Abacus Module',
    initials: 'SM',
    tag: 'Abacus',
    quote:
      '"My daughter Rhea used to dread mathematics. After 6 months of Brainobrain abacus at Bright Minds, she calculates 3-digit multiplication faster than I can on my phone!"',
  },
  {
    id: 't2',
    name: 'Aryan Kapoor',
    role: '10th CBSE Topper • 2025 Batch (96.2%)',
    initials: 'AK',
    tag: '10th Board',
    featured: true,
    quote:
      '"The personalized focus for 10th Board preparation made all the difference. Scoring 96.2% in CBSE science & maths was made possible due to the regular doubt clearing sessions."',
  },
  {
    id: 't3',
    name: 'Dr. Rajesh Patel',
    role: 'Parent of 12th Science Student',
    initials: 'RP',
    tag: '11th-12th',
    quote:
      '"Exceptional faculty for 11th & 12th competitive streams. They combine conceptual depth with rigorous test series that build real exam endurance."',
  },
];

export const TestimonialsSection: React.FC = React.memo(() => {
  const [filter, setFilter] = useState<'All' | 'Abacus' | '10th Board' | '11th-12th'>('All');

  const filtered = filter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.tag === filter);

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-xs uppercase tracking-widest text-[#E11D48] font-bold mb-2 font-mono">
          Verified Transformations
        </h2>
        <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-slate-900 tracking-tight font-heading">
          What Parents &amp; Students Say
        </h3>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {(['All', 'Abacus', '10th Board', '11th-12th'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playSound('click');
                setFilter(cat);
              }}
              className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#E11D48] to-[#B51F60] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <AnimatedContent
        distance={45}
        direction="vertical"
        duration={0.8}
        ease="power2.out"
        stagger={0.12}
        threshold={0.1}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl ${
              item.featured
                ? 'bg-gradient-to-br from-rose-50/90 via-white to-pink-50/40 border-2 border-[#B51F60] shadow-lg shadow-rose-500/10'
                : 'bg-gradient-to-br from-white via-rose-50/25 to-white border-2 border-rose-200/80 hover:border-[#B51F60]'
            }`}
          >
            <div>
              {/* Star Rating */}
              <div className="flex text-amber-400 text-xs mb-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs md:text-sm text-slate-800 leading-relaxed italic">
                {item.quote}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-100 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs bg-gradient-to-br from-[#85243F] to-[#B51F60] text-white shadow-sm shrink-0"
              >
                {item.initials}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 font-heading">{item.name}</p>
                <p className="text-[11px] text-[#B51F60] font-semibold">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </AnimatedContent>
    </section>
  );
});
