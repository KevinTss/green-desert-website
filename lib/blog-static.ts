// Static blog data for client-side components
// This file is generated at build time and doesn't use fs

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content?: string
  author?: string
  image?: string
  tags?: string[]
  language: 'en' | 'ar'
}

// These will be populated with actual blog posts at build time
export const staticBlogPosts: { en: BlogPost[], ar: BlogPost[] } = {
  en: [
    {
      slug: "hemp-sustainability-saudi-arabia",
      title: "Hemp Cultivation: A Sustainable Future for Saudi Arabia",
      date: "2024-12-01",
      excerpt: "Exploring how hemp cultivation can contribute to Saudi Arabia's Vision 2030 environmental goals while creating sustainable agricultural solutions.",
      author: "Green Desert Team",
      image: "/hemp_seeds_AdobeStock-443x300.jpeg",
      tags: ["Hemp", "Sustainability", "Vision 2030", "Agriculture"],
      language: "en"
    },
    {
      slug: "biotechnology-environmental-solutions",
      title: "Biotechnology Solutions for Environmental Challenges in the Middle East",
      date: "2024-11-15",
      excerpt: "How cutting-edge biotechnology is providing innovative solutions to address environmental challenges across the Middle East region.",
      author: "Dr. Ahmed Al-Rashid",
      image: "/placeholder.jpg",
      tags: ["Biotechnology", "Environment", "Innovation", "Middle East"],
      language: "en"
    }
  ],
  ar: [
    {
      slug: "hemp-sustainability-saudi-arabia",
      title: "زراعة القنب: مستقبل مستدام للمملكة العربية السعودية",
      date: "2024-12-01",
      excerpt: "استكشاف كيف يمكن لزراعة القنب أن تساهم في أهداف رؤية السعودية 2030 البيئية مع إنشاء حلول زراعية مستدامة.",
      author: "فريق الصحراء الخضراء",
      image: "/hemp_seeds_AdobeStock-443x300.jpeg",
      tags: ["القنب", "الاستدامة", "رؤية 2030", "الزراعة"],
      language: "ar"
    },
    {
      slug: "biotechnology-environmental-solutions",
      title: "حلول التكنولوجيا الحيوية للتحديات البيئية في الشرق الأوسط",
      date: "2024-11-15",
      excerpt: "كيف تقدم التكنولوجيا الحيوية المتطورة حلولاً مبتكرة لمعالجة التحديات البيئية في منطقة الشرق الأوسط.",
      author: "د. أحمد الراشد",
      image: "/placeholder.jpg",
      tags: ["التكنولوجيا الحيوية", "البيئة", "الابتكار", "الشرق الأوسط"],
      language: "ar"
    }
  ]
}

export function getLatestPosts(language: 'en' | 'ar', count: number = 2): BlogPost[] {
  return staticBlogPosts[language].slice(0, count)
}