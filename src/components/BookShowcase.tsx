import React from "react";
import { Check, Download, Landmark, Globe, Train, MessageCircle, Barcode } from "lucide-react";

interface BookShowcaseProps {
  onBuyClick: () => void;
  t: any;
}

export const BookShowcase: React.FC<BookShowcaseProps> = ({ onBuyClick, t }) => {
  const chapters = [
    {
      icon: <Landmark className="w-5 h-5 text-cyber-black" />,
      title: t.showcase.c1.title,
      desc: t.showcase.c1.desc,
    },
    {
      icon: <Train className="w-5 h-5 text-cyber-black" />,
      title: t.showcase.c2.title,
      desc: t.showcase.c2.desc,
    },
    {
      icon: <Globe className="w-5 h-5 text-cyber-black" />,
      title: t.showcase.c3.title,
      desc: t.showcase.c3.desc,
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-cyber-black" />,
      title: t.showcase.c4.title,
      desc: t.showcase.c4.desc,
    },
  ];

  return (
    <section id="book-showcase" className="py-24 bg-paper-bg border-b-2 border-cyber-black text-left select-none">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Premium E-Book Cover CSS Mockup */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="relative group perspective-1000">
            {/* 3D Book Container */}
            <div className="w-[280px] h-[380px] bg-cyber-black rounded-r-2xl shadow-2xl border-l-[10px] border-zinc-950 flex flex-col justify-between p-6 text-white relative transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500 ease-out">
              
              {/* Cover Header */}
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <span className="text-[9px] font-mono tracking-widest text-cyber-yellow font-extrabold">
                  RELEASE v1.0.0
                </span>
                <span className="text-[8px] bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded font-mono font-bold text-zinc-300">
                  SECURE PDF
                </span>
              </div>

              {/* Title & Cover graphics */}
              <div className="my-auto space-y-3.5">
                <span className="text-[10px] font-mono font-bold text-cyber-green uppercase tracking-widest block">
                  // SURVIVAL BLUEPRINT
                </span>
                <h3 className="font-display text-3xl font-extrabold leading-none tracking-tight text-white">
                  The Foreigner's <br />
                  <span className="text-cyber-yellow">Survival Guide</span> <br />
                  to China Travel
                </h3>
                <div className="h-1 w-12 bg-cyber-yellow rounded" />
              </div>

              {/* Bottom Metadata */}
              <div className="flex items-end justify-between border-t border-zinc-800 pt-4">
                <div>
                  <span className="text-[8px] block text-zinc-500 font-mono font-bold uppercase tracking-wider">
                    BY PM阿强
                  </span>
                  <span className="text-[8px] text-zinc-400 font-mono font-semibold">
                    AI Landing Coach
                  </span>
                </div>
                <Barcode className="w-12 h-6 text-white/40" />
              </div>

              {/* Book Spine Highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-r from-zinc-950 to-transparent opacity-40 rounded-l" />
            </div>

            {/* Back pages mockup shadow */}
            <div className="absolute top-1.5 left-[275px] bottom-1.5 w-2 bg-zinc-200 rounded-r shadow-md -z-10 transform rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500" />
            <div className="absolute top-3 left-[279px] bottom-3 w-2 bg-zinc-300 rounded-r shadow-sm -z-20 transform rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500" />
          </div>
        </div>

        {/* Right Column: Book Details */}
        <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">
              {t.showcase.tag}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-black tracking-tight">
              {t.showcase.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm font-semibold text-zinc-500 leading-relaxed mt-4">
              {t.showcase.desc}
            </p>
          </div>

          {/* Chapters List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {chapters.map((ch, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex items-center space-x-2.5">
                  <div className="bg-paper-dark border border-cyber-black p-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(14,14,17,1)]">
                    {ch.icon}
                  </div>
                  <h4 className="font-mono font-bold text-cyber-black text-[11px] sm:text-xs">
                    {ch.title}
                  </h4>
                </div>
                <p className="font-sans text-zinc-500 text-[11px] sm:text-xs font-semibold leading-relaxed pl-1">
                  {ch.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Included Features */}
          <div className="bg-white border-2 border-cyber-black p-6 rounded-2xl space-y-4 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)]">
            <h4 className="font-mono font-bold text-xs text-cyber-black tracking-wide uppercase">
              {t.showcase.assetsHeader}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-zinc-700">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-cyber-green shrink-0" />
                <span>{t.showcase.asset1}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-cyber-green shrink-0" />
                <span>{t.showcase.asset2}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-cyber-green shrink-0" />
                <span>{t.showcase.asset3}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-cyber-green shrink-0" />
                <span>{t.showcase.asset4}</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <button
              onClick={onBuyClick}
              className="px-6 py-4 bg-cyber-black text-white rounded-xl font-mono font-bold text-xs hover:bg-zinc-800 shadow-[6px_6px_0px_0px_rgba(251,191,36,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyber-yellow" />
              <span>{t.showcase.buyBtn}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
