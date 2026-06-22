import React from "react";
import { CreditCard, Map, ShieldAlert, Train } from "lucide-react";

interface PainPointsProps {
  t: any;
}

export const PainPoints: React.FC<PainPointsProps> = ({ t }) => {
  const points = [
    {
      num: "01",
      icon: <CreditCard className="w-5 h-5 text-cyber-black" />,
      title: t.pain.p1.title,
      desc: t.pain.p1.desc,
    },
    {
      num: "02",
      icon: <Map className="w-5 h-5 text-cyber-black" />,
      title: t.pain.p2.title,
      desc: t.pain.p2.desc,
    },
    {
      num: "03",
      icon: <ShieldAlert className="w-5 h-5 text-cyber-black" />,
      title: t.pain.p3.title,
      desc: t.pain.p3.desc,
    },
    {
      num: "04",
      icon: <Train className="w-5 h-5 text-cyber-black" />,
      title: t.pain.p4.title,
      desc: t.pain.p4.desc,
    },
  ];

  return (
    <section id="pain-points" className="py-24 bg-paper-bg border-b-2 border-cyber-black text-left">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">
              {t.pain.tag}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-cyber-black tracking-tight">
              {t.pain.title}
            </h2>
          </div>
          <p className="font-sans text-sm font-semibold text-zinc-500 max-w-sm leading-relaxed">
            {t.pain.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white border-2 border-cyber-black rounded-2xl p-8 relative shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              {/* Monospace numeral stamp in the corner */}
              <div className="absolute right-6 top-6 font-mono font-black text-4xl text-zinc-200/80">
                {point.num}
              </div>

              {/* Icon Container */}
              <div className="bg-paper-dark border border-cyber-black w-10 h-10 rounded-lg flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(14,14,17,1)]">
                {point.icon}
              </div>

              <h3 className="font-mono font-extrabold text-cyber-black text-xs tracking-wider mb-3">
                {point.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm font-semibold text-zinc-500 leading-relaxed pr-8">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
