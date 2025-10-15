import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Counter } from "@/components/counter"
import Image from "next/image"
import {
  Baby,
  TrendingUp,
  Syringe,
  Stethoscope,
  ClipboardCheck,
  MapPin,
  Mail,
  Phone,
  Check,
  ArrowRight,
  Users,
  Award,
  Heart,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="gradient-blue py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Services</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Home</span>
            <span>{">"}</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-primary uppercase tracking-wider">Our Services</div>
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold">Explore Our Main Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              { icon: Baby, title: "Childhood Diseases", color: "bg-emerald-500" },
              { icon: TrendingUp, title: "Child Development", color: "bg-teal-500" },
              { icon: Syringe, title: "Child Vaccinations", color: "bg-cyan-500" },
              { icon: Stethoscope, title: "Precise Diagnosis", color: "bg-emerald-500" },
              { icon: ClipboardCheck, title: "Annual Check-ups", color: "bg-teal-500" },
            ].map((service, i) => (
              <Card
                key={i}
                className="group hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2"
              >
                <CardContent className="p-10">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${service.color} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
                    dolore magna.
                  </p>
                  <Button variant="link" className="p-0 text-primary font-bold hover:underline">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-white group hover:shadow-2xl transition-all duration-300 border-0 hover:-translate-y-2">
              <CardContent className="p-10 flex flex-col justify-center h-full">
                <h3 className="mb-3 text-xl font-bold">Explore More Services</h3>
                <p className="mb-6 text-sm text-white/90 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
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

      {/* Appointment Section */}
      <section className="gradient-blue py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Form */}
            <Card className="shadow-2xl border-0">
              <CardContent className="p-10">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold">Full Name</label>
                      <Input placeholder="Your Name" className="h-12" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold">Email Address</label>
                      <Input type="email" placeholder="Your Email" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Service</label>
                    <select className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option>Select Service</option>
                      <option>Child Care</option>
                      <option>Vaccinations</option>
                      <option>Check-up</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Date</label>
                    <Input type="date" className="h-12" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Free Request</label>
                    <textarea
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm min-h-[100px] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your Message"
                    />
                  </div>
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg">
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="text-white">
              <div className="mb-4 text-sm font-bold uppercase tracking-wider">Booking Now</div>
              <h2 className="mb-6 text-4xl lg:text-5xl font-bold">Make An Appointment</h2>
              <p className="mb-10 text-white/90 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>

              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-bold">Opening Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Thursday", time: "08:00 AM - 20:00 PM" },
                    { day: "Friday", time: "09:00 AM - 17:00 PM" },
                    { day: "Saturday", time: "09:00 AM - 17:00 PM" },
                    { day: "Sunday", time: "09:00 AM - 18:00 PM" },
                  ].map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-white/90">{schedule.day}</span>
                      <span className="font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-bold">Support</h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-xs text-white/70 mb-1">Email Address</div>
                      <div className="text-sm font-semibold">info@pediatra.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-xs text-white/70 mb-1">Phone Number</div>
                      <div className="text-sm font-semibold">(+62) 81 414 257</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-primary uppercase tracking-wider">Our Locations</div>
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold">Our Clinic Spread All Over The World</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dignissim lectus pellentesque.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { city: "New York", address: "45 Grand Central, New York", color: "bg-emerald-500" },
              { city: "California", address: "45 Grand Central, California", color: "bg-teal-500" },
              { city: "Australia", address: "45 Grand Central, Australia", color: "bg-blue-500" },
              { city: "France", address: "45 Grand Central, France", color: "bg-cyan-500" },
            ].map((location, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${location.color} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{location.city}</h3>
                  <p className="text-sm text-muted-foreground">{location.address}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { count: 48, label: "Qualified Doctors", icon: Users, color: "from-blue-500 to-blue-600" },
              { count: 120, label: "Years Experience", icon: Award, color: "from-purple-500 to-purple-600" },
              { count: 92, label: "Clinic Rooms", icon: MapPin, color: "from-emerald-500 to-emerald-600" },
              { count: 231, label: "Happy Patients", icon: Heart, color: "from-cyan-500 to-cyan-600" },
            ].map((stat, i) => (
              <Card
                key={i}
                className={`bg-gradient-to-br ${stat.color} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardContent className="p-8 text-center">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 opacity-90" />
                  <Counter end={stat.count} duration={2500} className="text-4xl font-bold mb-2" />
                  <p className="text-sm text-white/90 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gradient-blue py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-white/80 uppercase tracking-wider">Testimonial</div>
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold text-white">What Customer Says</h2>
            <p className="mx-auto max-w-2xl text-white/90 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/20">
                      <Image
                        src="/diverse-group.png"
                        alt="Customer"
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Jane Doe</h4>
                      <p className="text-sm text-muted-foreground">Parent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-bold text-primary uppercase tracking-wider">Pricing & Plans</div>
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold">Affordable Pricing Plans</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-10">
                <h3 className="mb-6 text-3xl font-bold">Clever</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">$92</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <ul className="mb-10 space-y-4">
                  {["Unlimited Appointments", "Customer Support", "Free Consultation", "Exclusive Counseling"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-base">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-10">
                <h3 className="mb-6 text-3xl font-bold">Mighty</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">$82</span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
                <ul className="mb-10 space-y-4">
                  {["Unlimited Appointments", "Customer Support", "Free Consultation", "Exclusive Counseling"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-base">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
