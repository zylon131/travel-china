import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { InteractiveToolkit } from "./components/InteractiveToolkit";
import { InteractiveQuiz } from "./components/InteractiveQuiz";
import { BookShowcase } from "./components/BookShowcase";
import { ProductPreview } from "./components/ProductPreview";
import { SocialProof } from "./components/SocialProof";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { CheckoutSimulator } from "./components/CheckoutSimulator";
import { TRANSLATIONS } from "./translations";
import type { Language } from "./translations";

function App() {
  const [lang, setLang] = useState<Language>("en");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isVipUnlocked, setIsVipUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem("china_vip_unlocked_2026") === "true";
    } catch {
      return false;
    }
  });

  const t = TRANSLATIONS[lang];

  const handleBuyClick = () => {
    setIsCheckoutOpen(true);
  };

  const handleUnlockVip = () => {
    setIsVipUnlocked(true);
    try {
      localStorage.setItem("china_vip_unlocked_2026", "true");
    } catch {
      // Ignore storage error
    }
  };

  const handleQuizScroll = () => {
    const quizSec = document.getElementById("survival-quiz");
    if (quizSec) {
      quizSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans select-none antialiased">
      {/* Sticky Header with Language Switcher & VIP Vault Status */}
      <Header
        onBuyClick={handleBuyClick}
        lang={lang}
        onLangChange={setLang}
        t={t}
        isVipUnlocked={isVipUnlocked}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBuyClick={handleBuyClick} onQuizClick={handleQuizScroll} t={t} />

        {/* Pain Points (Four Walls) */}
        <PainPoints t={t} />

        {/* NEW: Interactive 3-in-1 Survival Toolkit (12 Audio Flashcards + 200 RMB Fee Splitter + 72-Hr Checklist) */}
        <InteractiveToolkit
          onBuyClick={handleBuyClick}
          isVipUnlocked={isVipUnlocked}
          lang={lang}
        />

        {/* Interactive Readiness Quiz */}
        <InteractiveQuiz onBuyClick={handleBuyClick} t={t} />

        {/* Book Showcase (Chapters List) */}
        <BookShowcase onBuyClick={handleBuyClick} t={t} />

        {/* Product Trial Page Preview + Free 2-Page Checklist PDF Download */}
        <ProductPreview t={t} lang={lang} onBuyClick={handleBuyClick} />

        {/* NEW: Real Traveler Field Reports & Reddit Pain-Point Case Studies */}
        <SocialProof lang={lang} onBuyClick={handleBuyClick} />

        {/* Frequently Asked Questions */}
        <FAQ t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* PayPal + Card + VIP Code Checkout & 3-PDF Instant Vault Modal */}
      <CheckoutSimulator
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        t={t}
        lang={lang}
        isVipUnlocked={isVipUnlocked}
        onUnlockVip={handleUnlockVip}
      />
    </div>
  );
}

export default App;
