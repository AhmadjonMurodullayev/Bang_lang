import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Counter } from "@/components/counter";
import {
  Heart,
  Syringe,
  Stethoscope,
  ArrowRight,
  Check,
  Users,
  TrendingUp,
  ClipboardCheck,
  Plus,
  Search,
  Calendar,
  MessageCircle,
  Hospital,
  ClipboardList,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import { Link as IntlLink } from '@/i18n/routing';
import childIcon from "@/assets/icons/baby-massage.png";
import vaccinationsIcon from "@/assets/icons/LFK.jpeg";
import allergyIcon from "@/assets/icons/gidro.jpg";
import screeningsIcon from "@/assets/icons/treanjor.jpg";
import pathologyIcon from "@/assets/icons/logoped.png";
import cardiologyIcon from "@/assets/icons/needle.jpg";
import { getTranslations } from 'next-intl/server';
import BookingForm from "@/components/booking-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Babyland - Bolalar salomatligi markazi | Bosh sahifa",
  description: "Farzandingiz salomatligi uchun professional pediatriya xizmatlari. Bolalar massaji, LFK, emlash, tekshiruv va boshqa tibbiy xizmatlar Toshkent shahrida.",
  keywords: ["pediatriya", "bolalar doktori", "bolalar massaji", "LFK", "emlash", "Toshkent", "pediatra klinika", "bolalar salomatligi"],
  openGraph: {
    title: "Babyland - Bolalar salomatligi markazi",
    description: "Farzandingiz salomatligi uchun professional pediatriya xizmatlari",
    images: ['/Babyland1.svg'],
  },
};

export default async function HomePage() {
  const t = await getTranslations();
  
  // Get phone number from translations and extract first number
  const phoneValue = t("services.appointment.phoneValue") || "+998952817070";
  const phoneNumber = phoneValue.split(" ")[0].replace(/[^\d+]/g, "");
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[800px] ">
        <div
          style={{
            backgroundImage: 'url("/backround.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  {t("hero.freeConsultation")}
                </div>
                <h1 className="text-5xl font-bold leading-tight lg:text-6xl text-balance">
                  {t("hero.title")}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  {t("hero.description")}
                </p>
                <div className="flex flex-wrap gap-4 pt-4 mb-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all rounded-full"
                  >
                    <IntlLink href="/contact">
                      {t("hero.cta")}
                    </IntlLink>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent h-12 px-8 text-base font-semibold rounded-full"
                  >
                    <a href={`tel:${phoneNumber}`}>
                      {t("hero.contact")}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative">
                  {/* Large circular background */}
                  <div className="absolute  rounded-full  "></div>
                  <div className="relative aspect-[4/4] overflow-hidden rounded-3xl ">
                    <Image
                      // src="/Kasimov_photography-120.jpg"
                      src="/home-image.png"
                      alt="Doctor with child"
                      width={500}
                      height={350}
                      className=" h-full w-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form Card - Overlapping */}
          </div>
        </div>
        <BookingForm translations={{
          name: t("common.name"),
          email: t("common.email"),
          phone: t("common.phoneNumber"),
          service: t("common.service"),
          date: t("common.date"),
          yourName: t("common.yourName"),
          yourEmail: t("common.yourEmail"),
          phonePlaceholder: t("common.phonePlaceholder"),
          selectService: t("common.selectService"),
          childCare: t("common.childCare"),
          vaccination: t("common.vaccination"),
          cme: t("common.cme"),
          allergyTest: t("common.allergyTest"),
          trainer: t("common.trainer"),
          screening: t("common.screening"),
          pathology: t("common.pathology"),
          cardiology: t("common.cardiology"),
          logoped: t("common.logoped"),
          orthoped: t("common.orthoped"),
          pediatrician: t("common.pediatrician"),
          neurologist: t("common.neurologist"),
          acupuncture: t("common.acupuncture"),
          bookAppointmentNow: t("common.bookAppointmentNow")
        }} />
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative">
              {/* Blue rounded shape background */}
              <div className="absolute top-10 -left-10 w-96 h-[500px] bg-primary/30 rounded-[3rem] -z-10"></div>

              {/* Main image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl max-w-md">
                <Image
                  src="/home-section.jpg"
                  alt="Doctor with child"
                  width={500}
                  height={667}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 relative">
              <div className="text-sm font-bold text-primary uppercase tracking-wider">
                {t("about.subtitle")}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight text-gray-800">
                {t("about.title")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {t("about.description")}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 pt-4">
                <div className="space-y-4">
                  {(() => {
                    try {
                      const items = (t.raw("about.items") as string[]) || [];
                      if (items.length > 0) {
                        return items.map((text, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary flex-shrink-0 mt-0.5">
                              <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                            </div>
                            <h4 className="font-semibold text-gray-700 text-sm">{text}</h4>
                          </div>
                        ));
                      }
                    } catch {}
                    return [
                      t("common.preventChildObesity"),
                      t("common.diabetesSignsInChildren"),
                      t("common.newbornCare"),
                      t("common.adhdScreeningInChildren"),
                      t("common.supportForClients"),
                    ].map((text, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary flex-shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                        </div>
                        <h4 className="font-semibold text-gray-700 text-sm">{text}</h4>
                      </div>
                    ));
                  })()}
                </div>

                {/* Small image on right */}
                <div className="hidden lg:flex justify-end items-start">
                  <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/Kasimov_photography-86.jpg"
                      alt="Doctor with baby"
                      width={224}
                      height={224}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Closing paragraph */}
              <p className="text-gray-600 leading-relaxed text-base pt-2">
                {(() => { try { return t("about.closing"); } catch { return ""; } })()}
              </p>

              {/* Doctor Info */}
            
            </div>
          </div>
        </div>
      </section>

      {/* Services Icons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[
              { image: childIcon, label: t("services.childMassage") },
              { image: vaccinationsIcon, label: t("services.lfk") },
              { image: allergyIcon, label: t("services.hydroMassage") },
              { image: screeningsIcon, label: t("services.trainer") },
              { image: pathologyIcon, label: t("services.logoped") },
              { image: cardiologyIcon, label: t("services.acupuncture") },
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex items-center justify-center h-20 w-20">
                      <Image
                        src={service.image}
                        alt={service.label}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-700 text-center">
                      {service.label}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            {/* Left content */}
            <div className="flex items-center gap-6 flex-col sm:flex-row text-center sm:text-left">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto sm:mx-0">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {t("common.freeConsultation")}
                </h2>
                <p className="text-gray-600">
                  {t("common.freeConsultationDesc")}
                </p>
              </div>
            </div>

            {/* Right buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all rounded-full w-full sm:w-auto"
              >
                {t("common.bookAppointment")}
              </Button>
              <IntlLink
                href="/about"
                className="text-gray-700 hover:text-primary text-base font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {t("common.learnMore")} <ArrowRight className="h-5 w-5" />
              </IntlLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 gradient-blue-light">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-white uppercase tracking-wider">
              {t("services.subtitle")}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
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
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 group-hover:scale-110 transition-all duration-300 shadow-lg p-2"
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

      {/* Locations Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Locations Cards with Maps */}
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
                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-orange-400 block mb-1.5">{t("common.locations.addressLabel")}</span>
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
                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-orange-400 block mb-1.5">{t("common.locations.addressLabel")}</span>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                      {t("common.locations.location2.address")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Statistics */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-8 md:px-10 md:py-10 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                {[
                  {
                    count: 48,
                    label: t("common.statistics.pediatricians"),
                    iconType: "doctor",
                    highlight: false,
                  },
                  {
                    count: 120,
                    label: t("common.statistics.medicalStaff"),
                    iconType: "stethoscope",
                    highlight: false,
                  },
                  {
                    count: 92,
                    label: t("common.statistics.pediatricClinics"),
                    iconType: "hospital",
                    highlight: true,
                  },
                  {
                    count: 231,
                    label: t("common.statistics.safeMonitoring"),
                    iconType: "clipboard",
                    highlight: false,
                  },
                ].map((stat, i) => (
                  <div key={i} className="relative">
                    {/* Top white pill with icon */}
                    <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 w-[160px] sm:w-[200px] md:w-[250px] h-[56px] md:h-[70px] bg-white rounded-[999px] shadow-md flex items-center justify-center">
                      {stat.iconType === "doctor" && (
                        <UserRound
                          className={`${
                            stat.highlight
                              ? "text-emerald-600"
                              : "text-blue-600"
                          } h-6 w-6 md:h-8 md:w-8`}
                        />
                      )}
                      {stat.iconType === "stethoscope" && (
                        <Stethoscope
                          className={`${
                            stat.highlight
                              ? "text-emerald-600"
                              : "text-blue-600"
                          } h-6 w-6 md:h-8 md:w-8`}
                        />
                      )}
                      {stat.iconType === "hospital" && (
                        <Hospital
                          className={`${
                            stat.highlight
                              ? "text-emerald-600"
                              : "text-blue-600"
                          } h-6 w-6 md:h-8 md:w-8`}
                        />
                      )}
                      {stat.iconType === "clipboard" && (
                        <ClipboardList
                          className={`${
                            stat.highlight
                              ? "text-emerald-600"
                              : "text-blue-600"
                          } h-6 w-6 md:h-8 md:w-8`}
                        />
                      )}
                    </div>

                    {/* Content card */}
                    <div
                      className={`${
                        stat.highlight
                          ? "bg-emerald-500 rounded-xl md:rounded-2xl shadow-xl"
                          : ""
                      } pt-12 md:pt-16 pb-5 md:pb-7 px-4 md:px-6 text-center text-white`}
                    >
                      <Counter
                        end={stat.count}
                        duration={1200}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
                        suffix="+"
                      />
                      <div className="mt-1 text-white/90 font-medium text-xs sm:text-sm md:text-base lg:text-lg break-words px-1">
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

      {/* Easy Booking Steps Section */}
<section className="py-14 sm:py-20 lg:py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">

      {/* Image */}
      <div className="relative">
        <div className="aspect-[3/4] sm:aspect-[4/4] overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/novbat.jpg"
            alt="Doctor with tablet and child"
            width={600}
            height={450}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 sm:space-y-6">
        <div className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
          {t("common.booking.subtitle")}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          {t("common.booking.title")}
        </h2>

        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
          {t("common.booking.description")}
        </p>

        <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
          {[
            {
              step: "01",
              title: t("common.booking.findNearestPediatrician"),
              icon: Search,
            },
            {
              step: "02",
              title: t("common.booking.selectService"),
              icon: ClipboardCheck,
            },
            { step: "03", title: t("common.booking.bookAppointment"), icon: Calendar },
            {
              step: "04",
              title: t("common.booking.meetDoctor"),
              icon: Users,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-3 items-center sm:gap-4"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-base sm:text-lg flex-shrink-0">
                {item.step}
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h4 className="font-semibold text-foreground text-base sm:text-lg">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>


      {/* News & Articles Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-primary uppercase tracking-wider">
              {t("common.news.subtitle")}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {t("common.news.title")}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                image: "/baby-health-checkup.jpg",
                title: t("common.news.commonChildDiseases"),
                description: t("common.news.commonChildDiseasesDesc"),
              },
              {
                image: "/sick-child-with-thermometer.jpg",
                title: t("common.news.childHealthCare"),
                description: t("common.news.childHealthCareDesc"),
              },
              {
                image: "/mother-giving-medicine-to-child.jpg",
                title: t("common.news.bestMedicineForChild"),
                description: t("common.news.bestMedicineForChildDesc"),
              },
              {
                image: "/toddler-learning-to-walk.jpg",
                title: t("common.news.childDevelopmentStages"),
                description: t("common.news.childDevelopmentStagesDesc"),
              },
              {
                image: "/baby-with-stuffy-nose.jpg",
                title: t("common.news.commonColdInChildren"),
                description: t("common.news.commonColdInChildrenDesc"),
              },
            ].map((article, i) => (
              <Card
                key={i}
                className="group hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  <IntlLink
                    href="/blog"
                    className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {t("common.news.readMore")} <ArrowRight className="h-4 w-4" />
                  </IntlLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
