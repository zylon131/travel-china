import React, { useState } from "react";
import { Award, RefreshCw, ChevronRight, X, Loader2 } from "lucide-react";

interface InteractiveQuizProps {
  onBuyClick: () => void;
  t: any;
}

interface Question {
  q: string;
  options: { text: string; score: number; feedback: string }[];
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({ onBuyClick, t }) => {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0: Start, 1-3: Questions, 4: Result
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [statusStep, setStatusStep] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const questions: Question[] = [
    {
      q: t.quiz.q1.q,
      options: [
        {
          text: t.quiz.q1.a,
          score: 1,
          feedback: t.quiz.q1.af,
        },
        {
          text: t.quiz.q1.b,
          score: 0,
          feedback: t.quiz.q1.bf,
        },
        {
          text: t.quiz.q1.c,
          score: 3,
          feedback: t.quiz.q1.cf,
        },
      ],
    },
    {
      q: t.quiz.q2.q,
      options: [
        {
          text: t.quiz.q2.a,
          score: 1,
          feedback: t.quiz.q2.af,
        },
        {
          text: t.quiz.q2.b,
          score: 2,
          feedback: t.quiz.q2.bf,
        },
        {
          text: t.quiz.q2.c,
          score: 3,
          feedback: t.quiz.q2.cf,
        },
      ],
    },
    {
      q: t.quiz.q3.q,
      options: [
        {
          text: t.quiz.q3.a,
          score: 0,
          feedback: t.quiz.q3.af,
        },
        {
          text: t.quiz.q3.b,
          score: 3,
          feedback: t.quiz.q3.bf,
        },
        {
          text: t.quiz.q3.c,
          score: 1,
          feedback: t.quiz.q3.cf,
        },
      ],
    },
  ];

  const handleAnswerSelect = (scoreIncrement: number, optionIndex: number) => {
    const nextAnswers = [...answers, optionIndex];
    const nextScore = score + scoreIncrement;
    setScore(nextScore);
    setAnswers(nextAnswers);

    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Last question answered, trigger simulation load
      setIsCalculating(true);
      setLoadingProgress(0);
      setStatusStep(0);

      const duration = 1800; // 1.8 seconds for nice dramatic effect
      const intervalTime = 60;
      const totalSteps = duration / intervalTime;
      let currentStepCount = 0;

      const timer = setInterval(() => {
        currentStepCount++;
        const progress = Math.min(Math.floor((currentStepCount / totalSteps) * 100), 100);
        setLoadingProgress(progress);

        // Update status step based on progress
        if (progress < 20) setStatusStep(0);
        else if (progress < 40) setStatusStep(1);
        else if (progress < 60) setStatusStep(2);
        else if (progress < 80) setStatusStep(3);
        else setStatusStep(4);

        if (currentStepCount >= totalSteps) {
          clearInterval(timer);
          setTimeout(() => {
            setIsCalculating(false);
            setCurrentStep(questions.length + 1); // move to result step 4
            setShowModal(true);
          }, 300);
        }
      }, intervalTime);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setAnswers([]);
    setIsCalculating(false);
    setLoadingProgress(0);
    setStatusStep(0);
    setShowModal(false);
  };

  // Calculate results profile
  const getResultProfile = () => {
    if (score >= 8) {
      return {
        title: t.quiz.emperorTitle,
        desc: t.quiz.emperorDesc,
        color: "text-cyber-green border-cyber-green bg-emerald-50/50",
      };
    } else if (score >= 5) {
      return {
        title: t.quiz.strugglingTitle,
        desc: t.quiz.strugglingDesc,
        color: "text-cyber-yellow border-cyber-yellow bg-yellow-50/30",
      };
    } else {
      return {
        title: t.quiz.strandedTitle,
        desc: t.quiz.strandedDesc,
        color: "text-cyber-red border-cyber-red bg-red-50/50",
      };
    }
  };

  const result = getResultProfile();
  const optionPrefixes = ["A", "B", "C"];

  return (
    <section id="survival-quiz" className="py-24 bg-paper-dark border-b-2 border-cyber-black text-left relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">
            {t.quiz.tag}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-black mt-2">
            {t.quiz.title}
          </h2>
        </div>

        {/* Loading / Calculating State */}
        {isCalculating && (
          <div className="bg-cyber-black text-cyber-green font-mono border-2 border-cyber-black rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(251,191,36,1)] min-h-[340px] flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 text-cyber-yellow mb-6">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  {t.quiz.loading || "Analyzing digital survival index..."}
                </span>
              </div>
              
              <div className="space-y-3 text-[11px] sm:text-xs text-zinc-400">
                <div className={statusStep >= 0 ? "text-cyber-green" : ""}>
                  {statusStep >= 0 ? "✔" : "○"} &gt; INIT: survival_readout_daemon.sh
                </div>
                <div className={statusStep >= 1 ? "text-cyber-green" : ""}>
                  {statusStep >= 1 ? "✔" : "○"} &gt; PAYMENT: WeChat / Alipay API binding check...
                </div>
                <div className={statusStep >= 2 ? "text-cyber-green" : ""}>
                  {statusStep >= 2 ? "✔" : "○"} &gt; GEOLOCATION: GCJ-02 offset coordinate check...
                </div>
                <div className={statusStep >= 3 ? "text-cyber-green" : ""}>
                  {statusStep >= 3 ? "✔" : "○"} &gt; TRANSIT: English DiDi Gateway verification...
                </div>
                <div className={statusStep >= 4 ? "text-cyber-green" : ""}>
                  {statusStep >= 4 ? "✔" : "○"} &gt; REPORT: Packaging diagnostic metadata...
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center text-[10px] text-zinc-500 mb-1">
                <span>INDEXING_PROGRESS</span>
                <span>{loadingProgress}%</span>
              </div>
              <div className="w-full bg-zinc-850 h-2 rounded-full overflow-hidden border border-zinc-700">
                <div 
                  className="bg-cyber-yellow h-full transition-all duration-75"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Start Step */}
        {!isCalculating && currentStep === 0 && (
          <div className="bg-white border-2 border-cyber-black rounded-2xl p-8 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)]">
            <h3 className="font-mono font-bold text-cyber-black text-xs mb-4 tracking-wider">
              {t.quiz.run}
            </h3>
            <p className="font-sans text-xs sm:text-sm font-semibold leading-relaxed text-zinc-500 mb-6">
              {t.quiz.desc}
            </p>
            <button
              onClick={() => setCurrentStep(1)}
              className="px-5 py-3 bg-cyber-black text-white rounded-xl font-mono font-bold text-xs hover:bg-zinc-800 shadow-[4px_4px_0px_0px_rgba(251,191,36,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center space-x-2.5 cursor-pointer"
            >
              <span>{t.quiz.startBtn}</span>
              <ChevronRight className="w-4 h-4 text-cyber-yellow" />
            </button>
          </div>
        )}

        {/* Question Steps */}
        {!isCalculating && currentStep >= 1 && currentStep <= questions.length && (
          <div className="bg-white border-2 border-cyber-black rounded-2xl p-8 shadow-[6px_6px_0px_0px_rgba(14,14,17,1)] relative">
            <div className="absolute right-6 top-6 text-zinc-400 font-mono text-[9px] font-bold bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded">
              {t.quiz.seq}: {currentStep} / {questions.length}
            </div>

            <h3 className="font-display text-base sm:text-xl font-extrabold text-cyber-black mb-8 leading-snug pr-12">
              {questions[currentStep - 1].q}
            </h3>

            <div className="space-y-4">
              {questions[currentStep - 1].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(opt.score, index)}
                  className="w-full p-4 border-2 border-zinc-200 rounded-xl text-left text-xs sm:text-sm font-bold text-zinc-700 hover:border-cyber-black hover:bg-zinc-50 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span className="flex items-start space-x-3 pr-4">
                    <span className="font-mono text-xs text-zinc-400 font-extrabold group-hover:text-cyber-black">
                      [{optionPrefixes[index]}]
                    </span>
                    <span>{opt.text}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-cyber-black shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result Step */}
        {!isCalculating && currentStep > questions.length && (
          <div className="bg-white border-2 border-cyber-black rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(14,14,17,1)] space-y-6">
            <div className="flex items-center space-x-3.5 pb-4 border-b border-zinc-100">
              <div className="bg-cyber-black text-white p-2.5 rounded-xl border border-cyber-black shadow-[2px_2px_0px_0px_rgba(251,191,36,1)]">
                <Award className="w-6 h-6 text-cyber-yellow" />
              </div>
              <div>
                <span className="text-[9px] block font-mono font-bold text-zinc-400 tracking-wider">
                  {t.quiz.reportTitle}
                </span>
                <h3 className="font-mono font-bold text-cyber-black text-xs tracking-wide mt-0.5">
                  {t.quiz.reportScore}: {score} / 9
                </h3>
              </div>
            </div>

            <div className={`p-5 border-2 rounded-xl font-semibold text-xs sm:text-sm leading-relaxed ${result.color}`}>
              <h4 className="font-mono font-bold uppercase tracking-wider text-xs mb-2">
                // DIAGNOSIS: {result.title}
              </h4>
              <p className="font-sans font-semibold">
                {result.desc}
              </p>
            </div>

            {/* Answer Feedbacks */}
            <div className="pt-6 space-y-4">
              <h4 className="font-mono font-bold text-xs text-zinc-400 tracking-wider uppercase">
                {t.quiz.readoutTag}
              </h4>
              {questions.map((q, idx) => (
                <div key={idx} className="text-xs space-y-1 bg-zinc-50 border border-zinc-200 p-3 rounded-lg text-left">
                  <div className="font-mono font-bold text-cyber-black">
                    {t.quiz.scenario} {idx + 1}: {q.q}
                  </div>
                  <div className="text-zinc-500 font-semibold pl-3 border-l-2 border-cyber-black mt-2 leading-relaxed">
                    {t.quiz.feedback}: <span>{q.options[answers[idx]].feedback}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 border-t border-zinc-100 pt-6">
              <button
                onClick={onBuyClick}
                className="px-6 py-4 bg-cyber-yellow text-cyber-black rounded-xl border-2 border-cyber-black font-mono font-bold text-xs hover:bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <span>{t.quiz.buyKit}</span>
              </button>
              <button
                onClick={resetQuiz}
                className="px-5 py-4 bg-white text-zinc-700 border border-zinc-200 rounded-xl font-mono font-bold text-xs hover:bg-zinc-50 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{t.quiz.reboot}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Diagnostic Report Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-black/75 backdrop-blur-xs">
          <div className="bg-white border-4 border-cyber-black rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-[8px_8px_0px_0px_rgba(14,14,17,1)] relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-cyber-black p-1 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-cyber-black">
              <div className="bg-cyber-black text-white p-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(251,191,36,1)]">
                <Award className="w-5 h-5 text-cyber-yellow" />
              </div>
              <div>
                <span className="text-[9px] block font-mono font-bold text-zinc-500 uppercase tracking-widest">
                  // DIAGNOSTIC READOUT GENERATED
                </span>
                <h3 className="font-display text-lg sm:text-xl font-black text-cyber-black uppercase">
                  {t.quiz.reportTitle}
                </h3>
              </div>
            </div>

            {/* Score */}
            <div className="text-center mb-6 py-4 bg-zinc-100 border border-zinc-200 rounded-xl font-mono">
              <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-wider">
                {t.quiz.reportScore}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-cyber-black block mt-1">
                {score} / 9
              </span>
            </div>

            {/* Diagnosis Result */}
            <div className={`p-4 border-2 rounded-xl mb-8 text-xs sm:text-sm leading-relaxed ${result.color}`}>
              <h4 className="font-mono font-bold uppercase tracking-wider text-[10px] mb-1.5">
                // {result.title}
              </h4>
              <p className="font-sans font-semibold">
                {result.desc}
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  onBuyClick();
                }}
                className="w-full py-4 bg-cyber-yellow text-cyber-black rounded-xl border-2 border-cyber-black font-mono font-bold text-xs sm:text-sm hover:bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
              >
                <span>{t.quiz.buyKit}</span>
              </button>
              
              <button
                onClick={() => {
                  setShowModal(false);
                  // Scroll to quiz section so they can see inline results
                  const quizSec = document.getElementById("survival-quiz");
                  if (quizSec) {
                    quizSec.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full py-3 bg-white text-zinc-700 border border-zinc-200 hover:border-cyber-black rounded-xl font-mono font-bold text-xs sm:text-sm hover:bg-zinc-50 transition-colors flex items-center justify-center cursor-pointer"
              >
                <span>{t.quiz.viewDetails || "[ VIEW DETAILED READOUT ]"}</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

