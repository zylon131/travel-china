import React, { useState } from "react";
import { BookOpen, Check, HelpCircle } from "lucide-react";

interface ProductPreviewProps {
  t: any;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({ t }) => {
  const [activePage, setActivePage] = useState<number>(1);

  const pages = [
    {
      id: 1,
      tabTitle: t.preview.t1,
      title: t.preview.p1.title,
      content: (
        <div className="space-y-4 text-left font-serif text-zinc-800 text-xs sm:text-sm leading-relaxed">
          <p className="font-display font-extrabold text-base sm:text-lg text-cyber-black border-b-2 border-zinc-100 pb-2">
            {t.preview.p1.title}
          </p>
          <p>{t.preview.p1.text1}</p>
          <blockquote className="border-l-4 border-cyber-yellow pl-4 py-2 my-4 bg-yellow-50/50 text-xs font-sans font-semibold text-zinc-700 rounded-r">
            {t.preview.p1.warn}
          </blockquote>
          <p>{t.preview.p1.text2}</p>
        </div>
      ),
    },
    {
      id: 2,
      tabTitle: t.preview.t2,
      title: t.preview.p2.title,
      content: (
        <div className="space-y-4 text-left font-serif text-zinc-800 text-xs sm:text-sm leading-relaxed">
          <p className="font-display font-extrabold text-base sm:text-lg text-cyber-black border-b-2 border-zinc-100 pb-2">
            {t.preview.p2.title}
          </p>
          <p>{t.preview.p2.text1}</p>
          <div className="font-mono font-bold text-[10px] sm:text-xs bg-zinc-50 border-2 border-zinc-200 p-4 rounded-xl space-y-2 text-zinc-700 shadow-sm">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">1</span>
              <span>{t.preview.p2.s1}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">2</span>
              <span>{t.preview.p2.s2}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">3</span>
              <span>{t.preview.p2.s3}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">4</span>
              <span>{t.preview.p2.s4}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">5</span>
              <span>{t.preview.p2.s5}</span>
            </div>
          </div>
          <p>{t.preview.p2.text2}</p>
        </div>
      ),
    },
    {
      id: 3,
      tabTitle: t.preview.t3,
      title: t.preview.p3.title,
      content: (
        <div className="space-y-4 text-left font-serif text-zinc-800 text-xs sm:text-sm leading-relaxed">
          <p className="font-display font-extrabold text-base sm:text-lg text-cyber-black border-b-2 border-zinc-100 pb-2">
            {t.preview.p3.title}
          </p>
          <p>{t.preview.p3.text1}</p>
          <div className="space-y-3 font-sans text-xs sm:text-sm">
            <div className="flex items-start space-x-2.5">
              <Check className="w-4.5 h-4.5 text-cyber-green shrink-0 mt-0.5" />
              <div>{t.preview.p3.check1}</div>
            </div>
            <div className="flex items-start space-x-2.5">
              <HelpCircle className="w-4.5 h-4.5 text-cyber-yellow shrink-0 mt-0.5" />
              <div>{t.preview.p3.check2}</div>
            </div>
          </div>
          <blockquote className="border-l-4 border-cyber-black pl-4 py-2 my-4 bg-zinc-100 text-xs font-sans font-semibold text-zinc-700 rounded-r">
            {t.preview.p3.tip}
          </blockquote>
        </div>
      ),
    },
  ];

  const getPageFooter = () => {
    return t.preview.footer.replace("{num}", activePage.toString());
  };

  return (
    <section id="preview" className="py-24 bg-paper-dark border-b-2 border-cyber-black text-left">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">
            {t.preview.tag}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-black mt-2">
            {t.preview.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left/Top Navigation Tabs */}
          <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible space-x-3 md:space-x-0 md:space-y-3 pb-4 md:pb-0 border-b md:border-b-0 border-zinc-200">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setActivePage(page.id)}
                className={`px-4 py-3 rounded-xl border-2 text-left font-mono font-bold text-xs whitespace-nowrap transition-all flex items-center space-x-2 shrink-0 cursor-pointer ${
                  activePage === page.id
                    ? "bg-cyber-black text-white border-cyber-black shadow-[4px_4px_0px_0px_rgba(251,191,36,1)]"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-cyber-black"
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>{page.tabTitle}</span>
              </button>
            ))}
          </div>

          {/* Right Page View Area */}
          <div className="md:col-span-8 bg-white border-2 border-cyber-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(14,14,17,1)] relative min-h-[360px] flex flex-col justify-between">
            {/* Page header */}
            <div className="text-[9px] font-mono font-bold text-zinc-400 border-b border-zinc-100 pb-3 mb-6 select-none uppercase">
              {t.preview.header}
            </div>

            {/* Page content */}
            <div className="flex-grow">
              {pages.find((p) => p.id === activePage)?.content}
            </div>

            {/* Page footer */}
            <div className="text-[9px] font-mono font-bold text-zinc-400 text-right border-t border-zinc-100 pt-4 mt-8 select-none uppercase">
              {getPageFooter()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
