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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
  {[
    {
      icon: <MapPin className="h-7 w-7 text-white" />,
      title: "Our Office",
      lines: ["Sunset Road ST.3319,", "Denpasar, Bali, INA"],
    },
    {
      icon: <Phone className="h-7 w-7 text-white" />,
      title: "Call Us",
      lines: ["+62-361-234-4567 |", "Hotline 112-110-5"],
    },
    {
      icon: <Mail className="h-7 w-7 text-white" />,
      title: "Email Us",
      lines: ["pediatra@domain.com |", "support@info.com"],
    },
    {
      icon: <Clock className="h-7 w-7 text-white" />,
      title: "Working Hours",
      lines: ["Monday - Sunday : 9:30 AM", "to 7:00 PM"],
    },
  ].map((item, i) => (
    <div
      key={i}
      className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 pt-14 text-center"
    >
      {/* Icon Circle */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#23c99a] rounded-full h-16 w-16 flex items-center justify-center shadow-md">
        {item.icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-gray-800">
        {item.title}
      </h3>
      {item.lines.map((line, j) => (
        <p key={j} className="text-sm text-gray-500">
          {line}
        </p>
      ))}
    </div>
  ))}
</div>


          {/* Map and Form */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Map */}
            <Card className="overflow-hidden">
              <div className="aspect-[4/4] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0  }}
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
