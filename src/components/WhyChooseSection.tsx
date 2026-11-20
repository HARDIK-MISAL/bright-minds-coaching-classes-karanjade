import React from 'react';
import {
  Sparkles,
  Brain,
  Users,
  Cpu,
  GraduationCap,
  Clock,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Target,
  BarChart3,
  Award,
} from 'lucide-react';
import { ASSETS } from '../constants';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';

export const WhyChooseSection: React.FC = React.memo(() => {
  return (
    <section
      id="why-choose"
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-slate-200 relative"
    >
      {/* Background ambient light glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[22rem] bg-gradient-to-r from-rose-200/30 via-pink-100/40 to-rose-200/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#B51F60] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
          <span>THE BRIGHT MINDS DISTINCTION</span>
        </div>
        <ScrollReveal
          effect="rise"
          mode="scrub"
          splitBy="words"
          stagger={0.04}
          duration={0.8}
          baseOpacity={0.15}
          baseRotation={0}
          baseOffset={6}
          enableBlur={true}
          blurStrength={3}
          highlightColor="#B51F60"
          containerClassName="my-2"
          textClassName="text-2xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight font-heading"
        >
          Why Parents &amp; Students Trust The Bright Minds Standard
        </ScrollReveal>
        <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
          Our dual-engine methodology combines holistic cognitive acceleration through Brainobrain Abacus with rigorous academic board mastery from Jr. KG to 12th grade.
        </p>
      </div>

      {/* 6 Pillars Grid matching exact cards in screenshot with 3D tactile elevation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
        {/* Pillar 1 */}
        <div className="bg-gradient-to-b from-white via-rose-50/20 to-white p-6 rounded-2xl border-2 border-rose-100/90 hover:border-[#B51F60] transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="relative rounded-xl overflow-hidden h-40 mb-4 border border-slate-200 shadow-inner group-hover:border-rose-200 transition-colors bg-slate-100">
              <img
                src={ASSETS.pillarNlpBanner}
                alt="Brainobrain Abacus Certified Coaching in Panvel"
                loading="lazy"
                decoding="async"
                width={360}
                height={160}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-rose-200 backdrop-blur-md text-[10px] font-bold text-[#E11D48] shadow-sm">
                <Brain className="w-3 h-3 text-[#E11D48]" />
                <span>Certified NLP &amp; Abacus</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] shadow-sm group-hover:scale-105 transition-transform">
                <Brain className="w-4 h-4 text-[#E11D48]" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Certified NLP &amp; Brainobrain Coaches
              </h4>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Internationally certified master trainers using Neuro-Linguistic Programming to activate both brain hemispheres, igniting speed-math reflexes and photographic memory.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-[#E11D48] font-bold">
            <Zap className="w-3 h-3" />
            <span>Tailored Dual-Hemisphere Acceleration</span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-gradient-to-b from-white via-rose-50/20 to-white p-6 rounded-2xl border-2 border-rose-100/90 hover:border-[#B51F60] transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="relative rounded-xl overflow-hidden h-40 mb-4 border border-slate-200 shadow-inner group-hover:border-rose-200 transition-colors bg-slate-100">
              <img
                src={ASSETS.pillarClassroom}
                alt="Actual classroom and personal attention at Bright Minds"
                loading="lazy"
                decoding="async"
                width={360}
                height={160}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-rose-200 backdrop-blur-md text-[10px] font-bold text-[#E11D48] shadow-sm">
                <Users className="w-3 h-3 text-[#E11D48]" />
                <span>Actual Classroom</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] shadow-sm group-hover:scale-105 transition-transform">
                <Users className="w-4 h-4 text-[#E11D48]" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Micro-Batches &amp; Personal Attention
              </h4>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Strict cap of 8-15 students per batch guarantees customized learning pacing, continuous eye-contact instruction, and zero unresolved doubts during classroom hours.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-[#E11D48] font-bold">
            <Zap className="w-3 h-3" />
            <span>Tailored Individual Learning Pacing</span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-gradient-to-b from-white via-rose-50/20 to-white p-6 rounded-2xl border-2 border-rose-100/90 hover:border-[#B51F60] transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="relative rounded-xl overflow-hidden h-40 mb-4 border border-slate-200 shadow-inner group-hover:border-rose-200 transition-colors bg-slate-100">
              <img
                src={ASSETS.pillarSmartSpace}
                alt="Smart Learning Space at Bright Minds"
                loading="lazy"
                decoding="async"
                width={360}
                height={160}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-rose-200 backdrop-blur-md text-[10px] font-bold text-[#E11D48] shadow-sm">
                <Cpu className="w-3 h-3 text-[#E11D48]" />
                <span>Smart Learning Space</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] shadow-sm group-hover:scale-105 transition-transform">
                <Cpu className="w-4 h-4 text-[#E11D48]" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Tech-Enabled Smart Labs &amp; Abacus Simulators
              </h4>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Interactive digital touch consoles, 3D abacus simulators, and real-time cognitive telemetry tracking mental response times down to milliseconds.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-[#E11D48] font-bold">
            <Zap className="w-3 h-3" />
            <span>Millisecond Speed Telemetry</span>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="bg-gradient-to-b from-white via-rose-50/20 to-white p-6 rounded-2xl border-2 border-rose-100/90 hover:border-[#B51F60] transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] mb-4 shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-[#E11D48]" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2 font-heading">
              Academic Tracking &amp; Board Success
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proven track record across CBSE, ICSE &amp; Maharashtra State Boards with 98%+ toppers, powered by bi-weekly diagnostic mock test sprints.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-[#E11D48] font-bold">
            <Zap className="w-3 h-3" />
            <span>98.4% Average Board Distinction</span>
          </div>
        </div>

        {/* Pillar 5 */}
        <div className="bg-gradient-to-b from-white via-rose-50/20 to-white p-6 rounded-2xl border-2 border-rose-100/90 hover:border-[#B51F60] transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] mb-4 shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-[#E11D48]" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2 font-heading">
              Holistic Growth Beyond Textbooks
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cultivating emotional resilience, exam stress alleviation, stage presentation courage, and laser concentration habits that empower students for life.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-[#E11D48] font-bold">
            <Zap className="w-3 h-3" />
            <span>Focus &amp; Life Confidence Gym</span>
          </div>
        </div>

        {/* Pillar 6 */}
        <div className="bg-gradient-to-b from-white via-rose-50/20 to-white p-6 rounded-2xl border-2 border-rose-100/90 hover:border-[#B51F60] transition-all duration-300 hover:-translate-y-1 group shadow-md hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] mb-4 shadow-sm group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6 text-[#E11D48]" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2 font-heading">
              Hybrid Learning &amp; Rapid Doubt Desks
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Physical air-conditioned classrooms complemented by digital recordings, weekend doubt desks, and immediate mentor WhatsApp guidance.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-[#E11D48] font-bold">
            <Zap className="w-3 h-3" />
            <span>24/7 Academic Support Network</span>
          </div>
        </div>
      </div>

      {/* React Bits ScrollReveal - High-Impact Educational Philosophy */}
      <div className="my-12 text-center max-w-4xl mx-auto px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#B51F60] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
          <span>OUR PEDAGOGICAL PHILOSOPHY</span>
        </div>
        <ScrollReveal
          highlightColor="#B51F60"
          mode="scrub"
          splitBy="words"
          effect="rise"
          stagger={0.04}
          duration={0.8}
          baseOpacity={0.15}
          baseRotation={0}
          baseOffset={6}
          enableBlur={true}
          blurStrength={4}
          containerClassName="my-2"
          textClassName="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 uppercase font-heading tracking-tight leading-snug"
        >
          Shaping future geniuses by synchronizing analytical precision with creative neuro-agility. Every student deserves dedicated micro-batch focus, proven mentors, and lifelong cognitive confidence.
        </ScrollReveal>
      </div>

      {/* Flagship Feature: The Bright Minds Standard in 3D Light Glassmorphism */}
      <div className="rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-rose-300/90 relative overflow-hidden shadow-2xl bg-gradient-to-b from-rose-50/70 via-white to-white z-10">
        {/* Subtle decorative glowing orb inside container */}
        <div
          aria-hidden="true"
          className="absolute -top-24 right-0 w-80 h-80 bg-rose-200/40 rounded-full blur-[100px] pointer-events-none"
        />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest uppercase text-[#E11D48] mb-3 font-mono shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>THE GOLD STANDARD IN MODERN EDUCATION</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-slate-900 font-heading tracking-tight mb-2.5">
            The Bright Minds Standard
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            An uncompromising educational framework engineered to ignite neuro-agility, guarantee personalized attention, and drive board-topping academic distinction.
          </p>
        </div>

        {/* Key Operational Benchmarks Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 relative z-10">
          {/* Benchmark 1 */}
          <div className="bg-gradient-to-b from-white via-rose-50/40 to-white border-2 border-rose-200/90 rounded-2xl p-3.5 sm:p-5 text-center hover:border-[#B51F60] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#E11D48] font-mono tracking-tight mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter end={15} isRange rangeMin={8} rangeMax={15} duration={1600} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-heading leading-tight break-words">
                Student Batch Cap
              </h4>
            </div>
            <p className="text-[11px] text-slate-500 font-medium mt-1.5 leading-snug">
              Guaranteed individual focus
            </p>
          </div>

          {/* Benchmark 2 */}
          <div className="bg-gradient-to-b from-white via-rose-50/40 to-white border-2 border-rose-200/90 rounded-2xl p-3.5 sm:p-5 text-center hover:border-[#B51F60] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#E11D48] font-mono tracking-tight mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter end={100} suffix="%" duration={1800} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-heading leading-tight break-words">
                Doubt Resolution
              </h4>
            </div>
            <p className="text-[11px] text-slate-500 font-medium mt-1.5 leading-snug">
              Daily mentor desk pledge
            </p>
          </div>

          {/* Benchmark 3 */}
          <div className="bg-gradient-to-b from-white via-rose-50/40 to-white border-2 border-rose-200/90 rounded-2xl p-3.5 sm:p-5 text-center hover:border-[#B51F60] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#E11D48] font-mono tracking-tight mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter end={98.4} decimals={1} suffix="%" duration={1800} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-heading leading-tight break-words">
                Board Distinction
              </h4>
            </div>
            <p className="text-[11px] text-slate-500 font-medium mt-1.5 leading-snug">
              CBSE, ICSE &amp; State Boards
            </p>
          </div>

          {/* Benchmark 4 */}
          <div className="bg-gradient-to-b from-white via-rose-50/40 to-white border-2 border-rose-200/90 rounded-2xl p-3.5 sm:p-5 text-center hover:border-[#B51F60] hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#E11D48] font-mono tracking-tight mb-1 group-hover:scale-105 transition-transform">
                <AnimatedCounter end={3} suffix="× Faster" duration={1500} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-heading leading-tight break-words">
                Mental Calculation
              </h4>
            </div>
            <p className="text-[11px] text-slate-500 font-medium mt-1.5 leading-snug">
              Subconscious neuro-agility
            </p>
          </div>
        </div>

        {/* 4 Pillars of The Standard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 relative z-10">
          {/* Standard 1 */}
          <div className="bg-gradient-to-b from-white via-rose-50/20 to-white rounded-2xl p-4 sm:p-6 border-2 border-rose-200/80 hover:border-[#B51F60] transition-all duration-300 group shadow-md hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 sm:gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] shadow-xs group-hover:scale-105 group-hover:border-[#B51F60] transition-all shrink-0 mt-0.5">
                  <Brain className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 font-heading leading-snug break-words">
                    Neuro-Agility &amp; Dual-Hemisphere Mastery
                  </h4>
                  <div className="inline-block text-[10px] sm:text-[11px] font-mono text-[#E11D48] font-semibold bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/70 mt-1">
                    Brainobrain &amp; NLP Methodology
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                By stimulating both left (analytical) and right (creative/visual) brain hemispheres simultaneously, students develop instant calculation reflex, photographic memory recall, and deep conceptual visualization far beyond ordinary classroom drills.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-100/80 flex items-start sm:items-center gap-2 text-xs font-medium text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-tight">Subconscious mental math without dependency on pen or paper</span>
            </div>
          </div>

          {/* Standard 2 */}
          <div className="bg-gradient-to-b from-white via-rose-50/20 to-white rounded-2xl p-4 sm:p-6 border-2 border-rose-200/80 hover:border-[#B51F60] transition-all duration-300 group shadow-md hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 sm:gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] shadow-xs group-hover:scale-105 group-hover:border-[#B51F60] transition-all shrink-0 mt-0.5">
                  <Target className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 font-heading leading-snug break-words">
                    Focused Micro-Batches &amp; 1-on-1 Spotlight
                  </h4>
                  <div className="inline-block text-[10px] sm:text-[11px] font-mono text-[#E11D48] font-semibold bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/70 mt-1">
                    Strict 8–15 Student Limit
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                Every child learns at their own natural rhythm. With batches restricted strictly to 8–15 students, our mentors maintain direct eye contact, observe comprehension in real time, and ensure every hesitation is transformed into confident mastery.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-100/80 flex items-start sm:items-center gap-2 text-xs font-medium text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-tight">Zero unresolved questions; every student gets daily voice and spotlight</span>
            </div>
          </div>

          {/* Standard 3 */}
          <div className="bg-gradient-to-b from-white via-rose-50/20 to-white rounded-2xl p-4 sm:p-6 border-2 border-rose-200/80 hover:border-[#B51F60] transition-all duration-300 group shadow-md hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 sm:gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] shadow-xs group-hover:scale-105 group-hover:border-[#B51F60] transition-all shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 font-heading leading-snug break-words">
                    Interactive 3D Simulators &amp; Millisecond Telemetry
                  </h4>
                  <div className="inline-block text-[10px] sm:text-[11px] font-mono text-[#E11D48] font-semibold bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/70 mt-1">
                    Technology-Augmented Learning
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                We combine physical abacus tactile tools with digital 3D speed simulators and gamified problem sprints. Students test and refine mental calculation reaction times down to hundredths of a second in an engaging, competitive environment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-100/80 flex items-start sm:items-center gap-2 text-xs font-medium text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-tight">Measurable speed gains logged and improved every single session</span>
            </div>
          </div>

          {/* Standard 4 */}
          <div className="bg-gradient-to-b from-white via-rose-50/20 to-white rounded-2xl p-4 sm:p-6 border-2 border-rose-200/80 hover:border-[#B51F60] transition-all duration-300 group shadow-md hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3 sm:gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#E11D48] shadow-xs group-hover:scale-105 group-hover:border-[#B51F60] transition-all shrink-0 mt-0.5">
                  <BarChart3 className="w-5 h-5 text-[#E11D48]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 font-heading leading-snug break-words">
                    Continuous Diagnostics &amp; Parent Transparency
                  </h4>
                  <div className="inline-block text-[10px] sm:text-[11px] font-mono text-[#E11D48] font-semibold bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/70 mt-1">
                    Weekly Progress Analytics
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                No surprises at exam time. Frequent diagnostic sprints, bi-weekly mock tests, and structured feedback reports keep parents fully informed of their child&apos;s conceptual retention, calculation velocity, and board readiness.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-100/80 flex items-start sm:items-center gap-2 text-xs font-medium text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-tight">Transparent growth charts and direct mentor communication channels</span>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-8 pt-6 border-t border-rose-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center text-[#E11D48] shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#E11D48]" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                The Bright Minds Quality Guarantee
              </div>
              <div className="text-[11px] text-slate-500">
                Every student from Jr. KG to 12th grade is taught to this exact standard of academic rigor and personal care.
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 border border-rose-200 text-[#B51F60] text-xs font-bold tracking-wider font-mono shadow-xs">
            <Award className="w-4 h-4 text-[#E11D48]" />
            <span>UNCOMPROMISED EXCELLENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
});

