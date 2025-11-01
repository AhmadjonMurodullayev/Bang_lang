// Removed unused imports
import {
  Mail,
  Phone,
  Search,
  Users,
  Calendar,
  ClipboardCheck,
} from "lucide-react";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import AppointmentForm from "@/components/appointment-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navbat olish | Babyland - Bolalar salomatligi markazi",
  description: "Babyland pediatriya markazida navbat oling. Online navbat olish, telefon orqali yozilish va maslahat olish.",
  keywords: ["navbat olish", "online navbat", "pediatriya navbat", "bolalar doktori", "maslahat"],
  openGraph: {
    title: "Navbat olish | Babyland",
    description: "Online navbat olish va maslahat olish",
    images: ['/Babyland1.svg'],
  },
};

export default async function Appointment() {
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
    <>
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
        className=" py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">{t("appointment.title")}</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>{t("common.home")}</span>
            <span>{">"}</span>
            <span>{t("appointment.title")}</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Form */}
            <AppointmentForm translations={{
              fullName: t("appointment.fullName"),
              namePlaceholder: t("appointment.namePlaceholder"),
              phoneNumber: t("appointment.phoneNumber"),
              phonePlaceholder: t("appointment.phonePlaceholder"),
              service: t("appointment.service"),
              selectService: t("appointment.selectService"),
              date: t("appointment.date"),
              additionalRequest: t("appointment.additionalRequest"),
              messagePlaceholder: t("appointment.messagePlaceholder"),
              submit: t("appointment.submit"),
              submitting: t("appointment.submitting"),
              successMessage: t("appointment.successMessage"),
              errorMessage: t("appointment.errorMessage"),
                  services: getRawTranslation("appointment.services", [
                "Bolalar massaji",
                "LFK",
                "CME",
                "Trenajor",
                "Gidromassaj",
                "Logoped-defektolog",
                "Ortoped",
                "Pediatr",
                "Nevropatolog",
                "Igna terapiya"
              ])
            }} />

            {/* Info */}
            <div className="text-black">
              <div className="mb-4 text-sm font-bold uppercase tracking-wider">
                {t("appointment.subtitle")}
              </div>
              <h2 className="mb-6 text-4xl lg:text-5xl font-bold">
                {t("appointment.bookAppointment")}
              </h2>
              <p className="mb-7 text-black/90 leading-relaxed text-lg">
                {t("appointment.description")}
              </p>

              <div className="mb-5">
                <h3 className="mb-6 text-2xl font-bold">{t("appointment.workingHours")}</h3>
                    <div className="space-y-4">
                      {getRawTranslation("appointment.schedule", [
                        { day: "Dushanba - Juma", time: "08:00 - 18:00" },
                        { day: "Shanba", time: "08:00 - 15:00" },
                        { day: "Yakshanba", time: "dam olish kuni" }
                      ]).map((schedule: { day: string; time: string }, i: number) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-white/20"
                    >
                      <span className="text-black/90">{schedule.day}</span>
                      <span className="font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h3 className="mb-4 text-2xl font-bold">{t("appointment.support")}</h3>
                <p className="mb-4 text-black/90 leading-relaxed">
                  {t("appointment.supportDescription")}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-black/70 mb-1">
                        {t("appointment.emailLabel")}
                      </div>
                      <div className="text-sm font-semibold">
                        {t("appointment.emailValue")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-black/70 mb-1">
                        {t("appointment.phoneLabel")}
                      </div>
                      <div className="text-sm font-semibold">{t("appointment.phoneValue")}</div>
                         <div className="text-sm font-semibold">+998998026232</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src="/pediatrician-with-child-patient.jpg"
                  alt="Doctor with tablet and child"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="text-sm font-bold text-primary uppercase tracking-wider">
                {t("appointment.howToBook.subtitle")}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">
                {t("appointment.howToBook.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("appointment.howToBook.description")}
              </p>

                  <div className="space-y-6 pt-4">
                    {getRawTranslation("appointment.howToBook.steps", [
                      { step: "01", title: "Xizmatlarni tanlash" },
                      { step: "02", title: "Navbat olish" },
                      { step: "03", title: "Shifokor bilan uchrashish" }
                    ]).map((step: { step: string; title: string }, i: number) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex items-center gap-3">
                      {i === 0 && <ClipboardCheck className="h-6 w-6 text-primary" />}
                      {i === 1 && <Calendar className="h-6 w-6 text-primary" />}
                      {i === 2 && <Users className="h-6 w-6 text-primary" />}
                      <h4 className="font-semibold text-foreground text-lg">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}