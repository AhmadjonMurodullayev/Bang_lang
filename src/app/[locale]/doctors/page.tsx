import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Facebook,
  Globe,
  Instagram,
  MessageCircle,
  Star,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CounterWrapper from "@/components/counter-wrapper";
import childIcon from "@/assets/icons/child.png";
import vaccinationsIcon from "@/assets/icons/vaccinations.png";
import allergyIcon from "@/assets/icons/allergy.png";
import screeningsIcon from "@/assets/icons/creenings.png";
import pathologyIcon from "@/assets/icons/pathology.png";
import cardiologyIcon from "@/assets/icons/cardiology.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shifokorlar | Babyland - Bolalar salomatligi markazi",
  description:
    "Babyland pediatriya markazining professional shifokorlari. Tajribali bolalar doktorlari va tibbiy mutaxassislar.",
  keywords: [
    "bolalar doktori",
    "pediatriya shifokorlari",
    "professional doktorlar",
    "tibbiy mutaxassislar",
  ],
  openGraph: {
    title: "Shifokorlar | Babyland",
    description: "Professional pediatriya shifokorlari",
    images: ["/Babyland1.svg"],
  },
};

export default async function Doctors() {
  const t = await getTranslations();

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
        className=" py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            {t("common.doctors")}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>{t("common.home")}</span>
            <span>{">"}</span>
            <span>{t("common.doctors")}</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">
              {t("doctors.subtitle")}
            </div>
            <h2 className="mb-4 text-3xl font-bold">{t("doctors.title")}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("doctors.description")}
            </p>
          </div>
          <div className="grid text-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Rahmatova Dildora",
                specialties: ["doctors.specialties.rehabMasseur"],
                consultations: 2214,
                rating: 4.8,
                image: "/doctor1.jpg",
              },
              {
                name: "Toirjonova Nilufar",
                specialties: ["doctors.specialties.childMassageNurse"],
                consultations: 1324,
                rating: 5.0,
                image: "/doctor2.jpg",
              },
              {
                name: "Asatillayev Ulug'bek",
                specialties: [
                  "doctors.specialties.rehabMasseur",
                  "doctors.specialties.lfkInstructor",
                ],
                consultations: 824,
                rating: 4.7,
                image: "/doctor3.jpg",
              },
              {
                name: "Qodirov Tolibjon",
                specialties: [
                  "doctors.specialties.rehabMasseur",
                  "doctors.specialties.lfkInstructor",
                ],
                consultations: 974,
                rating: 4.6,
                image: "/doctor6.jpg",
              },
              {
                name: "Davurova Umida",
                specialties: ["doctors.specialties.childMassageNurse"],
                consultations: 2214,
                rating: 4.8,
                image: "/doctor5.jpg",
              },
              {
                name: "Xasanova Shaxnoza",
                specialties: ["doctors.specialties.childMassageNurse"],
                consultations: 1324,
                rating: 5.0,
                image: "/doctor4.jpg",
              },
              {
                name: "Mirzaaxmedova Yulduz",
                specialties: ["doctors.specialties.speechDefectologist"],
                consultations: 824,
                rating: 4.7,
                image: "/doctor7.jpg",
              },
              {
                name: "Maxmudova Durdona",
                specialties: ["doctors.specialties.childMassageNurse"],
                consultations: 974,
                rating: 4.6,
                image: "/doctor8.jpg",
              },
              {
                name: "Muzaffar G'ofurjonov",
                specialties: ["doctors.specialties.pediatrician"],
                consultations: 974,
                rating: 4.6,
                image: "/doctor9.jpg",
              },
              {
                name: "Yaqubova Sayyora",
                specialties: ["doctors.specialties.neurologistChild"],
                consultations: 974,
                rating: 4.6,
                image: "/doctor10.jpg",
              },
              {
                name: "Nigmonov Ismoil",
                specialties: [
                  "doctors.specialties.cmeTherapist",
                  "doctors.specialties.lfkInstructor",
                ],
                consultations: 974,
                rating: 4.6,
                image: "/doctor11.jpg",
              },
              {
                name: "Zaynitdinov Muzaffar",
                specialties: [
                  "doctors.specialties.rehabMasseur",
                  "doctors.specialties.lfkInstructor",
                ],
                consultations: 974,
                rating: 4.6,
                image: "/doctor12.JPEG",
              },
            ].map((doctor, i) => (
              <Card
                key={i}
                className="overflow-hidden group hover:shadow-lg transition-shadow relative bg-white rounded-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden relative p-3">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                        <Facebook className="h-6 w-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                        <Twitter className="h-6 w-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-600 transition-colors">
                        <Instagram className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info Overlay */}
                  <div className="absolute bottom-0 rounded-2xl left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-300 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {doctor.name}
                    </h3>

                    <p className="text-sm text-white/90">
                      {doctor.specialties.map((s, i) => (
                        <span key={i}>
                          {t(s)}
                          {i !== doctor.specialties.length - 1 && " / "}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-600">
                      {doctor.consultations} {t("doctors.consultations")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-800">
                      {doctor.rating}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(doctor.rating)
                              ? "text-yellow-400 fill-current"
                              : star === Math.ceil(doctor.rating) &&
                                doctor.rating % 1 !== 0
                              ? "text-yellow-400 fill-current opacity-50"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft max-w-md mx-auto">
                <Image
                  src="/home-section.jpg"
                  alt="Mother and child"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Gradient bar on the right of the image */}
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-b from-blue-300 to-cyan-300 rounded-r-3xl -z-10 hidden lg:block"></div>

              {/* Floating Card */}
              <Card className="absolute -bottom-6 left-0 shadow-xl max-w-xs border-0 rounded-lg">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CounterWrapper
                      end={1742}
                      duration={1500}
                      className="text-3xl font-bold text-foreground"
                      suffix="+"
                    />
                    <p className="text-sm text-muted-foreground">
                      {t("doctors.satisfiedPatients")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 text-sm font-semibold text-primary">
                {t("doctors.bestPediatricians")}
              </div>
              <h2 className="mb-6 text-4xl font-bold text-balance">
                {t("doctors.findPediatricians")}
              </h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                {t("doctors.findPediatriciansDesc")}
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      {t("doctors.quickFind")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("doctors.quickFindDesc")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      {t("doctors.ePrescription")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("doctors.ePrescriptionDesc")}
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Info */}
              <div className="flex items-center gap-4 pt-8">
                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                  <Image
                    src="/doctor9.jpg"
                    alt="Dr. Monica Hopkins"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base">
                    Dr. Monica Hopkins
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {t("doctors.founder")}
                  </p>
                </div>
                <div className="ml-auto">
                  <Image
                    src="/signature.jpg"
                    alt="Signature"
                    width={40}
                    height={40}
                    className="opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[
              { image: childIcon, label: t("doctors.services.childMassage") },
              { image: vaccinationsIcon, label: t("doctors.services.lfk") },
              { image: allergyIcon, label: t("doctors.services.hydroMassage") },
              { image: screeningsIcon, label: t("doctors.services.trainer") },
              { image: pathologyIcon, label: t("doctors.services.logoped") },
              {
                image: cardiologyIcon,
                label: t("doctors.services.acupuncture"),
              },
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
                  {t("doctors.cta.title")}
                </h2>
              </div>
            </div>

            {/* Right buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary text-base font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all rounded-full w-full sm:w-auto"
                >
                  {t("doctors.cta.button")} <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
