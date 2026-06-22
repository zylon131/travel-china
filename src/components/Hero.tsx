import React from "react";
import { Check, ArrowRight, ShieldAlert, Barcode } from "lucide-react";

interface HeroProps {
  onBuyClick: () => void;
  onQuizClick: () => void;
  t: any;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick, onQuizClick, t }) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-paper-bg bg-grid-pattern border-b-2 border-cyber-black text-left">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Bold Typography & Action */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-cyber-black border border-cyber-black text-white px-3 py-1.5 rounded font-mono text-[10px] font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse-fast" />
            <span>{t.hero.tag}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-cyber-black leading-[1.02] tracking-tight">
            {t.hero.title1} <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-cyber-yellow transform -skew-x-6 -rotate-1 rounded-lg" />
              <span className="relative z-10 px-3 py-1 text-cyber-black">{t.hero.title2}</span>
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-zinc-700 max-w-xl leading-relaxed font-semibold">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={onBuyClick}
              className="px-6 py-4 bg-cyber-black text-white rounded-xl font-mono font-bold text-xs hover:bg-zinc-800 shadow-[6px_6px_0px_0px_rgba(251,191,36,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>{t.hero.btnPdf}</span>
              <ArrowRight className="w-4 h-4 text-cyber-yellow" />
            </button>
            <button
              onClick={onQuizClick}
              className="px-6 py-4 bg-white text-cyber-black border-2 border-cyber-black rounded-xl font-mono font-bold text-xs hover:bg-zinc-50 shadow-[6px_6px_0px_0px_rgba(14,14,17,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>{t.hero.btnQuiz}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Boarding Pass Mockups */}
        <div className="lg:col-span-5 flex flex-col space-y-8 relative">
          {/* Background glowing aura */}
          <div className="absolute inset-0 bg-cyber-yellow/10 rounded-3xl blur-3xl -z-10" />

          {/* Boarding Pass 1: The Denied/Unprepared Ticket */}
          <div className="bg-white border-2 border-cyber-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(244,63,94,0.4)] overflow-hidden font-mono text-xs relative transform -rotate-1 hover:rotate-0 transition-transform">
            {/* Ticket Header */}
            <div className="bg-cyber-red/10 border-b-2 border-cyber-black px-4 py-2 flex justify-between items-center text-cyber-red font-bold">
              <span>{t.hero.boardingPass} • {t.hero.unprepared}</span>
              <ShieldAlert className="w-4 h-4" />
            </div>
            
            {/* Ticket Info */}
            <div className="p-4 grid grid-cols-3 gap-2 border-b border-dashed border-zinc-200">
              <div>
                <span className="text-[9px] text-zinc-400 block font-bold">{t.hero.from}</span>
                <span className="text-sm font-bold text-zinc-800">LAX</span>
              </div>
              <div className="text-center flex flex-col justify-center items-center">
                <span className="text-[8px] text-cyber-red font-bold animate-pulse">{t.hero.cancelled}</span>
                <div className="w-full h-[1px] bg-zinc-200 relative my-0.5">
                  <span className="absolute left-1/2 top-1/2 w-1.5 h-1.5 bg-cyber-red rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-zinc-400 block font-bold">{t.hero.to}</span>
                <span className="text-sm font-bold text-zinc-800">PVG</span>
              </div>
            </div>

            {/* Ticket Checklist */}
            <div className="p-4 space-y-2 text-zinc-500 font-semibold text-[10px]">
              <div className="flex items-start space-x-2">
                <span className="text-cyber-red font-bold mt-0.5">✕</span>
                <span>{t.hero.bad1}</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyber-red font-bold mt-0.5">✕</span>
                <span>{t.hero.bad2}</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyber-red font-bold mt-0.5">✕</span>
                <span>{t.hero.bad3}</span>
              </div>
            </div>

            {/* Barcode Footer */}
            <div className="bg-zinc-50 px-4 py-2 border-t-2 border-cyber-black flex justify-between items-center">
              <span className="text-[8px] text-zinc-400 font-bold">{t.hero.seatNone}</span>
              <Barcode className="w-16 h-6 text-zinc-400" />
            </div>
          </div>

          {/* Boarding Pass 2: The Verified/Prepared Ticket */}
          <div className="bg-white border-2 border-cyber-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(14,14,17,1)] overflow-hidden font-mono text-xs relative transform rotate-1 hover:rotate-0 transition-transform">
            {/* Ticket Header */}
            <div className="bg-cyber-green/15 border-b-2 border-cyber-black px-4 py-2.5 flex justify-between items-center text-cyber-green font-bold">
              <span>{t.hero.boardingPass} • {t.hero.prepared}</span>
              <Check className="w-4 h-4 text-cyber-green" />
            </div>
            
            {/* Ticket Info */}
            <div className="p-4 grid grid-cols-3 gap-2 border-b border-dashed border-zinc-200">
              <div>
                <span className="text-[9px] text-zinc-400 block font-bold">{t.hero.from}</span>
                <span className="text-sm font-bold text-zinc-800">LAX</span>
              </div>
              <div className="text-center flex flex-col justify-center items-center">
                <span className="text-[8px] text-cyber-green font-bold">{t.hero.verified}</span>
                <div className="w-full h-[1px] bg-zinc-200 relative my-0.5">
                  <span className="absolute left-1/2 top-1/2 w-1.5 h-1.5 bg-cyber-green rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-zinc-400 block font-bold">{t.hero.to}</span>
                <span className="text-sm font-bold text-zinc-800">PVG</span>
              </div>
            </div>

            {/* Ticket Checklist */}
            <div className="p-4 space-y-2 text-zinc-800 font-bold text-[10px]">
              <div className="flex items-start space-x-2">
                <span className="text-cyber-green mt-0.5">✔</span>
                <span>{t.hero.good1}</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyber-green mt-0.5">✔</span>
                <span>{t.hero.good2}</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyber-green mt-0.5">✔</span>
                <span>{t.hero.good3}</span>
              </div>
            </div>

            {/* Barcode Footer */}
            <div className="bg-zinc-50 px-4 py-2 border-t-2 border-cyber-black flex justify-between items-center">
              <span className="text-[8px] text-zinc-800 font-bold">{t.hero.seatFirst}</span>
              <Barcode className="w-16 h-6 text-cyber-black" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
