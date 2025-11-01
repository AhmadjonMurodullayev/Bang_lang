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
                  src="/home-section.jpg"
                  alt="Mother and child"
                  fill
                  className="object-cover"
                  unoptimized
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

                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      {t("doctors.roadmap_title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("doctors.roadmap_description")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      {t("doctors.result_title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("doctors.result_description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-bold text-primary uppercase tracking-wider">
              {t("common.facilities.subtitle")}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              {t("common.facilities.title")}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
              {t("common.facilities.description")}
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Room */}
            <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/room.jpg"
                  alt="Davolash xonasi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>

            {/* Vanna 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/vanna.jpg"
                  alt="Gidromassaj kabineti"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>

            {/* Vanna 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/vanna2.jpg"
                  alt="Gidromassaj kabineti"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>

            {/* Zal 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/zal1.jpg"
                  alt="Reabilitatsiya zali"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>

            {/* Zal 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/zal2.jpg"
                  alt="Reabilitatsiya zali"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>

            {/* Two Room Cabins */}
            <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/Kasimov_photography-181.jpg"
                  alt="Ikki xonali davolash kabinetlari"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </div>
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
