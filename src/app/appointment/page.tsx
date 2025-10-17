import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Apple, Check, Mail, Phone, Play, Search , Users, Calendar,ClipboardCheck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Appointment = () => {
  return (
    <>
       <section className="gradient-blue py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Services</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Home</span>
            <span>{">"}</span>
            <span>Appointment</span>
          </div>
        </div>
      </section>

         <section className="py-24">
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm min-h-[200px] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
            <div className="text-black">
              <div className="mb-4 text-sm font-bold uppercase tracking-wider">Booking Now</div>
              <h2 className="mb-6 text-4xl lg:text-5xl font-bold">Make An Appointment</h2>
              <p className="mb-7 text-black/90 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>

              <div className="mb-5">
                <h3 className="mb-6 text-2xl font-bold">Opening Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Thursday", time: "08:00 AM - 20:00 PM" },
                    { day: "Friday", time: "09:00 AM - 17:00 PM" },
                    { day: "Saturday", time: "09:00 AM - 17:00 PM" },
                    { day: "Sunday", time: "09:00 AM - 18:00 PM" },
                  ].map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-black/90">{schedule.day}</span>
                      <span className="font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h3 className="mb-4 text-2xl font-bold">Support</h3>
                <p className="mb-4 text-black/90 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-black/70 mb-1">Email Address</div>
                      <div className="text-sm font-semibold">info@pediatra.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Phone className="h-7 w-7 text-white"  />
                    </div>
                    <div>
                      <div className="text-xs text-black/70 mb-1">Phone Number</div>
                      <div className="text-sm font-semibold">(+62) 81 414 257</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

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
    </>
  )
}

export default Appointment