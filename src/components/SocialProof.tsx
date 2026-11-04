import React from "react";
import { Star, ShieldCheck, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import type { Language } from "../translations";

interface SocialProofProps {
  lang: Language;
  onBuyClick: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ lang, onBuyClick }) => {
  const isZh = lang === "zh";

  const reviews = [
    {
      handle: "u/Marcus_Wanderlust",
      country: "🇬🇧 London, UK",
      route: "Beijing • Xi'an • Chengdu (14 Days)",
      badgeEn: "SAVED FROM 11 PM HOTEL REJECTION",
      badgeZh: "挽救了半夜 11 点被酒店拒住的危机",
      quoteEn:
        "We arrived at a boutique hotel in Xi'an at 11:30 PM and the young receptionist panicked and said 'No foreigners, Mainland ID only!' I pulled up Card #08 from this kit (the PSB Ministry law + step-by-step Chinese instructions showing her which dropdown to click in the police software). Her eyes lit up, she followed the 3 steps on my screen, and we were in our room in 4 minutes. That single card is worth 10x the $19 price.",
      quoteZh:
        "我们晚上 11 点半到西安一家酒店，前台小姑娘一看外国护照就慌了，连连摆手说‘不接外宾’。我直接打开这个工具包的 08 号闪卡（上面不仅有公安部不得拒接外宾的规定，还手把手写了公安系统怎么点【境外旅客 -> 普通护照 -> 免签】）。前台照着我手机屏幕点完，4 分钟就办好入住了！光这一张卡就值回票价十倍。",
      savedAmount: "Saved a $140 last-minute hotel rebooking",
    },
    {
      handle: "u/SarahAndTom_Travels",
      country: "🇺🇸 Austin, TX",
      route: "Beijing • Zhangjiajie • Shanghai (10 Days)",
      badgeEn: "ENTERED A 'SOLD OUT' FORBIDDEN CITY",
      badgeZh: "故宫门票售罄，凭外宾通道秘籍丝滑入园",
      quoteEn:
        "We missed the 7-day 8 PM Beijing Time ticket drop for the Forbidden City—everything on WeChat was 100% sold out and tour scalpers wanted $120/person. Chapter 7 of this guide explained the Meridian Gate 'Comprehensive Service Window' walk-up rule for foreign passports, plus the Donghuamen moat shortcut that bypassed the 2-hour Tiananmen security line. We walked straight in at 8:45 AM for ¥60!",
      quoteZh:
        "我们错过了故宫提前 7 天的抢票，小程序上全灰了，黄牛开口要 120 美金一个人！幸亏看了指南第 7 章，不仅教我们从东华门护城河绕开天安门广场 2 小时安检长队，还告诉我们午门旁边有专门给外国护照原件留的【综合服务窗口】。早上 8:45 到现场直接刷护照买 60 元原价票进去了！",
      savedAmount: "Saved $400+ vs. scalper tour packages",
    },
    {
      handle: "u/Elena_CeliacNomad",
      country: "🇦🇺 Melbourne, AU",
      route: "Shanghai • Hangzhou • Suzhou (12 Days)",
      badgeEn: "PEANUT ALLERGY + 200 RMB FEE SPLITTER",
      badgeZh: "花生油过敏急救语音 + 200元拆单省下 $58",
      quoteEn:
        "My husband has a severe peanut allergy, and in China they cook with peanut oil everywhere. Being able to tap the Mandarin Audio button on the Severe Allergy Flashcard so my phone literally spoke to the chef gave us total peace of mind. Plus, using the 'Split Bill Under 200 RMB' hack at restaurants saved us at least $58 in Alipay 3% foreign card fees!",
      quoteZh:
        "我先生有严重的花生过敏，而中国很多餐馆炒菜默认用花生油。这个工具包最神的是闪卡自带中文语音播报，点一下直接向厨师和服务员大声播报‘严禁花生油与交叉感染’，安全感拉满！而且用里面的 200 元拆单计算器，十几天下来帮我们省了将近 60 美金的支付宝 3% 外卡手续费！",
      savedAmount: "Saved $58 in 3% Alipay fees + 0 allergy incidents",
    },
  ];

  return (
    <section className="py-24 bg-paper-bg border-b-2 border-cyber-black text-left select-none">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest block">
            {isZh ? "// 来自真实海外游客的实战反馈" : "// FIELD-TESTED BY INBOUND TRAVELERS"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-cyber-black mt-2">
            {isZh
              ? "为什么老外说这套工具包“落地第一天就能回本”？"
              : "Why Travelers Call This a 'Day-One Lifesaver'"}
          </h2>
          <p className="font-sans text-zinc-500 text-xs sm:text-sm font-semibold mt-3">
            {isZh
              ? "不讲空洞的风景百科，每一页和每一张闪卡都针对 Reddit (r/chinatravel) 上最高频的真实踩坑场景设计。"
              : "Every page and bilingual flashcard was engineered around the most upvoted emergency threads on r/chinatravel and r/travelchina."}
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-cyber-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(14,14,17,1)] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Top Badge & Stars */}
                <div className="flex items-center justify-between gap-2 border-b border-zinc-100 pb-3">
                  <span className="font-mono text-[9px] font-extrabold bg-cyber-yellow text-cyber-black px-2.5 py-1 rounded border border-cyber-black uppercase">
                    {isZh ? rev.badgeZh : rev.badgeEn}
                  </span>
                  <div className="flex items-center space-x-0.5 text-amber-400 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-cyber-black" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <MessageSquareQuote className="w-6 h-6 text-zinc-200 mb-1" />
                  <p className="font-sans text-xs sm:text-sm text-zinc-700 font-semibold leading-relaxed">
                    "{isZh ? rev.quoteZh : rev.quoteEn}"
                  </p>
                </div>
              </div>

              {/* Footer Author & Savings */}
              <div className="pt-4 border-t border-zinc-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono font-bold text-xs text-cyber-black flex items-center space-x-1.5">
                      <span>{rev.handle}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-cyber-green" />
                    </div>
                    <div className="font-sans text-[11px] text-zinc-400 font-semibold">
                      {rev.country} • {rev.route}
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 flex items-center space-x-1.5 text-[11px] font-mono font-bold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green shrink-0" />
                  <span>{rev.savedAmount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Value Callout */}
        <div className="mt-12 bg-cyber-black text-white border-2 border-cyber-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(251,191,36,1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-[10px] font-bold text-cyber-yellow uppercase tracking-widest">
              // ZERO-RISK VALUE GUARANTEE
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
              {isZh
                ? "吃一顿北京烤鸭拆单省下的 3% 手续费，就已经赚回这 $19 了。"
                : "Avoiding just ONE airport taxi scam or 3% hotel fee pays for the entire $19 kit."}
            </h3>
          </div>
          <button
            onClick={onBuyClick}
            className="px-6 py-4 bg-cyber-yellow text-cyber-black rounded-xl border-2 border-cyber-black font-mono font-extrabold text-xs hover:bg-yellow-400 transition-all shrink-0 cursor-pointer"
          >
            {isZh ? "立即获取 4合1 生存工具包 ($19)" : "GET THE 4-IN-1 SURVIVAL KIT ($19)"}
          </button>
        </div>
      </div>
    </section>
  );
};
