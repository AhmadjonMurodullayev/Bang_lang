import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import childIcon from "@/assets/icons/child.png"
import vaccinationsIcon from "@/assets/icons/vaccinations.png"
import allergyIcon from "@/assets/icons/allergy.png"
import screeningsIcon from "@/assets/icons/creenings.png"
import pathologyIcon from "@/assets/icons/pathology.png"

export default function DetailedServicesPage() {
  const services = [
    {
      title: "Bolalar massaji",
      image: childIcon,
      description:
        "Bolalar massaji mushak tonusini meʼyorlash, qon aylanishini yaxshilash, uyquni normallashtirish va hazm jarayoniga ijobiy taʼsir koʼrsatadi. Yengil va xavfsiz texnikalar yordamida nerv tizimini tinchlantirishga, motor rivojlanishni qoʼllab-quvvatlashga yordam beradi.",
      bullets: [
        "Yangi tugʼilganlardan boshlab bosqichma-bosqich qoʼllanadi",
        "Kolik (qorin dam boʼlishi) alomatlarini yengillashtiradi",
        "Uyqu sifati va ishtahani yaxshilaydi",
      ],
    },
    {
      title: "LFK (davolovchi jismoniy tarbiya)",
      image: screeningsIcon,
      description:
        "LFK mushak-skelet tizimi muammolarida, qomat buzilishlarida va jarohatlardan keyingi reabilitatsiyada samarali. Mashqlar shifokor tavsiyasi asosida individual dastur boʼyicha oʼtkaziladi.",
      bullets: [
        "Qomatni tekislash va yassi oyoqlikda yordam beradi",
        "Mushak kuchi va moslashuvchanlikni oshiradi",
        "Koordinatsiya hamda muvozanatni rivojlantiradi",
      ],
    },
    {
      title: "Gigromassaj (gidromassaj)",
      image: vaccinationsIcon,
      description:
        "Suv oqimlari bosimi yordamida tanaga taʼsir koʼrsatib, mushaklarni boʼshashtiradi, qon va limfa aylanishini faollashtiradi. Stressni kamaytirib, terining umumiy holatini yaxshilaydi.",
      bullets: [
        "Sportdan keyin tiklanishni tezlashtiradi",
        "Suv muhitida muloyim va yoqimli taʼsir",
        "Qon aylanishi va metabolizmni ragʼbatlantiradi",
      ],
    },
    {
      title: "Trenajor bilan reabilitatsiya",
      image: pathologyIcon,
      description:
        "Maxsus trenajyorlarda mashqlar mushak kuchini tiklash, boʼgʼim harakatchanligini oshirish va funksional faoliyatni yaxshilashga qaratiladi. Bolaning yoshi va holatidan kelib chiqqan holda tanlanadi.",
      bullets: [
        "Jarohat va operatsiyalardan keyin tiklanish",
        "Nerv-mushak aloqasini kuchaytirish",
        "Harakat hajmini bosqichma-bosqich kengaytirish",
      ],
    },
    {
      title: "Logoped-defektolog",
      image: allergyIcon,
      description:
        "Nutq buzilishlari (tutqusilik, tovush qoʼyish muammolari, kechikkan nutq)ni korreksiya qilish. Lugʼat boyligini kengaytirish, fonematik eshituvni rivojlantirish va toʼgʼri talaffuzni shakllantirishga yordam beradi.",
      bullets: [
        "Individual va guruh mashgʼulotlari",
        "Uy sharoitida bajariladigan topshiriqlar",
        "Muloqot koʼnikmalarini mustahkamlash",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="gradient-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Xizmatlar haqida batafsil</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Bosh sahifa</span>
            <span>{">"}</span>
            <span>Xizmatlar</span>
            <span>{">"}</span>
            <span>Batafsil</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden">
                    <Image src={service.image} alt={service.title} width={64} height={64} className="object-contain" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="list-disc pl-5 text-sm text-foreground space-y-1">
                      {service.bullets.map((b, idx) => (
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
              <Link href="/services">Xizmatlar sahifasiga qaytish</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


