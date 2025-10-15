import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  Heart,
  Building2,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Star,
  Plus,
} from "lucide-react";
import { Counter } from "@/components/counter";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/20" style={{
        background: 'linear-gradient(90deg, rgba(0, 72, 189, 0.9) 0%, rgba(0, 88, 230, 0.9) 50%, rgba(213, 213, 215, 0.9) 100%)'
      }}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                <div className="text-2xl font-bold text-white leading-none">+</div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Pediatra</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">Home</Link>
              <Link href="/about" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">About</Link>
              <Link href="/services" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">Services</Link>
              <Link href="/contact" className="text-sm font-semibold text-white hover:text-white/80 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="gradient-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">About</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Home</span>
            <span>{">"}</span>
            <span>About</span>
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
                  src="/mother-giving-medicine-to-child.jpg"
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
                    <Counter
                      end={1742}
                      duration={1500}
                      className="text-3xl font-bold text-foreground"
                      suffix="+"
                    />
                    <p className="text-sm text-muted-foreground">
                      Satisfied Patients
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div>
              <div className="mb-4 text-sm font-semibold text-primary">
                About Pediatra
              </div>
              <h2 className="mb-6 text-4xl font-bold text-balance">
                You Can Find Pediatra At Your Fingertips
              </h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehenderit.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">All Types of Doctors</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo
                      ipsum dolor in reprehenderit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">
                      Get an E-Prescription
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet cons adipiscing elit sed doesmo
                      ipsum dolor in reprehenderit.
                    </p>
                  </div>
                </div>
              </div>
              {/* Doctor Info */}
              <div className="flex items-center gap-4 pt-8">
                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                  <Image
                    src="/female-doctor.png"
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
                    Pediatra Founder
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
      <section className="relative py-10 overflow-hidden bg-gradient-to-r from-blue-700 to-sky-500">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-white/10 rotate-45"></div>
        </div>

        <div className="relative container mx-auto px-6">
          {/* Header and Cards */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 ">
            {/* Left Text */}
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-blue-100 uppercase mb-4 tracking-widest">
                Why Choose Pediatra
              </p>
              <h2 className="text-5xl font-extrabold text-white mb-6">
                We Ready For 24 Hours
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Right Cards */}
            <div className="flex gap-8 justify-center mb-5">
              {/* Card 1 */}
              <Card className="bg-white w-[250px] h-[300px] rounded-2xl shadow-2xl border-0 max-w-sm ">
                <CardContent className="p-4 flex flex-col ">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-emerald-500 mb-6">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Child Care
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing reayu
                    consectetur.
                  </p>
                  <Button
                    variant="link"
                    className="text-emerald-600 font-semibold underline p-0"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="bg-white  w- md:w-[250px] md:h-[300px] rounded-2xl shadow-2xl border-0 max-w-sm">
                <CardContent className="p-4 flex flex-col ">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-emerald-500 mb-6">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Modern Clinic
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Lorem ipsum dolor sit amet consectetur adipiscing reayu
                    consectetur.
                  </p>
                  <Button
                    variant="link"
                    className="text-emerald-600 font-semibold underline p-0"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Environmental Testing", percent: 90 },
              { title: "Medical Research", percent: 93 },
              { title: "Vaccines Research", percent: 95 },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="text-2xl font-bold text-white">
                    {item.percent}%
                  </span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipi scing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">
              Our Doctors
            </div>
            <h2 className="mb-4 text-4xl font-bold">
              Meet Our Qualified Doctors
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dr. Marlie Varga",
                specialty: "General Doctor",
                consultations: 2214,
                rating: 4.8,
                image: "/female-doctor.png"
              },
              {
                name: "Dr. Maysa Azer", 
                specialty: "Pediatrician",
                consultations: 1324,
                rating: 5.0,
                image: "/female-doctor-portrait.png"
              },
              {
                name: "Dr. Ayda Ortega",
                specialty: "Pathology", 
                consultations: 824,
                rating: 4.7,
                image: "/thoughtful-doctor.png"
              },
              {
                name: "Dr. Valeria Costa",
                specialty: "Cardiology",
                consultations: 974,
                rating: 4.6,
                image: "/female-doctor.png"
              }
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
                    <h3 className="text-lg font-bold text-white mb-1">{doctor.name}</h3>
                    <p className="text-sm text-white/90">{doctor.specialty}</p>
                  </div>
                </div>
                
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-600">
                      {doctor.consultations} Consultation Done
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-800">{doctor.rating}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(doctor.rating)
                              ? "text-yellow-400 fill-current"
                              : star === Math.ceil(doctor.rating) && doctor.rating % 1 !== 0
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
                  Clients Questions
                </div>
                <h2 className="mb-6 text-4xl font-bold text-gray-800">
                  Related Question
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae illoi aunventore veritatis quasi architecto beatae.
                </p>
              </div>

              {/* Shadcn Accordion */}
              <Accordion type="single" defaultValue="item-0" collapsible className="space-y-4">
                <AccordionItem value="item-0" className="rounded-2xl overflow-hidden border-0 shadow-sm">
                  <AccordionTrigger className="p-6 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:no-underline rounded-2xl [&[data-state=open]]:rounded-b-none group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 rounded-full bg-gray-300 group-hover:bg-emerald-500 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Plus className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-left">How is the transfer process to take the test ?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white border-l-4 border-emerald-500 rounded-b-2xl">
                    <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massaum sociis natoque penatibus.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="rounded-2xl overflow-hidden border-0 shadow-sm">
                  <AccordionTrigger className="p-6 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:no-underline rounded-2xl [&[data-state=open]]:rounded-b-none group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 rounded-full bg-gray-300 group-hover:bg-emerald-500 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Plus className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-left">How is the transfer process to take the test ?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white border-l-4 border-emerald-500 rounded-b-2xl">
                    <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massaum sociis natoque penatibus.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="rounded-2xl overflow-hidden border-0 shadow-sm">
                  <AccordionTrigger className="p-6 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:no-underline rounded-2xl [&[data-state=open]]:rounded-b-none group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 rounded-full bg-gray-300 group-hover:bg-emerald-500 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Plus className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-left">How do I have to submit the required documents ?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white border-l-4 border-emerald-500 rounded-b-2xl">
                    <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massaum sociis natoque penatibus.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="rounded-2xl overflow-hidden border-0 shadow-sm">
                  <AccordionTrigger className="p-6 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:no-underline rounded-2xl [&[data-state=open]]:rounded-b-none group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 rounded-full bg-gray-300 group-hover:bg-emerald-500 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Plus className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-left">Do you have venue options for appointments?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white border-l-4 border-emerald-500 rounded-b-2xl">
                    <p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massaum sociis natoque penatibus.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                    src="/doctor-with-child-patient.jpg"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                  <div className="text-2xl font-bold text-white leading-none">+</div>
                </div>
                <span className="text-2xl font-bold tracking-tight">Pediatra</span>
              </div>
              <p className="text-gray-400 mb-6">Professional pediatric care for your children&apos;s health and wellbeing.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Child Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vaccinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Checkups</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-gray-400">123 Medical Street</p>
                <p className="text-gray-400">Health City, HC 12345</p>
                <p className="text-gray-400">Phone: (+62) 81 414 257</p>
                <p className="text-gray-400">Email: info@pediatra.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Pediatra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
