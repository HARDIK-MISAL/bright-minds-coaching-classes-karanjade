import React from 'react';
import { X, CheckCircle, Sparkles, Clock, Users, BookOpen } from 'lucide-react';
import { ProgramData } from './ProgramsSection';
import { playSound } from '../constants';

interface CurriculumModalProps {
  program: ProgramData | null;
  onClose: () => void;
  onInquire?: (programTitle: string) => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  program,
  onClose,
  onInquire,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl p-6 md:p-8 border-2 border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-rose-200 shrink-0 shadow-sm">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-[10px] font-bold text-[#E11D48] uppercase">
                {program.ageGroup}
              </span>
              {program.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#E11D48] text-white text-[10px] font-bold uppercase shadow-sm">
                  {program.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase font-heading">
              {program.title}
            </h3>
            <p className="text-xs text-[#E11D48] font-bold">{program.subtitle}</p>
          </div>
        </div>

        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
          {program.description}
        </p>

        {/* Subjects & Key Modules */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-3 flex items-center gap-1.5 font-heading">
            <BookOpen className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Core Subjects &amp; Focus Areas</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {program.subjects.map((sub, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pedagogical Methodology / Key Features */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 mb-3 flex items-center gap-1.5 font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Classroom Methodology &amp; Differentiators</span>
          </h4>
          <div className="space-y-2">
            {program.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-xs text-slate-700"
              >
                <CheckCircle className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Batch Specs */}
        <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Users className="w-4 h-4 text-[#E11D48]" />
            <span>Micro Batch: Max 8-15 Students</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Clock className="w-4 h-4 text-[#E11D48]" />
            <span>Mon-Sat + Sunday Special</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              playSound('click');
              onClose();
              if (onInquire) {
                onInquire(program.title);
              } else {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#B51F60] hover:from-[#BE185D] hover:to-[#9F1239] text-white text-xs font-bold uppercase tracking-wider shadow-glow-magenta transition-all cursor-pointer text-center transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Inquire About Admissions
          </button>
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-all border border-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
