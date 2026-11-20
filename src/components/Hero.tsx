import React, { useState } from 'react';
import {
  Sparkles,
  Brain,
  GraduationCap,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Send,
  Building2,
  Clock,
  ShieldCheck,
  Star,
  Award
} from 'lucide-react';
import { ASSETS, CONTACT_INFO, playSound } from '../constants';
import { MicroSlatsCanvas } from './MicroSlatsCanvas';
import { AnimatedCounter } from './AnimatedCounter';
import { AnimatedContent } from './AnimatedContent';

interface HeroProps {
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = React.memo(({ onExplorePrograms }) => {
  const [activeCardTab, setActiveCardTab] = useState<'form' | 'center'>('form');
  const [formData, setFormData] = useState({
    studentName: '',
    parentPhone: '',
    grade: '10th Board (CBSE / State)',
    program: 'Academic Board Coaching',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.parentPhone.trim()) return;

    setIsSubmitting(true);
    playSound('correct');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Prepare WhatsApp redirect for immediate contact
      const whatsappMsg = `Hello Bright Minds Team! I would like to request an admission callback.\nStudent Name: ${formData.studentName}\nParent Phone: ${formData.parentPhone}\nGrade/Course: ${formData.grade}\nProgram: ${formData.program}\nCenter: Karanjade, Panvel`;
      const waUrl = `https://wa.me/919326662376?text=${encodeURIComponent(whatsappMsg)}`;

      // Open in background/safe redirect
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
    }, 600);
  };

  return (
    <section
      id="hero"
      className="relative pt-6 md:pt-10 pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* MicroSlats interactive light kinetic canvas */}
      <MicroSlatsCanvas />

      {/* Main Hero Split Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in-up">
        {/* Left Column (7 cols): Arihant Academy-style Bold Academic Pitch */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#B51F60] text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
            <span className="font-extrabold">ADMISSIONS OPEN FOR 2026-27 ACADEMIC YEAR</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black uppercase tracking-tight leading-[1.12] text-slate-900 font-heading">
            SHAPING FUTURE GENIUSES:{' '}
            <br />
            <span className="text-slate-800">
              FROM JR. KG TO 12th &amp;
            </span>{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B51F60] via-[#E11D48] to-[#85243F] drop-shadow-sm">
              BRAINOBRAIN ABACUS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-xl font-medium tracking-wide uppercase leading-relaxed">
            Empowering academic board excellence (CBSE / ICSE / SSC) &amp; international cognitive speed development under one roof at Karanjade, Panvel.
          </p>

          {/* Key Value Pillars Chips */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B51F60]" />
              Strict 8–15 Batch Limit
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B51F60]" />
              Personalized Doubts Clearing
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B51F60]" />
              Certified NLP &amp; Abacus
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                playSound('click');
                onExplorePrograms();
              }}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#B51F60] to-[#E11D48] hover:from-[#9F1239] hover:to-[#B51F60] text-white text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-glow-magenta hover:shadow-glow-magenta-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
            >
              <span>EXPLORE ALL COURSES</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#why-choose"
              onClick={() => playSound('click')}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#B51F60] text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 border-2 border-slate-200 hover:border-[#B51F60] shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#B51F60]" />
              <span>THE BRIGHT MINDS STANDARD</span>
            </a>
          </div>

          {/* Quick Direct Calling Bar */}
          <div className="pt-2 flex items-center gap-4 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <Phone className="w-3.5 h-3.5 text-[#B51F60]" />
              Admission Helpdesk:
            </span>
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="font-bold text-slate-900 hover:text-[#B51F60] transition-colors"
            >
              {CONTACT_INFO.phone1}
            </a>
            <span className="text-slate-300">•</span>
            <a
              href={`tel:${CONTACT_INFO.phone2}`}
              className="font-bold text-slate-900 hover:text-[#B51F60] transition-colors"
            >
              {CONTACT_INFO.phone2}
            </a>
          </div>
        </div>

        {/* Right Column (5 cols): High-Converting Arihant Academy-style Admission Form & Center Card */}
        <div className="lg:col-span-5 relative">
          {/* Card Container with 3D tactile elevation */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 hover:border-[#B51F60] shadow-2xl overflow-hidden transition-all duration-300">
            {/* Header Tabs: Switch between Instant Callback and Center View */}
            <div className="bg-gradient-to-r from-[#85243F] to-[#B51F60] p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase font-extrabold tracking-wider">
                    ADMISSIONS DESK 2026-27
                  </span>
                </div>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                  FAST CALLBACK
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                Book Free Counselling &amp; Assessment
              </h3>
              <p className="text-xs text-rose-100 mt-0.5">
                Get syllabus details, fee structure &amp; free demo class slot.
              </p>

              {/* Tabs */}
              <div className="mt-3 grid grid-cols-2 gap-1 bg-black/20 p-1 rounded-xl text-xs font-bold text-center">
                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    setActiveCardTab('form');
                  }}
                  className={`py-1.5 rounded-lg transition-all ${
                    activeCardTab === 'form'
                      ? 'bg-white text-[#B51F60] shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Quick Enquiry Form
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    setActiveCardTab('center');
                  }}
                  className={`py-1.5 rounded-lg transition-all ${
                    activeCardTab === 'center'
                      ? 'bg-white text-[#B51F60] shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Karanjade Center
                </button>
              </div>
            </div>

            {/* Tab 1: Quick Enquiry Form */}
            {activeCardTab === 'form' && (
              <div className="p-5">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 font-heading">
                        Enquiry Received Successfully!
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Our academic counsellor will contact you at{' '}
                        <strong className="text-slate-900">{formData.parentPhone}</strong> within 15 minutes.
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={`https://wa.me/919326662376?text=${encodeURIComponent(
                          `Hello Bright Minds! I submitted an admission enquiry for ${formData.studentName} (${formData.grade}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>Chat With Counsellor on WhatsApp</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-[#B51F60] underline font-medium block mx-auto pt-2"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-[#B51F60] focus:border-transparent outline-none transition-all placeholder:text-slate-400 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Parent Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.parentPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, parentPhone: e.target.value.replace(/\D/g, '').slice(0, 10) })
                        }
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-[#B51F60] focus:border-transparent outline-none transition-all placeholder:text-slate-400 bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Grade / Class *
                        </label>
                        <select
                          value={formData.grade}
                          onChange={(e) =>
                            setFormData({ ...formData, grade: e.target.value })
                          }
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-[#B51F60] focus:border-transparent outline-none transition-all bg-slate-50/50"
                        >
                          <option value="Jr. KG to 5th Foundation">Jr. KG to 5th Foundation</option>
                          <option value="6th to 8th Middle School">6th to 8th Middle School</option>
                          <option value="9th & 10th Board (CBSE/SSC)">9th &amp; 10th Board (CBSE/SSC)</option>
                          <option value="11th & 12th Science (PCMB)">11th &amp; 12th Science (PCMB)</option>
                          <option value="11th & 12th Commerce">11th &amp; 12th Commerce</option>
                          <option value="Brainobrain Abacus (Ages 4-14)">Brainobrain Abacus (Ages 4-14)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Program Focus
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) =>
                            setFormData({ ...formData, program: e.target.value })
                          }
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-[#B51F60] focus:border-transparent outline-none transition-all bg-slate-50/50"
                        >
                          <option value="Academic Board Coaching">Board Coaching</option>
                          <option value="Brainobrain Abacus Course">Brainobrain Abacus</option>
                          <option value="Both (Academic + Abacus)">Both (Dual Track)</option>
                          <option value="Study Hall & Test Series">Study Hall Pass</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#B51F60] to-[#E11D48] hover:from-[#9F1239] hover:to-[#B51F60] text-white font-bold text-xs uppercase tracking-wider shadow-glow-magenta hover:shadow-glow-magenta-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>CONNECTING COUNSELLOR...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>REQUEST INSTANT CALLBACK &amp; BROCHURE</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        100% Privacy • No Spam
                      </span>
                      <span>Walk-in: Karanjade Sector-R4</span>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Tab 2: Karanjade Center Photo & Address */}
            {activeCardTab === 'center' && (
              <div className="p-4 space-y-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 shadow-inner group">
                  <img
                    src={ASSETS.heroStorefront}
                    alt="Bright Minds Coaching Classes Karanjade Center"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 border border-rose-200 text-[10px] font-bold text-[#B51F60] shadow-sm">
                    Karanjade Center
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider">
                      Ambika Niwas, Shop No. 1, Sector-R4
                    </p>
                    <p className="text-[10px] text-slate-200">
                      Opposite Sector 4, Karanjade, Panvel, Navi Mumbai
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-1.5 text-slate-800 font-bold text-[11px] mb-1">
                      <Clock className="w-3 h-3 text-[#B51F60]" />
                      <span>Timings</span>
                    </div>
                    <p className="text-[10px] text-slate-600">
                      Mon - Sat: 9:00 AM - 9:00 PM<br />Sunday: Abacus Batches
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-1.5 text-slate-800 font-bold text-[11px] mb-1">
                      <Building2 className="w-3 h-3 text-[#B51F60]" />
                      <span>Facilities</span>
                    </div>
                    <p className="text-[10px] text-slate-600">
                      AC Study Hall, Smart Digital Class, Test Lab
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => playSound('click')}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-[#B51F60] text-white text-xs font-bold uppercase tracking-wider text-center block transition-colors"
                >
                  View Map &amp; Directions →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4-Stat Ribbon Below Hero - Dark & High Contrast */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <div className="rounded-3xl bg-[#0F172A] border-2 border-slate-800 shadow-2xl p-5 sm:p-7 relative overflow-hidden">
          {/* Subtle brand glow inside dark container */}
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#B51F60]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />

          <AnimatedContent
            distance={30}
            direction="vertical"
            duration={0.7}
            ease="power2.out"
            stagger={0.08}
            threshold={0.15}
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {/* Stat 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-lg hover:border-[#B51F60] hover:bg-slate-800/90 transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-950/70 border border-rose-700/60 flex items-center justify-center shrink-0 shadow-inner">
                <GraduationCap className="w-6 h-6 text-rose-300" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                  <AnimatedCounter end={500} suffix="+" duration={1800} />
                </p>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                  Students Mentored
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-lg hover:border-[#B51F60] hover:bg-slate-800/90 transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-950/70 border border-rose-700/60 flex items-center justify-center shrink-0 shadow-inner">
                <Award className="w-6 h-6 text-[#FB7185]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#FB7185] font-heading tracking-tight">
                  <AnimatedCounter end={98.4} decimals={1} suffix="%" duration={1800} />
                </p>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                  Board Distinction Rate
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-lg hover:border-[#B51F60] hover:bg-slate-800/90 transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-950/70 border border-amber-700/60 flex items-center justify-center shrink-0 shadow-inner">
                <Star className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-300 font-heading tracking-tight">
                  <AnimatedCounter end={15} isRange rangeMin={8} rangeMax={15} duration={1600} />
                </p>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                  Small Batch Cap
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-lg hover:border-[#B51F60] hover:bg-slate-800/90 transition-all duration-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-950/70 border border-rose-700/60 flex items-center justify-center shrink-0 shadow-inner">
                <Brain className="w-6 h-6 text-rose-300" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                  <AnimatedCounter end={10} suffix="x" duration={1800} />
                </p>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                  Mental Speed Growth
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
});

export default Hero;
