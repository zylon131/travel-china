import React, { useState, useEffect } from "react";
import {
  X,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Download,
  RefreshCw,
  KeyRound,
  FileText,
  Sparkles,
  Volume2,
  ExternalLink,
  LockOpen,
} from "lucide-react";
import { SITE_CONFIG } from "../config";
import type { Language } from "../translations";

interface CheckoutSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  t: any;
  lang: Language;
  isVipUnlocked: boolean;
  onUnlockVip: () => void;
}

export const CheckoutSimulator: React.FC<CheckoutSimulatorProps> = ({
  isOpen,
  onClose,
  t,
  lang,
  isVipUnlocked,
  onUnlockVip,
}) => {
  const isZh = lang === "zh";
  const [paymentTab, setPaymentTab] = useState<"paypal" | "card" | "code">("paypal");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [vipCodeInput, setVipCodeInput] = useState("");
  const [codeError, setCodeError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">(
    isVipUnlocked ? "success" : "idle"
  );

  useEffect(() => {
    if (isVipUnlocked) {
      setStatus("success");
    }
  }, [isVipUnlocked]);

  if (!isOpen) return null;

  const completeUnlock = () => {
    setStatus("loading");
    setTimeout(() => {
      onUnlockVip();
      setStatus("success");
    }, 1100);
  };

  const handlePayPalCheckout = () => {
    // Open PayPal payment link if user configured a real external link, and also unlock for smooth flow
    if (
      SITE_CONFIG.paypalCheckoutUrl &&
      !SITE_CONFIG.paypalCheckoutUrl.includes("CHINA_SURVIVAL_KIT_19USD")
    ) {
      window.open(SITE_CONFIG.paypalCheckoutUrl, "_blank", "noopener,noreferrer");
    }
    completeUnlock();
  };

  const handleCardPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !cardNumber) {
      return;
    }
    completeUnlock();
  };

  const handleCodeUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = vipCodeInput.trim().toUpperCase();
    if (SITE_CONFIG.vipAccessCodes.includes(cleaned)) {
      setCodeError("");
      completeUnlock();
    } else {
      setCodeError(
        isZh
          ? "激活码无效，测试请使用 CHINA2026"
          : "Invalid code. Use 'CHINA2026' for instant verification."
      );
    }
  };

  const triggerFileDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    const files = [
      SITE_CONFIG.downloads.masterGuidePdf,
      SITE_CONFIG.downloads.flashcardsPdf,
      SITE_CONFIG.downloads.checklistPdf,
    ];
    files.forEach((file, idx) => {
      setTimeout(() => {
        triggerFileDownload(file.url, file.filename);
      }, idx * 450);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border-2 border-cyber-black rounded-3xl shadow-[10px_10px_0px_0px_rgba(14,14,17,1)] overflow-hidden select-none font-mono my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-cyber-black bg-paper-dark">
          <div className="flex items-center space-x-2">
            {status === "success" ? (
              <LockOpen className="w-5 h-5 text-cyber-green" />
            ) : (
              <CreditCard className="w-5 h-5 text-cyber-black" />
            )}
            <span className="font-extrabold text-cyber-black text-xs tracking-wider uppercase">
              {status === "success"
                ? isZh
                  ? "VIP 生存工具箱已解锁 • 永久下载"
                  : "VIP SURVIVAL VAULT UNLOCKED"
                : t.checkout.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-500 hover:bg-zinc-200 hover:text-cyber-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6">
          {status === "idle" && (
            <div className="space-y-5">
              {/* Product Bundle Summary */}
              <div className="bg-paper-bg border-2 border-cyber-black p-4 rounded-2xl text-left shadow-[4px_4px_0px_0px_rgba(14,14,17,1)]">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-cyber-yellow text-cyber-black text-[9px] font-black px-2 py-0.5 rounded border border-cyber-black uppercase mb-1.5">
                      {isZh ? "2026 四合一完整版" : "2026 4-IN-1 COMPLETE KIT"}
                    </span>
                    <h4 className="font-display font-extrabold text-cyber-black text-base sm:text-lg leading-snug">
                      {isZh
                        ? "老外中国旅行数字生存全套装备"
                        : "China Digital Survival Kit (Full Bundle)"}
                    </h4>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <span className="text-[11px] text-zinc-400 line-through block font-bold">
                      $59.00
                    </span>
                    <span className="font-display font-black text-cyber-black text-2xl">
                      $19.00
                    </span>
                  </div>
                </div>

                {/* What's included list */}
                <div className="mt-3 pt-3 border-t border-dashed border-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-sans text-[11px] font-bold text-zinc-700">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green shrink-0" />
                    <span>
                      {isZh
                        ? "12页高清全彩生存指南 PDF"
                        : "12-Page Master Survival Guide PDF"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green shrink-0" />
                    <span>
                      {isZh
                        ? "12张双语急救闪卡 PDF + 语音库"
                        : "12 Bilingual Emergency Cards PDF + Audio"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green shrink-0" />
                    <span>
                      {isZh
                        ? "72小时行前倒计时核对单 PDF"
                        : "72-Hr Pre-Flight Countdown Sheet PDF"}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green shrink-0" />
                    <span>
                      {isZh
                        ? "200元免3%手续费分单计算器"
                        : "200 RMB Fee-Free Splitter & PSB Law"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Method Switcher */}
              <div className="grid grid-cols-3 gap-2 bg-zinc-100 p-1.5 rounded-xl border-2 border-cyber-black text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setPaymentTab("paypal")}
                  className={`py-2 px-2 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    paymentTab === "paypal"
                      ? "bg-[#0070ba] text-white shadow-[2px_2px_0px_0px_rgba(14,14,17,1)]"
                      : "text-zinc-600 hover:text-cyber-black"
                  }`}
                >
                  <span>PayPal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentTab("card")}
                  className={`py-2 px-2 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    paymentTab === "card"
                      ? "bg-cyber-black text-white shadow-[2px_2px_0px_0px_rgba(251,191,36,1)]"
                      : "text-zinc-600 hover:text-cyber-black"
                  }`}
                >
                  <span>{isZh ? "国际信用卡" : "Credit Card"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentTab("code")}
                  className={`py-2 px-2 rounded-lg transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                    paymentTab === "code"
                      ? "bg-cyber-yellow text-cyber-black border border-cyber-black"
                      : "text-zinc-600 hover:text-cyber-black"
                  }`}
                >
                  <KeyRound className="w-3 h-3" />
                  <span>{isZh ? "VIP 兑换码" : "VIP Code"}</span>
                </button>
              </div>

              {/* TAB 1: PAYPAL EXPRESS CHECKOUT */}
              {paymentTab === "paypal" && (
                <div className="space-y-4 text-left">
                  <div className="bg-blue-50/70 border-2 border-[#0070ba]/30 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-extrabold text-xs text-[#003087] uppercase tracking-wider">
                        PayPal Express Instant Delivery
                      </span>
                      <span className="bg-white text-[#0070ba] border border-[#0070ba]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                        Buyer Protection
                      </span>
                    </div>
                    <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                      {isZh
                        ? "支持全球 PayPal 账户及免注册绑定 Visa / Mastercard 直接付款。付款完成后当前页面将立即自动解锁全部 3 份高清 PDF 下载及 12 张真人发音急救闪卡。"
                        : "Pay securely with PayPal Balance, Visa, Mastercard, or Amex. Immediately after authorization, all 3 printable PDFs and all 12 Live Mandarin Audio Flashcards unlock right in this window."}
                    </p>

                    {/* Email for receipt */}
                    <div>
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                        {isZh
                          ? "接收备份下载链接的邮箱 (选填)"
                          : "Email for Backup Receipt (Optional)"}
                      </label>
                      <input
                        type="email"
                        placeholder="traveler@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2.5 border-2 border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:border-cyber-black focus:outline-none bg-white"
                      />
                    </div>

                    {/* Official-styled PayPal Checkout Button */}
                    <button
                      type="button"
                      onClick={handlePayPalCheckout}
                      className="w-full py-4 bg-[#ffc439] hover:bg-[#f4b829] text-[#003087] rounded-xl border-2 border-cyber-black font-sans font-black text-sm shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span className="italic font-black text-base tracking-tight">
                        <span className="text-[#003087]">Pay</span>
                        <span className="text-[#0079c1]">Pal</span>
                      </span>
                      <span>
                        • {isZh ? "立即支付 $19.00 并下载" : "Checkout — $19.00 USD"}
                      </span>
                    </button>

                    {/* Direct PayPal Debit/Credit Guest Button */}
                    <button
                      type="button"
                      onClick={handlePayPalCheckout}
                      className="w-full py-3 bg-[#2c2e2f] hover:bg-black text-white rounded-xl border-2 border-cyber-black font-sans font-bold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <CreditCard className="w-4 h-4 text-cyber-yellow" />
                      <span>
                        {isZh
                          ? "借记卡或信用卡直接支付 (Powered by PayPal)"
                          : "Debit or Credit Card (Powered by PayPal)"}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: DIRECT CARD CHECKOUT */}
              {paymentTab === "card" && (
                <form onSubmit={handleCardPay} className="space-y-3.5 text-left">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">
                      {t.checkout.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 border-2 border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:border-cyber-black focus:outline-none bg-zinc-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">
                      {t.checkout.card}
                    </label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        required
                        placeholder="4242 •••• •••• 4242"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full p-3 border-2 border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:border-cyber-black focus:outline-none bg-zinc-50/50"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          className="p-3 border-2 border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:border-cyber-black focus:outline-none bg-zinc-50/50"
                        />
                        <input
                          type="text"
                          placeholder="CVC"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          className="p-3 border-2 border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:border-cyber-black focus:outline-none bg-zinc-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-cyber-yellow text-cyber-black rounded-xl border-2 border-cyber-black font-mono font-bold text-xs hover:bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>{t.checkout.btnPay}</span>
                  </button>
                </form>
              )}

              {/* TAB 3: VIP CODE UNLOCK */}
              {paymentTab === "code" && (
                <form onSubmit={handleCodeUnlock} className="space-y-3.5 text-left">
                  <div className="bg-amber-50 border-2 border-cyber-black rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-cyber-black uppercase">
                        {isZh ? "输入 PayPal 订单解锁码" : "Enter VIP Order Code"}
                      </span>
                      <button
                        type="button"
                        onClick={() => setVipCodeInput("CHINA2026")}
                        className="text-[10px] font-bold text-cyber-red underline cursor-pointer"
                      >
                        {isZh ? "填入演示码: CHINA2026" : "Auto-fill Demo: CHINA2026"}
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. CHINA2026"
                      value={vipCodeInput}
                      onChange={(e) => setVipCodeInput(e.target.value)}
                      className="w-full p-3 border-2 border-cyber-black rounded-xl text-sm font-black uppercase tracking-widest text-cyber-black bg-white focus:outline-none"
                    />
                    {codeError && (
                      <p className="text-[11px] font-sans font-bold text-cyber-red">
                        {codeError}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-cyber-black text-cyber-yellow rounded-xl border-2 border-cyber-black font-mono font-bold text-xs hover:bg-zinc-800 transition-all cursor-pointer"
                    >
                      {isZh
                        ? "立即验证并解锁全套 PDF 与语音卡"
                        : "VERIFY & UNLOCK ALL 3 PDFS + AUDIO DECK"}
                    </button>
                  </div>
                </form>
              )}

              <div className="flex items-center justify-between text-zinc-400 text-[10px] font-bold pt-1 border-t border-zinc-100">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyber-green" />
                  <span>{t.checkout.terms}</span>
                </div>
                <button
                  type="button"
                  onClick={completeUnlock}
                  className="text-zinc-500 hover:text-cyber-black underline cursor-pointer"
                >
                  {isZh ? "一键预览成交页 →" : "Instant Preview →"}
                </button>
              </div>
            </div>
          )}

          {status === "loading" && (
            <div className="py-16 flex flex-col items-center justify-center space-y-4">
              <RefreshCw className="w-9 h-9 text-cyber-black animate-spin" />
              <div className="text-center">
                <h4 className="font-bold text-cyber-black text-sm">{t.checkout.loading}</h4>
                <p className="text-[11px] text-zinc-400 font-semibold mt-1">
                  {t.checkout.loadingSub}
                </p>
              </div>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-5 text-left">
              {/* Success Banner */}
              <div className="bg-emerald-50 border-2 border-cyber-green rounded-2xl p-4 flex items-start space-x-3.5">
                <div className="bg-cyber-green text-white p-2 rounded-xl shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-display font-extrabold text-base text-cyber-black">
                      {isZh
                        ? "解锁成功！您的 2026 生存包已就绪"
                        : "Access Granted! Your 2026 Survival Kit is Ready"}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-zinc-600 font-semibold mt-0.5 leading-relaxed">
                    {isZh
                      ? "点击下方按钮直接下载 3 份高清矢量 PDF（建议保存至手机 Files/Books 离线随时查看），网页端全部 12 张真人普通话发音闪卡也已同步为您永久解锁！"
                      : "Download your 3 printable vector PDFs below for 100% offline phone access. All 12 Live Mandarin Audio Flashcards on this site are also now unlocked for you!"}
                  </p>
                </div>
              </div>

              {/* Download All Button */}
              <button
                type="button"
                onClick={handleDownloadAll}
                className="w-full py-4 bg-cyber-green text-white rounded-xl border-2 border-cyber-black font-mono font-bold text-xs hover:bg-emerald-600 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyber-yellow" />
                <span>
                  {isZh
                    ? "一键下载全部 3 份高清 PDF 文件 (.PDF x3)"
                    : "DOWNLOAD ALL 3 VECTOR PDFS AT ONCE (.PDF x3)"}
                </span>
              </button>

              {/* Individual PDF Download Cards */}
              <div className="space-y-2.5">
                {[
                  {
                    badge: "PDF #1 • 12 PAGES",
                    ...SITE_CONFIG.downloads.masterGuidePdf,
                    accent: "bg-cyber-yellow text-cyber-black",
                  },
                  {
                    badge: "PDF #2 • 12 FLASHCARDS",
                    ...SITE_CONFIG.downloads.flashcardsPdf,
                    accent: "bg-cyber-red text-white",
                  },
                  {
                    badge: "PDF #3 • 72-HR CHECKLIST",
                    ...SITE_CONFIG.downloads.checklistPdf,
                    accent: "bg-cyber-black text-cyber-yellow",
                  },
                ].map((item) => (
                  <div
                    key={item.filename}
                    className="bg-paper-bg border-2 border-cyber-black rounded-xl p-3.5 flex items-center justify-between gap-3 hover:bg-amber-50/40 transition-colors"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-[9px] font-black px-2 py-0.5 rounded border border-cyber-black ${item.accent}`}
                        >
                          {item.badge}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-400">
                          {item.size}
                        </span>
                      </div>
                      <h5 className="font-sans font-extrabold text-xs sm:text-sm text-cyber-black truncate">
                        {item.title}
                      </h5>
                      <p className="font-sans text-[11px] text-zinc-500 truncate">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open PDF in Browser"
                        className="p-2.5 bg-white text-cyber-black border-2 border-cyber-black rounded-lg hover:bg-zinc-100 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={item.url}
                        download={item.filename}
                        className="px-3 py-2.5 bg-cyber-black text-white border-2 border-cyber-black rounded-lg font-mono font-bold text-[11px] hover:bg-zinc-800 transition-colors flex items-center space-x-1.5"
                      >
                        <FileText className="w-3.5 h-3.5 text-cyber-yellow" />
                        <span>PDF</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Jump to Unlocked Audio Flashcards */}
              <div className="bg-zinc-900 text-white rounded-xl p-3.5 border-2 border-cyber-black flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <Volume2 className="w-5 h-5 text-cyber-yellow shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <span>
                        {isZh
                          ? "12 张真人语音急救闪卡已全部解锁"
                          : "All 12 Live Mandarin Audio Cards Unlocked"}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-cyber-yellow" />
                    </div>
                    <p className="text-[10px] text-zinc-400 font-sans">
                      {isZh
                        ? "包含酒店公安部报备法条、花生过敏、200元分单语音等"
                        : "Includes Hotel PSB Law Card, Peanut Allergy, 200 RMB Split & more"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    const el = document.getElementById("interactive-toolkit");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-3 py-2 bg-cyber-yellow text-cyber-black rounded-lg font-mono font-bold text-[10px] shrink-0 cursor-pointer hover:bg-yellow-300"
                >
                  {isZh ? "立即使用 →" : "OPEN DECK →"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
