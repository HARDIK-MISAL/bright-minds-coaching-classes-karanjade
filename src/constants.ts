import React from 'react';

// Hotlinked images from provided HTML / prompt
export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVJvMkG1fzZzKzpAWrF3ovaEgugrwv-HfxZ9VflYMUuAvjFBi6BViIMF93ohQ-OMrviBSC6Uh1_QPjyXl_lTdwcbiIXPiDDM1vPtrtBhkzwO1ajG9V1k7c4irtyGJ8rdGmysY09FoIti8rJIIPZQHpEU0WQRt8cgaJYI20N1708gYRuFp54of3sAGXObnrhcmzkgptvEWRaqJ7MKjU0UDUXQMrUxpyOwulcKyM2qoJGSLF9W00SPwuBbW7Yk8p4-lLEw',
  heroStorefront: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD11rpTIuLln9Pd6aUu1k5wFFC6ZOv1Lm8M5BRTKTgzIA81dtfDHDEit1tji3-kzZE0FOfBzuEJ_5vrp1n4RuoifQxJ7QWPdY-CnOjI6RWLXnlupW5uU9M0AJCgV32GJ3-grvm7BRgLkmR1L3imxpfFa30lWaqHUZzLAwW-RhMJ01ICsdMc84x-Y_MF9hECis4FHiy3S8DDnBegwXxiANh8P3gvtsB8JSolpz9Roztxyx9MOqXG1FPEqpfH3W3HIDEqQ',
  progJrKg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH-8QJW9-9S-SQH-5aUuHR9wQRbcoRUP2BEqZ91_FcoTCuZLwK3bUScI_LwB2SihOlPerWjpTI3BbTHK5Qn-aI4tUNSqVynNbvWNfgXZRWB82gMAwkozU-SFXxjg1yXHJ5FOUQ2uC1Hi3H_-eT1pR53-_5AJ7i0eiQVkyUNSzEToNesByh70BAffkcxFobgv_CEexTHuP1hrIyrU8PNAH4dAEa6G6egvUaDlhCja0vV8qmpPBFuA_e',
  progSecondary: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPGMAqYatcertUL8hHP-l60YyDgdHgp5FX_HRqaMNIV-MpK_GLAhVZjNBXT2_BpN5xANLKJFnFdQlU2LEOw6va_u_ZlL1VgS_QhqrasyB6qp2w4NNxpJ3yzfjxaMR9YxXCXgFPK2Bsy2yQfDtiqkZ9pAyjBrYzxLj7zE6gMytSX2hB8Ogy5zk3mkmnfy8iWQzNICEXtFw8LTml7ErAULIJ8fhtOFMTgPyTh62JUkG5FrLHQJwJg1aS',
  progHigherSec: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr95tY6JUoEcNf8T9Tc64GhzrWiBuM-rTrIX0Lh4R8xbjORSY4_B04p5tKoTaVne8lOKnJlc4-s8tHc224J_rDDSuKVkKaTcVk9KYP5lai7dvTbS1eHsJDvyMBIGr8vAMxIZzAnjJNEtS3pN1fZ3dKMy9k8cnTi7lxZioFDiM5kyQ0tG11tXPlpENtAhxSMvAiNRRciJ4cSpLLU-K3GfhCHB1QGYueFaL62Ip2x28Y-kLzwcWcL3_pp8koW12qPLhXTQ',
  progAbacus: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoxKVyV1D503hBE4gqu15jzhP0GjEIKiavh2-3IjlDh74qcHOofZ1rHBW_uUnIGFlcwkmcFmBr0QKFVnIpoMEmY36SOZ3wFalE3Bmwr1WnHuDPwExemfQbhgJZpW_oq2OotEEfeRmwNeFTRLiWq0_xKWvTyDO2WdkXGDFIdHROkXXnX204S70AsRpW_slnubP0pgG0cyAiMHjmpH8RQnJ05pxpXABuLxMBg46J68-OygN11jcruS8PPX-h_x6AziqHuDTSk9xg_5Lt2g',
  pillarNlpBanner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRbcgcKFn0auGuWvQewOVBhQlaXo_BBHMQ_kRVc5DNKr-Q1lJZVV0S5w6gsn9-tG_jfETffPoMO5gs9CzsTrQ3lsqkjbCj0vSI8m7iepDIDKtnV__vRfK2su3iuzomnXM331QRBrhzam91dsBUbXFkfc635LJG8d--EtjIah54MOSiD4MzoVxjmS-00XazbIpaQoqM8-QLRDPvvbmpus5jl2Xw030XHBOEsFX3kJktlKwc8A0rlUYqUPfkkHNBMnqybw',
  pillarClassroom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd03OBbkIPJUMIhFCy9wC9BF4hd7uqvc37Cn79yZ9nUgZ8L_GN-KN-OYquFe3cy3lYAE1jkJhf2AIb25pSpou9OGPc4zGISvdftY7ysF6CkCaADemxd4e0IENwnQU4mpuEO9lf7if_XT6R7aAyMXNvEGQTyFUe2QVrowVqAfdKqgXD_QD8oHNwase5D6iZyXaXyOgxzkkW86REMJdF3nO5DhVkBfgcRkhCsXjv_GIEH3dR3MRXNWlodrJJewcS765AUF6LQMpZ19Eh5Q',
  pillarSmartSpace: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGnPn1EA5hH_DBLHVX_tvlRlkk6QS4A3Z5liC36gWGzmyEgkaFtSZyPvHst8cP1TGxCLlniv7Ls-jj-PC2dqBHVI8Robtutcf0g87UdXUvTSbwbrKYFw2KbpIH9G3aJWOgOqp3NXILqKryLanh-z2_ECDtEAtKXpj1ooC-qJJjBkR7opAEUq20Z5kHVH6cN3y7oNuBY9OjpfKIb3TRqOaMd2gpIy0EsbgvBRA7WYqxXBrBaOXAhy5O16gzftfXYXeTMg',
};

export const CONTACT_INFO = {
  phone1: '+91 9326662376',
  phone2: '+91 9653350765',
  address: 'R4 Plot, no 88, Ambika Niwas Shop no - 1, Sector, Karanjade, Panvel, Maharashtra 410206',
  hours: 'Mon - Sat: Dedicated Batches | Sunday: Special Abacus Batches',
  visitingHours: 'Mon – Sat: 9:00 AM – 8:30 PM | Sunday: Special Batches',
  mapQuery: 'https://maps.google.com/?q=R4+Plot+no+88+Ambika+Niwas+Shop+no+1+Sector+Karanjade+Panvel+Maharashtra+410206',
  embedMapUrl: 'https://maps.google.com/maps?q=Karanjade,+Panvel,+Maharashtra+410206&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

// Singleton Web Audio context & safe rate-limiter to prevent channel exhaustion or DOS crashes
let sharedAudioCtx: AudioContext | null = null;
let lastAudioTrigger = 0;

export function playSound(type: 'correct' | 'wrong' | 'click' | 'streak') {
  try {
    const nowMs = Date.now();
    // DoS & audio flood protection (max 1 sound per 60ms)
    if (nowMs - lastAudioTrigger < 60) return;
    lastAudioTrigger = nowMs;

    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!sharedAudioCtx || sharedAudioCtx.state === 'closed') {
      sharedAudioCtx = new AudioContextClass();
    } else if (sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume().catch(() => {});
    }

    const ctx = sharedAudioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;

    if (type === 'correct') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.2);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'streak') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.setValueAtTime(830.61, now + 0.08);
      osc.frequency.setValueAtTime(1046.50, now + 0.16);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch {
    // Ignore audio permission/initialization errors
  }
}
