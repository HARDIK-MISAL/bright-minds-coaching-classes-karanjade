import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Brain, Trophy, Flame, RotateCcw, Volume2, VolumeX, Eye } from 'lucide-react';
import { playSound } from '../constants';
import { sanitizeNumericInput, checkRateLimit } from '../utils/security';

type Operation = '+' | '-' | '×' | 'mixed';
type Difficulty = 'normal' | 'advanced' | 'lightning';

export const MentalSpeedSimulator: React.FC = React.memo(() => {
  const [operation, setOperation] = useState<Operation>('+');
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const [num1, setNum1] = useState(16);
  const [num2, setNum2] = useState(20);
  const [currentOp, setCurrentOp] = useState<'+' | '-' | '×'>('+');
  const [correctAnswer, setCorrectAnswer] = useState(36);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(2);
  const [streak, setStreak] = useState(2);
  const [highScore, setHighScore] = useState(5);
  const [feedback, setFeedback] = useState<{ text: string; isCorrect: boolean } | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showAbacusHelper, setShowAbacusHelper] = useState(false);
  const [activeBeadsValue, setActiveBeadsValue] = useState(36);

  const generateProblem = useCallback(() => {
    let op = operation;
    if (op === 'mixed') {
      const ops: Array<'+' | '-' | '×'> = ['+', '-', '×'];
      op = ops[Math.floor(Math.random() * ops.length)];
    }

    const selectedOp = op as '+' | '-' | '×';
    setCurrentOp(selectedOp);

    let n1 = 0;
    let n2 = 0;
    let ans = 0;

    if (difficulty === 'normal') {
      if (selectedOp === '+') {
        n1 = Math.floor(Math.random() * 50) + 12;
        n2 = Math.floor(Math.random() * 40) + 10;
        ans = n1 + n2;
      } else if (selectedOp === '-') {
        n1 = Math.floor(Math.random() * 60) + 30;
        n2 = Math.floor(Math.random() * (n1 - 10)) + 5;
        ans = n1 - n2;
      } else {
        // Multiplication
        n1 = Math.floor(Math.random() * 12) + 4;
        n2 = Math.floor(Math.random() * 9) + 3;
        ans = n1 * n2;
      }
    } else if (difficulty === 'advanced') {
      if (selectedOp === '+') {
        n1 = Math.floor(Math.random() * 400) + 100;
        n2 = Math.floor(Math.random() * 300) + 50;
        ans = n1 + n2;
      } else if (selectedOp === '-') {
        n1 = Math.floor(Math.random() * 600) + 200;
        n2 = Math.floor(Math.random() * (n1 - 50)) + 50;
        ans = n1 - n2;
      } else {
        n1 = Math.floor(Math.random() * 25) + 11;
        n2 = Math.floor(Math.random() * 12) + 6;
        ans = n1 * n2;
      }
    } else {
      // Lightning mode (2-digit rapid)
      n1 = Math.floor(Math.random() * 70) + 15;
      n2 = Math.floor(Math.random() * 60) + 10;
      ans = n1 + n2;
    }

    setNum1(n1);
    setNum2(n2);
    setCorrectAnswer(ans);
    setUserAnswer('');
    setFeedback(null);
  }, [operation, difficulty]);

  useEffect(() => {
    generateProblem();
  }, [generateProblem]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Security: Rate limit submissions to prevent automated DoS script spam
    if (!checkRateLimit('math-sim-submit', 160)) return;

    const sanitized = sanitizeNumericInput(userAnswer, 6);
    const parsed = parseInt(sanitized.trim(), 10);
    if (isNaN(parsed) || !Number.isSafeInteger(parsed)) return;

    if (parsed === correctAnswer) {
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      setActiveBeadsValue(correctAnswer);
      if (newScore > highScore) setHighScore(newScore);

      if (soundEnabled) {
        if (newStreak % 5 === 0) {
          playSound('streak');
        } else {
          playSound('correct');
        }
      }

      setFeedback({
        text: `⚡ Lightning reflex! Streak ${newStreak} 🔥`,
        isCorrect: true,
      });

      setTimeout(() => {
        generateProblem();
      }, 900);
    } else {
      setStreak(0);
      if (soundEnabled) playSound('wrong');

      setFeedback({
        text: `Keep going! Correct answer was ${correctAnswer}. Next one!`,
        isCorrect: false,
      });

      setTimeout(() => {
        generateProblem();
      }, 1400);
    }
  };

  return (
    <section
      id="speed-simulator"
      className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
      data-purpose="interactive-abacus-simulator"
    >
      <div className="bg-gradient-to-br from-white via-rose-50/30 to-white rounded-3xl p-6 md:p-10 border-2 border-rose-200/90 relative overflow-hidden shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] flex items-center gap-2 font-mono">
              <Brain className="w-4 h-4 text-[#E11D48]" /> Interactive Brain Simulator
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase leading-snug font-heading">
              Test Mental Speed: <br />
              Beat The Abacus Reflex!
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Brainobrain trains both left and right brain hemispheres simultaneously. Try our rapid-fire mental arithmetic reflex tester below!
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-800">
              <div className="flex -space-x-2">
                <span className="inline-block w-8 h-8 rounded-full bg-rose-100 text-[#B51F60] border border-rose-200 flex items-center justify-center font-bold text-[10px] shadow-sm">
                  99%
                </span>
                <span className="inline-block w-8 h-8 rounded-full bg-rose-500 text-white border border-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                  10x
                </span>
              </div>
              <span className="text-slate-600">
                Average improvement reported in first 90 days
              </span>
            </div>

            {/* Quick Abacus Beads Visualization Toggle */}
            <div className="pt-2">
              <button
                onClick={() => {
                  playSound('click');
                  setShowAbacusHelper(!showAbacusHelper);
                }}
                className="inline-flex items-center gap-2 text-xs text-[#E11D48] hover:text-[#B51F60] px-3.5 py-1.5 rounded-lg bg-rose-50 border border-rose-200 hover:border-rose-300 transition-all font-semibold shadow-sm"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showAbacusHelper ? 'Hide Virtual Beads' : 'Show Virtual Soroban Abacus'}</span>
              </button>
            </div>
          </div>

          {/* Right Speed Math Mini-App Container (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/90 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-md">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-200 gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 font-medium text-[11px]">Mode:</span>
                <div className="inline-flex rounded-lg bg-white p-0.5 border border-slate-200 shadow-sm">
                  {(['+', '-', '×', 'mixed'] as Operation[]).map((op) => (
                    <button
                      key={op}
                      onClick={() => {
                        playSound('click');
                        setOperation(op);
                      }}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        operation === op
                          ? 'bg-[#B51F60] text-white font-bold shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {op}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats badges */}
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-mono text-[#E11D48] font-bold">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>Streak: {streak}</span>
                </span>
                <span className="flex items-center gap-1 font-mono text-slate-800 font-bold bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">
                  <Trophy className="w-3 h-3 text-amber-500" />
                  <span>Score: {score}</span>
                </span>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  title={soundEnabled ? 'Mute sound' : 'Enable sound'}
                  className="p-1 rounded text-slate-500 hover:text-slate-800"
                >
                  {soundEnabled ? (
                    <Volume2 className="w-3.5 h-3.5 text-[#E11D48]" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Question Display */}
            <div className="py-6 text-center">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-2 font-medium">
                Compute in your mind without calculator
              </span>
              <div
                id="math-problem"
                className="text-4xl sm:text-5xl md:text-6xl font-mono font-black text-slate-900 tracking-widest drop-shadow-sm"
              >
                {num1} <span className="text-[#E11D48]">{currentOp}</span> {num2} = ?
              </div>
              <div
                className={`h-6 text-xs font-bold mt-2.5 transition-all ${
                  feedback
                    ? feedback.isCorrect
                      ? 'text-emerald-600'
                      : 'text-rose-600'
                    : 'opacity-0'
                }`}
              >
                {feedback ? feedback.text : 'Ready'}
              </div>
            </div>

            {/* Input and Submit Form with input hardening & anti-DoS */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-sm mx-auto w-full items-center"
            >
              <input
                id="math-answer-input"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="off"
                maxLength={6}
                value={userAnswer}
                onChange={(e) => {
                  const clean = sanitizeNumericInput(e.target.value, 6);
                  setUserAnswer(clean);
                }}
                placeholder="Enter answer"
                className="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-2.5 text-center text-slate-900 focus:outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-200 text-xl font-mono font-bold shadow-inner placeholder:text-slate-400"
              />
              <button
                id="math-submit-btn"
                type="submit"
                className="w-full px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#B51F60] hover:from-[#BE185D] hover:to-[#9F1239] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-glow-magenta cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                SUBMIT ANSWER
              </button>
            </form>

            {/* Bottom Actions */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-600 px-2">
              <button
                id="sim-reset-btn"
                onClick={() => {
                  playSound('click');
                  generateProblem();
                }}
                className="inline-flex items-center gap-1.5 hover:text-slate-900 underline text-[11px] font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Generate New Math Problem</span>
              </button>

              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="text-slate-400">Level:</span>
                {(['normal', 'advanced', 'lightning'] as Difficulty[]).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => {
                      playSound('click');
                      setDifficulty(diff);
                    }}
                    className={`capitalize underline ${
                      difficulty === diff ? 'text-[#E11D48] font-bold' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Virtual Soroban Abacus Interactive Helper */}
            {showAbacusHelper && (
              <div className="mt-5 pt-4 border-t border-slate-200 bg-white rounded-xl p-3.5 text-center shadow-sm animate-fadeIn">
                <div className="flex items-center justify-between text-[11px] text-[#E11D48] mb-2 font-bold uppercase tracking-wider">
                  <span>Brainobrain Soroban Abacus Rods</span>
                  <span className="text-slate-800 font-mono">Value: {activeBeadsValue}</span>
                </div>

                {/* Visual Bead Rods */}
                <div className="flex justify-center gap-3 py-2 bg-slate-100 rounded-lg border border-slate-200 p-2 shadow-inner">
                  {[100, 10, 1].map((place, idx) => {
                    const digit = Math.floor((activeBeadsValue / place) % 10);
                    const upperBeadActive = digit >= 5;
                    const lowerBeadsCount = digit % 5;

                    return (
                      <div key={place} className="flex flex-col items-center">
                        <span className="text-[9px] text-slate-500 font-mono mb-1">
                          {idx === 0 ? 'Hundreds' : idx === 1 ? 'Tens' : 'Units'}
                        </span>
                        <div className="w-8 h-28 bg-slate-200/90 border border-slate-300 rounded flex flex-col items-center justify-between p-1 relative shadow-sm">
                          {/* Upper bead (value 5) */}
                          <div
                            className={`w-5 h-3.5 rounded-md transition-all duration-300 ${
                              upperBeadActive
                                ? 'bg-[#E11D48] shadow-sm translate-y-3'
                                : 'bg-slate-400 translate-y-0'
                            }`}
                          />
                          {/* Beam divider */}
                          <div className="w-full h-1 bg-slate-400 my-1 rounded" />
                          {/* Lower beads (value 1 each) */}
                          <div className="flex flex-col gap-1">
                            {[1, 2, 3, 4].map((bead) => (
                              <div
                                key={bead}
                                className={`w-5 h-2.5 rounded-sm transition-all duration-300 ${
                                  bead <= lowerBeadsCount
                                    ? 'bg-[#E11D48] shadow-sm -translate-y-1'
                                    : 'bg-slate-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-800 mt-1">
                          {digit}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-[10px] text-slate-500 mt-2 italic">
                  Brainobrain children visualize these bead movements in milliseconds through mental projection!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
