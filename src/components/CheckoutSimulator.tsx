import React, { useState } from "react";
import { X, CreditCard, ShieldCheck, CheckCircle2, Download, RefreshCw } from "lucide-react";

interface CheckoutSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  t: any;
}

export const CheckoutSimulator: React.FC<CheckoutSimulatorProps> = ({ isOpen, onClose, t }) => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !cardNumber) {
      alert("Please fill in email and card number.");
      return;
    }
    setStatus("loading");
    // Simulate API delay
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  const handleDownload = () => {
    // Generate a simple, text-based survival kit download representing our guide
    const fileContent = `========================================================
THE FOREIGNER'S SURVIVAL GUIDE TO CHINA TRAVEL (STAGE 1 MVP)
========================================================
Thank you for purchasing! This is your Digital Survival Cheat Sheet.

1. PAYMENTS (链接外卡支付)
- Link international Visa/Mastercard directly to Alipay (支付宝) and WeChat Pay (微信支付).
- Scan "Merchant Codes" to pay using credit cards; keep a small amount of cash for P2P codes.

2. NAVIGATION & TRANSIT (地图与交通)
- Download DiDi Chuxing (English App) for ride-hailing. Link Alipay.
- Use Apple Maps or download Amap (高德地图) and translate addresses to Chinese characters before copy-pasting.

3. WEB ACCESS & VPN (网络与网络防火墙)
- Buy a roaming eSIM (e.g. Airalo, Nomad) before landing. Roaming traffic bypasses the Great Firewall!
- If buying a local Chinese SIM, pre-install two active VPNs (e.g. Astrill, LetsVPN).

4. BULLET TRAINS & HOTELS (高铁与住宿)
- Book bullet train tickets via Trip.com or the official 12306 English app (requires passport verify).
- Verify on Ctrip/Trip.com if your hotel says "Hosts Foreign Guests" (外宾) before checking in.

========================================================
Safe Travels! Powered by PM阿强's Vibe Coding
========================================================`;

    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "China_Travel_Survival_Guide.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSuccessSubtext = () => {
    return t.checkout.successSub.replace("{email}", email);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white border-2 border-cyber-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(14,14,17,1)] overflow-hidden select-none font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-cyber-black bg-paper-dark">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-cyber-black" />
            <span className="font-extrabold text-cyber-black text-xs tracking-wider uppercase">
              {t.checkout.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-cyber-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6">
          {status === "idle" && (
            <form onSubmit={handlePay} className="space-y-4">
              {/* Product Info */}
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex justify-between items-center text-left">
                <div>
                  <h4 className="font-sans font-extrabold text-zinc-800 text-xs sm:text-sm">
                    China Digital Survival Kit
                  </h4>
                  <p className="font-sans text-[10px] text-zinc-400 font-semibold mt-0.5">
                    {t.checkout.desc}
                  </p>
                </div>
                <span className="font-black text-cyber-black text-sm sm:text-base">$19.00</span>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
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

              {/* Card Details */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {t.checkout.card}
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="4242 4242 4242 4242"
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

              <div className="flex items-center space-x-1.5 text-zinc-400 justify-center text-[9px] font-bold py-1">
                <ShieldCheck className="w-4 h-4 text-cyber-green" />
                <span>{t.checkout.terms}</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-cyber-yellow text-cyber-black rounded-xl border-2 border-cyber-black font-mono font-bold text-xs hover:bg-yellow-400 shadow-[2px_2px_0px_0px_rgba(14,14,17,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{t.checkout.btnPay}</span>
              </button>
            </form>
          )}

          {status === "loading" && (
            <div className="py-16 flex flex-col items-center justify-center space-y-4">
              <RefreshCw className="w-8 h-8 text-cyber-black animate-spin" />
              <div className="text-center">
                <h4 className="font-bold text-cyber-black text-sm">{t.checkout.loading}</h4>
                <p className="text-[10px] text-zinc-400 font-semibold mt-1">
                  {t.checkout.loadingSub}
                </p>
              </div>
            </div>
          )}

          {status === "success" && (
            <div className="py-8 flex flex-col items-center justify-center space-y-6 text-center">
              <div className="bg-emerald-50 text-cyber-green p-3 rounded-full border-2 border-cyber-green/20">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              
              <div>
                <h4 className="font-display font-extrabold text-lg text-cyber-black">
                  {t.checkout.success}
                </h4>
                <p className="font-sans text-[11px] text-zinc-400 font-semibold max-w-xs mx-auto mt-1 leading-relaxed">
                  {getSuccessSubtext()}
                </p>
              </div>

              <button
                onClick={handleDownload}
                className="w-full py-4 bg-cyber-green text-white rounded-xl border-2 border-cyber-black font-mono font-bold text-xs hover:bg-emerald-600 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.3)] flex items-center justify-center space-x-2 cursor-pointer animate-pulse"
              >
                <Download className="w-4 h-4 text-cyber-yellow" />
                <span>{t.checkout.btnDownload}</span>
              </button>

              <button
                onClick={onClose}
                className="text-xs text-zinc-500 font-bold hover:underline cursor-pointer"
              >
                {t.checkout.btnClose}
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
