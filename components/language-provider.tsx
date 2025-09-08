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
  languageRoute: 'en' | 'ar-SA'
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
    "mini.vision": "Vision",
    "mini.journey": "Journey",


    // Company page
    "company.badge": "Company",
    "company.title": "About Green Desert",
    "company.intro": "Green Desert is a Saudi Arabian biotechnology startup founded in January 2020. We address the region’s most pressing environmental challenges through innovative, sustainable solutions rooted in Cannabis sativa (industrial hemp), aligned with Saudi Arabia’s Vision 2030.",
    "company.mission.title": "Our Mission",
    "company.mission.body": "We aim to break the vicious cycle of desertification, water scarcity, and soil degradation with practical, scalable solutions. Our biotechnology-driven products and services reduce waste, turn byproducts into value, and power a greener circular economy across the Kingdom.",
    "company.why.title": "Why Industrial Hemp?",
    "company.why.body": "Industrial hemp (Cannabis sativa) is a low-input, fast-growing crop used worldwide for environmental and industrial applications. We explore its use in soil improvement, water management, and sustainable biomaterials — operating within local regulatory frameworks and full legal compliance.",
    "company.why.bullets.soil": "Soil remediation: helping improve soil structure and health through phytoremediation.",
    "company.why.bullets.water": "Water stewardship: high absorbency and uses in bio-mulch/biochar to improve moisture retention.",
    "company.why.bullets.materials": "Bio-based materials: hemp fibers and hurds for products like hemp-lime blocks and insulation.",
    "company.why.bullets.regen": "Regenerative agriculture: potential role in biomass circularity and waste reduction.",
    "company.impact.title": "Impact Pillars",
    "company.impact.greening.title": "Desert Greening",
    "company.impact.greening.desc": "Solutions that reduce erosion, increase ground cover, and enhance soil vitality.",
    "company.impact.water.title": "Water Stewardship",
    "company.impact.water.desc": "Improving moisture retention and reducing waste through smart biomaterials.",
    "company.impact.waste.title": "Waste-to-Value",
    "company.impact.waste.desc": "Converting organic residues into valuable resources within a circular economy.",
    "company.impact.jobs.title": "Jobs & Knowledge",
    "company.impact.jobs.desc": "Creating green jobs and building local capabilities with academic partners.",
    "company.vision.title": "Committed to Vision 2030",
    "company.vision.body": "Our initiatives contribute to quality-of-life, environmental protection, and economic diversification goals. We collaborate with government stakeholders and industry partners to deploy scalable solutions that deliver tangible impact across Saudi cities and regions.",
    "company.cta.lead": "Follow our journey toward a greener Kingdom:",
    "company.cta.back": "Back to Home",
    "company.cta.blog": "Visit the Blog",
    "company.schema.description": "Sustainable biotechnology company in Saudi Arabia using industrial hemp to address environmental challenges.",
    "company.journey.title": "Our Journey",
    "company.journey.p1": "Founded in January 2020 in Saudi Arabia, Green Desert pioneers sustainable biotechnology centered on industrial hemp within local regulatory frameworks, collaborating with universities, labs, and industry partners.",
    "company.journey.p2": "From research pilots and field trials to early product prototypes—such as hemp‑lime blocks, high‑absorbency animal bedding, and soil remediation media—we build evidence, supply partnerships, and community engagement.",
    "company.journey.p3": "Next, we focus on scaling pilots across regions, deepening regulatory collaboration, and developing local manufacturing to create green jobs and measurable environmental impact aligned with Vision 2030.",

    // Team page
    "team.badge": "Team",
    "team.title": "Our Team",
    "team.intro": "A multidisciplinary team committed to sustainable innovation and environmental impact across Saudi Arabia and the Gulf region.",
    "team.vision.title": "Our Team Vision",
    "team.vision.body": "We bring together science, policy, and industry expertise to accelerate the Kingdom’s transition toward circular, bio‑based solutions that serve communities and ecosystems.",
    "team.journey.title": "Our Journey",
    "team.journey.p1": "Our team grew from a shared belief that Saudi Arabia can lead the region in sustainable biotechnology by aligning innovation with local needs and regulations.",
    "team.journey.p2": "Through partnerships with academia and industry, we validate real‑world use cases and build the capabilities needed for scale.",
    "team.journey.p3": "We continue to expand our network, cultivate talent, and build capacity for a greener future.",
    "team.member.abdulhadi.name": "Abdulhadi Alamer",
    "team.member.abdulhadi.role": "Founder",
    "team.member.abdulhadi.bio": "Founder of Green Desert. Abdulhadi first learned about cannabis—particularly medical use—when Colorado’s Amendment 64 passed on November 6, 2012, leading to recreational legalization. Shortly after, he became an entrepreneur and built a reputation for forming relationships in green businesses around the globe.",

    // Sponsors page
    "sponsors.badge": "Sponsors",
    "sponsors.title": "Sponsors & Partners",
    "sponsors.intro": "Our strategic sponsors and partners help us scale impact with governance, research, and industry collaboration.",
    "sponsors.vision.title": "Partnership Vision",
    "sponsors.vision.body": "We build long‑term collaborations that combine scientific rigor, regulatory alignment, and market execution to deliver measurable environmental outcomes.",
    "sponsors.journey.title": "Our Partnership Journey",
    "sponsors.journey.p1": "From early pilots to deployment, partners enable access to infrastructure, data, and communities.",
    "sponsors.journey.p2": "We co‑develop solutions with institutions and companies aligned with Vision 2030 sustainability goals.",
    "sponsors.journey.p3": "New sponsorships and alliances are underway to expand our regional footprint and local manufacturing.",

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
    "partners.title": "Our Partners and Sponsors",
    "partners.more": "MORE",

    // News
    "news.title": "Latest News",
    "news.subtitle": "Green Desert",
    "news.partnership.title": "Exclusive Partnership Between Green Desert Establishment and La Chanvriere",
    "news.partnership.description":
      "Green Desert announces strategic partnership with La Chanvriere to advance sustainable agricultural practices in the Middle East region.",
    "news.office.title": "New Office Opening and Expansion Plans",
    "news.office.description":
      "Green Desert opens new headquarters in Riyadh as part of expansion strategy to serve growing demand for environmental solutions.",

    // Footer
    "footer.follow": "Follow us",
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
    "mini.vision": "الرؤية",
    "mini.journey": "رحلتنا",

    // Company page
    "company.badge": "عن الشركة",
    "company.title": "عن الصحراء الخضراء",
    "company.intro": "الصحراء الخضراء شركة سعودية ناشئة في مجال التكنولوجيا الحيوية تأسست في يناير 2020. نعمل على معالجة التحديات البيئية في المملكة العربية السعودية ودول الخليج عبر حلول مبتكرة ومستدامة تعتمد على نبات القنب الصناعي (Cannabis sativa) بما يتماشى مع رؤية 2030.",
    "company.mission.title": "مهمتنا",
    "company.mission.body": "نهدف إلى كسر الحلقة المفرغة للتصحر وندرة المياه وتدهور التربة من خلال حلول عملية قابلة للتوسع. نطوّر منتجات وخدمات حيوية تقلل الهدر، وتحوّل المخلفات إلى موارد، وتغذي اقتصادًا دائريًا أكثر خضرة في المملكة.",
    "company.why.title": "لماذا القنب الصناعي؟",
    "company.why.body": "القنب الصناعي (Cannabis sativa) هو محصول منخفض المدخلات وسريع النمو يُستخدم حول العالم في التطبيقات البيئية والصناعية. نستكشف استخداماته في تحسين التربة، وإدارة المياه، والمواد الحيوية المستدامة — ضمن الأطر التنظيمية المحلية وبالتوافق التام مع الأنظمة المعمول بها.",
    "company.why.bullets.soil": "المعالجة النباتية للتربة: المساعدة في تحسين بنية التربة وصحتها.",
    "company.why.bullets.water": "إدارة المياه: امتصاص عالٍ واستخدامات في المهاد الحيوي والبايوشار لتحسين حفظ الرطوبة.",
    "company.why.bullets.materials": "مواد بناء حيوية: ألياف ولبّ القنب لمنتجات مثل كتل الهيمبلايم والعوازل.",
    "company.why.bullets.regen": "الزراعة التجديدية: دور محتمل في تدوير الكتلة الحيوية وتقليل الهدر.",
    "company.impact.title": "مجالات الأثر",
    "company.impact.greening.title": "تخضير الصحراء",
    "company.impact.greening.desc": "حلول تقلّل التعرية وتزيد الغطاء النباتي وتدعم صحة التربة.",
    "company.impact.water.title": "إدارة المياه",
    "company.impact.water.desc": "تحسين حفظ الرطوبة وتقليل الهدر عبر مواد حيوية ذكية.",
    "company.impact.waste.title": "تحويل النفايات إلى قيمة",
    "company.impact.waste.desc": "تحويل المخلفات العضوية إلى موارد نافعة ضمن اقتصاد دائري.",
    "company.impact.jobs.title": "وظائف ومعرفة",
    "company.impact.jobs.desc": "خلق فرص عمل خضراء وبناء قدرات محلية بالشراكة مع الجامعات.",
    "company.vision.title": "الالتزام برؤية 2030",
    "company.vision.body": "تسهم مبادراتنا في أهداف جودة الحياة، وحماية البيئة، وتنويع الاقتصاد. نعمل مع الجهات الحكومية والشركاء الصناعيين لتطوير حلول قابلة للتوسع تحدث أثرًا ملموسًا في مدن ومناطق المملكة.",
    "company.cta.lead": "تابع رحلتنا نحو مملكة أكثر اخضرارًا:",
    "company.cta.back": "العودة إلى الرئيسية",
    "company.cta.blog": "زيارة المدونة",
    "company.schema.description": "شركة تكنولوجيا حيوية سعودية تستخدم القنب الصناعي لمعالجة التحديات البيئية.",
    "company.journey.title": "رحلتنا",
    "company.journey.p1": "تأسست في يناير 2020 في المملكة العربية السعودية، تقود الصحراء الخضراء الابتكار في التكنولوجيا الحيوية المستدامة حول القنب الصناعي ضمن الأطر التنظيمية المحلية، وبالتعاون مع الجامعات والمختبرات والشركاء الصناعيين.",
    "company.journey.p2": "من الدراسات البحثية والتجارب الحقلية إلى نماذج أولية للمنتجات — مثل كتل الهيمبلايم، وفراش الحيوانات عالي الامتصاص، ووسائط تحسين التربة — نبني الأدلة العلمية، وشراكات التوريد، والتفاعل المجتمعي.",
    "company.journey.p3": "تتمثل خطوتنا التالية في توسيع التجارب عبر المناطق، وتعميق التعاون التنظيمي، وتطوير التصنيع المحلي لخلق وظائف خضراء وأثر بيئي ملموس يتماشى مع رؤية 2030.",

    // Team page (AR)
    "team.badge": "الفريق",
    "team.title": "فريقنا",
    "team.intro": "فريق متعدد التخصصات ملتزم بالابتكار المستدام والأثر البيئي عبر المملكة العربية السعودية ومنطقة الخليج.",
    "team.vision.title": "رؤيتنا للفريق",
    "team.vision.body": "نجمع بين الخبرات العلمية والتنظيمية والصناعية لتسريع انتقال المملكة نحو حلول حيوية دائرية تخدم المجتمع والبيئة.",
    "team.journey.title": "رحلتنا",
    "team.journey.p1": "نما فريقنا من إيمان مشترك بأن المملكة يمكنها قيادة المنطقة في التكنولوجيا الحيوية المستدامة عبر مواءمة الابتكار مع الاحتياجات المحلية والأنظمة.",
    "team.journey.p2": "من خلال الشراكات مع الجامعات والصناعة نثبت حالات استخدام واقعية ونبني القدرات اللازمة للتوسع.",
    "team.journey.p3": "نواصل توسيع شبكتنا وتنمية المواهب وبناء القدرات لمستقبل أكثر خضرة.",
    "team.member.abdulhadi.name": "عبدالهادي العامر",
    "team.member.abdulhadi.role": "المؤسس",
    "team.member.abdulhadi.bio": "مؤسس الصحراء الخضراء. تعرّف عبدالهادي على نبات القنب — خصوصًا الاستخدام الطبي — عند إقرار تعديل كولورادو 64 في 6 نوفمبر 2012 الذي أدى إلى التقنين الترفيهي. بعد ذلك بوقت قصير أصبح رائد أعمال وبنى سمعته في بناء العلاقات ضمن الأعمال الخضراء حول العالم.",

    // Sponsors page (AR)
    "sponsors.badge": "الرعاة",
    "sponsors.title": "الرعاة والشركاء",
    "sponsors.intro": "يدعم رعاتنا وشركاؤنا الاستراتيجيون توسيع أثرنا من خلال الحوكمة والبحث والتعاون الصناعي.",
    "sponsors.vision.title": "رؤية الشراكات",
    "sponsors.vision.body": "نبني تعاونات طويلة الأمد تجمع بين الصرامة العلمية والمواءمة التنظيمية والتنفيذ السوقي لتحقيق نتائج بيئية قابلة للقياس.",
    "sponsors.journey.title": "رحلة الشراكات",
    "sponsors.journey.p1": "من التجارب المبكرة إلى النشر، تمكّننا الشراكات من الوصول إلى البنية التحتية والبيانات والمجتمعات.",
    "sponsors.journey.p2": "نطوّر حلولًا مشتركة مع مؤسسات وشركات متوافقة مع أهداف الاستدامة لرؤية 2030.",
    "sponsors.journey.p3": "تجري رعايات وتحالفات جديدة لتوسيع حضورنا الإقليمي والتصنيع المحلي.",

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
    "partners.title": "شركاؤنا والرعاة",
    "partners.more": "المزيد",

    // News
    "news.title": "آخر الأخبار",
    "news.subtitle": "الصحراء الخضراء",
    "news.partnership.title": "شراكة حصرية بين مؤسسة الصحراء الخضراء ولا شانفرير",
    "news.partnership.description":
      "تعلن الصحراء الخضراء عن شراكة استراتيجية مع لا شانفرير لتطوير الممارسات الزراعية المستدامة في منطقة الشرق الأوسط.",
    "news.office.title": "افتتاح مكتب جديد وخطط التوسع",
    "news.office.description":
      "تفتتح الصحراء الخضراء مقرها الجديد في الرياض كجزء من استراتيجية التوسع لخدمة الطلب المتزايد على الحلول البيئية.",

    // Footer
    "footer.follow": "تابعنا",
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

  const languageRoute: 'en' | 'ar-SA' = language === 'ar' ? 'ar-SA' : 'en'
  return <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL, languageRoute }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
