import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { InteractiveQuiz } from "./components/InteractiveQuiz";
import { BookShowcase } from "./components/BookShowcase";
import { ProductPreview } from "./components/ProductPreview";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { CheckoutSimulator } from "./components/CheckoutSimulator";
import { TRANSLATIONS } from "./translations";
import type { Language } from "./translations";

function App() {
  const [lang, setLang] = useState<Language>("en");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleBuyClick = () => {
    setIsCheckoutOpen(true);
  };

  const handleQuizScroll = () => {
    const quizSec = document.getElementById("survival-quiz");
    if (quizSec) {
      quizSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans select-none antialiased">
      {/* Sticky Header with Language Switcher */}
      <Header onBuyClick={handleBuyClick} lang={lang} onLangChange={setLang} t={t} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBuyClick={handleBuyClick} onQuizClick={handleQuizScroll} t={t} />

        {/* Pain Points (Four Walls) */}
        <PainPoints t={t} />

        {/* Interactive Readiness Quiz */}
        <InteractiveQuiz onBuyClick={handleBuyClick} t={t} />

        {/* Book Showcase (Chapters List) */}
        <BookShowcase onBuyClick={handleBuyClick} t={t} />

        {/* Product Trial Page Preview */}
        <ProductPreview t={t} />

        {/* Frequently Asked Questions */}
        <FAQ t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* Checkout Simulator Modal */}
      <CheckoutSimulator isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} t={t} />
    </div>
  );
}

export default App;
