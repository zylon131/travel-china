export type Language = "en" | "zh" | "ja" | "ko" | "es" | "pt" | "it" | "fr";

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: {
      whyNeed: "Why You Need It",
      diagnose: "Take the Quiz",
      trial: "Inside the Book",
      faq: "FAQ",
      buyBtn: "Get the Guide ($19)",
    },
    hero: {
      tag: "DEPARTURE PROTOCOL: ACTIVE / VISA-FREE 2026",
      title1: "Heading to China?",
      title2: "Don't Land Blind.",
      subtitle: "China has built a cashless, hyper-connected digital ecosystem. Physical credit cards and cash are obsolete. Google Maps, Instagram, and Uber are walled off. To survive, you must set up your digital toolkit before your flight.",
      btnPdf: "DOWNLOAD_SURVIVAL_KIT.PDF",
      btnQuiz: "RUN_READINESS_TEST.EXE",
      boardingPass: "BOARDING PASS",
      unprepared: "UNPREPARED",
      prepared: "DIGITAL KIT ONBOARD",
      cancelled: "CANCELLED",
      verified: "VERIFIED",
      from: "FROM",
      to: "TO",
      seatNone: "SEAT: NONE",
      seatFirst: "SEAT: 1A / FIRST",
      bad1: "Payment: Linked Visa failed (rejected by vendor)",
      bad2: "Nav: Google Maps coordinates shifted 500m",
      bad3: "Web: Instagram/Gmail completely walled off",
      good1: "WeChat/Alipay correctly linked to foreign card",
      good2: "English DiDi configured with payments",
      good3: "VPN eSIM setup. IG & Gmail run instantly",
    },
    pain: {
      tag: "// CHINA TRAVEL OBSTACLES",
      title: "Four Digital Walls That Block Foreigners",
      subtitle: "China is highly futuristic, safe, and efficient—but ONLY if you possess the digital keys. Without them, simple tasks become gridlocked.",
      p1: {
        title: "THE CASHLESS WALL",
        desc: "Cash is obsolete in China. From high-end shopping centers to street-side dumpling stalls, merchants rely entirely on WeChat Pay and Alipay QR codes. International plastic cards won't be swiped anywhere."
      },
      p2: {
        title: "THE TRANSIT MYSTERY",
        desc: "Google Maps coordinates suffer from a shifting offset (GCJ-02), showing streets in the wrong locations. Hailing a taxi on the street is a thing of the past—everything is booked on local apps (DiDi)."
      },
      p3: {
        title: "THE BLOCKED WEB",
        desc: "Your access to Google, Instagram, WhatsApp, and email is severed the second you connect to domestic Chinese networks, unless you have configured specialized eSIMs or VPNs beforehand."
      },
      p4: {
        title: "THE BOOKING MAZE",
        desc: "Purchasing train tickets or boarding regional transit requires passport real-name registry. Even worse, many domestic budget hotels are legally restricted from hosting foreign passport holders."
      }
    },
    quiz: {
      tag: "// INTERACTIVE EVALUATION",
      title: "China Digital Readiness Test",
      run: "RUN: DIGITAL_SURVIVAL_DIAGNOSTIC.SH",
      desc: "Take this 3-question diagnostic test. We will simulate real scenarios you will face in Shanghai, Beijing, or Chengdu, and calculate your digital readiness score.",
      startBtn: "EXECUTE DIAGNOSTIC",
      seq: "SEQ",
      loading: "Analyzing your digital survival profile...",
      viewDetails: "[ VIEW DETAILED READOUT ]",
      emperorTitle: "Digital Emperor (90% Ready)",
      emperorDesc: "Impressive! You know how China's digital economy works. You're mostly prepared, but there are still subtle pitfalls (e.g. passport real-name train bookings and hotel restrictions). Our guide will fill in the remaining gaps.",
      strugglingTitle: "Struggling Backpacker (50% Ready)",
      strugglingDesc: "You will survive, but with massive friction and waste of time. You'll likely get stuck at checkout registers, experience coordinate offset on maps, and wait hours for taxis. You should download the guide to patch these issues.",
      strandedTitle: "Completely Stranded (10% Ready)",
      strandedDesc: "🚨 WARNING: You are highly likely to get stranded on day one. You won't be able to buy food, navigate streets, or get a ride. Do not fly without setting up your WeChat/Alipay, DiDi, and eSIM. Our guide is an absolute must-have for you.",
      reportTitle: "DIAGNOSTIC REPORT GENERATED",
      reportScore: "READINESS SCORE",
      readoutTag: "// SYSTEM READOUT METADATA",
      scenario: "SCENARIO",
      feedback: "FEEDBACK",
      buyKit: "ACQUIRE_SURVIVAL_GUIDE.PDF",
      reboot: "REBOOT_TEST.SH",
      q1: {
        q: "How do you plan to pay a street vendor for a 3 RMB ($0.4) bottle of water?",
        a: "Hand them a 100 RMB physical cash bill.",
        b: "Swipe my international Visa/Mastercard.",
        c: "Scan their QR code via WeChat Pay or Alipay linked to my foreign card.",
        af: "Many street vendors have no physical cash drawers and cannot give change. You'll likely be turned away.",
        bf: "Visa/Mastercard is strictly rejected by 99% of local street vendors and small restaurants.",
        cf: "Perfect! Foreign credit cards can now be linked to WeChat Pay & Alipay. This is how 99% of transactions happen."
      },
      q2: {
        q: "You step out of the metro and need to find your hotel, but Google Maps shows a blank screen. What is your plan?",
        a: "Ask random locals in English for street directions.",
        b: "Rely on standard Apple Maps without adjusting any settings.",
        c: "Open Apple Maps or use Amap/Baidu Map with pre-setup bilingual overlays.",
        af: "English is not widely spoken on the streets of China. You'll face major communication barriers.",
        bf: "Apple Maps works, but because of China's GCJ-02 coordinate shift, your GPS indicator will be offset by 500 meters.",
        cf: "Excellent! You need to know the GCJ-02 offset rules and use local mapping APIs or offline packages to navigate."
      },
      q3: {
        q: "It's 10:30 PM, raining in Shanghai, and you need to get back to your hotel. How will you hail a taxi?",
        a: "Stand on the street corner and wave down passing green/yellow taxicabs.",
        b: "Open my pre-configured English DiDi app and order a ride.",
        c: "Call a hotel concierge or look for an Uber app.",
        af: "Cabs will ignore you. 95% of taxis are pre-booked via ride-hailing apps. They do not pick up street waves anymore.",
        bf: "Spot on! You must configure DiDi (China's Uber) with your foreign mobile number and card before arriving.",
        cf: "Uber does not operate in China. Hotel concierges can help, but they cannot hail cabs on the street for you."
      }
    },
    showcase: {
      tag: "// HANDBOOK METADATA",
      title: "The Digital Blueprint to Survive & Thrive",
      desc: "Don't spend your vacation standing at registers feeling embarrassed, or lost in side alleys. This guide packs 3 years of local AI landing experience and travel hacks into a 60-page handbook.",
      assetsHeader: "// ADDITIONAL_ASSETS_INCLUDED:",
      asset1: "Bilingual Chinese Emergency Cards",
      asset2: "Active eSIM Provider Direct Referrals",
      asset3: "Pre-arrival eSIM vs VPN Comparison Sheet",
      asset4: "Lifetime Updates (free re-download)",
      buyBtn: "ACQUIRE_SURVIVAL_KIT.PDF",
      c1: {
        title: "Ch 1: Payment & QR Setup",
        desc: "Linking Visa/Mastercards directly to WeChat Pay and Alipay. Passport identity checks and bypassing register card decline codes."
      },
      c2: {
        title: "Ch 2: Transport & Bullet Rail",
        desc: "Setting up English DiDi (hailing cabs), buying bullet train tickets via 12306 English app, and map GPS coordinates shift offset bypass."
      },
      c3: {
        title: "Ch 3: Firewall & Internet Access",
        desc: "The absolute best eSIM packages for roaming, pre-arrival VPN configurations, and local public Wi-Fi SMS verification code hacks."
      },
      c4: {
        title: "Ch 4: Digital Customs & Emergency",
        desc: "Configuring photo translators, handling hotel foreign-registration restrictions, and offline payment back up protocols."
      }
    },
    preview: {
      tag: "// FREE SAMPLE ACCESS",
      title: "Read a Few Pages First",
      header: "THE FOREIGNER'S SURVIVAL GUIDE TO CHINA TRAVEL // PREVIEW_MODE",
      footer: "PAGE {num} OF 60 // PREVIEW_END",
      t1: "01: Cashless Reality",
      t2: "02: Setting up Alipay",
      t3: "03: Payment Pitfalls",
      p1: {
        title: "1.1 Welcome to the cashless future",
        text1: "The moment you step out of Pudong Airport or Capital Airport, you will notice something peculiar: nobody is holding wallets, and cash drawers are non-existent. Over 98% of local transactions—from a subway ticket to a $10,000 hotel suite—are completed by scanning a QR code using either WeChat Pay (微信支付) or Alipay (支付宝).",
        warn: "\"But cash is legal tender in China, right?\" Yes, but many merchants do not keep physical cash registers or have change (零钱). Handing a 100 RMB bill for a 5 RMB bottle of water will often result in a polite rejection because they literally do not have change to return to you.",
        text2: "If you try to swipe a physical Visa or Mastercard, you'll be greeted with blank stares. Only major international hotel chains and high-end duty-free shops have terminals that can process international credit cards. For the rest of your trip, you are digitally locked out unless you configure mobile payment."
      },
      p2: {
        title: "1.2 The 5-Step Guide to Alipay International",
        text1: "Fortunately, since late 2023, both Alipay and WeChat Pay allow foreigners to bind international credit cards (Visa, Mastercard, Discover, Diners Club) without having a Chinese bank account or local phone number.",
        s1: "Download the Alipay App from App Store or Google Play.",
        s2: "Sign up using your international mobile number (select country code).",
        s3: "Tap 'Me' ➔ 'Bank Cards' ➔ 'Add Card'.",
        s4: "Enter Visa/Mastercard. Verify via bank SMS OTP.",
        s5: "Verify your identity under 'Profile' using your passport.",
        text2: "We highly recommend doing this before you fly. Some banks block the initial linking attempt thinking it's fraud, requiring you to call your card provider to authorize the link."
      },
      p3: {
        title: "1.3 Understanding Merchant QR vs Personal QR",
        text1: "When paying in China, there are two distinct ways transaction codes work, and knowing the difference will save you from major checkout line embarrassment:",
        check1: "Merchant Code (Scan Code): The shop scans your screen QR. This works 100% of the time with international credit cards.",
        check2: "Personal Code (Scan Merchant): You scan a printed sticker. If the vendor hasn't upgraded to a business account, linked foreign cards may fail.",
        tip: "The PM Pro-Tip: Always have both WeChat Pay and Alipay linked to two different card brands (e.g. Alipay + Visa, WeChat + Mastercard). If one fails at a local stall, the other usually goes through."
      }
    },
    checkout: {
      tag: "// SECURE_CHECKOUT.EXE",
      desc: "Interactive PDF Guide + Printable Cheat Sheets",
      email: "Email Address",
      card: "Card Details (Simulator)",
      terms: "SSL Secured Transaction Simulator.",
      btnPay: "AUTHORIZE_PAYMENT ($19.00)",
      loading: "Processing Payment",
      loadingSub: "Connecting to bank server simulator...",
      success: "Payment Successful!",
      successSub: "Thank you for your purchase. A copy has been simulated sent to {email}. Download your kit directly below.",
      btnDownload: "DOWNLOAD_SURVIVAL_GUIDE.TXT",
      btnClose: "Close Window",
    },
    faq: {
      tag: "// FAQ PROTOCOL",
      title: "Frequently Asked Questions",
      f1: {
        q: "Can I just rely on physical cash for my trip?",
        a: "Technically yes, but practically no. Cash is legally accepted, but because 99% of locals use QR codes, street stalls and small shops do not have change for large bills. You will experience massive friction trying to buy low-cost items, and some vending machines or self-checkout stalls accept ZERO cash."
      },
      f2: {
        q: "Will my international roaming eSIM bypass the Firewall?",
        a: "Yes! If you purchase a roaming eSIM (like Airalo or Nomad) or use your home carrier's roaming plan, your internet traffic is routed back to your home country. This means you CAN access Google, WhatsApp, and Instagram without a VPN. However, if you connect to local hotel Wi-Fi, those sites will be blocked unless you have pre-installed a working VPN."
      },
      f3: {
        q: "Why is Google Maps inaccurate in China?",
        a: "Due to national security regulations, China uses the GCJ-02 coordinate system, which applies an intentional, shifting offset to GPS coordinates. Google Maps has not aligned its satellite images with this offset, resulting in a 'GPS shift' where your pin is shown 300 to 500 meters away from where you actually are. We recommend using Apple Maps or local apps like Amap (高德地图)."
      },
      f4: {
        q: "What should I do if my credit card fails to bind to Alipay?",
        a: "Most card binding failures are due to your home bank's automated fraud protection systems flagging a Chinese payment app. Simply call your bank's customer service number, tell them you are traveling to China, and ask them to authorize the link to Alipay/WeChat Pay."
      }
    },
    footer: {
      slogan: "Empowering overseas tourists to bypass the cashless payment wall, navigate GCJ-02 coordinates, and travel China with ease.",
      disclaimer: "Disclaimer: This site is independent. We are NOT associated with Tencent (WeChat), Alibaba (Alipay), Trip.com, or the Ministry of Culture and Tourism of China. All trademarks belong to their respective owners.",
      copyright: "© 2026 ChinaDigitalSurvival. All rights reserved.",
      craft: "Crafted via ⚡ Vibe Coding by PM阿强."
    }
  },
  zh: {
    nav: {
      whyNeed: "为什么需要",
      diagnose: "生存测试",
      trial: "在线试读",
      faq: "常见问题",
      buyBtn: "获取指南 ($19)",
    },
    hero: {
      tag: "出发协议：已激活 / 2026 免签政策支持",
      title1: "计划去中国旅游？",
      title2: "别当“数字盲”。",
      subtitle: "中国已建成高度无现金化的数字生态。实体信用卡与现金几乎绝迹。谷歌地图、Instagram 和网约车被屏蔽。要想无障碍旅行，您必须在起飞前配置好数字生存工具包。",
      btnPdf: "下载_生存指南.PDF",
      btnQuiz: "运行_测试程序.EXE",
      boardingPass: "登机牌",
      unprepared: "无准备游客",
      prepared: "数字包已载入",
      cancelled: "已取消",
      verified: "已验证",
      from: "出发地",
      to: "目的地",
      seatNone: "座位: 无",
      seatFirst: "座位: 1A / 头等舱",
      bad1: "支付：绑定外卡失败（被商户拒绝）",
      bad2: "导航：谷歌地图坐标偏移 500 米",
      bad3: "网络：Instagram/Gmail 彻底被屏蔽",
      good1: "微信/支付宝成功绑定国际信用卡",
      good2: "英文版滴滴配置完成并关联支付",
      good3: "免墙 eSIM 已开通，IG/Gmail 瞬间流畅运行",
    },
    pain: {
      tag: "// 赴华旅游主要障碍",
      title: "阻碍外国游客的四大数字之墙",
      subtitle: "中国极为先进、安全且高效——但前提是您必须拥有开启它的数字钥匙。否则，寸步难行。",
      p1: {
        title: "无现金之墙",
        desc: "现金在中国基本绝迹。从大型商场到街头煎饼摊，均完全使用微信和支付宝扫码收款。除了五星级酒店，任何地方都不支持直接刷 Visa/Mastercard 实体外卡。"
      },
      p2: {
        title: "交通出行迷局",
        desc: "谷歌地图在国内有严重的 GCJ-02 坐标偏移，指示完全错位。街头扬招出租车也已过时，所有的司机都在用本地软件（滴滴）接收网络预订。"
      },
      p3: {
        title: "网络网络封锁",
        desc: "一旦连接到中国本地网络，谷歌、Instagram、WhatsApp 和邮箱将被彻底屏蔽，除非您在出发前就配置好了特定的漫游 eSIM 或 VPN 科学上网。"
      },
      p4: {
        title: "预订与住宿迷宫",
        desc: "购买高铁票或搭乘城际交通必须进行护照实名认证。更糟的是，国内许多廉价连锁酒店在法律上被限制接待外宾，一旦预订出错将无处投宿。"
      }
    },
    quiz: {
      tag: "// 互动评估",
      title: "赴华数字生存指数测试",
      run: "运行: DIGITAL_SURVIVAL_DIAGNOSTIC.SH",
      desc: "回答这 3 个诊断问题。我们将模拟您在上海、北京或成都将面临的真实场景，并为您算出您的数字就绪得分。",
      startBtn: "执行诊断程序",
      seq: "编号",
      loading: "正在分析您的数字生存指数...",
      viewDetails: "[ 查看详细分析报告 ]",
      emperorTitle: "数字大帝 (已准备 90%)",
      emperorDesc: "太棒了！您非常了解中国数字生态的运作方式。您已做好基本准备，但仍有一些隐形陷阱（如高铁实名注册和酒店外宾限制）。我们的指南将帮您查漏补缺。",
      strugglingTitle: "挣扎的背包客 (已准备 50%)",
      strugglingDesc: "您能勉强生存，但会面临巨大的摩擦并浪费宝贵的时间。您可能会在收银台结账时卡住、在地图上迷路、甚至等几个小时打不到车。建议下载指南修补这些漏洞。",
      strandedTitle: "彻底瘫痪 (已准备 10%)",
      strandedDesc: "🚨 警告：您极有可能在第一天就寸步难行。您将无法买饭、找不到路、打不到车。千万别在没配置微信/支付宝、滴滴和 eSIM 之前起飞！我们的指南是您的救命稻草。",
      reportTitle: "诊断报告已生成",
      reportScore: "就绪得分",
      readoutTag: "// 系统诊断元数据",
      scenario: "情景",
      feedback: "诊断反馈",
      buyKit: "获取_生存攻略.PDF",
      reboot: "重启_测试.SH",
      q1: {
        q: "在街头小摊买一瓶 3 元的矿泉水，您打算怎么付钱？",
        a: "递给他们一张 100 元人民币现金纸币。",
        b: "刷我的 Visa/Mastercard 国际信用卡。",
        c: "用微信或支付宝扫他们的二维码付款（绑定了外卡）。",
        af: "许多街头商贩没有实体零钱盒，找不开零钱，您可能会被拒绝交易。",
        bf: "99% 的街头小贩和普通餐馆根本不支持刷 Visa/Mastercard 外卡。",
        cf: "完全正确！现在可以绑定国际信用卡到微信/支付宝，99% 的本地消费都是这样完成的。"
      },
      q2: {
        q: "走出地铁准备找酒店，发现谷歌地图一片空白，您怎么办？",
        a: "在街头用英语向路人打听酒店位置。",
        b: "直接使用苹果自带地图，不做任何调整。",
        c: "打开苹果地图或本地高德/百度地图，并使用中英对照指引。",
        af: "中国街头英语普及率有限，您将面临严重的沟通障碍。",
        bf: "苹果地图能用，但因为坐标偏移，您的 GPS 定位会有约 500 米的偏差错位。",
        cf: "聪明！您需要了解 GCJ-02 偏移并使用正确的地图工具或中英离线包导航。"
      },
      q3: {
        q: "晚上 10:30，上海下着雨，您需要回酒店，该怎么打车？",
        a: "站在十字路口朝路过的绿/黄色出租车招手。",
        b: "打开预先配置好的英文版滴滴软件叫车。",
        c: "给酒店前台打电话或者找 Uber 软件。",
        af: "司机不会停。95% 的空车都是网络预约好的，现在基本不再接受路边扬招。",
        bf: "非常对！起飞前必须用海外手机号和信用卡配置好滴滴（DiDi）。",
        cf: "中国境内不支持 Uber。酒店前台可以帮忙，但他们无法帮你招街上的车。"
      }
    },
    showcase: {
      tag: "// 手册元数据",
      title: "助您畅行中国的数字生存地图",
      desc: "别让您的假期花在收银台前的尴尬等待，或迷失在小巷深处。本攻略凝聚了 3 年的本地 AI 落地实战经验与出行秘诀，总结成 60 页的精华手册。",
      assetsHeader: "// 随附数字资产：",
      asset1: "中英双语应急求助卡片",
      asset2: "精选网络 eSIM 优惠包直链",
      asset3: "出发前 eSIM 与 科学上网对比指南",
      asset4: "终身免费更新（免费重新下载）",
      buyBtn: "获取_生存攻略.PDF",
      c1: {
        title: "第一章：移动支付扫码通关",
        desc: "国际信用卡绑定微信/支付宝保姆级教程，护照实名认证跳坑，以及支付失败的应对方案。"
      },
      c2: {
        title: "第二章：交通网约车与高铁",
        desc: "英文版滴滴配置与外卡付款，官方 12306 英文购票指引，高德/百度地图防偏移秘笈。"
      },
      c3: {
        title: "第三章：翻越防火墙与网络连接",
        desc: "最划算的免墙漫游 eSIM 推荐，出发前必备 VPN 配置，解决国内公共 Wi-Fi 验证码收发难题。"
      },
      c4: {
        title: "第四章：外宾住宿与紧急急救",
        desc: "如何避开不支持外宾的“内宾酒店”陷阱，配置拍照翻译软件，以及写给司机的中英对照急救卡。"
      }
    },
    preview: {
      tag: "// 免费样章试读",
      title: "买前先读几页",
      header: "外国人赴华旅游生存指南 // 在线试读模式",
      footer: "当前第 {num} 页 / 共 60 页 // 试读结束",
      t1: "01: 支付壁垒",
      t2: "02: 配置支付宝",
      t3: "03: 支付踩坑",
      p1: {
        title: "1.1 欢迎来到无现金未来",
        text1: "当您步出浦东机场或首都机场的那一刻，您会发现一件奇特的事：没有人拿钱包，收款抽屉基本见不到。超过 98% 的本地交易——无论是买张地铁票还是预订 10,000 元的套房——都是通过扫码微信支付或支付宝完成的。",
        warn: "“但是现金不是法定货币吗？”是的，但在中国大部分商贩根本不保留实体找零。拿一张 100 元去买 5 元的矿泉水常常会被拒绝，因为他们实在没有零钱找给你。",
        text2: "如果您尝试刷 Visa 或 Mastercard 实体信用卡，迎接您的通常是无助的目光。只有大型跨国酒店和高档免税店才有外卡 POS 机。在余下的行程里，除非配置手机扫码，否则您将被关在交易大门之外。"
      },
      p2: {
        title: "1.2 支付宝国际版绑定 5 步走",
        text1: "所幸，从 2023 年底开始，支付宝和微信支付允许外国游客直接绑定国际信用卡（Visa、Mastercard、Discover、Diners Club），无需中国本地银行账户和国内手机号。",
        s1: "在 App Store 或 Google Play 下载 Alipay App。",
        s2: "选择您的国家代码并输入手机号进行注册。",
        s3: "点击 'Me' ➔ 'Bank Cards' ➔ 'Add Card'。",
        s4: "输入您的卡号信息，通过银行短信验证码验证。",
        s5: "在 'Profile'（个人资料）中上传护照进行实名认证（200元以上消费必备）。",
        text2: "强烈建议在出发前完成绑定。部分境外银行会因防欺诈机制拦截绑定，您可能需要给银行客服打电话授权才能绑定成功。"
      },
      p3: {
        title: "1.3 认准商户收款码与个人收款码",
        text1: "在中国结账时，付款扫码分为两种，分清它们能帮您避免收银台前的大写的尴尬：",
        check1: "商家收款码（扫我的码）：商家用红外枪扫您手机上的付款码。这种付款方式 100% 支持国际信用卡付款。",
        check2: "个人收款码（我扫商家的贴纸）：您需要用手机去扫收银台上的二维码贴纸。因为这是个人对个人的转账，如果商家没升级商户号，绑定外卡的付款通常会失败。",
        tip: "PM避坑贴士：起飞前一定要把微信和支付宝分别绑定两张不同品牌的外卡（例如支付宝绑 Visa，微信绑 Mastercard），一旦其中一个卡死，另一个通常可以救急。"
      }
    },
    checkout: {
      tag: "// 安全收银台.EXE",
      desc: "交互式电子书攻略 + 中英双语打印便携卡",
      email: "电子邮箱地址",
      card: "银行卡信息 (模拟支付)",
      terms: "SSL 256位加密交易模拟保护。",
      btnPay: "授权并模拟付款 ($19.00)",
      loading: "正在处理模拟支付",
      loadingSub: "正在连接虚拟银行服务器...",
      success: "支付成功！",
      successSub: "感谢您的购买。已向邮箱 {email} 发送模拟副本。您可在下方直接点击下载攻略包。",
      btnDownload: "下载生存攻略攻略包 (.TXT)",
      btnClose: "关闭窗口",
    },
    faq: {
      tag: "// 常见问题协议",
      title: "常见问题答疑",
      f1: {
        q: "我在中国能完全依赖现金吗？",
        a: "理论上可以，实际上非常痛苦。因为绝大部分中国商贩习惯了无现金支付，他们手里根本没有找零。去便利店或地摊用大额现金买低价商品会被卡住，很多自助机甚至根本不设入币口。"
      },
      f2: {
        q: "我的国际漫游卡/eSIM能免墙翻墙吗？",
        a: "可以！如果您使用海外运营商的漫游网络或购买出海漫游 eSIM，数据会路由回您的母国，因此可以直接无阻访问 Google、WhatsApp 等。但一旦您连上酒店的国内本地 Wi-Fi，网络墙依然会生效，所以必备 VPN 依然需要安装。"
      },
      f3: {
        q: "为什么谷歌地图在国内偏移严重？",
        a: "根据中国测绘法，国内所有地图服务都使用了 GCJ-02 地图坐标系统（进行了加密偏移）。谷歌地图没有完全匹配国内加密机制，导致卫星图与实际路线错位 300-500 米。建议直接用苹果地图或本地高德地图导航。"
      },
      f4: {
        q: "外卡绑定微信/支付宝老是失败怎么办？",
        a: "这通常是由于您的海外发卡行（如 Chase、Citi、HSBC）的风险控制机制将突发绑定的中国软件拦截了。请拨打卡片背面的客服电话，向客服报备您即将前往中国旅行，即可解除拦截限制。"
      }
    },
    footer: {
      slogan: "帮助海外游客逾越无现金围墙，避开地图偏移，轻松畅游中国数字化时代。",
      disclaimer: "免责声明：本网站完全独立运行，并非腾讯（微信）、阿里巴巴（支付宝）、携程（Trip.com）或中国文旅部官方合作网站。所有注册商标均归其各自所有者所有。",
      copyright: "© 2026 ChinaDigitalSurvival. 保留所有权利。",
      craft: "由 PM阿强 通过 ⚡ Vibe Coding 精心打造。"
    }
  },
  // Supporting translation templates for the other 6 languages in abbreviated form
  ja: {
    nav: { whyNeed: "必要性", diagnose: "診断テスト", trial: "立ち読み", faq: "FAQ", buyBtn: "ガイドを入手 ($19)" },
    hero: {
      tag: "出発プロトコル: 有効 / 2026年免税・免ビザ対応",
      title1: "中国へ旅行しますか？",
      title2: "「デジタル難民」になるな。",
      subtitle: "中国はキャッシュレス化が進んだデジタル社会です。クレジットカードや現金はほぼ使えません。GoogleマップやInstagram、タクシー配車アプリも遮断されます。事前にデジタルサバイバルキットを用意しましょう。",
      btnPdf: "サバイバルガイド.PDF",
      btnQuiz: "診断テスト.EXE",
      boardingPass: "搭乗券",
      unprepared: "準備不足の旅行者",
      prepared: "デジタルキット読込済",
      cancelled: "キャンセル",
      verified: "検証済",
      from: "出発地",
      to: "目的地",
      seatNone: "座席: なし",
      seatFirst: "座席: 1A / ファースト",
      bad1: "決済: 海外カード連携失敗 (店舗より拒否)",
      bad2: "位置: Google MapsのGPSが500mズレる",
      bad3: "通信: InstagramやGmailが完全遮断",
      good1: "WeChat/Alipayに海外カードを正常に連携",
      good2: "配車アプリDiDi(英語版)の設定完了",
      good3: "規制対象外eSIMを設定しIG/Gmailが即座に起動",
    },
    pain: {
      tag: "// 中国旅行におけるデジタル障壁",
      title: "外国人旅行者を阻む4つの「デジタルの壁」",
      subtitle: "中国は非常に未来的で安全、そして効率的です。ただし、デジタルキーを持っている場合に限ります。",
      p1: { title: "キャッシュレスの壁", desc: "中国では現金は使われません。屋台からデパートまで微信や支付宝のQRコードを使用します。一般の小売店ではVisa/Mastercardは一切使えません。" },
      p2: { title: "交通移動の謎", desc: "Google Mapsは中国の暗号化(GCJ-02)によりGPS座標が500mズレます。また、タクシーはアプリ(DiDi)予約が基本で流しのタクシーは捕まりません。" },
      p3: { title: "インターネット規制", desc: "中国国内ネットワークに接続した瞬間、Google、Instagram、WhatsAppなどは遮断されます。出発前にeSIMやVPNの設定が必要です。" },
      p4: { title: "予約と宿泊の迷路", desc: "新幹線のチケット購入や地方都市のホテル宿泊にはパスポートの実名登録が必要です。外国人が宿泊できない宿も多いため注意が必要です。" }
    },
    quiz: {
      tag: "// インタラクティブ診断",
      title: "中国デジタル対応力テスト",
      run: "RUN: DIGITAL_SURVIVAL_DIAGNOSTIC.SH",
      desc: "3つの質問に答え、中国旅行におけるデジタルサバイバルスコアを測定しましょう。",
      startBtn: "診断を開始する",
      seq: "番号",
      loading: "デジタル対応力を分析中...",
      viewDetails: "[ 詳細なレポートを表示 ]",
      emperorTitle: "デジタル皇帝 (準備率90%)",
      emperorDesc: "素晴らしい！中国のデジタルエコシステムを完璧に理解しています。ほとんどの準備は整っていますが、新幹線の実名登録や外国人の宿泊制限など、一部の罠にはご注意ください。",
      strugglingTitle: "苦戦するバックパッカー (準備率50%)",
      strugglingDesc: "どうにか生き延びることはできますが、多大な時間と労力をロスします。会計時や移動に手間取り、タクシーを数時間待つこともあります。ガイドの入手をお勧めします。",
      strandedTitle: "完全な立ち往生 (準備率10%)",
      strandedDesc: "🚨 警告：旅行初日に食事すら買えない危険があります。事前にWeChat/Alipay、DiDi、eSIMなどの設定を行ってください。本ガイドはあなたにとって命綱となります。",
      reportTitle: "診断レポートが生成されました",
      reportScore: "準備スコア",
      readoutTag: "// システム診断ログ",
      scenario: "シナリオ",
      feedback: "フィードバック",
      buyKit: "サバイバルガイド.PDFを入手",
      reboot: "テストを再起動.SH",
      q1: {
        q: "街の売店で3元(約60円)のミネラルウォーターを買う際、どのように支払いますか？",
        a: "100元札を渡す。",
        b: "海外のVisa/Mastercardで支払う。",
        c: "海外カードを連携したWeChat PayまたはAlipayのQRコードを提示する。",
        af: "ほとんどの売店は現金の引き出しを持っておらず、お釣りがないため断られる可能性が高いです。",
        bf: "VisaやMastercardは、99%の売店や一般レストランでは使用できません。",
        cf: "正解！現在、海外のクレジットカードを微信や支付宝に登録できます。現地の99%の決済はこれで行われます。"
      },
      q2: {
        q: "駅を出てホテルに向かう途中、Google Mapsが真っ白に。どうしますか？",
        a: "英語で通行人に道を聞く。",
        b: "iPhoneの標準マップをそのまま使う。",
        c: "標準マップを調整して使用するか、現地対応マップ(高徳/百度)を使用する。",
        af: "中国国内では英語の普及率が限定的なため、言葉の壁にぶつかります。",
        bf: "標準マップは動きますが、座標ズレの影響で現在地から500m程度ズレた場所を指します。",
        cf: "大正解！中国特有のGPSズレ(GCJ-02)への対応と、英語併記の現地マップが必要です。"
      },
      q3: {
        q: "午後10:30、雨の上海でホテルに戻りたい。どのようにタクシーを呼びますか？",
        a: "道端で空車タクシーに手を振る。",
        b: "設定済みの英語版DiDiアプリで配車する。",
        c: "ホテルのフロントに電話するか、Uberを開く。",
        af: "タクシーは止まりません。空車の95%はアプリ予約車で、路上の呼びかけには応じません。",
        bf: "その通り！出発前に海外番号とクレジットカードをDiDi(中国版Uber)に登録しておく必要があります。",
        cf: "中国国内ではUberは使えません。ホテルの手助けも限界があります。"
      }
    },
    showcase: {
      tag: "// ハンドブックメタデータ",
      title: "中国デジタルサバイバルガイドブック",
      desc: "レジ前でのストレスや裏路地での迷子で、せっかくの休日を台無しにしないでください。現地のAI・デジタルに精通したPMがまとめた60ページのサバイバル知識です。",
      assetsHeader: "// 付属品一式：",
      asset1: "二言語表記の緊急ヘルプカード",
      asset2: "おすすめのeSIMリンク",
      asset3: "出発前のeSIM vs VPN比較ガイド",
      asset4: "生涯無料アップデート対応",
      buyBtn: "サバイバルガイド.PDFを入手",
      c1: { title: "第1章: モバイル決済QRコード", desc: "海外クレカのWeChat/Alipay登録手順、実名登録チェック、支払エラー回避策。" },
      c2: { title: "第2章: 交通網アプリと新幹線", desc: "英語版DiDiの使い方、新幹線12306予約手順、現地地図のズレ回避法。" },
      c3: { title: "第3章: ファイアウォールとネット通信", desc: "規制をバイパスするおすすめ漫遊eSIM、出発前VPN設定、公衆Wi-Fiの認証法。" },
      c4: { title: "第4章: 外国人宿泊と緊急時", desc: "外国人宿泊制限ホテルの回避、カメラ翻訳アプリ設定、タクシー運転手用緊急カード。" }
    },
    preview: {
      tag: "// 立ち読みサンプル",
      title: "購入前に数ページ読む",
      header: "中国デジタルサバイバルガイド // プレビューモード",
      footer: "全60ページ中 {num} ページ目 // プレビュー終了",
      t1: "01: キャッシュレス",
      t2: "02: アリペイ設定",
      t3: "03: トラブル対応",
      p1: {
        title: "1.1 キャッシュレス化された未来へようこそ",
        text1: "空港に降り立った瞬間、財布を持っている人が誰もいないことに気づくでしょう。地下鉄から高級ホテルまで、すべての取引の98%以上は微信(WeChat Pay)または支付宝(Alipay)で行われます。",
        warn: "「現金は法定通貨では？」はい、ですがお釣りがないため断られるケースが多発しています。100元札で5元の水を買うのは困難です。",
        text2: "Visa/Mastercardの物理カードを出しても困惑されるだけです。事前設定を行わない限り、デジタル的に締め出されることになります。"
      },
      p2: {
        title: "1.2 Alipay海外登録5ステップ",
        text1: "2023年後半より、海外のクレジットカードを登録して決済できるようになりました。現地口座や国内電話番号は不要です。",
        s1: "AlipayアプリをApp Store/Google Playからダウンロード。",
        s2: "国番号を選択して電話番号でサインアップ。",
        s3: "『Me』➔『Bank Cards』➔『Add Card』を選択。",
        s4: "クレジットカード情報を入力し、OTP認証を行う。",
        s5: "パスポートを用いてプロフィールから本人確認を行う。",
        text2: "出発前の設定をお勧めします。不正検知により初回カード連携が弾かれる場合があるため、カード会社への連絡が必要になる場合があります。"
      },
      p3: {
        title: "1.3 店舗用QRと個人用QRの違い",
        text1: "決済のQR提示には2つの方式があり、仕組みが異なります：",
        check1: "店舗コード読み取り(被スキャン): レジの機械でスマホのQRを読み取ります。この場合は100%海外クレカが適用されます。",
        check2: "個人コード読み取り(スキャン): 店舗のステッカーをスキャンします。個人間送金扱いとなるため、外枠カード決済が弾かれる場合があります。",
        tip: "PMアドバイス: アリペイ(Visa)とWeChat(Mastercard)のように、2つの異なるブランドで連携しておくとトラブルに対応しやすくなります。"
      }
    },
    checkout: {
      tag: "// セキュアチェックアウト.EXE",
      desc: "インタラクティブPDF + 印刷用ヘルプカード",
      email: "メールアドレス",
      card: "クレジットカード情報 (シミュレーター)",
      terms: "SSL 256ビット暗号化決済シミュレーション保護",
      btnPay: "支払いを承認 ($19.00)",
      loading: "決済シミュレータ処理中",
      loadingSub: "仮想銀行サーバーへ接続中...",
      success: "決済成功！",
      successSub: "ご購入ありがとうございます。シミュレートされたコピーが {email} に送信されました。以下より直接ダウンロードできます。",
      btnDownload: "サバイバルガイドをダウンロード (.TXT)",
      btnClose: "ウィンドウを閉じる",
    },
    faq: {
      tag: "// FAQプロトコル",
      title: "よくあるご質問",
      f1: { q: "現金だけで旅行できますか？", a: "理論上は可能ですが、お釣りがないため支払いを断られることが多く、セルフレジ等は現金非対応のため実質不可能です。" },
      f2: { q: "海外eSIMで規制サイトにアクセスできますか？", a: "はい、ローミングeSIMのデータ通信は母国を経由するためGoogle等に接続可能です。ただし、ホテルのWi-Fi等に接続する場合はVPNが必要です。" },
      f3: { q: "なぜGoogleマップがズレるのですか？", a: "中国の法律(GCJ-02)に基づき地図に意図的なズレが適用されているためです。現地ではApple Mapsや高徳地図の使用を推奨します。" },
      f4: { q: "カード連携がエラーになる場合は？", a: "海外カード会社によるセキュリティ保護のための保留です。カード会社の裏面番号に連絡し、中国での利用を報備してください。" }
    },
    footer: {
      slogan: "海外旅行者がキャッシュレスの壁を乗り越え、地図ズレを克服し、中国を快適に旅できるように支援します。",
      disclaimer: "免責事項: 本サイトは独立した個人サイトであり、Tencent(微信)、Alibaba(支付宝)、Trip.com、または中国政府観光局等とは関係ありません。",
      copyright: "© 2026 ChinaDigitalSurvival. All rights reserved.",
      craft: "⚡ Vibe Coding by PM阿强"
    }
  },
  ko: {
    nav: { whyNeed: "필요성", diagnose: "진단 테스트", trial: "미리보기", faq: "FAQ", buyBtn: "가이드북 구매 ($19)" },
    hero: {
      tag: "출발 프로토콜: 활성화 / 2026 무비자 정책 대응",
      title1: "중국 여행을 계획 중이신가요?",
      title2: "‘디지털 미아’가 되지 마세요.",
      subtitle: "중국은 거의 완전한 캐시리스 디지털 생태계입니다. 실물 신용카드와 현금은 사용할 수 없습니다. 구글 맵, 인스타그램, 택시 앱 등이 차단되므로 출국 전 반드시 디지털 생태계 대비를 마쳐야 합니다.",
      btnPdf: "서바이벌 가이드.PDF",
      btnQuiz: "진단 테스트.EXE",
      boardingPass: "탑승권",
      unprepared: "준비가 안 된 여행자",
      prepared: "디지털 키 탑재 완료",
      cancelled: "취소됨",
      verified: "인증됨",
      from: "출발지",
      to: "목적지",
      seatNone: "좌석: 없음",
      seatFirst: "좌석: 1A / 퍼스트 클래스",
      bad1: "결제: 해외 카드 연동 실패 (가맹점 거절)",
      bad2: "지도: 구글 지도 GPS 500m 위치 오류",
      bad3: "네트워크: 인스타그램/지메일 접속 불가",
      good1: "위챗페이/알리페이에 해외 신용카드 정상 등록",
      good2: "영어 지원 디디(DiDi) 호출 앱 결제 연동",
      good3: "로밍 eSIM 개통으로 인스타그램/지메일 즉시 작동",
    },
    pain: {
      tag: "// 중국 여행 디지털 장애 요인",
      title: "외국인 여행자를 가로막는 4대 장벽",
      subtitle: "중국은 미래 지향적이고 편리하지만, 디지털 열쇠를 갖고 있는 경우에만 그렇습니다.",
      p1: { title: "캐시리스의 장벽", desc: "중국에서 현금은 거의 쓰이지 않습니다. 노점상부터 백화점까지 위챗페이와 알리페이 QR코드를 씁니다. 일반 상점에서는 해외 신용카드가 지원되지 않습니다." },
      p2: { title: "교통 이동의 수수께끼", desc: "구글 지도는 중국 고유 좌표계(GCJ-02) 탓에 GPS 핀이 500m가량 밀립니다. 길거리 택시는 앱 예약이 우선이라 잡을 수 없습니다." },
      p3: { title: "차단된 웹 환경", desc: "중국 현지 네트워크에 접속하는 즉시 구글, 지메일, 인스타그램 등이 차단됩니다. 출국 전에 eSIM이나 VPN을 반드시 세팅해야 합니다." },
      p4: { title: "기차표 및 예약의 늪", desc: "고속열차표 예매와 호텔 투숙에는 여권 실명 등록이 의무화되어 있으며, 외국인 투숙이 금지된 숙소가 많아 예약 실수가 발생하기 쉽습니다." }
    },
    quiz: {
      tag: "// 인터랙티브 자가 진단",
      title: "중국 디지털 준비성 진단",
      run: "RUN: DIGITAL_SURVIVAL_DIAGNOSTIC.SH",
      desc: "3가지 질문을 통해 실제 상하이, 베이징 등에서 겪게 될 가상 시나리오에 대한 대처 능력을 측정해 보세요.",
      startBtn: "진단 프로그램 실행",
      seq: "순서",
      loading: "디지털 준비도 분석 중...",
      viewDetails: "[ 상세 분석 리포트 보기 ]",
      emperorTitle: "디지털 황제 (준비율 90%)",
      emperorDesc: "훌륭합니다! 중국 디지털 생태계를 완벽하게 파악하고 계십니다. 다만 고속철도 실명 인증이나 외국인 숙박 제한 등의 세부 팁은 가이드북에서 확인하세요.",
      strugglingTitle: "불안한 배낭여행자 (준비율 50%)",
      strugglingDesc: "생존은 가능하지만 상당한 시간 낭비와 곤란을 겪게 될 것입니다. 결제 등록 오류, 지도 핀 오차 등으로 고생할 확률이 높습니다. 가이드를 읽어보세요.",
      strandedTitle: "고립무원 상태 (준비율 10%)",
      strandedDesc: "🚨 경고: 첫날 물 한 병도 사지 못하는 고립 상태가 될 가능성이 큽니다. 출국 전에 모바일 페이와 DiDi 앱, 로밍 eSIM을 구성하세요. 본 가이드는 필수입니다.",
      reportTitle: "진단 리포트 생성됨",
      reportScore: "준비성 점수",
      readoutTag: "// 시스템 진단 출력",
      scenario: "시나리오",
      feedback: "진단 피드백",
      buyKit: "서바이벌 가이드.PDF 구매",
      reboot: "테스트 재시작.SH",
      q1: {
        q: "길거리 가게에서 3위안(약 600원)짜리 물을 살 때 어떻게 내실 건가요?",
        a: "100위안짜리 지폐를 낸다.",
        b: "해외 Visa/Mastercard 신용카드를 낸다.",
        c: "해외 카드가 연동된 위챗페이 또는 알리페이 QR코드를 보여준다.",
        af: "대다수 길거리 상점은 거스름돈이 없어 현금 결제를 거부하는 경우가 다반사입니다.",
        bf: "Visa나 Mastercard 실물 카드는 99%의 길거리 상점과 일반 식당에서 결제할 수 없습니다.",
        cf: "정답! 현재 해외 신용카드를 위챗페이와 알리페이에 묶어 현지 QR 결제를 할 수 있습니다."
      },
      q2: {
        q: "지하철역을 나왔는데 호텔을 찾아야 합니다. 구글 지도가 먹통일 때의 대책은?",
        a: "지나가는 행인에게 영어로 길을 물어본다.",
        b: "아이폰 기본 지도 앱을 그대로 켠다.",
        c: "기본 지도를 세팅 후 쓰거나 현지 앱(고덕지도/바이두)을 연동해 사용한다.",
        af: "중국 현지인들의 영어 소통 능력은 제약적이라 소통이 매우 어렵습니다.",
        bf: "기본 지도는 켜지나 GPS 좌표 왜곡 때문에 위치 핀이 약 500m 엉뚱한 곳에 찍힙니다.",
        cf: "완벽한 해결책! 중국 지도 특유의 좌표 밀림(GCJ-02)을 보정하고 현지 지도를 준비해야 합니다."
      },
      q3: {
        q: "밤 10:30, 상하이에 비가 내립니다. 숙소로 돌아가기 위해 택시를 타려면?",
        a: "길거리에 서서 지나가는 노란색/초록색 택시를 향해 손을 흔든다.",
        b: "미리 설정한 영어 지원 DiDi 앱으로 호출한다.",
        c: "호텔 프런트에 전화하거나 Uber 앱을 켠다.",
        af: "택시는 그냥 지나칩니다. 빈 택시의 95% 이상은 앱 예약 호출을 받고 이동 중입니다.",
        bf: "맞습니다! 미리 해외 폰 번호와 카드를 DiDi(중국판 우버)에 바인딩해 두고 오셔야 합니다.",
        cf: "중국 국내에서는 우버가 작동하지 않습니다. 호텔의 도움도 한계가 있습니다."
      }
    },
    showcase: {
      tag: "// 가이드 파일 정보",
      title: "중국 여행 디지털 해결 가이드",
      desc: "결제 오류로 인한 레지 앞 대기나 골목길 미아로 소중한 휴가를 낭비하지 마세요. 중국 IT와 PM 경력자가 요약한 60페이지 서바이벌 노하우입니다.",
      assetsHeader: "// 패키지 포함 내역:",
      asset1: "중한/영한 긴급 통용 카드",
      asset2: "검증된 여행자용 eSIM 할인 링크",
      asset3: "출국 전 eSIM vs VPN 비교 가이드",
      asset4: "평생 무료 업데이트 (재다운로드 제공)",
      buyBtn: "서바이벌 가이드.PDF 구매",
      c1: { title: "제1장: 간편결제 등록 및 실무", desc: "해외 카드 연동, 여권 인증 실패 대처법 및 가맹점 결제 오류 방지 팁." },
      c2: { title: "제2장: 택시 호출 및 철도 예매", desc: "DiDi 가입과 카드 연동, 공식 12306 앱 기차표 예약 방법, GPS 오차 대응 지도법." },
      c3: { title: "제3장: 방화벽 우회 및 인터넷", desc: "가장 안정적인 해외 로밍 eSIM 혜택 비교, 출발 전 VPN 설정 가이드, 공용 와이파이 인증 팁." },
      c4: { title: "제4장: 외국인 전용 호텔 및 구급", desc: "외국인 제한 호텔 선별 방법, 카메라 사진 번역 설정, 기사를 위한 긴급 번역 카드." }
    },
    preview: {
      tag: "// 무료 샘플 읽기",
      title: "구매하기 전 엿보기",
      header: "외국인 중국 여행 서바이벌 가이드 // 온라인 시험판",
      footer: "전체 60페이지 중 {num} 페이지 // 미리보기 끝",
      t1: "01: 캐시리스 현실",
      t2: "02: 알리페이 등록",
      t3: "03: 결제 트러블",
      p1: {
        title: "1.1 캐시리스 세상에 오신 것을 환영합니다",
        text1: "공항에 도착하자마자 지갑을 든 사람이 아무도 없음을 알게 될 것입니다. 상점 98% 이상의 거래는 위챗페이와 알리페이 QR코드로 이뤄집니다.",
        warn: "“현금도 법정화폐잖아요?” 맞지만, 잔돈이 없어 결제를 거부당하는 사례가 많습니다. 100위안 지폐로 5위안짜리 생수를 사기는 매우 어렵습니다.",
        text2: "실물 Visa/Mastercard 신용카드를 내미는 것은 소용없습니다. 사전 모바일 간편결제 연동이 없으면 모든 거래에서 제외됩니다."
      },
      p2: {
        title: "1.2 알리페이 해외 카드 등록 5단계",
        text1: "2023년 말부터 해외 발급 신용카드를 현지 계좌 없이 연동할 수 있게 되었습니다.",
        s1: "App Store/Google Play에서 Alipay 앱을 다운로드합니다.",
        s2: "국가 번호를 선택하고 사용 중인 전화번호로 가입합니다.",
        s3: "『Me』➔『Bank Cards』➔『Add Card』를 탭합니다.",
        s4: "카드 번호를 입력하고 OTP 인증을 거칩니다.",
        s5: "여권 사진을 제출하여 신원 확인을 마칩니다.",
        text2: "출국 전에 등록해 두세요. 최초 연동 시 해외 카드사의 사기 방지 락(Lock)이 걸릴 수 있으므로 사전 통지가 필요할 수 있습니다."
      },
      p3: {
        title: "1.3 가맹점용 바코드와 개인용 바코드의 차이",
        text1: "중국에서 결제 시 QR을 스캔하는 주체에 따라 결제 여부가 나뉩니다.",
        check1: "가맹점용 바코드 (스캔받기): 매장 포스기로 내 폰의 결제 QR을 찍는 경우. 이 경우 100% 카드로 결제됩니다.",
        check2: "개인용 QR코드 (스캔하기): 매장에 붙어 있는 QR코드를 내가 스캔하는 경우. 개인 간 송금으로 처리되어 해외 카드 결제가 차단될 수 있습니다.",
        tip: "PM 가이드: 알리페이(Visa)와 위챗(Mastercard) 등 서로 다른 브랜드의 카드를 등록해 두면 문제 발생 시 즉각 대처할 수 있습니다."
      }
    },
    checkout: {
      tag: "// 안전한 결제창.EXE",
      desc: "서바이벌 가이드 PDF + 비상용 프린트 카드",
      email: "이메일 주소",
      card: "카드 정보 (가상 결제)",
      terms: "SSL 256비트 암호화 전송 보안 시뮬레이션 적용",
      btnPay: "결제 승인 ($19.00)",
      loading: "결제 진행 중",
      loadingSub: "가상 결제 네트워크 연결 중...",
      success: "결제 완료!",
      successSub: "구매해 주셔서 감사합니다. 가상 사본이 {email} 이메일로 전송되었습니다. 아래에서 다운로드 가능합니다.",
      btnDownload: "가이드북 다운로드 (.TXT)",
      btnClose: "창 닫기",
    },
    faq: {
      tag: "// FAQ 프로토콜",
      title: "자주 묻는 질문",
      f1: { q: "현금만 가지고 여행해도 되나요?", a: "원칙적으로는 되지만 가맹점 거스름돈 부족 등으로 실제 거래에서 거부당할 확률이 매우 높아 불가능에 가깝습니다." },
      f2: { q: "해외 로밍 eSIM으로 구글 접속이 되나요?", a: "네, 해외 망을 경유해 데이터가 흐르므로 구글이나 인스타그램 접속이 가능합니다. 단, 호텔 와이파이 연결 시에는 VPN이 있어야 우회됩니다." },
      f3: { q: "왜 구글 지도가 어긋나 보이나요?", a: "중국 측량법상 위치 정보에 암호화 왜곡(GCJ-02)이 적용되었기 때문입니다. 현지에서는 애플 지도나 고덕지도를 사용하길 권장합니다." },
      f4: { q: "해외 카드 연동이 막히는 원인은?", a: "카드사의 이상 거래 제재에 걸린 것입니다. 카드 뒤편 번호로 연락해 중국 여행 결제 예정임을 고지해 주세요." }
    },
    footer: {
      slogan: "해외 여행자가 캐시리스의 장벽을 넘고, 지도 오차를 바로잡아 편리하게 중국을 경험할 수 있도록 지원합니다.",
      disclaimer: "면책 조항: 본 사이트는 개인 독립 사이트이며, Tencent(위챗페이), Alibaba(알리페이), Trip.com, 또는 중국 정부 등과는 일절 무관합니다.",
      copyright: "© 2026 ChinaDigitalSurvival. All rights reserved.",
      craft: "⚡ Vibe Coding by PM阿强"
    }
  },
  es: {
    nav: { whyNeed: "Por Qué Lo Necesitas", diagnose: "Hacer Test", trial: "Vista Previa", faq: "Preguntas", buyBtn: "Comprar Guía ($19)" },
    hero: {
      tag: "PROTOCOLO DE SALIDA: ACTIVO / EXENCIÓN DE VISADO 2026",
      title1: "¿Viajas a China?",
      title2: "No Aterrices a Ciegas.",
      subtitle: "China ha creado un ecosistema digital sin efectivo y ultra-conectado. Las tarjetas y el dinero físico están obsoletos. Google Maps, Instagram y Uber están bloqueados. Configura tu kit digital antes de volar.",
      btnPdf: "DESCARGAR_GUIA.PDF",
      btnQuiz: "INICIAR_TEST.EXE",
      boardingPass: "TARJETA DE EMBARQUE",
      unprepared: "VIAJERO SIN PREPARAR",
      prepared: "KIT DIGITAL CARGADO",
      cancelled: "CANCELADO",
      verified: "VERIFICADO",
      from: "DESDE",
      to: "HASTA",
      seatNone: "ASIENTO: NINGUNO",
      seatFirst: "ASIENTO: 1A / PRIMERA",
      bad1: "Pago: Fallo al vincular Visa (rechazado por comercio)",
      bad2: "Nav: Google Maps desplazado 500 metros",
      bad3: "Web: Instagram y Gmail bloqueados por el Firewall",
      good1: "WeChat/Alipay vinculados a tarjeta extranjera",
      good2: "DiDi en inglés configurado con pagos",
      good3: "eSIM sin bloqueo activa. IG/Gmail fluyen al instante",
    },
    pain: {
      tag: "// OBSTÁCULOS EN VIAJES A CHINA",
      title: "Cuatro Muros Digitales Que Bloquean al Extranjero",
      subtitle: "China es futurista y segura, pero SOLO si tienes las llaves digitales correctas. Sin ellas, te quedarás bloqueado.",
      p1: { title: "El Muro Sin Efectivo", desc: "El efectivo no se usa. Desde puestos callejeros hasta centros comerciales, todos cobran con QR de WeChat y Alipay. Las tarjetas internacionales físicas no se pasan por datáfonos." },
      p2: { title: "El Misterio del Transporte", desc: "Google Maps tiene un desfase de coordenadas (GCJ-02), mostrando calles desalineadas. Los taxis tradicionales ya no paran; todo se reserva por la app DiDi." },
      p3: { title: "La Web Bloqueada", desc: "El acceso a Google, Instagram, WhatsApp y Gmail está cortado al conectar con redes de China, a menos que configures eSIM de roaming o VPNs antes de llegar." },
      p4: { title: "El Laberinto de Reservas", desc: "Comprar billetes de tren requiere registro de pasaporte en tiempo real. Y muchos hoteles económicos tienen prohibido por ley alojar a extranjeros." }
    },
    quiz: {
      tag: "// EVALUACIÓN INTERACTIVA",
      title: "Test de Preparación Digital para China",
      run: "RUN: DIAGNOSTICO_DIGITAL.SH",
      desc: "Responde 3 preguntas prácticas basadas en situaciones reales que vivirás en Pekín o Shanghái y obtén tu puntuación.",
      startBtn: "EJECUTAR TEST",
      seq: "SEC",
      loading: "Analizando tu preparación digital...",
      viewDetails: "[ VER INFORME DETALLADO ]",
      emperorTitle: "Emperador Digital (90% Listo)",
      emperorDesc: "¡Impresionante! Entiendes el ecosistema digital de China. Estás preparado, pero hay detalles (registro de trenes y restricciones de hotel) que nuestra guía te ayudará a pulir.",
      strugglingTitle: "Mochilero con Dificultades (50% Listo)",
      strugglingDesc: "Sobrevivirás, pero perdiendo mucho tiempo y con frustraciones. Tendrás bloqueos en cajas, desvíos en mapas y esperas con los taxis. Te recomendamos descargar la guía.",
      strandedTitle: "Completamente Atrapado (10% Listo)",
      strandedDesc: "🚨 PELIGRO: Te quedarás bloqueado el primer día. No podrás comprar comida, pedir transporte ni orientarte. Configura Alipay, DiDi y eSIM antes de viajar. Esta guía es vital.",
      reportTitle: "INFORME DE DIAGNÓSTICO GENERADO",
      reportScore: "PUNTUACIÓN DE PREPARACIÓN",
      readoutTag: "// DATOS DE DIAGNÓSTICO DEL SISTEMA",
      scenario: "ESCENARIO",
      feedback: "FEEDBACK",
      buyKit: "OBTENER_GUIA_PDF.PDF",
      reboot: "REINICIAR_TEST.SH",
      q1: {
        q: "Vas a comprar una botella de agua de 3 RMB ($0.4) a un vendedor callejero. ¿Cómo pagas?",
        a: "Le entrego un billete de 100 RMB físico.",
        b: "Paso mi tarjeta internacional Visa o Mastercard.",
        c: "Escaneo su código QR con WeChat/Alipay vinculados a mi tarjeta.",
        af: "Los vendedores locales no tienen cajas de efectivo ni cambio. Te rechazarán el billete de 100 RMB.",
        bf: "Visa o Mastercard física no son aceptadas por el 99% de pequeños comercios.",
        cf: "¡Correcto! Las tarjetas extranjeras se pueden vincular a WeChat/Alipay para pagar mediante QR."
      },
      q2: {
        q: "Sales del metro y necesitas llegar al hotel, pero Google Maps está bloqueado. ¿Qué haces?",
        a: "Pregunto a los locales en la calle en inglés.",
        b: "Abro Apple Maps de manera estándar.",
        c: "Uso Apple Maps configurado o descargo aplicaciones locales (Amap/Baidu).",
        af: "El nivel de inglés en la calle es muy bajo. Tendrás serios problemas de comunicación.",
        bf: "Apple Maps se abrirá, pero la localización GPS tendrá un desfase de unos 500 metros.",
        cf: "¡Perfecto! Necesitas usar herramientas que corrijan el desfase GCJ-02 o mapas locales."
      },
      q3: {
        q: "Son las 10:30 PM, llueve en Shanghái y quieres volver al hotel. ¿Cómo pides un taxi?",
        a: "Me pongo en una esquina a levantar la mano a taxis vacíos.",
        b: "Abro la app DiDi en inglés y pido un trayecto.",
        c: "Llamo a la recepción del hotel o busco la app Uber.",
        af: "Los taxis pasarán de largo. Más del 95% están reservados previamente a través de apps.",
        bf: "¡Exacto! Debes dejar configurada la app DiDi (el Uber chino) con tu tarjeta antes de volar.",
        cf: "Uber no funciona en China y los botones de taxi en la calle ya no se usan."
      }
    },
    showcase: {
      tag: "// METADATOS DEL MANUAL",
      title: "La Guía Digital de Viaje para China",
      desc: "No desperdicies tu viaje haciendo cola en cajas o perdiéndote en callejones. Esta guía resume 3 años de experiencia en tecnología y viajes en 60 páginas prácticas.",
      assetsHeader: "// RECURSOS ADICIONALES INCLUIDOS:",
      asset1: "Tarjetas de emergencia impresas bilingües",
      asset2: "Enlaces directos a eSIM de viaje",
      asset3: "Guía de comparación eSIM vs VPN previa al viaje",
      asset4: "Actualizaciones de por vida gratis",
      buyBtn: "COMPRAR_GUIA.PDF",
      c1: { title: "Cap 1: WeChat Pay y Alipay", desc: "Vinculación de tarjetas extranjeras, verificación de identidad y qué hacer ante errores." },
      c2: { title: "Cap 2: Transporte y Trenes", desc: "Uso de la app DiDi, reserva de billetes de tren en 12306 y trucos para GPS." },
      c3: { title: "Cap 3: Cortafuegos e Internet", desc: "Análisis de eSIM para roaming, configuración de VPN e inicio de sesión en redes públicas." },
      c4: { title: "Cap 4: Hoteles y Emergencias", desc: "Evitar hoteles prohibidos para extranjeros y tarjetas en chino para taxis." }
    },
    preview: {
      tag: "// VISTA PREVIA GRATUITA",
      title: "Lee unas Páginas Primero",
      header: "GUÍA DE VIAJE PARA CHINA // MODO MUESTRA",
      footer: "PÁGINA {num} DE 60 // FIN VISTA PREVIA",
      t1: "01: Sin Efectivo",
      t2: "02: Configurar Alipay",
      t3: "03: Errores Comunes",
      p1: {
        title: "1.1 Bienvenidos al futuro sin efectivo",
        text1: "En cuanto bajes del avión, verás que nadie lleva cartera ni monedas. El 98% de los pagos se realizan mediante códigos QR con WeChat Pay o Alipay.",
        warn: "“¿Pero el efectivo no es legal?” Sí, pero la mayoría de comercios locales no tienen cambio. Pagar con 100 RMB algo de 5 RMB es casi imposible.",
        text2: "Intentar pagar con tarjetas físicas internacionales no sirve. Si no configuras las apps móviles, estarás aislado de la economía local."
      },
      p2: {
        title: "1.2 Vinculación de Tarjetas en Alipay",
        text1: "Desde finales de 2023 se permite asociar tarjetas extranjeras (Visa/Mastercard) directamente sin cuenta bancaria china.",
        s1: "Descarga Alipay en App Store o Google Play.",
        s2: "Regístrate con tu número de teléfono móvil extranjero.",
        s3: "Toca en 'Me' ➔ 'Bank Cards' ➔ 'Add Card'.",
        s4: "Introduce tu tarjeta y completa la verificación bancaria.",
        s5: "Verifica tu identidad con tu pasaporte en el perfil.",
        text2: "Hazlo antes de viajar. A veces los bancos internacionales bloquean la vinculación inicial por motivos de seguridad."
      },
      p3: {
        title: "1.3 Códigos de Comercio vs Códigos Personales",
        text1: "En China hay dos formas de pagar con QR y diferenciarlas evita atascos en las cajas:",
        check1: "Código de Comercio (Escanean tu móvil): El dependiente escanea tu QR. Funciona siempre con tarjetas extranjeras asociadas.",
        check2: "Código Personal (Escaneas tú al comercio): Escaneas un papel impreso. Si el vendedor es informal, los pagos con tarjeta extranjera pueden fallar.",
        tip: "Consejo PM: Vincula tanto Alipay (Visa) como WeChat (Mastercard) para tener siempre una alternativa lista si una de ellas falla."
      }
    },
    checkout: {
      tag: "// PAGO_SEGURO.EXE",
      desc: "Guía Interactiva PDF + Tarjetas de Emergencia",
      email: "Correo Electrónico",
      card: "Datos de Tarjeta (Simulador)",
      terms: "Conexión simulada SSL encriptada de 256 bits.",
      btnPay: "AUTORIZAR_PAGO ($19.00)",
      loading: "Procesando Transacción",
      loadingSub: "Conectando al servidor del banco...",
      success: "¡Pago Correcto!",
      successSub: "Gracias por comprar. Copia de simulación enviada a {email}. Descarga tu archivo debajo.",
      btnDownload: "DESCARGAR GUÍA (.TXT)",
      btnClose: "Cerrar Ventana",
    },
    faq: {
      tag: "// PROTOCOLO FAQ",
      title: "Preguntas Frecuentes",
      f1: { q: "¿Puedo viajar solo con dinero en efectivo?", a: "Es posible pero muy molesto. Pocos comercios tienen cambio y muchas máquinas de billetes o cajas automáticas no aceptan dinero físico." },
      f2: { q: "¿La eSIM de roaming salta la censura?", a: "Sí, los datos en itinerancia viajan por servidores del país de origen, por lo que tendrás Google e Instagram abiertos. Si usas Wi-Fi local de hotel, se bloquearán sin VPN." },
      f3: { q: "¿Por qué Google Maps no se ve bien?", a: "Por la ley de cartografía de China que exige el sistema GCJ-02. Google Maps no corrige este desfase y las coordenadas bailan 500m. Usa Apple Maps o mapas locales." },
      f4: { q: "¿Qué hago si da error al vincular la tarjeta?", a: "Llama a tu banco extranjero y notifica tu viaje. Normalmente el bloqueo proviene de la entidad emisora por seguridad." }
    },
    footer: {
      slogan: "Ayuda a los viajeros a superar el muro de pagos móviles, evitar errores de geolocalización y disfrutar de la China digital.",
      disclaimer: "Exención de responsabilidad: Este portal es independiente. No estamos afiliados con Tencent (WeChat), Alibaba (Alipay), Trip.com, ni con organismos oficiales chinos.",
      copyright: "© 2026 ChinaDigitalSurvival. Todos los derechos reservados.",
      craft: "⚡ Vibe Coding de PM阿强"
    }
  },
  // Portuguese (PT)
  pt: {
    nav: { whyNeed: "Por Que Precisa", diagnose: "Fazer Teste", trial: "Visualizar", faq: "FAQ", buyBtn: "Comprar Guia ($19)" },
    hero: {
      tag: "PROTOCOLO DE SAÍDA: ATIVO / ISENÇÃO DE VISTO 2026",
      title1: "Viajando para a China?",
      title2: "Não Aterrisse Às Cegas.",
      subtitle: "A China construiu um ecossistema digital sem dinheiro físico e ultra-conectado. Cartões e moedas físicas estão obsoletos. Google Maps, Instagram e Uber estão bloqueados. Configure seu kit digital antes de voar.",
      btnPdf: "DESCARREGAR_GUIA.PDF",
      btnQuiz: "INICIAR_TESTE.EXE",
      boardingPass: "CARTÃO DE EMBARQUE",
      unprepared: "VIAJANTE SEM PREPARO",
      prepared: "KIT DIGITAL CARREGADO",
      cancelled: "CANCELADO",
      verified: "VERIFICADO",
      from: "DE",
      to: "PARA",
      seatNone: "ASSENTO: NENHUM",
      seatFirst: "ASSENTO: 1A / PRIMEIRA",
      bad1: "Pago: Falha ao vincular Visa (rejeitado pelo comerciante)",
      bad2: "Nav: Google Maps deslocado 500 metros",
      bad3: "Web: Instagram e Gmail bloqueados pelo Firewall",
      good1: "WeChat/Alipay vinculados a cartão estrangeiro",
      good2: "DiDi em inglês configurado com pagamentos",
      good3: "eSIM sem bloqueio ativo. IG/Gmail funcionam instantaneamente",
    },
    pain: {
      tag: "// OBSTÁCULOS EM VIAGENS À CHINA",
      title: "Quatro Barreiras Digitais Que Bloqueiam Estrangeiros",
      subtitle: "A China é futurista e segura, mas APENAS se você tiver as chaves digitais corretas. Sem elas, ficará bloqueado.",
      p1: { title: "O Muro Sem Dinheiro", desc: "O dinheiro físico não é usado. Desde barracas de rua a centros comerciais, todos cobram com QR de WeChat e Alipay. Cartões internacionais físicos não são aceitos." },
      p2: { title: "O Mistério do Transporte", desc: "O Google Maps possui um atraso de coordenadas (GCJ-02), mostrando ruas desalinhadas. Táxis tradicionais já não param; tudo é reservado pelo app DiDi." },
      p3: { title: "A Web Bloqueada", desc: "O acesso ao Google, Instagram, WhatsApp e Gmail é cortado ao ligar-se a redes da China, a menos que configure eSIM de roaming ou VPNs antes de chegar." },
      p4: { title: "O Labirinto de Reservas", desc: "Comprar bilhetes de trem exige registro de passaporte em tempo real. E muitos hotéis econômicos são proibidos por lei de alojar estrangeiros." }
    },
    quiz: {
      tag: "// AVALIAÇÃO INTERATIVA",
      title: "Teste de Preparação Digital para a China",
      run: "RUN: DIAGNOSTICO_DIGITAL.SH",
      desc: "Responda a 3 perguntas práticas baseadas em situações reais que viverá em Pequim ou Xangai e obtenha sua pontuação.",
      startBtn: "EXECUTAR TESTE",
      seq: "SEC",
      loading: "Analisando sua prontidão digital...",
      viewDetails: "[ VER RELATÓRIO DETALHADO ]",
      emperorTitle: "Imperador Digital (90% Pronto)",
      emperorDesc: "Impressionante! Você entende o ecossistema digital da China. Está preparado, mas há detalhes (registro de trens e restrições de hotel) que o nosso guia o ajudará a ajustar.",
      strugglingTitle: "Mochileiro com Dificuldades (50% Pronto)",
      strugglingDesc: "Sobreviverá, mas perdendo muito tempo e com frustrações. Terá bloqueios no caixa, desvios no mapa e esperas por táxis. Recomendamos descarregar o guia.",
      strandedTitle: "Completamente Atrapado (10% Pronto)",
      strandedDesc: "🚨 PERIGO: Ficará bloqueado no primeiro dia. Não poderá comprar comida, pedir transporte nem se orientar. Configure Alipay, DiDi e eSIM antes de viajar. Este guia é vital.",
      reportTitle: "RELATÓRIO DE DIAGNÓSTICO GERADO",
      reportScore: "PONTUAÇÃO DE PREPARAÇÃO",
      readoutTag: "// DADOS DE DIAGNÓSTICO DO SISTEMA",
      scenario: "CENÁRIO",
      feedback: "FEEDBACK",
      buyKit: "OBTER_GUIA_PDF.PDF",
      reboot: "REINICIAR_TESTE.SH",
      q1: {
        q: "Vai comprar uma garrafa de água de 3 RMB ($0.4) a um vendedor de rua. Como paga?",
        a: "Entrego uma nota de 100 RMB física.",
        b: "Passo o meu cartão internacional Visa ou Mastercard.",
        c: "Escaneio o código QR dele com WeChat/Alipay vinculados ao meu cartão.",
        af: "Os vendedores locais não têm caixas de dinheiro nem troco. Rejeitarão a nota de 100 RMB.",
        bf: "Visa ou Mastercard física não são aceitas por 99% dos pequenos comércios.",
        cf: "Correto! Cartões estrangeiros podem ser vinculados ao WeChat/Alipay para pagar via QR."
      },
      q2: {
        q: "Sai do metrô e precisa chegar ao hotel, mas o Google Maps está bloqueado. O que faz?",
        a: "Pergunto aos locais na rua em inglês.",
        b: "Abro o Apple Maps de maneira padrão.",
        c: "Uso o Apple Maps configurado ou descarrego aplicações locais (Amap/Baidu).",
        af: "O nível de inglês na rua é muito baixo. Terá sérios problemas de comunicação.",
        bf: "O Apple Maps abrirá, mas a localização GPS terá um desvio de cerca de 500 metros.",
        cf: "Perfeito! Você precisa usar ferramentas que corrijam o desvio GCJ-02 ou mapas locais."
      },
      q3: {
        q: "São 10:30 PM, chove em Xangai e quer voltar ao hotel. Como pede um táxi?",
        a: "Fico numa esquina a levantar a mão a táxis vazios.",
        b: "Abro a app DiDi em inglês e peço um trajeto.",
        c: "Ligo para a receção do hotel ou procuro a app Uber.",
        af: "Os táxis passarão direto. Mais de 95% estão reservados previamente através de apps.",
        bf: "Exato! Deve deixar configurada a app DiDi (o Uber chinês) com o seu cartão antes de voar.",
        cf: "O Uber não funciona na China e os botões de táxi na rua já não são usados."
      }
    },
    showcase: {
      tag: "// METADADOS DO MANUAL",
      title: "Guia Digital de Viagem para a China",
      desc: "Não desperdice a sua viagem fazendo fila no caixa ou perdendo-se em becos. Este guia resume 3 anos de experiência em tecnologia e viagens em 60 páginas práticas.",
      assetsHeader: "// RECURSOS ADICIONAIS INCLUÍDOS:",
      asset1: "Cartões de emergência impressos bilingues",
      asset2: "Ligações diretas a eSIM de viagem",
      asset3: "Guia de comparação eSIM vs VPN prévia ao viaje",
      asset4: "Atualizações gratuitas vitalícias",
      buyBtn: "COMPRAR_GUIA.PDF",
      c1: { title: "Cap 1: WeChat Pay e Alipay", desc: "Vinculação de cartões estrangeiros, verificação de identidade e o que fazer perante erros." },
      c2: { title: "Cap 2: Transporte e Trens", desc: "Uso da app DiDi, reserva de bilhetes de trem em 12306 e truques para GPS." },
      c3: { title: "Cap 3: Corta-fogos e Internet", desc: "Análise de eSIM para roaming, configuração de VPN e início de sessão em redes públicas." },
      c4: { title: "Cap 4: Hotéis e Emergências", desc: "Evitar hotéis proibidos para estrangeiros e cartões em chinês para táxis." }
    },
    preview: {
      tag: "// VISTA PREVIA GRATUITA",
      title: "Leia algumas Páginas Primeiro",
      header: "GUIA DE VIAGEM PARA A CHINA // MODO AMOSTRA",
      footer: "PÁGINA {num} DE 60 // FIM VISTA PREVIA",
      t1: "01: Sem Dinheiro",
      t2: "02: Configurar Alipay",
      t3: "03: Erro Comum",
      p1: {
        title: "1.1 Bem-vindos ao futuro sem dinheiro físico",
        text1: "Assim que descer do avião, verá que ninguém leva carteira nem moedas. O 98% dos pagamentos realizam-se mediante códigos QR com WeChat Pay ou Alipay.",
        warn: "“Mas o dinheiro físico não é legal?” Sim, mas a maioria dos comércios locais não tem troco. Pagar com 100 RMB algo de 5 RMB é quase impossível.",
        text2: "Tentar pagar com cartões físicos internacionais não serve. Se não configurar as apps móveis, estará isolado da economia local."
      },
      p2: {
        title: "1.2 Vinculação de Cartões em Alipay",
        text1: "Desde finais de 2023 é permitido associar cartões estrangeiros (Visa/Mastercard) diretamente sem conta bancária chines.",
        s1: "Descarregue o Alipay na App Store ou Google Play.",
        s2: "Registe-se com o seu número de telefone estrangeiro.",
        s3: "Toque em 'Me' ➔ 'Bank Cards' ➔ 'Add Card'.",
        s4: "Introduza o seu cartão e complete a verificação bancária.",
        s5: "Verifique a sua identidade com o seu passaporte no perfil.",
        text2: "Faça-o antes de viajar. A vezes os bancos internacionais bloqueiam a vinculação inicial por motivos de segurança."
      },
      p3: {
        title: "1.3 Códigos de Comércio vs Códigos Pessoais",
        text1: "Na China há duas formas de pagar com QR e diferenciá-las evita problemas nos caixas:",
        check1: "Código de Comércio (Escaneiam o seu telemóvel): O funcionário escaneia o seu QR. Funciona sempre com cartões estrangeiros associados.",
        check2: "Código Pessoal (Escaneia você o comércio): Escaneia um papel impresso. Se o vendedor for informal, os pagamentos com cartão estrangeiro podem falhar.",
        tip: "Conselho PM: Vincule tanto o Alipay (Visa) como o WeChat (Mastercard) para ter sempre uma alternativa pronta se uma delas falhar."
      }
    },
    checkout: {
      tag: "// COMPRA_SEGURA.EXE",
      desc: "Guia Interativo PDF + Cartões de Emergência",
      email: "Endereço de Email",
      card: "Dados de Cartão (Simulador)",
      terms: "Conexão simulada SSL encriptada de 256 bits.",
      btnPay: "AUTORIZAR_PAGAMENTO ($19.00)",
      loading: "A Processar Transação",
      loadingSub: "Ligar ao servidor do banco...",
      success: "¡Pagamento Concluído!",
      successSub: "Obrigado por comprar. Cópia de simulação enviada para {email}. Descarregue o seu ficheiro abaixo.",
      btnDownload: "DESCARREGAR GUIA (.TXT)",
      btnClose: "Fechar Janela",
    },
    faq: {
      tag: "// PROTOCOLO FAQ",
      title: "Preguntas Frecuentes",
      f1: { q: "¿Puedo viajar apenas com dinheiro físico?", a: "É possível mas muito incômodo. Poucos comércios têm troco e muitas máquinas de bilhetes ou caixas automáticas não aceitam dinheiro físico." },
      f2: { q: "¿A eSIM de roaming passa a censura?", a: "Sim, os dados em roaming viajam por servidores do país de origem, por isso terá Google e Instagram abertos. Se usar Wi-Fi local do hotel, serão bloqueados sem VPN." },
      f3: { q: "¿Por que o Google Maps não funciona bem?", a: "Pela lei de cartografia da China que exige o sistema GCJ-02. O Google Maps não corrige esse desvio e as coordenadas variam 500m. Use o Apple Maps ou mapas locais." },
      f4: { q: "¿O que faço se der erro ao vincular o cartão?", a: "Ligue para o seu banco estrangeiro e notifique o seu viagem. Normalmente o bloqueio provém da entidade emissora por segurança." }
    },
    footer: {
      slogan: "Ajuda os viajantes a superar o muro de pagamentos móveis, evitar erros de geolocalização e desfrutar da China digital.",
      disclaimer: "Aviso Legal: Este portal é independente. Não estamos filiados com Tencent (WeChat), Alibaba (Alipay), Trip.com, nem com organismos oficiais chineses.",
      copyright: "© 2026 ChinaDigitalSurvival. Todos os direitos reservados.",
      craft: "⚡ Vibe Coding de PM阿强"
    }
  },
  // Italian (IT)
  it: {
    nav: { whyNeed: "Perché serve", diagnose: "Fai il Test", trial: "Anteprima", faq: "FAQ", buyBtn: "Acquista la Guida ($19)" },
    hero: {
      tag: "PROTOCOLLO DI PARTENZA: ATTIVO / ESENZIONE VISTO 2026",
      title1: "Viaggi in Cina?",
      title2: "Non Atterrare alla Cieca.",
      subtitle: "La Cina ha creato un ecosistema digitale cashless ed ultra-connesso. Le carte fisiche e i contanti sono obsoleti. Google Maps, Instagram e Uber sono bloccati. Configura il tuo kit digitale prima di volare.",
      btnPdf: "SCARICA_GUIDA.PDF",
      btnQuiz: "AVVIA_TEST.EXE",
      boardingPass: "CARTA D'IMBARCO",
      unprepared: "VIAGGIATORE IMPREPARATO",
      prepared: "KIT DIGITALE CARICATO",
      cancelled: "CANCELLATO",
      verified: "VERIFICATO",
      from: "DA",
      to: "A",
      seatNone: "POSTO: NESSUNO",
      seatFirst: "POSTO: 1A / PRIMA",
      bad1: "Pagamento: Errore nel collegare Visa (rifiutato dal venditore)",
      bad2: "Nav: Google Maps spostato di 500 metri",
      bad3: "Web: Instagram e Gmail bloccati dal Firewall",
      good1: "WeChat/Alipay collegati a carta estera",
      good2: "DiDi in inglese configurato con i pagamenti",
      good3: "eSIM senza blocco attiva. IG/Gmail funzionano all'istante",
    },
    pain: {
      tag: "// OSTACOLI NEI VIAGGI IN CINA",
      title: "Quattro Muri Digitali Che Bloccano gli Stranieri",
      subtitle: "La Cina è futuristica e sicura, ma SOLO se hai le chiavi digitali corrette. Senza di esse, rimarrai bloccato.",
      p1: { title: "Il Muro Cashless", desc: "Il contante non si usa. Dai chioschi di strada ai centri commerciali, tutti pagano con QR di WeChat e Alipay. Le carte internazionali fisiche non vengono accettate." },
      p2: { title: "Il Mistero dei Trasporti", desc: "Google Maps ha un ritardo di coordinate (GCJ-02), mostrando strade allineate male. I taxi tradizionali non si fermano; tutto si prenota con l'app DiDi." },
      p3: { title: "La Web Bloccata", desc: "L'accesso a Google, Instagram, WhatsApp e Gmail è bloccato collegandosi alle reti cinesi, a meno di configurare eSIM di roaming o VPN prima di arrivare." },
      p4: { title: "Il Labirinto delle Prenotazioni", desc: "Acquistare biglietti del treno richiede la registrazione del passaporto in tempo reale. E molti hotel economici non possono per legge ospitare stranieri." }
    },
    quiz: {
      tag: "// VALUTAZIONE INTERATTIVA",
      title: "Test di Preparazione Digitale per la Cina",
      run: "RUN: DIAGNOSTICO_DIGITALE.SH",
      desc: "Rispondi a 3 domande pratiche basate su situazioni reali che vivrai a Pechino o Shanghai e ottieni il tuo punteggio.",
      startBtn: "ESEGUI TEST",
      seq: "SEC",
      loading: "Analisi della preparazione digitale...",
      viewDetails: "[ VEDI RAPPORTO DETTAGLIATO ]",
      emperorTitle: "Imperatore Digitale (90% Pronto)",
      emperorDesc: "Impressionante! Capisci l'ecosistema digitale della Cina. Sei preparato, ma ci sono dettagli (registrazione treni e restrizioni hotel) che la nostra guida ti aiuterà a sistemare.",
      strugglingTitle: "Viaggiatore in Difficoltà (50% Pronto)",
      strugglingDesc: "Sopravvivrai, ma perdendo molto tempo e con frustrazioni. Avrai blocchi alle casse, deviazioni sulle mappe e attese per i taxi. Ti consigliamo di scaricare la guida.",
      strandedTitle: "Completamente Bloccato (10% Pronto)",
      strandedDesc: "🚨 PERICOLO: Rimarrai bloccato il primo giorno. Non potrai comprare cibo, chiedere trasporto né orientarti. Configura Alipay, DiDi e eSIM prima di viaggiare. Questa guida è vitale.",
      reportTitle: "RAPPORTO DI DIAGNOSTICA GENERATO",
      reportScore: "PUNTEGGIO DI PREPARAZIONE",
      readoutTag: "// DATI DI DIAGNOSTICA DEL SISTEMA",
      scenario: "SCENARIO",
      feedback: "FEEDBACK",
      buyKit: "OTTIENI_GUIDA_PDF.PDF",
      reboot: "RIAVVIA_TEST.SH",
      q1: {
        q: "Stai per comprare una bottiglia d'acqua da 3 RMB ($0.4) da un venditore ambulante. Come paghi?",
        a: "Gli consegno una banconota da 100 RMB fisica.",
        b: "Passo la mia carta internazionale Visa o Mastercard.",
        c: "Scansiono il suo codice QR con WeChat/Alipay collegati alla mia carta.",
        af: "I venditori locali non hanno casse di contanti né resto. Ti rifiuteranno la banconota da 100 RMB.",
        bf: "Visa o Mastercard fisiche non sono accettate dal 99% dei piccoli negozi.",
        cf: "Corretto! Le carte estere possono essere collegate a WeChat/Alipay per pagare via QR."
      },
      q2: {
        q: "Esci dalla metro e devi raggiungere l'hotel, ma Google Maps è bloccato. Cosa fai?",
        a: "Chiedo ai locali in strada in inglese.",
        b: "Apro Apple Maps in modo standard.",
        c: "Uso Apple Maps configurato o scarico applicazioni locali (Amap/Baidu).",
        af: "Il livello di inglese per strada è molto basso. Avrai seri problemi di comunicazione.",
        bf: "Apple Maps si aprirà, ma la localizzazione GPS avrà un offset di circa 500 metri.",
        cf: "Perfetto! Devi usare strumenti che correggano l'offset GCJ-02 o mappe locali."
      },
      q3: {
        q: "Sono le 10:30 PM, piove a Shanghai e vuoi tornare in hotel. Come chiami un taxi?",
        a: "Mi metto a un angolo a fare cenno a taxi vuoti.",
        b: "Apro l'app DiDi in inglese e chiedo un tragitto.",
        c: "Chiamo la reception dell'hotel o cerco l'app Uber.",
        af: "I taxi passeranno oltre. Più del 95% sono prenotati in anticipo tramite app.",
        bf: "Esatto! Devi lasciare configurata l'app DiDi (l'Uber cinese) con la tua carta prima di volare.",
        cf: "Uber non funziona in Cina e i pulsanti per strada non si usano più."
      }
    },
    showcase: {
      tag: "// METADATI DEL MANUALE",
      title: "La Guida Digitale di Viaggio per la Cina",
      desc: "Non sprecare il tuo viaggio facendo la fila alle casse o perdendoti nei vicoli. Questa guida riassume 3 anni di esperienza in tecnologia e viaggi in 60 pagine pratiche.",
      assetsHeader: "// RISORSE ADDIZIONALI INCLUSE:",
      asset1: "Biglietti di emergenza stampati bilingue",
      asset2: "Collegamenti diretti a eSIM di viaggio",
      asset3: "Guida comparativa eSIM vs VPN prima del viaggio",
      asset4: "Aggiornamenti gratuiti a vita",
      buyBtn: "COMPRA_GUIDA.PDF",
      c1: { title: "Cap 1: WeChat Pay e Alipay", desc: "Collegamento di carte estere, verifica dell'identità e cosa fare in caso di errori." },
      c2: { title: "Cap 2: Trasporti e Treni", desc: "Uso dell'app DiDi, prenotazione di biglietti del treno su 12306 e trucchi per il GPS." },
      c3: { title: "Cap 3: Firewall e Internet", desc: "Analisi di eSIM per roaming, configurazione di VPN e accesso a reti pubbliche." },
      c4: { title: "Cap 4: Hotel ed Emergenze", desc: "Evitare hotel vietati agli stranieri e biglietti in cinese per taxi." }
    },
    preview: {
      tag: "// ANTEPRIMA GRATUITA",
      title: "Leggi alcune Pagine Prima",
      header: "GUIDA DI VIAGGIO PER LA CINA // MODO CAMPIONE",
      footer: "PAGINA {num} DI 60 // FINE ANTEPRIMA",
      t1: "01: Senza Contanti",
      t2: "02: Configura Alipay",
      t3: "03: Errori Comuni",
      p1: {
        title: "1.1 Benvenuti nel futuro cashless",
        text1: "Appena scendi dall'aereo, vedrai che nessuno porta portafogli o monete. Il 98% dei pagamenti si effettua tramite codici QR con WeChat Pay o Alipay.",
        warn: "“Ma il contante non è legale?” Sì, ma la maggior parte dei negozi locali non ha resto. Pagare con 100 RMB qualcosa da 5 RMB è quasi impossibile.",
        text2: "Tentare di pagare con carte fisiche internazionali non serve. Se non configuri le app mobili, sarai escluso dall'economia locale."
      },
      p2: {
        title: "1.2 Collegamento delle Carte su Alipay",
        text1: "Dalla fine del 2023 è consentito associare carte estere (Visa/Mastercard) direttamente senza conto bancario cinese.",
        s1: "Scarica Alipay su App Store o Google Play.",
        s2: "Registrati con il tuo numero di telefono straniero.",
        s3: "Tocca su 'Me' ➔ 'Bank Cards' ➔ 'Add Card'.",
        s4: "Inserisci la tua carta e completa la verifica bancaria.",
        s5: "Verifica la tua identità con il passaporto nel profilo.",
        text2: "Fallo prima di partire. A volte le banche estere bloccano il collegamento iniziale per motivi di sicurezza."
      },
      p3: {
        title: "1.3 Codici Esercente vs Codici Personali",
        text1: "In Cina ci sono due modi per pagare con QR e differenziarli evita intoppi alle casse:",
        check1: "Codice Esercente (Scansionano il tuo telefono): Il commesso scansiona il tuo QR. Funziona sempre con carte estere associate.",
        check2: "Codice Personale (Scansioni tu l'esercente): Scansioni un foglio stampato. Se il venditore è informale, i pagamenti con carta estera possono fallire.",
        tip: "Consiglio PM: Collega sia Alipay (Visa) che WeChat (Mastercard) per avere sempre un'alternativa pronta se una di esse fallisce."
      }
    },
    checkout: {
      tag: "// PAGAMENTO_SICURO.EXE",
      desc: "Guida Interattiva PDF + Biglietti di Emergenza",
      email: "Indirizzo Email",
      card: "Dati della Carta (Simulatore)",
      terms: "Connessione simulata SSL crittografata a 256 bit.",
      btnPay: "AUTORIZZA_PAGAMENTO ($19.00)",
      loading: "Elaborazione Transazione",
      loadingSub: "Connessione al server della banca...",
      success: "¡Pagamento Riuscito!",
      successSub: "Grazie per l'acquisto. Copia di simulazione inviata a {email}. Scarica il file qui sotto.",
      btnDownload: "SCARICA LA GUIDA (.TXT)",
      btnClose: "Chiudi Finestra",
    },
    faq: {
      tag: "// PROTOCOLLO FAQ",
      title: "Domande Frequenti",
      f1: { q: "¿Posso viaggiare solo con denaro contante?", a: "È possibile ma molto scomodo. Pochi negozi hanno resto e molte macchine automatiche non accettano denaro fisico." },
      f2: { q: "¿La eSIM di roaming supera la censura?", a: "Sì, i dati in roaming viaggiano su server del paese di origine, quindi avrai Google e Instagram aperti. Se usi il Wi-Fi dell'hotel, si bloccheranno senza VPN." },
      f3: { q: "¿Perché Google Maps non si vede bene?", a: "A causa della legge cartografica cinese che impone il sistema GCJ-02. Google Maps non corregge questo offset e le coordinate ballano di 500m. Usa Apple Maps o mappe locali." },
      f4: { q: "¿Cosa faccio se c'è un errore nel collegare la carta?", a: "Chiama la tua banca estera e notifica il viaggio. Normalmente il blocco proviene dall'ente emittente per sicurezza." }
    },
    footer: {
      slogan: "Aiuta i viaggiatori a superare il muro dei pagamenti mobili, evitare errori di geolocalizzazione e godersi la Cina digitale.",
      disclaimer: "Esclusione di responsabilità: Questo portale è indipendente. Non siamo affiliati con Tencent (WeChat), Alibaba (Alipay), Trip.com, né con organismi ufficiali cinesi.",
      copyright: "© 2026 ChinaDigitalSurvival. Tutti i diritti riservati.",
      craft: "⚡ Vibe Coding di PM阿强"
    }
  },
  // French (FR)
  fr: {
    nav: { whyNeed: "Pourquoi ce guide", diagnose: "Faire le Test", trial: "Aperçu", faq: "FAQ", buyBtn: "Acheter le Guide ($19)" },
    hero: {
      tag: "PROTOCOLE DE DÉPART : ACTIF / EXEMPTION DE VISA 2026",
      title1: "Voyage en Chine ?",
      title2: "Ne Partez pas à l'Aveuglette.",
      subtitle: "La Chine a construit un écosystème cashless et ultra-connecté. Les cartes physiques et les espèces sont obsolètes. Google Maps, Instagram et Uber sont bloqués. Configurez votre kit digital avant de partir.",
      btnPdf: "TELECHARGER_GUIDE.PDF",
      btnQuiz: "LANCER_TEST.EXE",
      boardingPass: "CARTE D'EMBARQUEMENT",
      unprepared: "VOYAGEUR NON PRÉPARÉ",
      prepared: "KIT DIGITAL CHARGÉ",
      cancelled: "ANNULÉ",
      verified: "VERIFIÉ",
      from: "DE",
      to: "À",
      seatNone: "SIÈGE : AUCUN",
      seatFirst: "SIÈGE : 1A / PREMIÈRE",
      bad1: "Paiement : Échec liaison Visa (rejeté par le commerçant)",
      bad2: "Nav : Google Maps décalé de 500 mètres",
      bad3: "Web : Instagram et Gmail bloqués par le Firewall",
      good1: "WeChat/Alipay liés à une carte étrangère",
      good2: "DiDi en anglais configuré avec les paiements",
      good3: "eSIM sans blocage active. IG/Gmail fonctionnent instantanément",
    },
    pain: {
      tag: "// OBSTACLES DE VOYAGE EN CHINE",
      title: "Quatre Murs Digitaux Qui Bloquent les Étrangers",
      subtitle: "La Chine est futuriste et sûre, mais SEULEMENT si vous possédez les clés digitales. Sans elles, vous serez bloqué.",
      p1: { title: "Le Mur Sans Espèces", desc: "L'argent physique est obsolète. Des stands de rue aux centres commerciaux, tous paient via QR WeChat et Alipay. Les cartes internationales physiques ne sont pas acceptées." },
      p2: { title: "Le Mystère des Transports", desc: "Google Maps a un décalage de coordonnées (GCJ-02), affichant des rues mal alignées. Les taxis traditionnels ne s'arrêtent plus ; tout se réserve via l'app DiDi." },
      p3: { title: "Le Web Bloqué", desc: "L'accès à Google, Instagram, WhatsApp et Gmail est coupé dès la connexion aux réseaux chinois, à moins de configurer une eSIM de roaming ou un VPN avant d'arriver." },
      p4: { title: "Le Labyrinthe des Réservations", desc: "L'achat de billets de train exige l'enregistrement du passeport en temps réel. De plus, de nombreux hôtels économiques ont interdiction d'héberger des étrangers." }
    },
    quiz: {
      tag: "// ÉVALUATION INTERACTIVE",
      title: "Test de Préparation Digitale pour la Chine",
      run: "RUN: DIAGNOSTIC_DIGITAL.SH",
      desc: "Répondez à 3 questions pratiques basées sur des situations réelles à Pékin ou Shanghai et obtenez votre score.",
      startBtn: "LANCER LE TEST",
      seq: "SEC",
      loading: "Analyse de votre profil de préparation...",
      viewDetails: "[ VOIR LE RAPPORT DÉTAILLÉ ]",
      emperorTitle: "Empereur Digital (90% Prêt)",
      emperorDesc: "Impressionnant ! Vous comprenez l'écosystème digital chinois. Vous êtes prêt, mais certains détails (réservation de train et restrictions d'hôtel) méritent notre guide.",
      strugglingTitle: "Backpacker en Difficulté (50% Prêt)",
      strugglingDesc: "Vous survivrez, mais avec des frustrations et une perte de temps. Vous bloquerez aux caisses, dévierez sur les cartes et attendrez les taxis. Téléchargez le guide.",
      strandedTitle: "Complètement Bloqué (10% Prêt)",
      strandedDesc: "🚨 DANGER : Vous serez bloqué dès le premier jour. Impossible d'acheter de la nourriture, de se déplacer ou de s'orienter. Configurez Alipay, DiDi et eSIM avant de partir.",
      reportTitle: "RAPPORT DE DIAGNOSTIC GÉNÉRÉ",
      reportScore: "SCORE DE PRÉPARATION",
      readoutTag: "// DONNÉES DE DIAGNOSTIC DU SYSTÈME",
      scenario: "SCÉNARIO",
      feedback: "FEEDBACK",
      buyKit: "OBTENIR_GUIDE_PDF.PDF",
      reboot: "REDÉMARRER_TEST.SH",
      q1: {
        q: "Vous achetez une bouteille d'eau à 3 RMB ($0.4) à un marchand ambulant. Comment payez-vous ?",
        a: "Je lui donne un billet de 100 RMB physique.",
        b: "Je passe ma carte internationale Visa ou Mastercard.",
        c: "Je scanne son code QR avec WeChat/Alipay liés à ma carte.",
        af: "Les marchands locaux n'ont pas de caisses d'espèces ni de monnaie. Ils refuseront votre billet de 100 RMB.",
        bf: "Les cartes Visa/Mastercard physiques sont rejetées par 99% des petits commerces.",
        cf: "Correct ! Les cartes étrangères peuvent être liées à WeChat/Alipay pour payer via QR."
      },
      q2: {
        q: "Vous sortez du métro et devez rejoindre l'hôtel, mais Google Maps est bloqué. Que faites-vous ?",
        a: "Je demande aux passants dans la rue en anglais.",
        b: "J'ouvre Apple Maps de manière standard.",
        c: "J'utilise Apple Maps configuré ou télécharge des cartes locales (Amap/Baidu).",
        af: "Le niveau d'anglais dans la rue est très bas. Vous aurez de graves problèmes de communication.",
        bf: "Apple Maps s'ouvrira, mais la localisation GPS aura un décalage d'environ 500 mètres.",
        cf: "Parfait ! Vous devez utiliser des outils corrigeant le décalage GCJ-02 ou des cartes locales."
      },
      q3: {
        q: "Il est 22h30, il pleut à Shanghai et vous voulez rentrer à l'hôtel. Comment appeler un taxi ?",
        a: "Je me mets au coin de la rue et fais signe aux taxis vides.",
        b: "J'ouvre l'app DiDi en anglais et commande une course.",
        c: "J'appelle la réception de l'hôtel ou cherche l'app Uber.",
        af: "Les taxis passeront sans s'arrêter. Plus de 95% sont réservés à l'avance via des apps.",
        bf: "Exact ! Vous devez laisser configurée l'app DiDi (l'Uber chinois) avec votre carte avant de voler.",
        cf: "Uber ne fonctionne pas en Chine et les boutons de taxi de rue ne sont plus utilisés."
      }
    },
    showcase: {
      tag: "// MÉTADONNÉES DU MANUEL",
      title: "Le Guide Digital de Voyage pour la Chine",
      desc: "Ne gâchez pas votre voyage à faire la queue aux caisses ou à vous perdre dans les ruelles. Ce guide résume 3 ans d'expérience en technologie et voyages en 60 pages pratiques.",
      assetsHeader: "// RESSOURCES ADDITIONNELLES INCLUSES :",
      asset1: "Cartes d'urgence imprimables bilingues",
      asset2: "Liens directs vers des eSIM de voyage",
      asset3: "Comparatif eSIM vs VPN avant le départ",
      asset4: "Mises à jour gratuites à vie",
      buyBtn: "ACHETER_GUIDE.PDF",
      c1: { title: "Cap 1 : WeChat Pay et Alipay", desc: "Liaison de cartes étrangères, vérification d'identité et quoi faire en cas d'erreurs." },
      c2: { title: "Cap 2 : Transport et Trains", desc: "Utilisation de l'app DiDi, réservation de billets de train sur 12306 et astuces GPS." },
      c3: { title: "Cap 3 : Pare-feu et Internet", desc: "Analyse d'eSIM pour roaming, configuration de VPN et connexion aux réseaux publics." },
      c4: { title: "Cap 4 : Hôtels et Urgences", desc: "Éviter les hôtels interdits aux étrangers et cartes en chinois pour les taxis." }
    },
    preview: {
      tag: "// APERÇU GRATUIT",
      title: "Lisez quelques Pages D'abord",
      header: "GUIDE DE VOYAGE POUR LA CHINE // MODE APERÇU",
      footer: "PAGE {num} DE 60 // FIN DE L'APERÇU",
      t1: "01: Sans Espèces",
      t2: "02: Configurer Alipay",
      t3: "03: Erreurs Communes",
      p1: {
        title: "1.1 Bienvenue dans le futur sans espèces",
        text1: "Dès que vous descendrez de l'avion, vous verrez que personne ne porte de portefeuille ni de pièces. 98% des paiements se font via QR WeChat ou Alipay.",
        warn: "« Mais l'argent liquide est légal ? » Oui, mais la plupart des commerces locaux n'ont pas de monnaie. Payer 5 RMB avec 100 RMB est presque impossible.",
        text2: "Tenter de payer avec des cartes physiques internationales ne sert à rien. Sans configuration des apps mobiles, vous serez exclu de l'économie locale."
      },
      p2: {
        title: "1.2 Liaison de Cartes sur Alipay",
        text1: "Depuis fin 2023, il est permis d'associer des cartes étrangères (Visa/Mastercard) directement sans compte bancaire chinois.",
        s1: "Téléchargez Alipay sur App Store ou Google Play.",
        s2: "Inscrivez-vous avec votre numéro de téléphone étranger.",
        s3: "Appuyez sur 'Me' ➔ 'Bank Cards' ➔ 'Add Card'.",
        s4: "Saisissez votre carte et validez la vérification bancaire.",
        s5: "Validez votre identité avec le passeport dans le profil.",
        text2: "Faites-le avant de partir. Parfois, les banques étrangères bloquent la liaison initiale pour des raisons de sécurité."
      },
      p3: {
        title: "1.3 Codes Marchands vs Codes Personnels",
        text1: "En Chine, il existe deux manières de payer avec QR et les différencier évite des blocages aux caisses :",
        check1: "Code Marchand (Ils scannent votre écran) : Le caissier scanne votre QR. Cela fonctionne toujours avec des cartes étrangères associées.",
        check2: "Code Personnel (Vous scannez le commerçant) : Vous scannez un papier imprimé. Si le vendeur est informel, les paiements peuvent échouer.",
        tip: "Conseil PM : Associez à la fois Alipay (Visa) et WeChat (Mastercard) pour toujours avoir une alternative prête en cas d'échec."
      }
    },
    checkout: {
      tag: "// PAIEMENT_SÉCURISÉ.EXE",
      desc: "Guide Interactif PDF + Cartes d'Urgence",
      email: "Adresse Email",
      card: "Informations de Carte (Simulateur)",
      terms: "Connexion simulée SSL cryptée de 256 bits.",
      btnPay: "AUTORISER_PAIEMENT ($19.00)",
      loading: "Traitement de la Transaction",
      loadingSub: "Connexion au serveur de la banque...",
      success: "¡Paiement Réussi!",
      successSub: "Merci pour votre achat. Copie de simulation envoyée à {email}. Téléchargez votre fichier ci-dessous.",
      btnDownload: "TÉLÉCHARGER LE GUIDE (.TXT)",
      btnClose: "Fermer la Fenêtre",
    },
    faq: {
      tag: "// PROTOCOLE FAQ",
      title: "Questions Fréquentes",
      f1: { q: "Puis-je voyager uniquement avec de l'argent liquide ?", a: "C'est possible mais très fastidieux. Peu de commerces ont de la monnaie et de nombreux automates n'acceptent pas l'argent physique." },
      f2: { q: "L'eSIM de roaming contourne-t-elle la censure ?", a: "Oui, les données en itinérance passent par les serveurs du pays d'origine, vous aurez donc Google et Instagram ouverts. Sur le Wi-Fi de l'hôtel, ils seront bloqués sans VPN." },
      f3: { q: "Pourquoi Google Maps n'est-il pas précis ?", a: "En raison de la loi chinoise imposant le système GCJ-02. Google Maps ne corrige pas ce décalage et les coordonnées varient de 500m. Utilisez Apple Maps ou des cartes locales." },
      f4: { q: "Que faire si la liaison de carte échoue ?", a: "Appelez votre banque d'origine et signalez le voyage. Normalement, le blocage provient de l'organisme émetteur par sécurité." }
    },
    footer: {
      slogan: "Aider les voyageurs à franchir le mur des paiements mobiles, éviter les erreurs de géolocalisation et profiter de la Chine digitale.",
      disclaimer: "Clause de non-responsabilité : Ce portail est indépendant. Nous ne sommes pas affiliés à Tencent (WeChat), Alibaba (Alipay), Trip.com, ni aux organismes officiels chinois.",
      copyright: "© 2026 ChinaDigitalSurvival. Tous droits réservés.",
      craft: "⚡ Vibe Coding par PM阿强"
    }
  }
};
