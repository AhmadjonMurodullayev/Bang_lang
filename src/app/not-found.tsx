"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">

        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-primary rounded-full shadow-xl">
            <span className="text-6xl font-bold text-white">404</span>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sahifa topilmadi
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          URL noto&apos;g&apos;ri kiritilgan yoki sahifa o&apos;chirilgan bo&apos;lishi mumkin.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Bosh sahifaga qaytish
            </Link>
          </Button>

          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Orqaga qaytish
          </Button>
        </div>

        {/* Useful Links */}
        <div className="bg-white rounded-xl p-6 shadow-lg border">
          <div className="flex items-center justify-center mb-4">
            <Search className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Sahifani topishga yordam</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Asosiy sahifalar:</h4>
              <ul className="space-y-1 text-gray-600">
                <li><Link href="/about" className="hover:text-primary transition-colors">Biz haqimizda</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Xizmatlar</Link></li>
                <li><Link href="/appointment" className="hover:text-primary transition-colors">Navbat olish</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Aloqa</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Foydali ma&apos;lumotlar:</h4>
              <ul className="space-y-1 text-gray-600">
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/doctors" className="hover:text-primary transition-colors">Shifokorlar</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Qo&apos;llab-quvvatlash</Link></li>
                <li><Link href="/" className="hover:text-primary transition-colors">Bosh sahifa</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">
            Agar muammo davom etsa, biz bilan bog&apos;laning:
          </p>
          <p className="text-primary font-semibold text-lg">
            📞 +998 (90) 123-45-67
          </p>
        </div>
      </div>
    </div>
  )
}
