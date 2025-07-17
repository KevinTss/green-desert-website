"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

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
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.news": "Latest News",
    "nav.contact": "Contact",
    "header.contact": "CONTACT US",
    "header.language": "ENGLISH",

    // Hero
    "hero.title": "Accelerating Saudi Arabia's",
    "hero.subtitle": "Transformation Towards A Greener Future",

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
    "nav.products": "المنتجات",
    "nav.services": "الخدمات",
    "nav.news": "آخر الأخبار",
    "nav.contact": "اتصل بنا",
    "header.contact": "اتصل بنا",
    "header.language": "العربية",

    // Hero
    "hero.title": "تسريع تحول المملكة العربية السعودية",
    "hero.subtitle": "نحو مستقبل أكثر خضرة",

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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.style.fontFamily = language === "ar" ? "var(--font-arabic)" : "var(--font-plus-jakarta-sans)"
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const isRTL = language === "ar"

  return <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
