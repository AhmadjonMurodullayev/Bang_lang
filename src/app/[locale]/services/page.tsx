import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { Link as IntlLink } from "@/i18n/routing";
import {
  Stethoscope,
  Mail,
  Phone,
  Check,
  ArrowRight,
  Hospital,
  ClipboardList,
  UserRound,
  Plus,
  User,
} from "lucide-react";
import Image from "next/image";
import childIcon from "@/assets/icons/baby-massage.png";
import vaccinationsIcon from "@/assets/icons/LFK.jpeg";
import allergyIcon from "@/assets/icons/CME.png";
import screeningsIcon from "@/assets/icons/treanjor.jpg";
import pathologyIcon from "@/assets/icons/logoped.png";
import CounterWrapper from "@/components/counter-wrapper";
import ServicesAppointmentForm from "@/components/services-appointment-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xizmatlar | Babyland - Bolalar salomatligi markazi",
  description:
    "Bolalar massaji, LFK, emlash, tekshiruv va boshqa professional pediatriya xizmatlari. Navbat olish va maslahat olish.",
  keywords: [
    "bolalar massaji",
    "LFK",
    "emlash",
    "pediatriya xizmatlari",
    "navbat olish",
    "bolalar tekshiruvi",
  ],
  openGraph: {
    title: "Xizmatlar | Babyland",
    description: "Professional pediatriya xizmatlari va navbat olish",
    images: ["/Babyland1.svg"],
  },
};

export default async function ServicesPage() {
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
        className=" py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            {t("common.services")}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>{t("common.home")}</span>
            <span>{">"}</span>
            <span>{t("common.services")}</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold  uppercase tracking-wider">
              {t("services.subtitle")}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">
              {t("services.title")}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                image: childIcon,
                title: t("services.childMassage"),
                description: t("services.childMassageDesc"),
              },
              {
                image: vaccinationsIcon,
                title: t("services.lfk"),
                description: t("services.lfkDesc"),
              },
              {
                image: allergyIcon,
                title: t("services.cme"),
                description: t("services.cmeDesc"),
              },
              {
                image: screeningsIcon,
                title: t("services.trainer"),
                description: t("services.trainerDesc"),
              },
              {
                image: pathologyIcon,
                title: t("services.logoped"),
                description: t("services.logopedDesc"),
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="group hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-10">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full  group-hover:scale-110 transition-all duration-300 shadow-lg p-3`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <IntlLink
                    href="/services"
                    className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {t("services.readMore")} <ArrowRight className="h-4 w-4" />
                  </IntlLink>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-white group hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2">
              <CardContent className="p-10 flex flex-col justify-center h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Plus className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  {t("services.moreServices")}
                </h3>
                <p className="mb-6 text-sm text-white/90 leading-relaxed">
                  {t("services.moreServicesDesc")}
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 w-fit rounded-full font-semibold"
                >
                  <IntlLink href="/services/details">
                    {t("services.allServices")}
                  </IntlLink>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="gradient-blue py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Form */}
            <ServicesAppointmentForm
              translations={{
                fullName: t("services.appointment.fullName"),
                namePlaceholder: t("services.appointment.namePlaceholder"),
                phone: t("services.appointment.phone"),
                phonePlaceholder: t("services.appointment.phonePlaceholder"),
                email: t("services.appointment.email"),
                emailPlaceholder: t("services.appointment.emailPlaceholder"),
                selectService: t("services.appointment.selectService"),
                selectServicePlaceholder: t(
                  "services.appointment.selectServicePlaceholder"
                ),
                date: t("services.appointment.date"),
                message: t("services.appointment.message"),
                messagePlaceholder: t(
                  "services.appointment.messagePlaceholder"
                ),
                bookAppointment: t("services.appointment.bookAppointment"),
                childMassage: t("services.childMassage"),
                lfk: t("services.lfk"),
                cme: t("services.cme"),
                trainer: t("services.trainer"),
                logoped: t("services.logoped"),
                orthoped: t("common.orthoped"),
                pediatrician: t("common.pediatrician"),
                neurologist: t("common.neurologist"),
                acupuncture: t("common.acupuncture"),
                successMessage: t("services.appointment.successMessage"),
                errorMessage: t("services.appointment.errorMessage"),
                loadingMessage: t("services.appointment.loadingMessage"),
              }}
            />

            {/* Info */}
            <div className="text-white">
              <div className="mb-4 text-sm font-bold uppercase tracking-wider">
                {t("services.appointment.title")}
              </div>
              <h2 className="mb-6 text-4xl lg:text-5xl font-bold">
                {t("services.appointment.subtitle")}
              </h2>
              <p className="mb-10 text-white/90 leading-relaxed text-lg">
                {t("services.appointment.description")}
              </p>

              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-bold">
                  {t("services.appointment.workingHours")}
                </h3>
                <div className="space-y-4">
                  {getRawTranslation("services.appointment.schedule", [
                    { day: "Dushanba - Juma", time: "08:00 - 18:00" },
                    { day: "Shanba", time: "08:00 - 15:00" },
                    { day: "Yakshanba", time: "dam olish kuni" },
                  ]).map(
                    (schedule: { day: string; time: string }, i: number) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-2 border-b border-white/20"
                      >
                        <span className="text-white/90">{schedule.day}</span>
                        <span className="font-semibold">{schedule.time}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-bold">
                  {t("services.appointment.contactUs")}
                </h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  {t("services.appointment.contactDescription")}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/10 p-2 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-xs text-white/70 mb-1">
                        {t("services.appointment.emailLabel")}
                      </div>
                      <div className="text-sm font-semibold">
                        {t("services.appointment.emailValue")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-xs text-white/70 mb-1">
                        {t("services.appointment.phoneLabel")}
                      </div>
                      <div className="text-sm font-semibold">
                        {t("services.appointment.phoneValue")}
                      </div>
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
          {/* Top Section - Locations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-24">
            {/* Location 1 */}
            <div className="rounded-2xl border border-blue-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Map iframe */}
              <div className="w-full h-72 md:h-96 relative">
                <iframe
                  src="https://www.google.com/maps?q=41.327459,69.215902&hl=ru&z=19&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Address */}
              <div className="p-5 md:p-6 bg-white">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-orange-400 block mb-1.5">
                      {t("common.locations.addressLabel")}
                    </span>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                      {t("common.locations.location1.address")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location 2 */}
            <div className="rounded-2xl border border-blue-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Map iframe */}
              <div className="w-full h-72 md:h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1499.3218757724096!2d69.184987!3d41.273092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b53794ef631%3A0x43b45d5da1c8e6a1!2sBABYLAND!5e0!3m2!1sru!2sus!4v1761911176176!5m2!1sru!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Address */}
              <div className="p-5 md:p-6 bg-white">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-orange-400 block mb-1.5">
                      {t("common.locations.addressLabel")}
                    </span>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                      {t("common.locations.location2.address")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Statistics */}
          {/* Bottom Section - Statistics */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-10 md:px-10 md:py-10 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
                {[
                  {
                    count: 48,
                    label: t("services.statistics.doctors"),
                    iconType: "doctor",
                    highlight: false,
                  },
                  {
                    count: 120,
                    label: t("services.statistics.medicalStaff"),
                    iconType: "stethoscope",
                    highlight: false,
                  },
                  {
                    count: 92,
                    label: t("services.statistics.pediatricClinics"),
                    iconType: "hospital",
                    highlight: true,
                  },
                  {
                    count: 231,
                    label: t("services.statistics.safeMonitoring"),
                    iconType: "clipboard",
                    highlight: false,
                  },
                ].map((stat, i) => (
                  <div key={i} className="relative">
                    {/* Top white pill with icon */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[200px] sm:w-[250px] h-[70px] bg-white rounded-[999px] shadow-md flex items-center justify-center">
                      {stat.iconType === "doctor" && (
                        <UserRound
                          className={`${
                            stat.highlight
                              ? "text-emerald-600"
                              : "text-blue-600"
                          } h-8 w-8`}
                        />
                      )}
                      {stat.iconType === "stethoscope" && (
                        <Stethoscope
                          className={`${
                            stat.highlight
                              ? "text-emerald-600"
                              : "text-blue-600"
                          } h-8 w-8`}
                        />
                      )}
                      {stat.iconType === "hospital" && (
                        <Hospital
                          className={`${
                            stat.highlight
                              ? "text-emerald-600"
                              : "text-blue-600"
                          } h-8 w-8`}
                        />
                      )}
                      {stat.iconType === "clipboard" && (
                        <ClipboardList
                          className={`${
                            stat.highlight
                              ? "text-emerald-600"
                              : "text-blue-600"
                          } h-8 w-8`}
                        />
                      )}
                    </div>

                    {/* Content card */}
                    <div
                      className={`${
                        stat.highlight
                          ? "bg-emerald-500 rounded-2xl shadow-xl"
                          : ""
                      } pt-16 pb-7 px-6 text-center text-white`}
                    >
                      <CounterWrapper
                        end={stat.count}
                        duration={1200}
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight"
                        suffix="+"
                      />
                      <div className="mt-1 text-white/90 font-medium text-base sm:text-lg">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gradient-blue py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-white/80 uppercase tracking-wider">
              {t("services.testimonials.subtitle")}
            </div>
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold text-white">
              {t("services.testimonials.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-white/90 text-lg">
              {t("services.testimonials.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {(() => {
              try {
                const items = (t.raw("common.testimonials.items") as Array<{name: string, text: string}>) || [];
                if (items.length >= 3) {
                  return items.slice(0, 3).map((item, i) => (
                    <Card
                      key={i}
                      className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                    >
                      <CardContent className="p-8">
                        <p className="mb-6 text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/20 flex items-center justify-center">
                            <User />
                          </div>
                          <div>
                            <h4 className="font-bold">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {t("services.testimonials.parent")}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ));
                }
              } catch {}
              // Fallback
              return [
                { name: "Shaxzoda", text: t("services.testimonials.testimonial") },
                { name: "Nigora", text: "Bizning farzandim uchun logoped-defektolog bilan ishlash juda foydali bo'ldi." },
                { name: "Aziza", text: "Gidromassaj va CME terapiyasidan foydalanamiz. Bolamiz motor ko'nikmalari yaxshilandi." }
              ].map((item, i) => (
                <Card
                  key={i}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/20 flex items-center justify-center">
                        <User />
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t("common.testimonials.parent")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-primary uppercase tracking-wider">
              {t("services.pricing.subtitle")}
            </div>
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold">
              {t("services.pricing.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              {t("services.pricing.description")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-10">
                <h3 className="mb-6 text-3xl font-bold">
                  {t("services.childMassage")}
                </h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">$92</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <ul className="mb-10 space-y-4">
                  {[
                    t("services.childMassage"),
                    t("services.lfk"),
                    t("services.cme"),
                    t("services.trainer"),
                    t("services.logoped"),
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-base">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg">
                  {t("services.pricing.getMoreInfo")}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-10">
                <h3 className="mb-6 text-3xl font-bold">{t("services.lfk")}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">$82</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <ul className="mb-10 space-y-4">
                  {[
                    t("services.lfk"),
                    t("services.cme"),
                    t("services.trainer"),
                    t("services.logoped"),
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-base">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg">
                  {t("services.pricing.getMoreInfo")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
