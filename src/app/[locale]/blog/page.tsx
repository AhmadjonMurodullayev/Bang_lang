import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Babyland - Bolalar salomatligi markazi",
  description: "Bolalar salomatligi haqida foydali maqolalar, maslahatlar va yangiliklar. Pediatriya mutaxassislaridan professional tavsiyalar.",
  keywords: ["bolalar salomatligi", "pediatriya blog", "bolalar maslahatlari", "tibbiy maqolalar", "ona-ona maslahatlari"],
  openGraph: {
    title: "Blog | Babyland",
    description: "Bolalar salomatligi haqida foydali maqolalar",
    images: ['/Babyland1.svg'],
  },
};

export default async function BlogPage() {
  const t = await getTranslations();
  
  // Fallback data if translation fails
  const fallbackPosts = [
    {
      title: "Bolalarda eng keng tarqalgan kasalliklar va ularning davolash usullari",
      excerpt: "Bolalarda shamollash, qizilcha, suvchechak kabi kasalliklar ko'p uchraydi. Ularning belgilari, davolash va oldini olish usullari haqida batafsil ma'lumot."
    },
    {
      title: "Farzandingizning sog'liqini qanday saqlash kerak",
      excerpt: "Bolalarning immunitetini mustahkamlash, to'g'ri ovqatlanish va muntazam tekshiruvlar orqali sog'liqni saqlash bo'yicha professional maslahatlar."
    },
    {
      title: "Bola kasal bo'lganda ruhiy salomatlikni saqlash uchun 6 maslahat",
      excerpt: "Kasal bolaning ruhiy holatini yaxshilash, stressni kamaytirish va tez tiklanishga yordam berish uchun amaliy tavsiyalar."
    },
    {
      title: "Bolalar rivojlanish bosqichlari va ularni kuzatish",
      excerpt: "Chaqaloqdan boshlab maktab yoshigacha bo'lgan rivojlanish bosqichlari, normal ko'rsatkichlar va ogohlantiruvchi belgilar."
    },
    {
      title: "Bolalarda motor rivojlanishni qo'llab-quvvatlash",
      excerpt: "Bolalarning yurish, gapirish va boshqa motor ko'nikmalarini rivojlantirishda ota-onalar qanday yordam berishi mumkin."
    },
    {
      title: "Bolalarda tez-tez uchraydigan shamollash va uning davolash usullari",
      excerpt: "Shamollashning sabablari, belgilari, uy sharoitida davolash usullari va qachon shifokorga murojaat qilish kerakligi haqida ma'lumot."
    }
  ];

  const fallbackFeaturedPost = {
    title: "Bolalarda eng keng tarqalgan kasalliklar va ularning davolash usullari",
    description: "Bolalarda shamollash, qizilcha, suvchechak, qizilcha va boshqa kasalliklar ko'p uchraydi. Ularning belgilari, davolash va oldini olish usullari haqida batafsil ma'lumot oling."
  };

  // Get translations with fallbacks
  const blogTitle = t("blog.title");
  const blogSubtitle = t("blog.subtitle");
  const blogDescription = t("blog.description");
  const readMore = t("blog.readMore");
  const home = t("common.home");
  
  // Safe raw translation getter with fallback
  const getRawTranslation = (key: string, fallback: unknown) => {
    try {
      const value = t.raw(key);
      // Ensure we return an array for posts, object for featuredPost
      if (key === "blog.posts" && !Array.isArray(value)) {
        return fallback;
      }
      if (key === "blog.featuredPost" && typeof value !== "object") {
        return fallback;
      }
      return value || fallback;
    } catch (error) {
      console.warn(`Raw translation error for key "${key}":`, error);
      return fallback;
    }
  };
  
  const blogPosts = getRawTranslation("blog.posts", fallbackPosts) as typeof fallbackPosts;
  const featuredPost = getRawTranslation("blog.featuredPost", fallbackFeaturedPost) as typeof fallbackFeaturedPost;

  // Image mapping for blog posts
  const postImages = [
    "/sick-child-with-thermometer.jpg",
    "/mother-giving-medicine-to-child.jpg", 
    "/sad-child.jpg",
    "/doctor-with-child-patient.jpg",
    "/toddler-learning-to-walk.jpg",
    "/baby-with-stuffy-nose.jpg"
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
          <h1 className="mb-4 text-5xl font-bold text-white">{blogTitle}</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>{home}</span>
            <span>{">"}</span>
            <span>{blogTitle}</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">
              {blogSubtitle}
            </div>
            <h2 className="text-4xl font-bold">{blogDescription}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index: number) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={postImages[index] || "/placeholder.svg"}
                    alt={post.title || "Blog post"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-balance group-hover:text-primary transition-colors">
                    {post.title || "Blog post"}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {post.excerpt || "Blog post excerpt"}
                  </p>
                  <Button variant="link" className="p-0 text-primary">
                    {readMore}
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
                    {featuredPost.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    {featuredPost.description}
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white w-fit">
                    {readMore}
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* More Posts */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index: number) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={postImages[index] || "/placeholder.svg"}
                    alt={post.title || "Blog post"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-balance group-hover:text-primary transition-colors">
                    {post.title || "Blog post"}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {post.excerpt || "Blog post excerpt"}
                  </p>
                  <Button variant="link" className="p-0 text-primary">
                    {readMore}
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