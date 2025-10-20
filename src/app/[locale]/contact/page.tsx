"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/backround.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
          display: "flex",
          alignItems: "center",
        }}
        className=" py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">{t("contact.title")}</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>{t("common.home")}</span>
            <span>{">"}</span>
            <span>{t("contact.title")}</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold text-primary">
              {t("contact.subtitle")}
            </div>
            <h2 className="text-4xl font-bold">{t("contact.contactUs")}</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              {
                icon: <MapPin className="h-7 w-7 text-white" />,
                title: t("contact.ourOffice"),
                lines: [
                  t("contact.address"),
                ],
              },
              {
                icon: <Phone className="h-7 w-7 text-white" />,
                title: "Bizga qoʼngʼiroq qiling",
                lines: ["+998952817070 |", "+998998026232"],
              },
              {
                icon: <Mail className="h-7 w-7 text-white" />,
                title: "Elektron pochta",
                lines: ["ismoilnigmonov2000@gmail.com"],
              },
              {
                icon: <Clock className="h-7 w-7 text-white" />,
                title: "Ish vaqti",
                lines: ["Dushanba – Shanba: 08:00", "Yakshanba: 18:00 gacha"],
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.1870106527062!2d69.16063887659553!3d41.26126390380801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89c1564c9547%3A0xc8af944454712a43!2z0JfQsNGA0LPQsNGA0LvQuNC6INGD0LvQuNGG0LAsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1760962611647!5m2!1sru!2s"
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
                <h3 className="mb-6 text-2xl font-bold">Xabar yuborish</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  Bizga xabar yuboring, tez orada javob beramiz.
                </p>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Toʼliq ism
                      </label>
                      <Input placeholder="Ismingiz" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Telefon
                      </label>
                      <Input type="tel" placeholder="Telefon raqamingiz" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <Input type="email" placeholder="Emailingiz" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Mavzu
                      </label>
                      <Input placeholder="Mavzuni kiriting" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Xabar matni
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[120px]"
                      placeholder="Xabaringizni yozing"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Yuborish
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
