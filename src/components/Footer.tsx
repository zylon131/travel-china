import React from "react";
import { Compass, Barcode } from "lucide-react";

interface FooterProps {
  t: any;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-cyber-black text-zinc-500 py-16 font-mono text-[10px] sm:text-xs text-left border-t-4 border-cyber-yellow select-none">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Brand and Slogan */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white">
            <Compass className="w-5 h-5 text-cyber-yellow" />
            <span className="font-display font-extrabold text-sm tracking-tight">
              ChinaDigitalSurvival
            </span>
          </div>
          <p className="max-w-sm font-sans font-semibold leading-relaxed text-zinc-400">
            {t.footer.slogan}
          </p>
          <p className="text-[9px] text-zinc-650 font-semibold leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </div>

        {/* Links and signature */}
        <div className="flex flex-col md:items-end space-y-6">
          <div className="flex space-x-6 font-bold text-zinc-300 uppercase tracking-wider font-sans text-[10px] sm:text-[11px]">
            <a href="#pain-points" className="hover:text-cyber-yellow transition-colors">[{t.nav.whyNeed.toUpperCase()}]</a>
            <a href="#survival-quiz" className="hover:text-cyber-yellow transition-colors">[{t.nav.diagnose.toUpperCase()}]</a>
            <a href="#preview" className="hover:text-cyber-yellow transition-colors">[{t.nav.trial.toUpperCase()}]</a>
            <a href="#faq" className="hover:text-cyber-yellow transition-colors">[{t.nav.faq.toUpperCase()}]</a>
          </div>
          
          <div className="pt-6 border-t border-zinc-900 w-full md:w-auto text-left md:text-right space-y-2 flex flex-col md:items-end">
            <p className="text-zinc-450 font-sans font-bold text-[11px] sm:text-xs text-zinc-400">
              {t.footer.copyright}
            </p>
            <p className="text-zinc-600 font-semibold text-[10px] sm:text-xs">
              {t.footer.craft}
            </p>
            <Barcode className="w-20 h-6 text-zinc-800" />
          </div>
        </div>

      </div>
    </footer>
  );
};
