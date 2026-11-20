import React from 'react';
import { MapPin, Phone, Clock, ArrowRight, Navigation } from 'lucide-react';
import { CONTACT_INFO, playSound } from '../constants';

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = React.memo(() => {
  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      data-purpose="admissions-contact-and-location"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Details & Status (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Admissions Open 2026-27</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-extrabold uppercase text-slate-900 tracking-tight font-heading">
            Take The First Step To Academic Genius
          </h3>

          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Visit our learning center or connect directly with our educators to explore personalized courses and admissions for your child.
          </p>

          <div className="space-y-4 pt-2">
            {/* Address item */}
            <div className="flex items-start gap-4 bg-gradient-to-r from-white via-rose-50/20 to-white p-4 rounded-xl border-2 border-rose-100/90 hover:border-[#B51F60] shadow-sm hover:shadow-md transition-all">
              <div className="p-2.5 rounded-lg bg-rose-50 text-[#E11D48] shrink-0 border border-rose-200 shadow-sm">
                <MapPin className="w-4 h-4 text-[#E11D48]" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 mb-0.5 font-heading">Bright Minds Coaching Classes</p>
                <p className="text-slate-600 leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
            </div>

            {/* Phone item */}
            <div className="flex items-start gap-4 bg-gradient-to-r from-white via-rose-50/20 to-white p-4 rounded-xl border-2 border-rose-100/90 hover:border-[#B51F60] shadow-sm hover:shadow-md transition-all">
              <div className="p-2.5 rounded-lg bg-rose-50 text-[#E11D48] shrink-0 border border-rose-200 shadow-sm">
                <Phone className="w-4 h-4 text-[#E11D48]" />
              </div>
              <div className="text-xs flex-1">
                <p className="font-bold text-slate-900 mb-0.5 font-heading">Direct Helpline</p>
                <div className="flex flex-wrap gap-2 pt-1 font-mono">
                  <a
                    href={`tel:${CONTACT_INFO.phone1}`}
                    className="text-slate-800 hover:text-[#E11D48] font-bold tracking-wider bg-rose-50/70 px-2.5 py-1 rounded-lg border border-rose-200 hover:border-[#B51F60] transition-colors shadow-sm"
                  >
                    {CONTACT_INFO.phone1}
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone2}`}
                    className="text-slate-800 hover:text-[#E11D48] font-bold tracking-wider bg-rose-50/70 px-2.5 py-1 rounded-lg border border-rose-200 hover:border-[#B51F60] transition-colors shadow-sm"
                  >
                    {CONTACT_INFO.phone2}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours item */}
            <div className="flex items-start gap-4 bg-gradient-to-r from-white via-rose-50/20 to-white p-4 rounded-xl border-2 border-rose-100/90 hover:border-[#B51F60] shadow-sm hover:shadow-md transition-all">
              <div className="p-2.5 rounded-lg bg-rose-50 text-[#E11D48] shrink-0 border border-rose-200 shadow-sm">
                <Clock className="w-4 h-4 text-[#E11D48]" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 mb-0.5 font-heading">Hours of Learning</p>
                <p className="text-slate-600 leading-relaxed">{CONTACT_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Center Location & Map Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-gradient-to-br from-white via-rose-50/25 to-white p-6 sm:p-8 rounded-3xl border-2 border-rose-200/90 shadow-2xl relative">
            <div className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#B51F60] text-xs font-bold tracking-wider uppercase mb-2 font-mono shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>OUR LOCATION &amp; CENTER</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold uppercase text-slate-900 font-heading">
                  Visit Bright Minds Academy
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Experience our smart, tech-enabled classrooms in person.
                </p>
              </div>

              {/* Clean Google Map Container */}
              <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-inner relative h-72 sm:h-80 bg-slate-100">
                <iframe
                  title="Bright Minds Coaching Classes Karanjade Panvel Location"
                  src={CONTACT_INFO.embedMapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl border-0"
                />
              </div>

              {/* Address details and Action buttons */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-50 text-[#E11D48] mt-0.5 shrink-0 border border-rose-200">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs flex-1">
                    <p className="font-bold text-slate-900 mb-0.5 font-heading">Physical Address</p>
                    <p className="text-slate-600 leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-200 pt-3">
                  <div className="p-2 rounded-lg bg-rose-50 text-[#E11D48] mt-0.5 shrink-0 border border-rose-200">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs flex-1">
                    <p className="font-bold text-slate-900 mb-0.5 font-heading">Visiting Hours</p>
                    <p className="text-slate-600">{CONTACT_INFO.visitingHours}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200">
                  <a
                    href={CONTACT_INFO.mapQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSound('click')}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#B51F60] hover:from-[#BE185D] hover:to-[#9F1239] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-glow-magenta hover:shadow-glow-magenta-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phone1}`}
                    onClick={() => playSound('click')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider transition-all border-2 border-slate-200 hover:border-[#B51F60] hover:text-[#B51F60] shadow-sm hover:shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Call Center</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
