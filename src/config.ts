// ============================================================================
// GLOBAL MONETIZATION, PAYPAL & AFFILIATE CONFIGURATION
// ============================================================================
// Update your PayPal link and Affiliate links here before deploying to production.

export const SITE_CONFIG = {
  productName: "The Foreigner's Survival Guide to China Travel (4-in-1 Kit)",
  priceUsd: 19.0,
  originalPriceUsd: 59.0,

  // --------------------------------------------------------------------------
  // 1. PAYPAL CHECKOUT CONFIGURATION
  // --------------------------------------------------------------------------
  // Put your PayPal Payment Link (from PayPal Dashboard -> Pay & Get Paid ->
  // Accept Payments -> Checkout / Payment Links) or your PayPal.Me link below.
  // Example: "https://www.paypal.com/ncp/payment/YOUR_BUTTON_ID"
  // or "https://www.paypal.me/yourusername/19usd"
  paypalCheckoutUrl: "https://www.paypal.com/ncp/payment/CHINA_SURVIVAL_KIT_19USD",
  paypalEmail: "support@chinadigitalsurvival.com",

  // Master VIP Unlock Code (sent to customers on their PayPal receipt page,
  // or used for 1-click instant demo verification)
  vipAccessCodes: ["CHINA2026", "VIP2026", "SURVIVE2026"],

  // --------------------------------------------------------------------------
  // 2. REAL PDF DELIVERABLES (Located in public/downloads/)
  // --------------------------------------------------------------------------
  downloads: {
    masterGuidePdf: {
      title: "Master Survival Blueprint (2026 Edition)",
      subtitle: "12-Page High-Density Field Manual (Alipay, 200 RMB Hack, 12306, PSB Law)",
      filename: "China_Digital_Survival_Guide_2026.pdf",
      url: "/downloads/China_Digital_Survival_Guide_2026.pdf",
      size: "1.5 MB PDF",
    },
    flashcardsPdf: {
      title: "12 Bilingual Emergency Survival Flashcards",
      subtitle: "High-Contrast Mandarin Cards (Peanut Allergy, Vegan, Hotel PSB Law, Taxi)",
      filename: "China_Emergency_Flashcards_2026.pdf",
      url: "/downloads/China_Emergency_Flashcards_2026.pdf",
      size: "1.2 MB PDF",
    },
    checklistPdf: {
      title: "72-Hour Pre-Flight & Arrival Countdown Sheet",
      subtitle: "Printable 4-Phase Action Checklist + Emergency Hotlines & OTC Meds",
      filename: "China_72Hr_PreFlight_Checklist_2026.pdf",
      url: "/downloads/China_72Hr_PreFlight_Checklist_2026.pdf",
      size: "185 KB PDF",
    },
  },

  // --------------------------------------------------------------------------
  // 3. PASSIVE AFFILIATE LINKS (Earn 10%-25% Commission on Free Visitors too!)
  // --------------------------------------------------------------------------
  affiliates: {
    esim: {
      name: "Trip.com / Airalo China Mainland Roaming eSIM",
      desc: "Bypasses Great Firewall automatically via Hong Kong routing (No VPN needed)",
      url: "https://www.trip.com/things-to-do/detail/49281726/",
      badge: "GFW BYPASS VERIFIED",
    },
    trainsAndHotels: {
      name: "Trip.com Foreigner-Friendly Hotels & 12306 Trains",
      desc: "Pre-filtered PSB-verified hotels + 60-day advance bullet train booking",
      url: "https://www.trip.com/trains/china/",
      badge: "24/7 ENGLISH SUPPORT",
    },
    vpn: {
      name: "LetsVPN / Astrill (Hotel Wi-Fi Backup)",
      desc: "Essential encrypted tunnel when connected to domestic hotel Wi-Fi",
      url: "https://letsvpn.world/",
      badge: "HOTEL WI-FI READY",
    },
  },
};
