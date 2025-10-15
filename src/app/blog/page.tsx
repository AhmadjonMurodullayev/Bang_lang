import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Some Of The Most Common Children's Diseases",
      image: "/sick-child-with-thermometer.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consel tetur adipiscing...",
    },
    {
      title: "Tips How Can Help Your Child Stay Safe & Healthy",
      image: "/mother-giving-medicine-to-child.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consel tetur adipiscing...",
    },
    {
      title: "6 Tips For Maintaining Children's Mental Health When Sick",
      image: "/sad-child.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consel tetur adipiscing...",
    },
    {
      title: "Adapting To The Development Of Children's Needs",
      image: "/doctor-with-child-patient.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consel tetur adipiscing...",
    },
    {
      title: "How Movement Helps Children Learn To Walk",
      image: "/toddler-learning-to-walk.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consel tetur adipiscing...",
    },
    {
      title: "Some Of The Most Common Children's Diseases",
      image: "/baby-with-stuffy-nose.jpg",
      excerpt: "Lorem ipsum dolor sit amet, consel tetur adipiscing...",
    },
  ]

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="gradient-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Blog</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Home</span>
            <span>{">"}</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">Latest News</div>
            <h2 className="text-4xl font-bold">News & Article</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-primary">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mt-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src="/baby-health-checkup.jpg" alt="Featured post" className="h-full w-full object-cover" />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="mb-4 text-3xl font-bold text-balance">
                    6 Tips For Maintaining Children's Mental Health When Sick
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Lorem ipsum dolor sit amet, consel tetur adipiscing elit, sed..
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white w-fit">Read More</Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* More Posts */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-primary">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
