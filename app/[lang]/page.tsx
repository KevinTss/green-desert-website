import { Section1Hero } from "@/components/section-1-hero";
import { Header } from "@/components/header";
import FooterWithNews from "@/components/footer-with-news";
import { Section2OurMission } from "@/components/section-2-our-mission";
import { Section3KpiStrip } from "@/components/section-3-kpi-strip";
// import { Section4PersonaLinks } from "@/components/section-4-persona-links";
import { Section6NewsClient } from "@/components/section-6-news-client";
import { MiniNavbar } from "@/components/mini-navbar";
import { getAllEntries } from "@/lib/posts";
import { getAssetPath } from "@/lib/assets";

async function loadLatestNews(lang: string) {
  const language = lang === "ar-SA" ? "ar" : "en";
  const news = await getAllEntries("news", language);

  return news.slice(0, 3).map((item) => ({
    title: item.title,
    date: item.date,
    image: item.image ? getAssetPath(item.image) : getAssetPath("/placeholder.jpg"),
    href: item.url ? item.url : `/news/${item.slug}`,
  }));
}


interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const latestNews = await loadLatestNews(lang);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Section1Hero />
      {/* Sticky wrapper: overlaps hero with negative margin to visually place mini navbar */}
      {/* <div className="relative -mt-56 md:-mt-56 lg:-mt-60"> */}
      <div className="pt-[5%]">
        <MiniNavbar contentKey="home" />
        {/* <div className="mt-56 md:mt-56 lg:mt-60"> */}
        {/* <div className=""> */}
        <Section2OurMission />
        {/* <SectionBeliefHighlights /> */}
        <Section3KpiStrip />
        {/* <Section4PersonaLinks /> */}
        {/* <Section4OurServices /> */}
        {/* <Section5Partners /> */}
        <Section6NewsClient latestNews={latestNews} />
        {/* </div> */}
      </div>
      <FooterWithNews lang={lang} />
    </div>
  );
}
