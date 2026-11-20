import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Users,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { ASSETS, playSound } from '../constants';
import { AnimatedContent } from './AnimatedContent';

export interface ProgramData {
  id: string;
  category: 'primary' | 'secondary' | 'higher' | 'abacus';
  title: string;
  subtitle: string;
  image: string;
  isFlagship?: boolean;
  badge?: string;
  ageGroup: string;
  batchSize: string;
  boards: string[];
  subjects: string[];
  features: string[];
  description: string;
  actionText: string;
}

export const PROGRAMS_LIST: ProgramData[] = [
  {
    id: 'primary',
    category: 'primary',
    title: 'JR. KG TO 5th GRADE',
    subtitle: 'Primary Foundation & Curiosity Builder',
    image: ASSETS.progJrKg,
    ageGroup: 'Ages 4 - 10',
    batchSize: '8 - 10 Students Max',
    boards: ['CBSE', 'ICSE', 'State Board (SSC)'],
    subjects: ['Basic Numeracy & Phonics', 'English Reading & Grammar', 'Mental Math Foundations', 'EVS & Science Exploration'],
    features: [
      'Visual flashcard techniques & tactile math manipulatives',
      'Handwriting enhancement & vocabulary building drills',
      'Zero-stress, encouraging & nurturing classroom atmosphere',
      'Weekly progress logs shared directly with parents',
    ],
    description:
      'Laying solid foundational academic habits during the most critical cognitive development years through interactive, joy-filled learning modules.',
    actionText: 'Explore Foundation Curriculum →',
  },
  {
    id: 'middle-secondary',
    category: 'secondary',
    title: '6th TO 10th GRADE',
    subtitle: 'Board Mastery & High-Percentile Program',
    image: ASSETS.progSecondary,
    badge: 'BOARD SPECIAL',
    ageGroup: 'Ages 11 - 16',
    batchSize: '10 - 15 Students Max',
    boards: ['CBSE', 'ICSE', 'Maharashtra State Board'],
    subjects: ['Advanced Mathematics & Geometry', 'Physics & Chemistry', 'Biology & General Science', 'English & Social Sciences'],
    features: [
      'Chapter-wise deep conceptual lectures with step-by-step problem solving',
      'Bi-weekly diagnostic unit mock tests & structured paper analysis',
      'Special 10th Board Sprint batch solving 10-year board questions',
      'Dedicated one-on-one doubt resolution clinics every Saturday',
    ],
    description:
      'Rigorous conceptual mastery tailored to CBSE, ICSE, and Maharashtra State Board standards with personalized mentoring to secure 95%+ marks.',
    actionText: 'Explore Board Syllabus →',
  },
  {
    id: 'higher-secondary',
    category: 'higher',
    title: '11th & 12th GRADE',
    subtitle: 'Higher Secondary & Competitive Stream Prep',
    image: ASSETS.progHigherSec,
    badge: 'STUDY HALL',
    ageGroup: 'Ages 16 - 18',
    batchSize: '12 - 15 Students Max',
    boards: ['Maharashtra HSC', 'CBSE Class 11-12'],
    subjects: ['Physics & Chemistry', 'Mathematics & Biology (PCMB)', 'Commerce (Accounts, Eco, OC, SP)', 'Entrance Foundation (MHT-CET / JEE / NEET)'],
    features: [
      'Senior specialist faculty with proven competitive track records',
      'Dedicated air-conditioned study hall with mentor on-duty for revision',
      'Extensive question bank & chapter-wise formula flashcards',
      'Regular full-length test series replicating official board exam conditions',
    ],
    description:
      'High-focus academic environment preparing students for higher secondary board exams and competitive entrance examinations without burnout.',
    actionText: 'Explore Stream Tracks →',
  },
  {
    id: 'brainobrain-abacus',
    category: 'abacus',
    title: 'BRAINOBRAIN ABACUS',
    subtitle: 'Cognitive Speed, Brain Gym & NLP',
    image: ASSETS.progAbacus,
    isFlagship: true,
    badge: 'GLOBAL CERTIFIED',
    ageGroup: 'Ages 4 - 14 (Level 1 to 10)',
    batchSize: 'Strict 8–10 Students',
    boards: ['Brainobrain International Certification', 'NLP Skill Certified'],
    subjects: ['Abacus Arithmetic Mastery', 'Speed Math & Mental Gymnastics', 'Neuro-Linguistic Programming (NLP)', 'Photographic Memory Training'],
    features: [
      'World-renowned Brainobrain curriculum with global certification',
      'Whole-brain development (synchronizing left & right brain hemispheres)',
      'Sharpens focus, concentration, visualization, and rapid recall',
      'Eligibility for Regional, National & International Championships',
    ],
    description:
      'World-renowned Brainobrain whole-brain development program utilizing NLP & abacus to develop lightning speed mental arithmetic and lifelong cognitive focus.',
    actionText: 'Book Free Abacus Assessment →',
  },
];

interface ProgramsSectionProps {
  onSelectProgram: (prog: ProgramData) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = React.memo(({
  onSelectProgram,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'primary' | 'secondary' | 'higher' | 'abacus'>('all');

  const filteredPrograms = activeTab === 'all'
    ? PROGRAMS_LIST
    : PROGRAMS_LIST.filter(p => p.category === activeTab);

  return (
    <section
      id="programs"
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      data-purpose="program-offerings"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#B51F60] text-xs font-bold tracking-wider uppercase mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#B51F60]" />
          <span>STRUCTURED ACADEMIC COURSES</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight font-heading">
          Explore Courses &amp; Programs
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-2">
          Arihant Academy standard curriculum with structured syllabus coverage, small batch sizes, and Brainobrain cognitive empowerment.
        </p>
      </div>

      {/* Stream Tabs Bar (Arihant Academy style) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        <button
          onClick={() => {
            playSound('click');
            setActiveTab('all');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            activeTab === 'all'
              ? 'bg-gradient-to-r from-[#B51F60] to-[#E11D48] text-white shadow-md shadow-rose-900/20'
              : 'bg-white text-slate-700 hover:text-[#B51F60] border border-rose-200 hover:bg-rose-50/60 shadow-xs'
          }`}
        >
          All Programs (4)
        </button>
        <button
          onClick={() => {
            playSound('click');
            setActiveTab('primary');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            activeTab === 'primary'
              ? 'bg-gradient-to-r from-[#B51F60] to-[#E11D48] text-white shadow-md shadow-rose-900/20'
              : 'bg-white text-slate-700 hover:text-[#B51F60] border border-rose-200 hover:bg-rose-50/60 shadow-xs'
          }`}
        >
          Jr. KG to 5th
        </button>
        <button
          onClick={() => {
            playSound('click');
            setActiveTab('secondary');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            activeTab === 'secondary'
              ? 'bg-gradient-to-r from-[#B51F60] to-[#E11D48] text-white shadow-md shadow-rose-900/20'
              : 'bg-white text-slate-700 hover:text-[#B51F60] border border-rose-200 hover:bg-rose-50/60 shadow-xs'
          }`}
        >
          6th to 10th Board
        </button>
        <button
          onClick={() => {
            playSound('click');
            setActiveTab('higher');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            activeTab === 'higher'
              ? 'bg-gradient-to-r from-[#B51F60] to-[#E11D48] text-white shadow-md shadow-rose-900/20'
              : 'bg-white text-slate-700 hover:text-[#B51F60] border border-rose-200 hover:bg-rose-50/60 shadow-xs'
          }`}
        >
          11th &amp; 12th Streams
        </button>
        <button
          onClick={() => {
            playSound('click');
            setActiveTab('abacus');
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            activeTab === 'abacus'
              ? 'bg-gradient-to-r from-[#B51F60] via-[#E11D48] to-[#85243F] text-white shadow-md shadow-rose-900/30'
              : 'bg-rose-50 text-[#B51F60] font-extrabold border-2 border-rose-300 hover:bg-rose-100/70 shadow-xs'
          }`}
        >
          ★ Brainobrain Abacus
        </button>
      </div>

      {/* Course Cards Grid with AnimatedContent stagger */}
      <AnimatedContent
        distance={40}
        direction="vertical"
        duration={0.7}
        ease="power2.out"
        stagger={0.08}
        threshold={0.1}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filteredPrograms.map((program) => {
          const isFlagship = program.isFlagship;

          return (
            <div
              key={program.id}
              id={isFlagship ? 'abacus' : undefined}
              className={`group relative rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between ${
                isFlagship
                  ? 'bg-gradient-to-b from-rose-100/70 via-rose-50/40 to-white border-2 border-[#B51F60] shadow-xl hover:shadow-2xl shadow-rose-500/15'
                  : 'bg-gradient-to-b from-white via-rose-50/20 to-white border-2 border-rose-100/90 hover:border-[#B51F60] shadow-md hover:shadow-xl'
              }`}
            >
              {/* Top Color Accent Line */}
              <div
                className={`h-1.5 w-full rounded-full mb-3 ${
                  isFlagship
                    ? 'bg-gradient-to-r from-[#B51F60] via-[#E11D48] to-amber-400'
                    : program.category === 'primary'
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400'
                    : program.category === 'secondary'
                    ? 'bg-gradient-to-r from-[#B51F60] to-[#E11D48]'
                    : 'bg-gradient-to-r from-[#85243F] to-indigo-600'
                }`}
              />

              {/* Badge */}
              {program.badge && (
                <div
                  className={`absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-md ${
                    isFlagship ? 'bg-gradient-to-r from-[#B51F60] to-[#E11D48] text-white' : 'bg-slate-800 text-white'
                  }`}
                >
                  {program.badge}
                </div>
              )}

              <div>
                {/* Course Header Bar */}
                <div
                  className={`rounded-xl py-2 px-3 text-center mb-3 transition-colors ${
                    isFlagship
                      ? 'bg-rose-100/80 border border-rose-300'
                      : 'bg-rose-50/50 border border-rose-200/80 group-hover:border-rose-300 group-hover:bg-rose-100/40'
                  }`}
                >
                  <h3 className="text-xs md:text-sm font-black text-slate-900 tracking-wider uppercase font-heading flex items-center justify-center gap-1.5">
                    {isFlagship && <Sparkles className="w-3.5 h-3.5 text-[#B51F60]" />}
                    {program.title}
                  </h3>
                </div>

                {/* Course Thumbnail Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 shadow-inner mb-3">
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={200}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-bold">
                    <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {program.ageGroup}
                    </span>
                    <span className="bg-[#B51F60] backdrop-blur-sm px-2 py-0.5 rounded font-extrabold">
                      {program.batchSize}
                    </span>
                  </div>
                </div>

                {/* Subtitle */}
                <p className={`text-xs font-bold mb-3 ${isFlagship ? 'text-[#B51F60]' : 'text-slate-800'}`}>
                  {program.subtitle}
                </p>

                {/* Boards Covered */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {program.boards.map((b, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-rose-50/80 text-slate-800 text-[10px] font-semibold border border-rose-200/70"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Key Features Bullet List */}
                <ul className="space-y-1.5 text-[11px] text-slate-600 mb-4">
                  {program.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#B51F60] shrink-0 mt-0.5" />
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    playSound('click');
                    onSelectProgram(program);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-[#B51F60] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>{program.actionText}</span>
                </button>

                <a
                  href={`https://wa.me/919326662376?text=${encodeURIComponent(
                    `Hello! I want to know about fees and batch timings for: ${program.title} (${program.subtitle}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 text-center block text-[11px] font-bold text-[#B51F60] hover:text-[#85243F] transition-colors"
                >
                  Enquire via WhatsApp →
                </a>
              </div>
            </div>
          );
        })}
      </AnimatedContent>
    </section>
  );
});

export default ProgramsSection;
