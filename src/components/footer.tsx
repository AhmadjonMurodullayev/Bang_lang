import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-2 text-2xl font-bold">Subscribe Our Newsletter</h3>
            <p className="mb-6 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              eiusmod.
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-full"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <div className="text-2xl font-bold text-white">+</div>
              </div>
              <span className="text-2xl font-bold">Pediatra</span>
            </Link>
            <p className="mb-6 text-sm text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Doctor
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Useful Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Make Appointment */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Make Appointment</h4>
            <ul className="mb-6 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Clock className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                <span>09 Am - 07 Pm, Monday - Saturday</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                <span>10 Am - 05 Pm, Tuesday</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 rounded-xl bg-slate-800 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Call Us Today</div>
                <div className="font-semibold">(+62) 81 414 257</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-slate-400">Copyright © 2022. All right reserved.</p>
        </div>
      </div>
    </footer>
  )
}
