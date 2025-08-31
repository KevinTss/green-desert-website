"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.about.company": "Company",
    "nav.about.company.description": "Discover our mission, Vision 2030 commitment, and the story behind Saudi Arabia’s first licensed hemp innovator.",
    "nav.about.sponsors": "Sponsors",
    "nav.about.sponsors.description": "See the partners and government entities backing our drive toward a greener, bio-based future.",
    "nav.about.team": "Team",
    "nav.about.team.description": "Meet the passionate team behind Green Desert, dedicated to ecological innovation and sustainability.",
    "nav.products": "Products",
    "nav.products.animalBedding": "Animal Bedding",
    "nav.products.animalBedding.description": "Ultra-absorbent hemp hurds that keep stables dry, odor-free, and easy to clean.",
    "nav.products.constructionBlocks": "Construction Blocks",
    "nav.products.constructionBlocks.description": "Lightweight hemp-lime blocks offering high insulation, breathability, and carbon-negative walls.",
    "nav.products.seeds": "Seeds",
    "nav.products.seeds.description": "Certified low-THC hemp seeds for sustainable feed, food, and future crop cultivation.",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "header.contact": "Contact us",
    "header.language": "ENGLISH",

    // Hero
    "hero.title": "Accelerating Saudi Arabia’s transition to",
    "hero.subtitle": "Pioneering sustainable innovation through industrial hemp",
    "hero.rotating.greener": "a greener future",
    "hero.rotating.bio": "a bio-based economy",
    "hero.rotating.agriculture": "sustainable agriculture",
    // Mini navbar
    "mini.story": "Story",
    "mini.services": "Services",
    "mini.products": "Products",
    "mini.partners": "Partners",
    "mini.news": "News",


    // About
    "about.title": "Green Desert",
    "about.description":
      "Green Desert is a biotechnology Saudi Arabian Start Up Company Founded in January 2020, Green Desert Aims to Lead The Ecological Impact Of Saudi Arabia And The Gulf Countries. Our Ultimate Goal Is To Develop Saudi's Environmental Sector Through Innovation And Technology. We Provide Sustainable Solutions For Environmental Challenges And Contribute To Saudi Arabia's Vision 2030.",

    // Environment Section
    "env.badge": "ENVIRONMENT",
    "env.title": "Addressing Environmental Problems In The Kingdom Of Saudi Arabia",
    "env.description1":
      "Saudi Arabia faces significant environmental challenges including desertification, water scarcity, air pollution, and biodiversity loss. Our innovative solutions address these critical issues through sustainable technology and eco-friendly practices.",
    "env.description2":
      "Through our comprehensive approach, we aim to restore ecological balance and create sustainable solutions that align with the Kingdom's Vision 2030 environmental goals.",
    "env.button": "MORE DETAILS",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Green Desert",
    "services.sustainability.title": "Sustainability & Advanced Using Biomass Composting",
    "services.sustainability.description":
      "Advanced biomass composting solutions that transform organic waste into valuable resources and sustainable soil amendments.",
    "services.research.title": "Scientific Research and Academic Collaboration in Saudi Arabia",
    "services.research.description":
      "Collaborative research initiatives with academic institutions to advance scientific research in finding sustainable and technological solutions.",
    "services.education.title": "Education and Awareness about Desert and Its Benefits",
    "services.education.description":
      "Educational programs and awareness campaigns about desert ecosystems, their importance, and sustainable development practices.",

    // Products
    "products.title": "Products",
    "products.subtitle": "Green Desert",
    "products.hemp_seeds": "Hemp Seeds For Human and Animal Consumption",
    "products.temperature_boxes": "Temperature Boxes for Construction",
    "products.hemp_fibers": "Hemp Fibers for Animal Bedding",

    // Partners
    "partners.title": "Our Partners And",
    "partners.subtitle": "Sponsors",
    "partners.more": "MORE",

    // News
    "news.title": "Latest News",
    "news.partnership.title": "Exclusive Partnership Between Green Desert Establishment and La Chanvriere",
    "news.partnership.description":
      "Green Desert announces strategic partnership with La Chanvriere to advance sustainable agricultural practices in the Middle East region.",
    "news.office.title": "New Office Opening and Expansion Plans",
    "news.office.description":
      "Green Desert opens new headquarters in Riyadh as part of expansion strategy to serve growing demand for environmental solutions.",

    // Footer
    "footer.description":
      "We provide biotechnology solutions for environmental challenges while being aligned to right for the planet.",
    "footer.company": "Company",
    "footer.products": "Products",
    "footer.services": "Services",
    "footer.articles": "Latest Articles",
    "footer.copyright": "© 2024 Green Desert Co. All rights reserved.",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.about.company": "الشركة",
    "nav.about.company.description": "اكتشف مهمتنا، التزامنا برؤية 2030، وقصة أول مبتكر مرخص للقنب في المملكة العربية السعودية.",
    "nav.about.sponsors": "الرعاة",
    "nav.about.sponsors.description": "شاهد الشركاء والجهات الحكومية التي تدعم مسيرتنا نحو مستقبل أكثر خضرة قائم على التكنولوجيا الحيوية.",
    "nav.about.team": "الفريق",
    "nav.about.team.description": "تعرف على الفريق الشغوف وراء الصحراء الخضراء، المكرس للابتكار البيئي والاستدامة.",
    "nav.products": "المنتجات",
    "nav.products.animalBedding": "فراش الحيوانات",
    "nav.products.animalBedding.description": "حبيبات قنب فائقة الامتصاص تبقي الإسطبلات جافة وخالية من الروائح وسهلة التنظيف.",
    "nav.products.constructionBlocks": "كتل البناء",
    "nav.products.constructionBlocks.description": "كتل قنب خفيفة الوزن توفر عزلًا عاليًا، وقابلية للتنفس، وجدران سلبية الكربون.",
    "nav.products.seeds": "البذور",
    "nav.products.seeds.description": "بذور قنب منخفضة THC معتمدة للاستخدام المستدام في التغذية البشرية والحيوانية وزراعة المحاصيل المستقبلية.",
    "nav.services": "الخدمات",
    "nav.blog": "المدونة",
    "header.contact": "اتصل بنا",
    "header.language": "العربية",

    // Hero
    "hero.title": "تسريع انتقال المملكة العربية السعودية نحو",
    "hero.subtitle": "ريادة الابتكار المستدام من خلال القنب الصناعي",
    "hero.rotating.greener": "مستقبل أكثر خضرة",
    "hero.rotating.bio": "اقتصاد قائم على التكنولوجيا الحيوية",
    "hero.rotating.agriculture": "الزراعة المستدامة",
    // Mini navbar
    "mini.story": "القصة",
    "mini.services": "الخدمات",
    "mini.products": "المنتجات",
    "mini.partners": "الشركاء",
    "mini.news": "الأخبار",

    // About
    "about.title": "الصحراء الخضراء",
    "about.description":
      "الصحراء الخضراء هي شركة ناشئة سعودية في مجال التكنولوجيا الحيوية تأسست في يناير 2020، تهدف الصحراء الخضراء إلى قيادة التأثير البيئي في المملكة العربية السعودية ودول الخليج. هدفنا النهائي هو تطوير القطاع البيئي السعودي من خلال الابتكار والتكنولوجيا. نحن نقدم حلولاً مستدامة للتحديات البيئية ونساهم في رؤية المملكة 2030.",

    // Environment Section
    "env.badge": "البيئة",
    "env.title": "معالجة المشاكل البيئية في المملكة العربية السعودية",
    "env.description1":
      "تواجه المملكة العربية السعودية تحديات بيئية كبيرة تشمل التصحر وندرة المياه وتلوث الهواء وفقدان التنوع البيولوجي. حلولنا المبتكرة تعالج هذه القضايا الحرجة من خلال التكنولوجيا المستدامة والممارسات الصديقة للبيئة.",
    "env.description2":
      "من خلال نهجنا الشامل، نهدف إلى استعادة التوازن البيئي وإيجاد حلول مستدامة تتماشى مع الأهداف البيئية لرؤية المملكة 2030.",
    "env.button": "المزيد من التفاصيل",

    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "الصحراء الخضراء",
    "services.sustainability.title": "الاستدامة والاستخدام المتقدم لتسميد الكتلة الحيوية",
    "services.sustainability.description":
      "حلول متقدمة لتسميد الكتلة الحيوية تحول النفايات العضوية إلى موارد قيمة ومحسنات تربة مستدامة.",
    "services.research.title": "البحث العلمي والتعاون الأكاديمي في المملكة العربية السعودية",
    "services.research.description":
      "مبادرات بحثية تعاونية مع المؤسسات الأكاديمية لتطوير البحث العلمي في إيجاد حلول مستدامة وتكنولوجية.",
    "services.education.title": "التعليم والتوعية حول الصحراء وفوائدها",
    "services.education.description":
      "برامج تعليمية وحملات توعية حول النظم البيئية الصحراوية وأهميتها وممارسات التنمية المستدامة.",

    // Products
    "products.title": "المنتجات",
    "products.subtitle": "الصحراء الخضراء",
    "products.hemp_seeds": "بذور القنب للاستهلاك البشري والحيواني",
    "products.temperature_boxes": "صناديق الحرارة للبناء",
    "products.hemp_fibers": "ألياف القنب لفراش الحيوانات",

    // Partners
    "partners.title": "شركاؤنا",
    "partners.subtitle": "والرعاة",
    "partners.more": "المزيد",

    // News
    "news.title": "آخر الأخبار",
    "news.partnership.title": "شراكة حصرية بين مؤسسة الصحراء الخضراء ولا شانفرير",
    "news.partnership.description":
      "تعلن الصحراء الخضراء عن شراكة استراتيجية مع لا شانفرير لتطوير الممارسات الزراعية المستدامة في منطقة الشرق الأوسط.",
    "news.office.title": "افتتاح مكتب جديد وخطط التوسع",
    "news.office.description":
      "تفتتح الصحراء الخضراء مقرها الجديد في الرياض كجزء من استراتيجية التوسع لخدمة الطلب المتزايد على الحلول البيئية.",

    // Footer
    "footer.description": "نحن نقدم حلول التكنولوجيا الحيوية للتحديات البيئية مع التوافق مع حقوق الكوكب.",
    "footer.company": "الشركة",
    "footer.products": "المنتجات",
    "footer.services": "الخدمات",
    "footer.articles": "آخر المقالات",
    "footer.copyright": "© 2024 شركة الصحراء الخضراء. جميع الحقوق محفوظة.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
  initialLang?: string
}

export function LanguageProvider({ children, initialLang }: LanguageProviderProps) {
  const router = useRouter()
  const pathname = usePathname()

  const [language, setLanguage] = useState<Language>(() => {
    if (initialLang === 'ar-SA') return 'ar'
    if (initialLang === 'en') return 'en'
    return 'en'
  })

  useEffect(() => {
    // Don't override initialLang on first render
    if (!initialLang && typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
        setLanguage(savedLanguage)
      }
    }
  }, [initialLang])

  useEffect(() => {
    if (typeof window === 'undefined') return

    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.style.fontFamily = language === "ar" ? "var(--font-arabic)" : "var(--font-plus-jakarta-sans)"
  }, [language])

  const handleSetLanguage = (newLang: Language) => {
    const targetRoute = newLang === 'ar' ? 'ar-SA' : 'en'

    // Get current path without language prefix
    const currentPath = pathname.replace(/^\/(en|ar-SA)/, '') || ''

    // Navigate to new language route
    router.push(`/${targetRoute}${currentPath}`)
    setLanguage(newLang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const isRTL = language === "ar"

  return <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
