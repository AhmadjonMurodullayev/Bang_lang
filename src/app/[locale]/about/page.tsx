import { Card, CardContent } from "@/components/ui/card";
import { Check, Facebook, Twitter, Instagram, Star } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import StatsCard from "@/components/stats-card";
import FAQ from "@/components/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz haqimizda | Babyland - Bolalar salomatligi markazi",
  description:
    "Babyland pediatriya markazi haqida batafsil ma'lumot. Professional shifokorlar, zamonaviy jihozlar va sifatli tibbiy xizmatlar.",
  keywords: [
    "pediatriya markazi",
    "bolalar doktori",
    "tibbiy xizmatlar",
    "professional shifokorlar",
    "Toshkent",
  ],
  openGraph: {
    title: "Biz haqimizda | Babyland",
    description: "Babyland pediatriya markazi haqida batafsil ma'lumot",
    images: ["/Babyland1.svg"],
  },
};

export default async function AboutPage() {
  const t = await getTranslations();

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
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            {t("common.about")}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>{t("common.home")}</span>
            <span>{">"}</span>
            <span>{t("common.about")}</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft max-w-md mx-auto">
                <Image
                  src="/Kasimov_photography-155.jpg"
                  alt="Mother and child"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Gradient bar on the right of the image */}
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-b from-blue-300 to-cyan-300 rounded-r-3xl -z-10 hidden lg:block"></div>

              {/* Floating Card */}
              <StatsCard count={1742} label={t("about.satisfiedPatients")} />
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 text-sm font-semibold text-primary">
                {t("about.subtitle")}
              </div>
              <h2 className="mb-6 text-4xl font-bold text-balance">
                {t("about.title")}
              </h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      {t("about.allDoctors")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("about.allDoctorsDesc")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      {t("about.ePrescription")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("about.ePrescriptionDesc")}
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
                    {t("about.founder")}
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

      {/* Why Choose Section */}

      {/* Doctors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">
              {t("about.doctors.subtitle")}
            </div>
            <h2 className="mb-4 text-4xl font-bold">
              {t("about.doctors.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t("about.doctors.description")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Raxmatova Dildora",
                specialty: t("doctors.specialties.rehabMasseur"),
                consultations: 2214,
                rating: 4.8,
                image: "/doctor1.jpg",
              },
              {
                name: "Toirjonova Nilufar",
                specialty: t("doctors.specialties.childMassageNurse"),
                consultations: 1324,
                rating: 5.0,
                image: "/doctor2.jpg",
              },
              {
                name: "Asatillayev Ulug'bek",
                specialty: t("doctors.specialties.lfkInstructor"),
                consultations: 824,
                rating: 4.7,
                image: "/doctor3.jpg",
              },
              {
                name: "Xasanova Shaxnoza",
                specialty: t("doctors.specialties.childMassageNurse"),
                consultations: 974,
                rating: 4.6,
                image: "/doctor4.jpg",
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

                  {/* Hover Overlay with Social Icons */}
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
                    <p className="text-sm text-white/90">{doctor.specialty}</p>
                  </div>
                </div>

                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-600">
                      {doctor.consultations} {t("about.doctors.consultations")}
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-3 items-start">
            {/* Left Side - Accordion */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="mb-4 text-sm font-semibold text-teal-600">
                  {t("about.faq.subtitle")}
                </div>
                <h2 className="mb-6 text-4xl font-bold text-gray-800">
                  {t("about.faq.title")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t("about.faq.description")}
                </p>
              </div>

              {/* Shadcn Accordion */}
              <FAQ
                questions={(() => {
                  try {
                    return (
                      t.raw("about.faq.questions") || [
                        {
                          question:
                            "Bizning klinikamiz qanday xizmatlar ko'rsatadi?",
                          answer:
                            "Bizning klinikamiz bolalar uchun to'liq tibbiy xizmatlar ko'rsatadi: umumiy tekshiruv, emlash, massaj, LFK va boshqa reabilitatsiya xizmatlari.",
                        },
                      ]
                    );
                  } catch {
                    return [
                      {
                        question:
                          "Bizning klinikamiz qanday xizmatlar ko'rsatadi?",
                        answer:
                          "Bizning klinikamiz bolalar uchun to'liq tibbiy xizmatlar ko'rsatadi: umumiy tekshiruv, emlash, massaj, LFK va boshqa reabilitatsiya xizmatlari.",
                      },
                    ];
                  }
                })()}
              />
            </div>

            {/* Right Side - Doctor Image */}
            <div className="lg:col-span-1">
              <div className="relative">
                {/* Decorative Background Shapes */}
                <div className="absolute -left-8 -top-8 -bottom-8 w-32 bg-gradient-to-b from-blue-200/30 to-cyan-200/30 rounded-l-3xl -z-10"></div>
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-emerald-200/40 rounded-full -z-10"></div>

                {/* Doctor Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-tl-3xl rounded-bl-3xl shadow-lg">
                  <Image
                    src="/novbat.jpg"
                    alt="Doctor consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
