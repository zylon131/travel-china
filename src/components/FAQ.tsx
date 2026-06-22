import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQProps {
  t: any;
}

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: t.faq.f1.q,
      a: t.faq.f1.a,
    },
    {
      q: t.faq.f2.q,
      a: t.faq.f2.a,
    },
    {
      q: t.faq.f3.q,
      a: t.faq.f3.a,
    },
    {
      q: t.faq.f4.q,
      a: t.faq.f4.a,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-paper-bg border-b-2 border-cyber-black text-left">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">
            {t.faq.tag}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-black mt-2">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border-2 border-cyber-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 flex items-center justify-between text-left font-mono font-bold text-xs sm:text-sm text-cyber-black focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <span className={`font-mono text-xs ${isOpen ? "text-cyber-red" : "text-zinc-400"}`}>
                      [?]
                    </span>
                    <span>{faq.q}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-cyber-black shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-cyber-black shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm font-semibold text-zinc-500 border-t-2 border-dashed border-zinc-100 leading-relaxed font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
