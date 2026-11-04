import React, { useState } from "react";
import { BookOpen, Check, HelpCircle, ShieldAlert, FileDown, Lock } from "lucide-react";
import { SITE_CONFIG } from "../config";
import type { Language } from "../translations";

interface ProductPreviewProps {
  t: any;
  lang?: Language;
  onBuyClick?: () => void;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({
  t,
  lang = "en",
  onBuyClick,
}) => {
  const [activePage, setActivePage] = useState<number>(1);
  const isZh = lang === "zh";

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
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">
                1
              </span>
              <span>{t.preview.p2.s1}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">
                2
              </span>
              <span>{t.preview.p2.s2}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">
                3
              </span>
              <span>{t.preview.p2.s3}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">
                4
              </span>
              <span>{t.preview.p2.s4}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyber-black text-white flex items-center justify-center text-[10px] shrink-0">
                5
              </span>
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
    {
      id: 4,
      tabTitle: isZh ? "04: 酒店拒住法条与故宫免预约" : "04: Hotel PSB Law & Palace Hack",
      title: isZh
        ? "第 04 节（新增实操）：酒店拒住应对法条 & 故宫护照现场购票通道"
        : "Section 04 (2026 Field Update): Hotel PSB Law & Forbidden City Walk-Up",
      content: (
        <div className="space-y-4 text-left font-serif text-zinc-800 text-xs sm:text-sm leading-relaxed">
          <p className="font-display font-extrabold text-base sm:text-lg text-cyber-black border-b-2 border-zinc-100 pb-2">
            {isZh
              ? "为什么酒店前台说“不能接待外宾”？真相与一招破解"
              : "Why Receptionists Say 'No Foreigners' — And How to Fix It in 60 Seconds"}
          </p>
          <p>
            {isZh
              ? "2024年5月起，公安部、商务部、文旅部联合发布政令：严禁任何酒店以“无涉外资质”为由拒绝持护照旅客入住。95%的拒住只是因为夜班前台不会在旅馆业治安管理系统中切换“普通护照”选项。"
              : "Since May 2024, China's Ministry of Public Security (公安部) & Ministry of Culture and Tourism strictly prohibit hotels from refusing foreign passports due to 'lack of foreign qualification.' 95% of refusals happen simply because the night clerk doesn't know which dropdown to click in the PSB software."}
          </p>
          <div className="font-mono font-bold text-[10px] sm:text-xs bg-red-50/70 border-2 border-cyber-red/40 p-4 rounded-xl space-y-2 text-zinc-800">
            <div className="flex items-center space-x-2 text-cyber-red">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>
                {isZh
                  ? "完整版 PDF 第 6 页附带【前台电脑录入步骤双语指引卡】："
                  : "INCLUDED ON PAGE 6 OF FULL PDF — RECEPTIONIST PSB INPUT CARD:"}
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-700">
              {isZh
                ? "请进入【旅馆业治安管理系统】→【境外旅客登记】→ 证件选【普通护照】→ 姓名填【英文姓+名】→ 签证选【免签(M) / 旅游(L)】。如拒不办理，现场拨打 12345 政务热线。"
                : "Shows the clerk exact Chinese menu steps: [境外旅客登记] → [普通护照] → [免签(M)/旅游(L)] + the 12345 Municipal Hotline escalation warning."}
            </p>
          </div>
          <blockquote className="border-l-4 border-cyber-green pl-4 py-2 my-3 bg-emerald-50/60 text-xs font-sans font-semibold text-zinc-700 rounded-r">
            {isZh
              ? "【故宫免预约彩蛋】小程序提前7天秒光？持外国护照原件直接走东华门（避开天安门2小时安检），到午门西侧【综合服务窗口】即可现场购买当日门票！"
              : "[Forbidden City Secret] Mini-program sold out 7 days ahead? Walk via Donghuamen Gate (skips the 2-hr Tiananmen security line) to the Meridian Gate [综合服务窗口] with your physical foreign passport for a same-day walk-up ticket!"}
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
      <div className="max-w-5xl mx-auto px-6">
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
                <span className="truncate">{page.tabTitle}</span>
              </button>
            ))}

            {/* Free Printable Lead Magnet Card */}
            <div className="hidden md:block bg-white border-2 border-cyber-black rounded-2xl p-4 mt-4 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] space-y-2.5">
              <span className="inline-block bg-cyber-green text-white font-mono text-[9px] font-extrabold px-2 py-0.5 rounded uppercase">
                {isZh ? "免费福利 • 可直接下载" : "FREE SAMPLE PDF • 2 PAGES"}
              </span>
              <h4 className="font-display font-extrabold text-sm text-cyber-black leading-snug">
                {isZh
                  ? "72小时行前倒计时核对单 PDF"
                  : "Download the 72-Hr Pre-Flight Checklist PDF Free"}
              </h4>
              <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                {isZh
                  ? "先体验我们的高清印刷级排版质量，包含行前72小时至落地后必办清单。"
                  : "Test our print quality first! Grab the 2-page 72-Hour Countdown & Emergency Hotline sheet at zero cost."}
              </p>
              <a
                href={SITE_CONFIG.downloads.checklistPdf.url}
                download={SITE_CONFIG.downloads.checklistPdf.filename}
                className="w-full py-2.5 px-3 bg-paper-bg hover:bg-cyber-yellow text-cyber-black border-2 border-cyber-black rounded-xl font-mono font-bold text-[11px] flex items-center justify-center space-x-1.5 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{isZh ? "免费下载 2页核对单 (.PDF)" : "FREE CHECKLIST (.PDF)"}</span>
              </a>
            </div>
          </div>

          {/* Right Page View Area */}
          <div className="md:col-span-8 bg-white border-2 border-cyber-black rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(14,14,17,1)] relative min-h-[390px] flex flex-col justify-between">
            {/* Page header */}
            <div className="flex items-center justify-between text-[9px] font-mono font-bold text-zinc-400 border-b border-zinc-100 pb-3 mb-6 select-none uppercase">
              <span>{t.preview.header}</span>
              <span className="text-cyber-black bg-cyber-yellow/40 px-2 py-0.5 rounded">
                12-PAGE MASTER PDF EXCERPT
              </span>
            </div>

            {/* Page content */}
            <div className="flex-grow">
              {pages.find((p) => p.id === activePage)?.content}
            </div>

            {/* Page footer + Unlock Full 12-Page Manual CTA */}
            <div className="border-t border-zinc-100 pt-5 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-[9px] font-mono font-bold text-zinc-400 select-none uppercase">
                {getPageFooter()}
              </div>
              {onBuyClick && (
                <button
                  onClick={onBuyClick}
                  className="px-4 py-2 bg-cyber-black text-cyber-yellow rounded-lg font-mono font-bold text-[11px] hover:bg-zinc-800 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Lock className="w-3 h-3" />
                  <span>
                    {isZh
                      ? "解锁完整 12 页指南 + 12 张急救闪卡 ($19)"
                      : "UNLOCK ALL 12 PAGES + 12 FLASHCARDS ($19)"}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
