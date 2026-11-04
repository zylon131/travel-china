import React, { useState } from "react";
import { Compass, FileText, Globe, Sparkles, LockOpen } from "lucide-react";
import { LANGUAGES } from "../translations";
import type { Language } from "../translations";

interface HeaderProps {
  onBuyClick: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
  t: any;
  isVipUnlocked?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onBuyClick,
  lang,
  onLangChange,
  t,
  isVipUnlocked = false,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const activeLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  const isZh = lang === "zh";

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-cyber-black bg-paper-bg/95 backdrop-blur-sm select-none">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand logo */}
        <a href="#" className="flex items-center space-x-3">
          <div className="bg-cyber-black text-white p-2 rounded-md flex items-center justify-center border border-cyber-black shadow-[2px_2px_0px_0px_rgba(251,191,36,1)]">
            <Compass className="w-5 h-5 text-cyber-yellow animate-spin-slow" />
          </div>
          <div className="text-left">
            <span className="font-display font-extrabold text-cyber-black text-lg tracking-tight block leading-none">
              China Survival
            </span>
            <span className="text-[9px] block text-zinc-500 font-mono font-bold tracking-wider mt-1 uppercase">
              • 2026_4IN1_KIT_V2.4
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 text-[11px] font-mono font-bold text-zinc-700 tracking-wider">
          <a
            href="#pain-points"
            className="hover:text-cyber-black transition-colors relative group py-1"
          >
            <span>[ {t.nav.whyNeed.toUpperCase()} ]</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-red transition-all group-hover:w-full" />
          </a>
          <a
            href="#interactive-toolkit"
            className="px-2.5 py-1 bg-cyber-yellow/35 border border-cyber-black rounded-md text-cyber-black hover:bg-cyber-yellow transition-colors flex items-center space-x-1"
          >
            <Sparkles className="w-3 h-3 text-cyber-red" />
            <span>
              {isZh ? "互动工具箱 (语音闪卡/分单器)" : "LIVE TOOLKIT (AUDIO + 200¥ HACK)"}
            </span>
          </a>
          <a
            href="#survival-quiz"
            className="hover:text-cyber-black transition-colors relative group py-1"
          >
            <span>[ {t.nav.diagnose.toUpperCase()} ]</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-red transition-all group-hover:w-full" />
          </a>
          <a
            href="#preview"
            className="hover:text-cyber-black transition-colors relative group py-1"
          >
            <span>[ {t.nav.trial.toUpperCase()} ]</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-red transition-all group-hover:w-full" />
          </a>
          <a
            href="#faq"
            className="hover:text-cyber-black transition-colors relative group py-1"
          >
            <span>[ {t.nav.faq.toUpperCase()} ]</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-red transition-all group-hover:w-full" />
          </a>
        </nav>

        {/* Language switcher & CTA */}
        <div className="flex items-center space-x-3 relative">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-3 py-2 bg-white border-2 border-cyber-black rounded-lg font-mono font-bold text-xs flex items-center space-x-1.5 cursor-pointer shadow-[2px_2px_0px_0px_rgba(14,14,17,1)] hover:shadow-none transition-all active:translate-y-0.5"
            >
              <Globe className="w-3.5 h-3.5 text-zinc-500" />
              <span>{activeLang.flag}</span>
              <span className="uppercase text-[10px] text-zinc-600 hidden sm:inline">
                {activeLang.code}
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border-2 border-cyber-black rounded-xl shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] py-1.5 z-50 text-left font-mono text-xs">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onLangChange(l.code);
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-paper-dark font-bold flex items-center space-x-2.5 cursor-pointer ${
                      lang === l.code ? "text-cyber-red bg-paper-dark" : "text-zinc-700"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA / VIP Vault Button */}
          <button
            onClick={onBuyClick}
            className={`px-4 py-2.5 rounded-lg border-2 border-cyber-black font-mono font-bold text-xs active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] hover:shadow-none transition-all flex items-center space-x-2 cursor-pointer ${
              isVipUnlocked
                ? "bg-cyber-green text-white hover:bg-emerald-600"
                : "bg-cyber-yellow text-cyber-black hover:bg-yellow-400"
            }`}
          >
            {isVipUnlocked ? (
              <>
                <LockOpen className="w-4 h-4 text-cyber-yellow" />
                <span className="hidden sm:inline">
                  {isZh ? "已解锁：下载 3 份 PDF" : "VIP UNLOCKED (3 PDFS)"}
                </span>
                <span className="inline sm:hidden">VIP PDFS</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 text-cyber-black" />
                <span className="hidden sm:inline">{t.nav.buyBtn}</span>
                <span className="inline sm:hidden">GET KIT ($19)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
