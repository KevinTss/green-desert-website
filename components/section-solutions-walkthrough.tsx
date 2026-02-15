"use client";

import Link from "next/link";

import { useContent } from "@/components/language-provider";
import { Section } from "@/components/section";
import { Heading, Text as TypographyText } from "@/components/typography";
import { Button } from "@/components/ui/button";

export function SectionSolutionsWalkthrough() {
  const { solutions } = useContent();
  const details = solutions?.details as any;
  const actions = details?.actions;

  if (!details) return null;

  return (
    <Section id="walkthrough" className="bg-gray-50">
      <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <Heading as="h3" size="2xl">
            {details.walkthroughHeading}
          </Heading>
          {details.walkthroughDescription && (
            <TypographyText className="mt-4 text-slate-600">
              {details.walkthroughDescription}
            </TypographyText>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            {actions?.scheduleHref && actions.scheduleLabel && (
              <Button
                asChild
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                <Link href={actions.scheduleHref}>{actions.scheduleLabel}</Link>
              </Button>
            )}
            {actions?.specsHref && actions.specsLabel && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-400 text-emerald-600 hover:bg-emerald-50"
              >
                <Link
                  href={actions.specsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {actions.specsLabel}
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 text-sm text-slate-600 shadow-sm">
          {actions?.contactLabel && <p>{actions.contactLabel}</p>}
          {actions?.contactEmail && (
            <p className="mt-2 font-semibold text-emerald-600">
              {actions.contactEmail}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
