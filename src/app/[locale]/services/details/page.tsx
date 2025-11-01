import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getTranslations } from 'next-intl/server'
import childIcon from "@/assets/icons/baby-massage.png"
import lfkIcon from "@/assets/icons/LFK.jpeg"
import cmeIcon from "@/assets/icons/CME.png"
import trainerIcon from "@/assets/icons/treanjor.jpg"
import logopedIcon from "@/assets/icons/logoped.png"
import acupunctureIcon from "@/assets/icons/needle.jpg"
import allergyIcon from "@/assets/icons/gidro.jpg";
import nevropotologIcon from "@/assets/icons/nevropotolog.png";
import pediatrIcon from "@/assets/icons/pediator.jpg";
import ortopedIcon from "@/assets/icons/ortoped.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xizmatlar haqida batafsil | Babyland - Bolalar salomatligi markazi",
  description: "Bolalar massaji, LFK, emlash va boshqa pediatriya xizmatlari haqida batafsil ma'lumot. Professional tibbiy yordam va maslahatlar.",
  keywords: ["bolalar massaji", "LFK", "emlash", "pediatriya xizmatlari", "tibbiy yordam", "bolalar tekshiruvi"],
  openGraph: {
    title: "Xizmatlar haqida batafsil | Babyland",
    description: "Professional pediatriya xizmatlari haqida batafsil",
    images: ['/Babyland1.svg'],
  },
};

export default async function DetailedServicesPage() {
  const t = await getTranslations();
  
  // Fallback services data
  const fallbackServices = [
    {
      title: "Bolalar massaji",
      description: "Bolalar massaji mushak tonusini me'yorlash, qon aylanishini yaxshilash, uyquni normallashtirish va hazm jarayoniga ijobiy ta'sir ko'rsatadi.",
      bullets: [
        "Yangi tug'ilganlardan boshlab bosqichma-bosqich qo'llanadi",
        "Kolik (qorin dam bo'lishi) alomatlarini yengillashtiradi",
        "Uyqu sifati va ishtahani yaxshilaydi"
      ]
    }
  ];

  // Try to get services from translation, fallback to default data if fails
  let services;
  try {
    services = t.raw("services.details.services") || fallbackServices;
  } catch (error) {
    console.warn("Translation error, using fallback data:", error);
    services = fallbackServices;
  }

  // Icon mapping based on service title
  const getServiceIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("bolalar massaji") || titleLower.includes("massaji")) {
      return childIcon;
    }
    if (titleLower.includes("lfk") || titleLower.includes("jismoniy tarbiya")) {
      return lfkIcon;
    }
    if (titleLower.includes("gidromassaj") || titleLower.includes("gidro") || titleLower.includes("gigromassaj")) {
      return allergyIcon;
    }
    if (titleLower.includes("cuevas") || titleLower.includes("cme") || titleLower.includes("medek")) {
      return cmeIcon;
    }
    if (titleLower.includes("trenajor") || titleLower.includes("reabilitatsiya")) {
      return trainerIcon;
    }
    if (titleLower.includes("logoped") || titleLower.includes("defektolog")) {
      return logopedIcon;
    }
    if (titleLower.includes("igna") || titleLower.includes("akupunktura")) {
      return acupunctureIcon;
    }
    if (titleLower.includes("ortoped")) {
      return ortopedIcon;
    }
    if (titleLower.includes("pediatr")) {
      return pediatrIcon;
    }
    if (titleLower.includes("nevropatolog") || titleLower.includes("nevropatolog")) {
      return nevropotologIcon;
    }
    // Default icon
    return childIcon;
  };

  return (
    <div className="min-h-screen">
      <section className="gradient-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">{t("services.details.title")}</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>{t("common.home")}</span>
            <span>{">"}</span>
            <span>{t("common.services")}</span>
            <span>{">"}</span>
            <span>{t("common.readMore")}</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service: { title: string; description: string; bullets: string[] }, i: number) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden p-2">
                    <Image src={getServiceIcon(service.title)} alt={service.title} width={64} height={64} className="object-contain" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="list-disc pl-5 text-sm text-foreground space-y-1">
                      {service.bullets.map((b: string, idx: number) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild className="rounded-full">
              <Link href="/services">{t("services.details.backToServices")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


