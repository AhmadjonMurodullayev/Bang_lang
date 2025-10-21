import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getTranslations } from 'next-intl/server';
import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bog'lanish | Babyland - Bolalar salomatligi markazi",
  description: "Babyland pediatriya markazi bilan bog'laning. Manzil, telefon raqamlar, email va ish vaqti. Savollar uchun bizga murojaat qiling.",
  keywords: ["bog'lanish", "manzil", "telefon", "email", "ish vaqti", "pediatriya markazi"],
  openGraph: {
    title: "Bog'lanish | Babyland",
    description: "Biz bilan bog'laning va savollar bering",
    images: ['/Babyland1.svg'],
  },
};

export default async function ContactPage() {
  const t = await getTranslations();
  
  // Safe raw translation getter with fallback
  const getRawTranslation = (key: string, fallback: unknown) => {
    try {
      const value = t.raw(key);
      return value || fallback;
    } catch (error) {
      console.warn(`Raw translation error for key "${key}":`, error);
      return fallback;
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/backround.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
          display: "flex",
          alignItems: "center",
        }}
        className=" py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">{t("contact.title")}</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>{t("common.home")}</span>
            <span>{">"}</span>
            <span>{t("contact.title")}</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">
              {t("contact.subtitle")}
            </div>
            <h2 className="text-4xl font-bold">{t("contact.contactUs")}</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              {
                icon: <MapPin className="h-7 w-7 text-white" />,
                title: t("contact.ourOffice"),
                lines: [
                  t("contact.address"),
                ],
              },
              {
                icon: <Phone className="h-7 w-7 text-white" />,
                title: t("contact.callUs"),
                lines: getRawTranslation("contact.phoneNumbers", ["+998952817070 |", "+998998026232"]),
              },
              {
                icon: <Mail className="h-7 w-7 text-white" />,
                title: t("contact.email"),
                lines: [t("contact.emailValue")],
              },
              {
                icon: <Clock className="h-7 w-7 text-white" />,
                title: t("contact.workingHours"),
                lines: [
                  t("contact.workingHoursDesc"), 
                  t("contact.workingHoursDesc2")
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 pt-14 text-center"
              >
                {/* Icon Circle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#23c99a] rounded-full h-16 w-16 flex items-center justify-center shadow-md">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                {item.lines.map((line: string, j: number) => (
                  <p key={j} className="text-sm text-gray-500">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Map and Form */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <Card className="overflow-hidden">
              <div className="aspect-[4/4] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.1870106527062!2d69.16063887659553!3d41.26126390380801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89c1564c9547%3A0xc8af944454712a43!2z0JfQsNGA0LPQsNGA0LvQuNC6INGD0LvQuNGG0LAsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1760962611647!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>

            {/* Contact Form */}
            <ContactForm translations={{
              sendMessage: t("contact.sendMessage"),
              sendMessageDesc: t("contact.sendMessageDesc"),
              fullName: t("contact.fullName"),
              namePlaceholder: t("contact.namePlaceholder"),
              phone: t("contact.phone"),
              phonePlaceholder: t("contact.phonePlaceholder"),
              emailLabel: t("contact.emailLabel"),
              emailPlaceholder: t("contact.emailPlaceholder"),
              subject: t("contact.subject"),
              subjectPlaceholder: t("contact.subjectPlaceholder"),
              messageText: t("contact.messageText"),
              messagePlaceholder: t("contact.messagePlaceholder"),
              submit: t("contact.submit"),
              submitting: t("contact.submitting"),
              successMessage: t("contact.successMessage"),
              errorMessage: t("contact.errorMessage")
            }} />
          </div>
        </div>
      </section>
    </div>
  );
}