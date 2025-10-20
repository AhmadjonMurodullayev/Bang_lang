import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Bolalarda eng keng tarqalgan kasalliklar va ularning davolash usullari",
      image: "/sick-child-with-thermometer.jpg",
      excerpt: "Bolalarda shamollash, qizilcha, suvchechak kabi kasalliklar ko'p uchraydi. Ularning belgilari, davolash va oldini olish usullari haqida batafsil ma'lumot.",
    },
    {
      title: "Farzandingizning sog'liqini qanday saqlash kerak",
      image: "/mother-giving-medicine-to-child.jpg",
      excerpt: "Bolalarning immunitetini mustahkamlash, to'g'ri ovqatlanish va muntazam tekshiruvlar orqali sog'liqni saqlash bo'yicha professional maslahatlar.",
    },
    {
      title: "Bola kasal bo'lganda ruhiy salomatlikni saqlash uchun 6 maslahat",
      image: "/sad-child.jpg",
      excerpt: "Kasal bolaning ruhiy holatini yaxshilash, stressni kamaytirish va tez tiklanishga yordam berish uchun amaliy tavsiyalar.",
    },
    {
      title: "Bolalar rivojlanish bosqichlari va ularni kuzatish",
      image: "/doctor-with-child-patient.jpg",
      excerpt: "Chaqaloqdan boshlab maktab yoshigacha bo'lgan rivojlanish bosqichlari, normal ko'rsatkichlar va ogohlantiruvchi belgilar.",
    },
    {
      title: "Bolalarda motor rivojlanishni qo'llab-quvvatlash",
      image: "/toddler-learning-to-walk.jpg",
      excerpt: "Bolalarning yurish, gapirish va boshqa motor ko'nikmalarini rivojlantirishda ota-onalar qanday yordam berishi mumkin.",
    },
    {
      title: "Bolalarda tez-tez uchraydigan shamollash va uning davolash usullari",
      image: "/baby-with-stuffy-nose.jpg",
      excerpt: "Shamollashning sabablari, belgilari, uy sharoitida davolash usullari va qachon shifokorga murojaat qilish kerakligi haqida ma'lumot.",
    },
  ];

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
          <h1 className="mb-4 text-5xl font-bold text-white">Blog</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Bosh sahifa</span>
            <span>{">"}</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">
              Soʼnggi yangiliklar
            </div>
            <h2 className="text-4xl font-bold">Yangiliklar va maqolalar</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary">
                    Batafsil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mt-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden relative">
                  <Image
                    src="/baby-health-checkup.jpg"
                    alt="Featured post"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="mb-4 text-3xl font-bold text-balance">
                    Bolalarda eng keng tarqalgan kasalliklar va ularning davolash usullari
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Bolalarda shamollash, qizilcha, suvchechak, qizilcha va boshqa kasalliklar ko&apos;p uchraydi. 
                    Ularning belgilari, davolash va oldini olish usullari haqida batafsil ma&apos;lumot oling.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white w-fit">
                    Batafsil
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* More Posts */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary">
                    Batafsil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
