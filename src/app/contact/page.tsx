import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="gradient-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Contact</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Home</span>
            <span>{">"}</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">Contact Us</div>
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            <Card className="group hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-colors">
                  <MapPin className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Our Office</h3>
                <p className="text-sm text-muted-foreground">45 Grand Road RT 3419</p>
                <p className="text-sm text-muted-foreground">Tangerang, Bali, INA</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-colors">
                  <Phone className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Call Us</h3>
                <p className="text-sm text-muted-foreground">+62 381 234 4567 /</p>
                <p className="text-sm text-muted-foreground">Hotline 177-110-35</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-colors">
                  <Mail className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Email Us</h3>
                <p className="text-sm text-muted-foreground">pediatra@domain.com /</p>
                <p className="text-sm text-muted-foreground">support@mail.com</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary transition-colors">
                  <Clock className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Working Hours</h3>
                <p className="text-sm text-muted-foreground">Mon-Sat: 9 am - 6 pm</p>
                <p className="text-sm text-muted-foreground">Sun: 10 am - 7 pm</p>
              </CardContent>
            </Card>
          </div>

          {/* Map and Form */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-bold">Leave A Message</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
                  dolore.
                </p>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Full Name</label>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Label</label>
                      <Input placeholder="Subject" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Your Email</label>
                      <Input type="email" placeholder="Your Email" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Telephone</label>
                      <Input type="tel" placeholder="Your Phone" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <textarea
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[120px]"
                      placeholder="Your Comment"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
