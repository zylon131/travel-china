import React, { useState, useEffect } from "react";
import {
  Volume2,
  Maximize2,
  Lock,
  Unlock,
  Calculator,
  CheckSquare,
  CreditCard,
  AlertTriangle,
  Sparkles,
  Download,
  X,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "../config";
import type { Language } from "../translations";

interface InteractiveToolkitProps {
  onBuyClick: () => void;
  isVipUnlocked: boolean;
  lang: Language;
}

interface FlashcardItem {
  id: string;
  code: string;
  category: "allergy" | "payment" | "hotel" | "transit" | "emergency";
  titleEn: string;
  titleZh: string;
  isDanger?: boolean;
  isFreePreview: boolean;
  zhMain: string;
  zhSub: string;
  pinyin: string;
  enContext: string;
}

const FLASHCARDS: FlashcardItem[] = [
  {
    id: "split-200",
    code: "CARD 01 // PAYMENT HACK",
    category: "payment",
    titleEn: "💳 Cashier: Split Bill <200 RMB (0% Fee)",
    titleZh: "💳 收银台：满200元拆单免3%手续费卡",
    isFreePreview: true,
    zhMain: "收银员您好！麻烦帮我把账单【拆分成多笔 200 元以内】付款！",
    zhSub: "因为外国银行卡绑定支付宝/微信，单笔超过 200 元会被平台强收 3% 手续费。麻烦让我分几次扫码（每次不超过 200 元），非常感谢！",
    pinyin: "Shōuyínyuán nín hǎo! Máfan bāng wǒ bǎ zhàngdān chāifēn chéng duō bǐ 200 yuán yǐnèi fùkuǎn!",
    enContext: "Show at restaurants or shops when your bill exceeds 200 RMB (~$28) to legally bypass the 3% Alipay/WeChat international card fee.",
  },
  {
    id: "peanut-allergy",
    code: "CARD 02 // MEDICAL ALERT",
    category: "allergy",
    titleEn: "🚨 Severe Peanut & Nut Oil Allergy",
    titleZh: "🚨 严重花生与花生油致命过敏警告卡",
    isDanger: true,
    isFreePreview: true,
    zhMain: "严重过敏警告：我对【花生、花生油及所有坚果】严重过敏！",
    zhSub: "哪怕吃到一丁点花生酱、花生油或使用接触过花生的炒锅，我都会发生致命休克并需要立刻送急诊！请确认菜品和用油完全不含花生与坚果，万分感谢！",
    pinyin: "Wǒ duì huāshēng, huāshēngyóu jí suǒyǒu jiānguǒ yánzhòng guòmǐn! Qǐng wù fàng huāshēng!",
    enContext: "Explicitly warns Chinese chefs against whole peanuts, cooking peanut oil (花生油), and shared wok cross-contamination.",
  },
  {
    id: "hotel-psb",
    code: "CARD 03 // LEGAL SHIELD",
    category: "hotel",
    titleEn: "🏨 Hotel Desk: PSB Law & Passport Guide",
    titleZh: "🏨 酒店前台：外宾拒住法规与公安录入指引",
    isFreePreview: true,
    zhMain: "前台您好！根据公安部与文旅部规定，酒店不得以“无涉外资质”拒绝外宾。",
    zhSub: "请在旅馆治安管理系统中点击【境外旅客】-> 证件选【普通护照】，免签入境请选择【免签(M)】。如不会操作请拨打辖区派出所或 110 电话指导录入，谢谢！",
    pinyin: "Qǐng zài gōng'ān xìtǒng zhōng xuǎnzé Jìngwài Lǚkè, Pǔtōng Hùzhào. Rú bùhuì cāozuò qǐng bōdǎ 110!",
    enContext: "Your ultimate shield against late-night 'Mainland Only' hotel rejection. Cites the 2024–2026 Ministry mandate & teaches the clerk how to input your passport.",
  },
  {
    id: "iced-water",
    code: "CARD 04 // DINING REQUEST",
    category: "allergy",
    titleEn: "🧊 Restaurant: Iced Water & No Cilantro/Spice",
    titleZh: "🧊 餐厅点餐：要冰水/免辣/不要香菜卡",
    isFreePreview: true,
    zhMain: "服务员您好！请给我【冰水 / 冰镇矿泉水】（不要热水）。",
    zhSub: "另外，我们不太能吃辣，请把菜做成【不辣】或者【微辣】，并且【不要放香菜和味精】，非常感谢！",
    pinyin: "Fúwùyuán nín hǎo! Qǐng gěi wǒ bīngshuǐ (bùyào rèshuǐ). Qǐng zuò chéng bù là, bùyào fàng xiāngcài!",
    enContext: "Stops waiters from bringing boiling hot water and customizes spice & cilantro levels clearly.",
  },
  {
    id: "shellfish-allergy",
    code: "CARD 05 // MEDICAL ALERT",
    category: "allergy",
    titleEn: "🦐 Severe Shellfish & Oyster Sauce Allergy",
    titleZh: "🦐 严重海鲜/虾蟹/蚝油过敏警告卡",
    isDanger: true,
    isFreePreview: false,
    zhMain: "严重过敏警告：我对【虾、蟹、贝类等所有海鲜】严重过敏！",
    zhSub: "请不要在我的菜里放任何虾仁、虾米、螃蟹、贝类、蚝油（Oyster Sauce）或海鲜高汤！误食会导致严重呼吸困难，非常感谢！",
    pinyin: "Wǒ duì xiā, xiè, bèilèi děng suǒyǒu hǎixiān yánzhòng guòmǐn! Qǐng bùyào fàng háoyóu!",
    enContext: "Crucial in China where oyster sauce (蚝油) and dried shrimp (虾米) are often added to vegetable dishes.",
  },
  {
    id: "strict-vegan",
    code: "CARD 06 // DIETARY RULE",
    category: "allergy",
    titleEn: "🌱 Strict Vegan / Vegetarian (No Lard/Broth)",
    titleZh: "🌱 严格纯素食：忌猪油/肉末/鸡汤卡",
    isFreePreview: false,
    zhMain: "您好！我吃【严格纯素 / 净素】，不吃任何肉类和动物油。",
    zhSub: "请不要在菜里放任何肉末、猪油（荤油）、鸡汤/骨头汤、鸡精、蚝油或鸡蛋奶制品。请用纯植物油清炒，非常感谢！",
    pinyin: "Nín hǎo! Wǒ chī chún sù, bù chī ròu, zhūyóu, jītāng, háoyóu hé jīdàn.",
    enContext: "In China, 'vegetable dishes' often contain minced pork or pork lard (猪油). This specifies Buddhist-style pure vegan preparation.",
  },
  {
    id: "gluten-free",
    code: "CARD 07 // MEDICAL ALERT",
    category: "allergy",
    titleEn: "🌾 Celiac / Gluten-Free (No Soy Sauce/Wheat)",
    titleZh: "🌾 乳糜泻/无麸质：忌面粉与普通酱油卡",
    isDanger: true,
    isFreePreview: false,
    zhMain: "医疗饮食禁忌：我对【小麦面粉和麸质 (Gluten)】严重过敏！",
    zhSub: "我不能吃面条、馒头、饺子皮、裹面粉油炸的食物，也不能吃含小麦成分的普通酱油、老抽和陈醋。请只用盐、植物油和纯大米制作，谢谢！",
    pinyin: "Wǒ duì xiǎomài miànfěn hé fūzhì guòmǐn! Bùnéng chī pǔtōng jiàngyóu hé miàntiáo.",
    enContext: "Warns kitchen staff that standard Chinese soy sauce and dark vinegar contain fermented wheat.",
  },
  {
    id: "taxi-command",
    code: "CARD 08 // URBAN TRANSIT",
    category: "transit",
    titleEn: "🚖 Taxi Driver: Use Meter & Drop-Off Point",
    titleZh: "🚖 出租车/网约车：打表计价与送达航站楼卡",
    isFreePreview: false,
    zhMain: "师傅您好！请送我去手机上显示的这个地址，请【打表计价】。",
    zhSub: "我不懂中文，请严格按照导航路线行驶。如果去机场或高铁站，请送我到【出发层 (Departure Hall)】，到了请提示我，谢谢！",
    pinyin: "Shīfu nín hǎo! Qǐng dǎbiǎo jìjià, àn dǎoháng zǒu, sòng wǒ dào chūfā céng, xièxie!",
    enContext: "Prevents street-cab flat-rate scams and ensures you get dropped at the right airport/train departure gate.",
  },
  {
    id: "forbidden-city",
    code: "CARD 09 // VIP ACCESS",
    category: "transit",
    titleEn: "🏯 Forbidden City: Foreign Passport Window",
    titleZh: "🏯 故宫/博物馆：外宾护照免预约购票窗口问路卡",
    isFreePreview: false,
    zhMain: "工作人员您好！我是外国游客，请问【外宾综合服务窗口】在哪里？",
    zhSub: "这是我的外国护照原件。听说外籍游客凭护照原件可以在综合服务窗口现场办理购票/核验入园，请指引我窗口方向，非常感谢！",
    pinyin: "Wǒ shì wàiguó yóukè, qǐngwèn Wàibīn Zōnghé Fúwù Chuāngkǒu zài nǎlǐ?",
    enContext: "Walk straight into a 'Sold Out' Forbidden City or major museum by locating the dedicated foreign passport ticket window.",
  },
  {
    id: "train-manual-gate",
    code: "CARD 10 // BULLET RAIL",
    category: "transit",
    titleEn: "🚆 High-Speed Rail: Manual Gate & Rebooking",
    titleZh: "🚆 高铁站：外籍护照人工检票通道与改签协助卡",
    isFreePreview: false,
    zhMain: "工作人员您好！我持外国护照乘车，请帮我核验或改签车票。",
    zhSub: "我已经用护照购买了电子客票（车次见手机屏幕）。请问我应该排哪一个【人工检票通道】？如果错过列车，麻烦帮我改签到下一班，谢谢！",
    pinyin: "Wǒ chí wàiguó hùzhào chéngchē, qǐngwèn Róngōng Jiǎnpiào Tōngdào zài nǎlǐ?",
    enContext: "Foreign passports cannot use standard Chinese ID facial gates. Use this to find the Manual Gate or rebook a missed train.",
  },
  {
    id: "toilet-pharmacy",
    code: "CARD 11 // DAILY SURVIVAL",
    category: "emergency",
    titleEn: "🚻 Western Sit-Down Toilet & Pharmacy Meds",
    titleZh: "🚻 寻找坐便器马桶与药店买药（止泻/退烧/抗过敏）卡",
    isFreePreview: false,
    zhMain: "您好！请问附近哪里有【坐便器马桶（无障碍卫生间）】和纸巾？",
    zhSub: "【药店买药】：药师您好，请帮我拿一盒：1. 止泻药：蒙脱石散(思密达) / 洛哌丁胺；2. 止痛退烧：布洛芬缓释胶囊(芬必得)；3. 抗过敏：氯雷他定片(开瑞坦)。",
    pinyin: "Qǐngwèn fùjìn nǎlǐ yǒu zuòbiànqì mǎtǒng hé zhǐjīn? Yàoshī nín hǎo, qǐng bāng wǒ ná yào.",
    enContext: "Finds a Western toilet (in the accessible stall) or gets exact Chinese equivalents for Imodium, Advil, and Claritin.",
  },
  {
    id: "police-emergency",
    code: "CARD 12 // SOS EMERGENCY",
    category: "emergency",
    titleEn: "🆘 Urgent Help: Lost Passport / Phone in Taxi",
    titleZh: "🆘 紧急求助：护照/手机遗失在出租车报警卡",
    isDanger: true,
    isFreePreview: false,
    zhMain: "紧急求助！我是外国游客，我的【护照/随身手机】不慎遗失了！",
    zhSub: "我不懂中文，目前情况非常紧急。请问您能帮我拨打 110 报警，或者帮我联系刚才乘坐的出租车/调取监控吗？万分感激！",
    pinyin: "Jǐnjí qiúzhù! Wǒ shì wàiguó yóukè, wǒ de hùzhào yíshī le, qǐng bāng wǒ bōdǎ 110 bàojǐng!",
    enContext: "Show to police officers, hotel concierges, or metro staff if you leave your phone or passport in a cab.",
  },
];

const CHECKLIST_ITEMS = [
  {
    id: "chk-alipay",
    phase: "T-14 Days",
    titleEn: "Bind 2 Foreign Cards (Visa + Mastercard) to Alipay & Upload Passport Scan",
    titleZh: "在支付宝国际版绑定 2 张外卡并完成护照实名认证（解除消费限额）",
  },
  {
    id: "chk-wechat",
    phase: "T-14 Days",
    titleEn: "Enable WeChat Pay, Verify Passport, & Set 6-Digit Numeric PIN",
    titleZh: "开通微信支付并完成外籍护照实名认证，牢记 6 位数字支付密码",
  },
  {
    id: "chk-12306",
    phase: "T-7 Days",
    titleEn: "Set Up Railway 12306 (MRZ Name Rule: Omit Middle Name if Stuck) or Trip.com",
    titleZh: "注册 12306 英文版（注意中间名省略规则）或在 Trip.com 录入乘车人护照",
  },
  {
    id: "chk-esim",
    phase: "T-72 Hours",
    titleEn: "Install China Mainland Roaming eSIM (Bypasses GFW Automatically) + LetsVPN",
    titleZh: "安装自带翻墙路由的赴华漫游 eSIM 流量卡 + 酒店 Wi-Fi 备用 VPN",
  },
  {
    id: "chk-maps",
    phase: "T-72 Hours",
    titleEn: "Download Amap (Enable English Mode in Settings) & Offline Google Translate Pack",
    titleZh: "下载高德地图（开启英文界面模式）并下载离线中英拍照翻译语言包",
  },
  {
    id: "chk-powerbank",
    phase: "T-24 Hours",
    titleEn: "Check Power Bank: Must Be ≤100Wh (20,000mAh) with Visible 3C Mark",
    titleZh: "检查随身充电宝：容量须 ≤100Wh 且外壳 3C 与容量标识清晰（防安检没收）",
  },
  {
    id: "chk-tissues",
    phase: "Packing",
    titleEn: "Pack 5 Packs of Pocket Tissues, Hand Sanitizer, & Save Hotel Chinese Address",
    titleZh: "随身背包装好袖珍纸巾、免洗洗手液，并在手机相册保存酒店中文地址截图",
  },
  {
    id: "chk-landing",
    phase: "Arrival",
    titleEn: "Do the '3 RMB Water Test' at Airport 7-Eleven & Break 200 RMB into 10/20 Notes",
    titleZh: "落地机场便利店买瓶水测试扫码支付，并破开 200 元小面额零钱备用",
  },
];

export const InteractiveToolkit: React.FC<InteractiveToolkitProps> = ({
  onBuyClick,
  isVipUnlocked,
  lang,
}) => {
  const isZh = lang === "zh";
  const [activeTab, setActiveTab] = useState<"flashcards" | "calculator" | "checklist">("flashcards");
  const [activeCard, setActiveCard] = useState<FlashcardItem | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // Calculator state
  const [billRmb, setBillRmb] = useState<number>(460);

  // Checklist state persisted in localStorage
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("china_survival_checklist_v1");
      return saved ? JSON.parse(saved) : ["chk-alipay"];
    } catch {
      return ["chk-alipay"];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("china_survival_checklist_v1", JSON.stringify(checkedIds));
    } catch {
      // ignore storage errors
    }
  }, [checkedIds]);

  const toggleChecklist = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Mandarin Speech Synthesis (TTS)
  const speakMandarin = (text: string, id: string) => {
    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support Web Speech synthesis.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.92;
    setSpeakingId(id);
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    window.speechSynthesis.speak(utterance);
  };

  // Calculate 200 RMB Fee & Splits
  const isOver200 = billRmb > 200;
  const platformFeeRmb = isOver200 ? +(billRmb * 0.03).toFixed(2) : 0;
  const numSplits = Math.ceil(billRmb / 200);
  const splitsArray: number[] = [];
  let remaining = billRmb;
  while (remaining > 0) {
    const chunk = Math.min(200, remaining);
    splitsArray.push(chunk);
    remaining = +(remaining - chunk).toFixed(2);
  }
  const splitPhraseZh = `收银员您好！因为外国卡单笔超过 200 元要收 3% 手续费，麻烦帮我分 ${numSplits} 笔刷：${splitsArray
    .map((n) => `${n}元`)
    .join(" + ")}，非常感谢！`;

  return (
    <section
      id="interactive-toolkit"
      className="py-24 bg-paper-dark border-b-2 border-cyber-black text-left select-none"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-cyber-yellow border-2 border-cyber-black px-3.5 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(14,14,17,1)] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyber-black" />
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-cyber-black">
              {isZh
                ? "// 4合1 随身数字工具箱（不只是卖一本 PDF！）"
                : "// 4-IN-1 INTERACTIVE SURVIVAL KIT (MORE THAN JUST A PDF!)"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-cyber-black tracking-tight">
            {isZh
              ? "在街头即开即用的“救命武器库”"
              : "Test-Drive the Live Pocket Survival Toolkit"}
          </h2>
          <p className="font-sans text-zinc-600 text-xs sm:text-base font-semibold mt-3 leading-relaxed">
            {isZh
              ? "站在上海大雨的街头或嘈杂的火锅店里，没人有空去翻 60 页的 PDF。因此我们的 $19 工具包不仅包含 12 页高密度《生存蓝图 PDF》，还附带支持中文真人语音播报的【12张双语急救闪卡】、【200元免手续费拆单计算器】和【72小时行前打卡单】。"
              : "When you're stranded at a hotel desk at 11 PM or ordering at a noisy restaurant, you don't have time to scroll a 60-page PDF. Your kit includes our 12-Page Master Blueprint PDF PLUS this interactive Mandarin-Speaking Flashcard Deck, 200 RMB Fee Splitter, and 72-Hour Checklist."}
          </p>
        </div>

        {/* Toolkit Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("flashcards")}
            className={`px-5 py-3.5 rounded-xl font-mono font-bold text-xs border-2 border-cyber-black transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === "flashcards"
                ? "bg-cyber-black text-cyber-yellow shadow-[4px_4px_0px_0px_rgba(251,191,36,1)]"
                : "bg-white text-cyber-black hover:bg-zinc-100"
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>
              {isZh
                ? "01. 双语发声急救闪卡 (12张)"
                : "01. AUDIO EMERGENCY FLASHCARDS (12)"}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("calculator")}
            className={`px-5 py-3.5 rounded-xl font-mono font-bold text-xs border-2 border-cyber-black transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === "calculator"
                ? "bg-cyber-black text-cyber-yellow shadow-[4px_4px_0px_0px_rgba(251,191,36,1)]"
                : "bg-white text-cyber-black hover:bg-zinc-100"
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>
              {isZh
                ? "02. 200元外卡免3%手续费计算器"
                : "02. 200 RMB (3% FEE) BILL SPLITTER"}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("checklist")}
            className={`px-5 py-3.5 rounded-xl font-mono font-bold text-xs border-2 border-cyber-black transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === "checklist"
                ? "bg-cyber-black text-cyber-yellow shadow-[4px_4px_0px_0px_rgba(251,191,36,1)]"
                : "bg-white text-cyber-black hover:bg-zinc-100"
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>
              {isZh
                ? `03. 72小时行前准备清单 (${checkedIds.length}/${CHECKLIST_ITEMS.length})`
                : `03. 72-HR PRE-FLIGHT CHECKLIST (${checkedIds.length}/${CHECKLIST_ITEMS.length})`}
            </span>
          </button>
        </div>

        {/* TAB 1: LIVE AUDIO EMERGENCY FLASHCARDS */}
        {activeTab === "flashcards" && (
          <div className="space-y-6">
            {/* Status Banner */}
            <div className="bg-white border-2 border-cyber-black rounded-2xl p-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[4px_4px_0px_0px_rgba(14,14,17,1)]">
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2.5 rounded-xl border-2 border-cyber-black ${
                    isVipUnlocked ? "bg-cyber-green text-white" : "bg-cyber-yellow text-cyber-black"
                  }`}
                >
                  {isVipUnlocked ? <Unlock className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-mono font-extrabold text-xs sm:text-sm text-cyber-black">
                    {isVipUnlocked
                      ? isZh
                        ? "已解锁全部 12 张急救闪卡 + 3 份高清 PDF 下载权限！"
                        : "VIP UNLOCKED: All 12 Audio Flashcards + 3 Printable PDFs Ready!"
                      : isZh
                      ? "免费试用前 4 张高频闪卡（点击喇叭可直接播放中文语音给店员/前台听！）"
                      : "4 Free Preview Cards Active — Tap 'Speak Mandarin' or 'Fullscreen' to test!"}
                  </h4>
                  <p className="font-sans text-[11px] text-zinc-500 font-semibold">
                    {isZh
                      ? "源自 Reddit r/chinatravel 真实求助案例：涵盖花生油过敏、满200拆单、酒店拒住法规、故宫外宾窗口。"
                      : "Built from real r/chinatravel emergencies: Peanut oil alerts, 200 RMB split-bill, Hotel PSB law, Forbidden City walk-up."}
                  </p>
                </div>
              </div>

              {isVipUnlocked ? (
                <a
                  href={SITE_CONFIG.downloads.flashcardsPdf.url}
                  download={SITE_CONFIG.downloads.flashcardsPdf.filename}
                  className="px-4 py-2.5 bg-cyber-green text-white border-2 border-cyber-black rounded-xl font-mono font-bold text-xs hover:bg-emerald-600 transition-colors flex items-center space-x-2 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>{isZh ? "下载闪卡 PDF" : "DOWNLOAD FLASHCARDS.PDF"}</span>
                </a>
              ) : (
                <button
                  onClick={onBuyClick}
                  className="px-4 py-2.5 bg-cyber-black text-cyber-yellow border-2 border-cyber-black rounded-xl font-mono font-bold text-xs hover:bg-zinc-800 transition-colors flex items-center space-x-2 shrink-0 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{isZh ? "解锁全部 12 张 + 全套 PDF ($19)" : "UNLOCK ALL 12 + PDF KIT ($19)"}</span>
                </button>
              )}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FLASHCARDS.map((card) => {
                const unlocked = card.isFreePreview || isVipUnlocked;
                const isSpeaking = speakingId === card.id;

                return (
                  <div
                    key={card.id}
                    className={`bg-white border-2 border-cyber-black rounded-2xl p-5 flex flex-col justify-between transition-all relative ${
                      unlocked
                        ? "shadow-[5px_5px_0px_0px_rgba(14,14,17,1)] hover:-translate-y-0.5"
                        : "opacity-85 bg-zinc-100/90 border-dashed"
                    }`}
                  >
                    <div>
                      {/* Card Top Tag */}
                      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-200">
                        <span
                          className={`font-mono text-[9px] font-extrabold px-2 py-0.5 rounded border border-cyber-black uppercase ${
                            card.isDanger
                              ? "bg-cyber-red text-white"
                              : unlocked
                              ? "bg-cyber-yellow text-cyber-black"
                              : "bg-zinc-200 text-zinc-600"
                          }`}
                        >
                          {card.code}
                        </span>
                        <span
                          className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded ${
                            unlocked
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-zinc-800 text-cyber-yellow"
                          }`}
                        >
                          {unlocked ? (isZh ? "可用" : "ACTIVE") : "VIP LOCKED"}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-sans font-extrabold text-sm text-cyber-black mb-3">
                        {isZh ? card.titleZh : card.titleEn}
                      </h3>

                      {/* Chinese Callout Box */}
                      <div
                        className={`rounded-xl p-3.5 mb-3 border-l-4 ${
                          card.isDanger
                            ? "bg-zinc-900 border-cyber-red text-white"
                            : "bg-zinc-900 border-cyber-yellow text-white"
                        } ${!unlocked ? "blur-[3px] select-none" : ""}`}
                      >
                        <div className="font-sans font-black text-sm sm:text-base text-cyber-yellow leading-snug mb-1.5">
                          {card.zhMain}
                        </div>
                        <div className="font-sans text-[11px] text-zinc-300 leading-relaxed line-clamp-3">
                          {card.zhSub}
                        </div>
                      </div>

                      <p className="font-sans text-[11px] text-zinc-500 font-semibold leading-relaxed mb-4">
                        {card.enContext}
                      </p>
                    </div>

                    {/* Card Action Buttons */}
                    {unlocked ? (
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100">
                        <button
                          onClick={() =>
                            speakMandarin(`${card.zhMain} ${card.zhSub}`, card.id)
                          }
                          className={`py-2.5 px-3 rounded-xl font-mono font-bold text-[10px] border-2 border-cyber-black flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                            isSpeaking
                              ? "bg-cyber-green text-white animate-pulse"
                              : "bg-cyber-yellow text-cyber-black hover:bg-yellow-400"
                          }`}
                        >
                          <Volume2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{isSpeaking ? "SPEAKING..." : isZh ? "播放语音" : "SPEAK ZH"}</span>
                        </button>

                        <button
                          onClick={() => setActiveCard(card)}
                          className="py-2.5 px-3 rounded-xl font-mono font-bold text-[10px] bg-cyber-black text-white border-2 border-cyber-black hover:bg-zinc-800 flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-cyber-yellow shrink-0" />
                          <span>{isZh ? "全屏出示" : "FULLSCREEN"}</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={onBuyClick}
                        className="w-full py-2.5 px-3 rounded-xl font-mono font-bold text-[10px] bg-zinc-900 text-cyber-yellow border-2 border-cyber-black hover:bg-cyber-black flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                      >
                        <Lock className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {isZh ? "解锁完整 12 张急救闪卡 ($19)" : "UNLOCK FULL 12-CARD DECK ($19)"}
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: 200 RMB (3% FEE) BILL-SPLITTER CALCULATOR */}
        {activeTab === "calculator" && (
          <div className="bg-white border-2 border-cyber-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(14,14,17,1)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Controls & Math */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-[10px] font-extrabold uppercase px-2.5 py-1 bg-rose-100 text-cyber-red border border-cyber-red rounded">
                    {isZh ? "// 支付宝/微信外卡 200元潜规则" : "// THE ALIPAY & WECHAT 200 RMB THRESHOLD"}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-cyber-black mt-3">
                    {isZh
                      ? "外卡超 200 元免 3% 手续费拆单器"
                      : "The 200 RMB (3% Fee) Bill-Splitter"}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-500 font-semibold mt-2 leading-relaxed">
                    {isZh
                      ? "在 Reddit 上无数老外抱怨被支付宝/微信扣了 3% 手续费。其实规则很简单：单笔 ≤200 元人民币完全免手续费；单笔一旦超过 200 元，全额强收 3%！输入你的账单金额，自动生成拆单方案与给收银员看的中文语音卡："
                      : "Single transactions ≤200 RMB (~$28 USD) pay 0% platform fee. The moment a bill is 200.01 RMB+, Alipay & WeChat charge 3% on the ENTIRE bill. Slide your bill amount below to generate an instant split-payment script for the cashier:"}
                  </p>
                </div>

                {/* Amount Input & Slider */}
                <div className="bg-zinc-50 border-2 border-cyber-black rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-mono text-xs font-bold text-zinc-600 uppercase">
                      {isZh ? "当前消费账单金额 (RMB)" : "RESTAURANT / SHOP BILL AMOUNT:"}
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min={10}
                        max={5000}
                        value={billRmb}
                        onChange={(e) => setBillRmb(Math.max(10, Number(e.target.value) || 0))}
                        className="w-28 px-3 py-1.5 border-2 border-cyber-black rounded-lg font-mono font-black text-base text-right bg-white"
                      />
                      <span className="font-mono font-bold text-sm text-cyber-black">RMB</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min={50}
                    max={1500}
                    step={10}
                    value={Math.min(1500, billRmb)}
                    onChange={(e) => setBillRmb(Number(e.target.value))}
                    className="w-full accent-cyber-black cursor-pointer"
                  />

                  <div className="flex justify-between text-[10px] font-mono font-bold text-zinc-400">
                    <span>50 RMB (~$7)</span>
                    <span className="text-cyber-green">200 RMB (FREE LIMIT)</span>
                    <span>800 RMB (~$112)</span>
                    <span>1,500 RMB (~$210)</span>
                  </div>
                </div>

                {/* Comparison Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border-2 border-cyber-red bg-rose-50/60">
                    <div className="font-mono text-[10px] font-bold text-cyber-red uppercase">
                      {isZh ? "❌ 直接一笔刷 (含 3% 平台费)" : "❌ 1 SINGLE SWIPE (WITH 3% FEE)"}
                    </div>
                    <div className="font-mono text-2xl font-black text-cyber-black mt-1">
                      ¥{(billRmb + platformFeeRmb).toFixed(2)}
                    </div>
                    <div className="font-sans text-xs font-bold text-cyber-red mt-1">
                      {isOver200
                        ? isZh
                          ? `白白多交 ¥${platformFeeRmb} 手续费！`
                          : `Wasted Fee: +¥${platformFeeRmb} (~$${(platformFeeRmb / 7.15).toFixed(2)})`
                        : isZh
                        ? "≤200元，无手续费"
                        : "Under 200 RMB — ¥0 Fee!"}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border-2 border-cyber-green bg-emerald-50/70">
                    <div className="font-mono text-[10px] font-bold text-emerald-800 uppercase">
                      {isZh ? "✅ 拆单分笔刷 (0 手续费)" : "✅ SMART SPLIT SWIPES (0% FEE)"}
                    </div>
                    <div className="font-mono text-2xl font-black text-cyber-black mt-1">
                      ¥{billRmb.toFixed(2)}
                    </div>
                    <div className="font-sans text-xs font-bold text-emerald-700 mt-1">
                      {isOver200
                        ? isZh
                          ? `拆成 ${numSplits} 笔刷，立省 ¥${platformFeeRmb}！`
                          : `Split into ${numSplits} swipes — Save ¥${platformFeeRmb}!`
                        : isZh
                        ? "直接单笔扫码即可"
                        : "1 swipe is already 0% fee"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Cashier Mandarin Card */}
              <div className="lg:col-span-6">
                <div className="bg-cyber-black text-white rounded-2xl p-6 sm:p-8 border-2 border-cyber-black shadow-[6px_6px_0px_0px_rgba(251,191,36,1)] space-y-5">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5 text-cyber-yellow" />
                      <span className="font-mono text-xs font-bold text-cyber-yellow uppercase">
                        // SHOW OR PLAY THIS TO CASHIER
                      </span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-800 text-emerald-400 px-2.5 py-1 rounded font-bold">
                      {numSplits} SWIPE{numSplits > 1 ? "S" : ""}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className="font-sans text-xl sm:text-2xl font-black text-cyber-yellow leading-snug">
                      {isOver200
                        ? splitPhraseZh
                        : `收银员您好！这笔账单 ${billRmb} 元（未满 200 元），我直接用支付宝/微信一笔扫码支付，谢谢！`}
                    </p>
                    <p className="font-mono text-xs text-zinc-400">
                      {isOver200
                        ? `Breakdown: ${splitsArray.map((n, i) => `Swipe #${i + 1}: ¥${n}`).join("  |  ")}`
                        : `Single Swipe: ¥${billRmb} (0% Alipay/WeChat International Card Fee)`}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => speakMandarin(splitPhraseZh, "calc-voice")}
                      className="flex-1 py-3.5 px-4 bg-cyber-yellow text-cyber-black rounded-xl font-mono font-bold text-xs hover:bg-yellow-400 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>
                        {speakingId === "calc-voice"
                          ? "SPEAKING TO CASHIER..."
                          : isZh
                          ? "🔊 用中文向收银员播报拆单金额"
                          : "🔊 SPEAK SPLIT REQUEST IN MANDARIN"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INTERACTIVE 72-HOUR PRE-FLIGHT CHECKLIST */}
        {activeTab === "checklist" && (
          <div className="bg-white border-2 border-cyber-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(14,14,17,1)] space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-cyber-black pb-6">
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
                  // PRE-DEPARTURE PROTOCOL (AUTO-SAVED IN BROWSER)
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-cyber-black mt-1">
                  {isZh
                    ? "赴华行前 72 小时通关打卡清单"
                    : "Interactive Pre-Flight & Arrival Checklist"}
                </h3>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right font-mono">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase">READINESS</div>
                  <div className="text-xl font-black text-cyber-black">
                    {Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100)}%
                  </div>
                </div>
                <a
                  href={SITE_CONFIG.downloads.checklistPdf.url}
                  download={SITE_CONFIG.downloads.checklistPdf.filename}
                  className="px-4 py-3 bg-cyber-yellow text-cyber-black border-2 border-cyber-black rounded-xl font-mono font-bold text-xs hover:bg-yellow-400 shadow-[3px_3px_0px_0px_rgba(14,14,17,1)] hover:shadow-none transition-all flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{isZh ? "免费下载打印版 PDF" : "DOWNLOAD PRINTABLE PDF"}</span>
                </a>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CHECKLIST_ITEMS.map((item) => {
                const checked = checkedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start space-x-3.5 ${
                      checked
                        ? "bg-emerald-50/70 border-cyber-green"
                        : "bg-zinc-50 border-zinc-200 hover:border-cyber-black"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        checked
                          ? "bg-cyber-green border-cyber-black text-white"
                          : "bg-white border-cyber-black"
                      }`}
                    >
                      {checked && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-cyber-black text-cyber-yellow">
                        {item.phase}
                      </span>
                      <p
                        className={`font-sans text-xs sm:text-sm font-bold leading-snug pt-1 ${
                          checked ? "line-through text-zinc-400" : "text-cyber-black"
                        }`}
                      >
                        {isZh ? item.titleZh : item.titleEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Curated Essential Resources (Affiliate Monetization Bar) */}
            <div className="bg-paper-dark border-2 border-cyber-black rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-mono font-extrabold text-xs text-cyber-black uppercase">
                  {isZh
                    ? "// 官方验证的赴华必备工具直达链接 (Verified Partner Links)"
                    : "// VERIFIED PRE-FLIGHT TOOLKIT LINKS (DIRECT SETUP)"}
                </h4>
                <span className="font-mono text-[10px] font-bold text-emerald-700">
                  2026 TESTED & WORKING
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.values(SITE_CONFIG.affiliates).map((aff, i) => (
                  <a
                    key={i}
                    href={aff.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-cyber-black rounded-xl p-4 hover:bg-cyber-yellow/20 transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <span className="font-mono text-[9px] font-extrabold bg-zinc-900 text-cyber-yellow px-2 py-0.5 rounded">
                        {aff.badge}
                      </span>
                      <h5 className="font-sans font-extrabold text-xs text-cyber-black mt-2 group-hover:underline flex items-center justify-between">
                        <span>{aff.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-1" />
                      </h5>
                      <p className="font-sans text-[11px] text-zinc-500 font-semibold mt-1">
                        {aff.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FULLSCREEN "SHOW TO LOCAL" FLASHCARD MODAL */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-black/90 backdrop-blur-sm">
          <div className="bg-zinc-950 border-4 border-cyber-yellow rounded-3xl p-6 sm:p-10 max-w-2xl w-full text-white relative shadow-2xl space-y-6">
            <button
              onClick={() => {
                window.speechSynthesis?.cancel();
                setActiveCard(null);
              }}
              className="absolute right-5 top-5 p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-2">
              <AlertTriangle
                className={`w-5 h-5 ${
                  activeCard.isDanger ? "text-cyber-red" : "text-cyber-yellow"
                }`}
              />
              <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-cyber-yellow">
                {activeCard.code} // HAND PHONE TO LOCAL STAFF
              </span>
            </div>

            <div
              className={`p-6 sm:p-8 rounded-2xl border-l-8 ${
                activeCard.isDanger
                  ? "bg-rose-950/50 border-cyber-red"
                  : "bg-zinc-900 border-cyber-yellow"
              } space-y-4`}
            >
              <div className="font-sans text-2xl sm:text-4xl font-black text-cyber-yellow leading-tight">
                {activeCard.zhMain}
              </div>
              <div className="font-sans text-base sm:text-xl font-bold text-white leading-relaxed">
                {activeCard.zhSub}
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-1">
              <div className="font-mono text-xs text-zinc-400">
                <strong>PINYIN:</strong> {activeCard.pinyin}
              </div>
              <div className="font-sans text-xs text-zinc-300">
                <strong>ENGLISH MEANING:</strong> {activeCard.enContext}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  speakMandarin(
                    `${activeCard.zhMain} ${activeCard.zhSub}`,
                    activeCard.id
                  )
                }
                className="flex-1 py-4 bg-cyber-yellow text-cyber-black rounded-xl font-mono font-extrabold text-sm hover:bg-yellow-400 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Volume2 className="w-5 h-5" />
                <span>🔊 PLAY MANDARIN VOICE ALOUD</span>
              </button>
              <button
                onClick={() => {
                  window.speechSynthesis?.cancel();
                  setActiveCard(null);
                }}
                className="py-4 px-6 bg-zinc-800 text-white rounded-xl font-mono font-bold text-xs hover:bg-zinc-700 cursor-pointer"
              >
                CLOSE CARD
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
