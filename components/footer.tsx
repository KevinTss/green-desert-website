"use client";

import * as React from "react";
import Image from "next/image";
import { useContent, useLanguage } from "@/components/language-provider";
import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { getAssetPath } from "@/lib/assets";
import Link from "next/link";
import footerContentEn from "@/content/i18n/en/footer.json";

type FooterContent = typeof footerContentEn;

type FooterNewsItem = {
  title: string;
  date?: string;
  image?: string;
  href: string;
};

interface FooterProps {
  latestNews?: FooterNewsItem[];
}

export const Footer = ({ latestNews = [] }: FooterProps) => {
  const { languageRoute, language } = useLanguage();
  const { footer: rawFooter, labels } = useContent();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const footer =
    (rawFooter as Partial<FooterContent> & Record<string, any>) ?? {};

  const resolvedFollowLabel =
    typeof footer.follow === "string"
      ? footer.follow
      : (footer.follow?.label ?? footerContentEn.follow.label);

  const resolvedFollowLinks =
    footer &&
      typeof footer.follow === "object" &&
      Array.isArray(footer.follow?.links)
      ? footer.follow.links
      : footerContentEn.follow.links;

  const resolvedNewsletter = footer.newsletter ?? footerContentEn.newsletter;
  const resolvedDescription = footer.description ?? footerContentEn.description;
  const resolvedSections = Array.isArray(footer.sections)
    ? footer.sections
    : footerContentEn.sections;
  const resolvedLegal = footer.legal ?? footerContentEn.legal;
  const resolvedLogo = footer.logo ?? footerContentEn.logo;
  const resolvedLabels = footer.labels ?? labels ?? footerContentEn;
  const newsHeading =
    footer.newsTitle ??
    (footerContentEn as any).newsTitle ??
    (resolvedLabels as any)?.news ??
    "News";

  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!isValidEmail(email)) {
      setSubmitted("error");
      setErrorMessage(
        resolvedNewsletter.error ?? "Please enter a valid email.",
      );
      return;
    }

    const formId = "xeealydl";
    if (!formId) {
      setSubmitted("error");
      setErrorMessage("Newsletter form is not configured.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          subject: "subscribe to newsletter from website footer",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted("success");
      setEmail("");
    } catch (err) {
      setSubmitted("error");
      setErrorMessage(
        resolvedNewsletter.error ?? "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isExternalLink = (href?: string) =>
    !!href &&
    (/^(https?:)?\/\//.test(href) ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:"));

  const formatHref = (href?: string) => {
    if (!href) return "#";
    if (href.startsWith("#")) return href;
    if (isExternalLink(href)) return href;
    return href.startsWith("/") ? `/${languageRoute}${href}` : href;
  };

  const locale = language === "ar" ? "ar-SA" : "en-US";
  const formatNewsDate = (value?: string) => {
    if (!value) return "";
    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? value
      : date.toLocaleDateString(locale, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
  };

  const socialIconMap: Record<
    string,
    React.ComponentType<{ className?: string }>
  > = {
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon,
    linkedin: LinkedinIcon,
  };

  return (
    <footer id="site-footer" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Top section - Follow us with icons - Full width */}
        <div className="flex items-center justify-between pb-8 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-900">
              {resolvedFollowLabel}
            </span>
            <div className="flex items-center gap-2">
              {resolvedFollowLinks.map(({ href, icon, label }) => {
                const Icon = icon ? socialIconMap[icon] : undefined;
                if (!Icon || !href) return null;
                return (
                  <a
                    key={label}
                    aria-label={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter signup section */}
        <div className="py-12 border-b border-gray-200">
          <div className="max-w-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {resolvedNewsletter.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {resolvedNewsletter.description}
            </p>
          </div>
          <form onSubmit={onSubmit} className="relative">
            <input
              type="email"
              inputMode="email"
              placeholder={resolvedNewsletter.placeholder}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (submitted !== "idle") setSubmitted("idle");
              }}
              className="w-full px-4 py-2.5 pr-28 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              aria-invalid={submitted === "error"}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              {isSubmitting ? "..." : resolvedNewsletter.cta}
            </button>
          </form>
          {submitted === "error" && (
            <p className="mt-2 text-sm text-red-600">
              {errorMessage ?? resolvedNewsletter.error}
            </p>
          )}
          {submitted === "success" && (
            <p className="mt-2 text-sm text-emerald-600">
              {resolvedNewsletter.success}
            </p>
          )}
        </div>

        {/* Main content - Tagline + columns */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-[1.25fr_repeat(4,minmax(0,1fr))] gap-8">
          {/* Column 1 - Tagline text only */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {resolvedDescription}
            </p>
          </div>

          {resolvedSections.map((section, idx) => (
            <div key={section.title ?? `section-${idx}`}>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links?.map((item) => {
                  const href = formatHref(item.href);
                  const isExternal = isExternalLink(item.href);
                  if (isExternal) {
                    return (
                      <li key={item.label ?? href}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item.label ?? href}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={item.label ?? href}>
                      <Link
                        href={href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.label ?? href}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {newsHeading}
            </h4>
            <div className="space-y-3">
              {latestNews.map((item) => {
                const href = formatHref(item.href);
                const formattedDate = formatNewsDate(item.date);
                return (
                  <Link
                    key={item.href ?? item.title}
                    href={href}
                    className="flex items-center gap-3 rounded-lg transition-colors hover:text-gray-900"
                  >
                    {item.image && (
                      <div className="relative h-12 w-16 min-w-16 overflow-hidden rounded-md bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      {formattedDate && (
                        <div className="text-[11px] uppercase tracking-wide text-emerald-600">
                          {formattedDate}
                        </div>
                      )}
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {item.title}
                      </p>
                      <span className="text-xs font-semibold text-emerald-600">
                        {resolvedLabels.readMore ?? "Read more"}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Image
            src={getAssetPath(resolvedLogo?.src || "/logo_GD_black_EN.png")}
            alt={resolvedLogo?.alt || "Green Desert Logo"}
            width={140}
            height={35}
            className="h-7 w-auto"
          />
          <p className="text-sm text-gray-600">{resolvedLegal?.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
