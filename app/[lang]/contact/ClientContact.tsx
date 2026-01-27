"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Section } from "@/components/section";
import { useLanguage, useContent } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const CONTACT_SUBJECT = "Contact form submission from website";

export function ClientContact() {
  const { isRTL } = useLanguage();
  const { contact: contactContent } = useContent() as any;
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      setError(contactContent?.invalidEmail);
      return;
    }
    if (!subject.trim() || !message.trim()) {
      setStatus("error");
      setError(contactContent?.missingFields);
      return;
    }

    const formId = "xeealydl";
    if (!formId) {
      setStatus("error");
      setError(contactContent?.error);
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          subject: subject.trim() || CONTACT_SUBJECT,
          message: message.trim(),
          topic: CONTACT_SUBJECT,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(contactContent?.error);
    }
  };

  return (
    <div
      className={cn("min-h-screen bg-white", isRTL ? "rtl" : "ltr")}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />
      <main>
        <Section className="py-20 lg:py-32">
          <div className="container mx-auto grid gap-10 px-6 sm:px-8 lg:px-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-200">
              <iframe
                title="Riyadh, Saudi Arabia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724757.7488922508!2d46.03950970139482!3d24.72539829806756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03899e8c3c41%3A0x8ef02aeb90f69f09!2sRiyadh!5e0!3m2!1sen!2ssa!4v1716931570532!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold text-gray-900">
                {contactContent?.formTitle ?? contactContent?.title}
              </h1>
              <p className="text-sm text-gray-600">
                {contactContent?.formSubtitle ?? contactContent?.subtitle}
              </p>
              <form onSubmit={handleSubmit} className="mt-2 space-y-4">
                <div className="space-y-1">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="contact-email"
                  >
                    {contactContent?.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus("idle");
                      setError(null);
                    }}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="contact-subject"
                  >
                    {contactContent?.subjectLabel}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      setStatus("idle");
                      setError(null);
                    }}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="text-sm font-medium text-gray-800"
                    htmlFor="contact-message"
                  >
                    {contactContent?.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setStatus("idle");
                      setError(null);
                    }}
                    rows={5}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Tell us about your project or question."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 disabled:opacity-60"
                >
                  {status === "submitting"
                    ? contactContent?.submitting
                    : contactContent?.submit}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    {error ?? contactContent?.error}
                  </p>
                )}
                {status === "success" && (
                  <p className="text-sm text-emerald-600">
                    {contactContent?.success}
                  </p>
                )}
              </form>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
