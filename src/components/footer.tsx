import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link as IntlLink } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-2 text-2xl font-bold">{t("footer.newsletterTitle")}</h3>
            <p className="mb-6 text-slate-400">{t("footer.newsletterDescription")}</p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-full"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full">{t("footer.subscribe")}</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <IntlLink href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <div className="text-2xl font-bold text-white">+</div>
              </div>
              <span className="text-2xl font-bold">Pediatra</span>
            </IntlLink>
            <p className="mb-6 text-sm text-slate-400">{t("footer.brandDescription")}</p>
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
            <h4 className="mb-4 text-lg font-semibold">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <IntlLink href="/about" className="hover:text-primary transition-colors">
                  {t("common.about")}
                </IntlLink>
              </li>
              <li>
                <IntlLink href="/services" className="hover:text-primary transition-colors">
                  {t("common.services")}
                </IntlLink>
              </li>
              <li>
                <IntlLink href="/blog" className="hover:text-primary transition-colors">
                  {t("common.blog")}
                </IntlLink>
              </li>
              <li>
                <IntlLink href="/contact" className="hover:text-primary transition-colors">
                  {t("footer.pricing")}
                </IntlLink>
              </li>
              <li>
                <IntlLink href="/contact" className="hover:text-primary transition-colors">
                  {t("common.contact")}
                </IntlLink>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">{t("footer.usefulLinks")}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("common.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("common.termsAndConditions")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("footer.disclaimer")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("common.support")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  {t("common.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Make Appointment */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">{t("common.appointment")}</h4>
            <ul className="mb-6 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Clock className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                <span>{t("footer.workingHours1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                <span>{t("footer.workingHours2")}</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 rounded-xl bg-slate-800 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400">{t("footer.callToday")}</div>
                <div className="font-semibold">{t("footer.phoneNumber")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-slate-400">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
