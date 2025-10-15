import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Counter } from "@/components/counter";
import {
  Heart,
  Syringe,
  TestTube,
  Stethoscope,
  Activity,
  Microscope,
  ArrowRight,
  Check,
  MapPin,
  Users,
  Award,
  TrendingUp,
  ClipboardCheck,
  Clock,
  Smartphone,
  Download,
  Plus,
  Search,
  Calendar,
  MessageCircle,
  Globe,
  Play,
  Apple,
  Hospital,
  ClipboardList,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import childIcon from "@/assets/icons/child.png";
import vaccinationsIcon from "@/assets/icons/vaccinations.png";
import allergyIcon from "@/assets/icons/allergy.png";
import screeningsIcon from "@/assets/icons/creenings.png";
import pathologyIcon from "@/assets/icons/pathology.png";
import cardiologyIcon from "@/assets/icons/cardiology.png";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[800px] ">
        <div
          style={{
            background:
             "linear-gradient(135deg, #548bff 0%, #3b82f6 50%, #60a5fa 100%)",
          }}
        >
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  NEW! Get the latest update about health.
                </div>
                <h1 className="text-5xl font-bold leading-tight lg:text-6xl text-balance">
                  We Always Provide Health Solutions For Your Child
                </h1>
                <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all rounded-full"
                  >
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent h-12 px-8 text-base font-semibold rounded-full"
                  >
                    Contact Us
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
                      src="/hero-image.png"
                      alt="Doctor with child"
                      width={500}
                      height={350}
                      className=" h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form Card - Overlapping */}
          </div>
        </div>
        <div className="relative -mt-20 z-20">
          <Card className="shadow-2xl border-0 bg-white max-w-6xl mx-auto rounded-2xl">
            <CardContent className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Name
                  </label>
                  <Input
                    placeholder="Your Name"
                    className="h-12 border-border/50 focus:border-primary rounded-lg"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="h-12 border-border/50 focus:border-primary rounded-lg"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Service
                  </label>
                  <select className="w-full h-12 rounded-lg border border-border/50 bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Select Services</option>
                    <option>Child Care</option>
                    <option>Vaccinations</option>
                    <option>Allergy Test</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-foreground">
                    Date
                  </label>
                  <Input
                    type="date"
                    className="h-12 border-border/50 focus:border-primary rounded-lg"
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all rounded-lg">
                    Booking Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
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
                  src="/doctor-with-child-patient.jpg"
                  alt="Doctor with child"
                  width={500}
                  height={667}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 relative">
              <div className="text-sm font-bold text-primary uppercase tracking-wider">About Pediatra</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight text-gray-800">
                You Can Find Pediatra At Your Fingertips
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 pt-4">
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                    </div>
                    <h4 className="font-semibold text-gray-700 text-sm">
                      Preventing Childhood Obesity
                    </h4>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                    </div>
                    <h4 className="font-semibold text-gray-700 text-sm">
                      Diabetes In Children Symptoms
                    </h4>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                    </div>
                    <h4 className="font-semibold text-gray-700 text-sm">
                      Newborn Care FAQs
                    </h4>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                    </div>
                    <h4 className="font-semibold text-gray-700 text-sm">
                      Testing For ADHD In Children
                    </h4>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white stroke-[3]" />
                    </div>
                    <h4 className="font-semibold text-gray-700 text-sm">
                      Customer Support Services
                    </h4>
                  </div>
                </div>

                {/* Small image on right */}
                <div className="hidden lg:flex justify-end items-start">
                  <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/doctor-with-child-patient.jpg"
                      alt="Doctor with baby"
                      width={224}
                      height={224}
                      className="h-full w-full object-cover"
                    />
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
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base">Dr. Monica Hopkins</h4>
                  <p className="text-sm text-primary font-medium">Pediatra Founder</p>
                </div>
                <div className="ml-auto">
                  <Image
                    src="/signature.jpg"
                    alt="Signature"
                    width={120}
                    height={40}
                    className="h-10 opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Services Icons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[
              { image: childIcon, label: "Child Care" },
              { image: vaccinationsIcon, label: "Vaccinations" },
              { image: allergyIcon, label: "Allergy Test" },
              { image: screeningsIcon, label: "Screenings" },
              { image: pathologyIcon, label: "Pathology" },
              { image: cardiologyIcon, label: "Cardiology" },
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
                    <h3 className="font-semibold text-sm text-gray-700 text-center">{service.label}</h3>
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
          <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Free Online Consultation</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all rounded-full"
              >
                Make Appointment
              </Button>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary text-base font-semibold flex items-center gap-2 transition-colors"
              >
                Learn More <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 gradient-blue-light">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-white uppercase tracking-wider">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Explore Our Main Services
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Childhood Diseases",
                color: "bg-emerald-500",
              },
              {
                icon: TrendingUp,
                title: "Child Development",
                color: "bg-teal-500",
              },
              {
                icon: Syringe,
                title: "Child Vaccinations",
                color: "bg-cyan-500",
              },
              {
                icon: Stethoscope,
                title: "Precise Diagnosis",
                color: "bg-emerald-500",
              },
              {
                icon: ClipboardCheck,
                title: "Annual Check-ups",
                color: "bg-teal-500",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="group hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-10">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${service.color} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <Link
                    href="/services"
                    className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
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
                  Explore More Services
                </h3>
                <p className="mb-6 text-sm text-white/90 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 w-fit rounded-full font-semibold"
                >
                  All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Top Section - Locations */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left Side - Text and Locations */}
            <div>
              <div className="mb-4 text-sm font-bold text-primary uppercase tracking-wider">
                Our Locations
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                Our Clinic Spread All Over The World
              </h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Locations Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    city: "New York",
                    address: "29 Union Square West, NY. LB 10004",
                    color: "bg-primary",
                  },
                  {
                    city: "California",
                    address: "19 Califf Square East, CL. LBA 11109",
                    color: "bg-primary",
                  },
                  {
                    city: "Australia",
                    address: "77 Sydney Square West, SY. LB 21189",
                    color: "bg-blue-500",
                  },
                  {
                    city: "France",
                    address: "10 Avenue Square East, FR. LB 22432",
                    color: "bg-blue-500",
                  },
                ].map((location, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${location.color} flex-shrink-0`}>
                      <Hospital className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{location.city}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {location.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Globe */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Custom globe with hexagonal pattern */}
                <div className="h-80 w-80 rounded-full border-4 border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  {/* Hexagonal pattern background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  
                  {/* Location markers */}
                  <div className="absolute top-16 left-20 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="absolute top-32 right-16 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="absolute bottom-20 left-24 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="absolute bottom-16 right-20 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="absolute top-24 left-1/2 h-3 w-3 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Statistics */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-8 md:px-10 md:py-10 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { count: 48, label: "Pediatrician", iconType: "doctor", highlight: false },
                  { count: 120, label: "Medical Stuff", iconType: "stethoscope", highlight: false },
                  { count: 92, label: "Pediatra Polyclinic", iconType: "hospital", highlight: true },
                  { count: 231, label: "Safe Observation", iconType: "clipboard", highlight: false },
                ].map((stat, i) => (
                  <div key={i} className="relative">
                    {/* Top white pill with icon */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[250px] h-[70px] bg-white rounded-[999px] shadow-md flex items-center justify-center">
                      {stat.iconType === 'doctor' && (
                        <UserRound className={`${stat.highlight ? 'text-emerald-600' : 'text-blue-600'} h-8 w-8`} />
                      )}
                      {stat.iconType === 'stethoscope' && (
                        <Stethoscope className={`${stat.highlight ? 'text-emerald-600' : 'text-blue-600'} h-8 w-8`} />
                      )}
                      {stat.iconType === 'hospital' && (
                        <Hospital className={`${stat.highlight ? 'text-emerald-600' : 'text-blue-600'} h-8 w-8`} />
                      )}
                      {stat.iconType === 'clipboard' && (
                        <ClipboardList className={`${stat.highlight ? 'text-emerald-600' : 'text-blue-600'} h-8 w-8`} />
                      )}
                    </div>

                    {/* Content card */}
                    <div className={`${stat.highlight ? 'bg-emerald-500 rounded-2xl shadow-xl' : ''} pt-16 pb-7 px-6 text-center text-white`}>
                      <Counter end={stat.count} duration={1200} className="text-5xl font-extrabold tracking-tight" suffix="+" />
                      <div className="mt-1 text-white/90 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Booking Steps Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src="/pediatrician-with-child-patient.jpg"
                  alt="Doctor with tablet and child"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="text-sm font-bold text-primary uppercase tracking-wider">
                Online Appointment
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Easy Step To Booking
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit.
              </p>

              <div className="space-y-6 pt-4">
                {[
                  {
                    step: "01",
                    title: "Search Nearest Pediatra",
                    icon: Search,
                  },
                  {
                    step: "02",
                    title: "Select Your Services",
                    icon: ClipboardCheck,
                  },
                  { step: "03", title: "Make Appointment", icon: Calendar },
                  { step: "04", title: "Meet With Your Doctor", icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex items-center gap-3">
                      <item.icon className="h-6 w-6 text-primary" />
                      <h4 className="font-semibold text-foreground text-lg">
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

      {/* App Download Section */}
      <section className="py-24 bg-[#0693e3]">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="text-white space-y-6">
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Download Pediatra App
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Download Pediatra App On Your Gadget
              </h2>
              <p className="text-white/90 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
                reprehenderit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Exclusive Healthcare",
                  "Online video consult",
                  "Modern Clinic",
                  "Ask Free Questions",
                  "Live Medical Chat",
                  "24/7 Help Center",
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all rounded-full flex items-center gap-3">
                  <Apple className="h-6 w-6" />
                  App Store
                </Button>
                <Button className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all rounded-full flex items-center gap-3">
                  <Play className="h-6 w-6" />
                  Google Play
                </Button>
              </div>
            </div>

            {/* Mobile Mockups */}
            <div className="relative">
              <div className="flex justify-center items-center">
                <Image
                  src="/phene.png"
                  alt="App Mockup"
                  width={500}
                  height={500}
                />
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
              Latest News
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              News & Article
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                image: "/baby-health-checkup.jpg",
                title: "Some Of The Most Common Children's Diseases",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
              },
              {
                image: "/sick-child-with-thermometer.jpg",
                title: "How To Take Care Of Your Child Health",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
              },
              {
                image: "/mother-giving-medicine-to-child.jpg",
                title: "Best Medicine For Your Child",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
              },
              {
                image: "/toddler-learning-to-walk.jpg",
                title: "Child Development Stages",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
              },
              {
                image: "/baby-with-stuffy-nose.jpg",
                title: "Common Cold In Children",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
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
                  <Link
                    href="/blog"
                    className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
