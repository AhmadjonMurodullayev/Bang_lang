import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone,
  Search,
  Users,
  Calendar,
  ClipboardCheck,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Appointment = () => {
  return (
    <>
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
        className=" py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Navbat olish</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span>Bosh sahifa</span>
            <span>{">"}</span>
            <span>Navbat olish</span>
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
                      <label className="mb-2 block text-sm font-semibold">
                        Toʼliq ism
                      </label>
                      <Input placeholder="Ismingiz" className="h-12" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Emailingiz"
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Xizmat
                    </label>
                    <select className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                      <option>Xizmatni tanlang</option>
                      <option>Bolalar parvarishi</option>
                      <option>Emlash</option>
                      <option>Tekshiruv</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Sana
                    </label>
                    <Input type="date" className="h-12" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Qoʼshimcha soʼrov
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm min-h-[200px] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Xabaringiz"
                    />
                  </div>
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg">
                    Navbat olish
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="text-black">
              <div className="mb-4 text-sm font-bold uppercase tracking-wider">
                Hozir navbat
              </div>
              <h2 className="mb-6 text-4xl lg:text-5xl font-bold">
                Navbat belgilang
              </h2>
              <p className="mb-7 text-black/90 leading-relaxed text-lg">
                Sog‘lom hayot sari birinchi qadamni biz bilan tashlang! Navbat
                olish uchun shakldagi maʼlumotlarni to‘ldiring va qulay vaqtda
                professional tibbiy xizmatlardan foydalaning. Sifatli parvarish
                va e’tiborli yondashuv har bir bemor uchun kafolatlanadi.
              </p>

              <div className="mb-5">
                <h3 className="mb-6 text-2xl font-bold">Ish vaqti</h3>
                <div className="space-y-4">
                  {[
                    { day: "Dushanba - Juma", time: "08:00 - 18:00" },
                    { day: "Shanba", time: "08:00 - 15:00" },
                    { day: "Yakshanba", time: "dam olish kuni" },
                  ].map((schedule, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 border-b border-white/20"
                    >
                      <span className="text-black/90">{schedule.day}</span>
                      <span className="font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h3 className="mb-4 text-2xl font-bold">Qoʼllab-quvvatlash</h3>
                <p className="mb-4 text-black/90 leading-relaxed">
                  Savollaringiz boʼlsa, biz bilan bogʼlaning.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-black/70 mb-1">
                        Email manzil
                      </div>
                      <div className="text-sm font-semibold">
                        ismoilnigmonov2000@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-black/70 mb-1">
                        Telefon raqam
                      </div>
                      <div className="text-sm font-semibold">+998952817070</div>
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
                Bu yerda uchrashuvga yozilish bo&apos;yicha batafsil ma&apos;lumotlar
                bilan tanishishingiz mumkin.
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance leading-tight">
                Qanday qilib uchrashuvga yozilish mumkin?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Pediatr qabuliga yozilish uchun quyidagi oddiy bosqichlarni
                bajaring: Sizga eng yaqin pediatrni toping, kerakli xizmatlarni
                tanlang va uchrashuvga yoziling. Belgilangan vaqtda shifokor
                bilan uchrashing va o&apos;zingiz va farzandingiz sog&apos;lig&apos;i uchun
                kerakli maslahatlarni oling. Jarayon tez, oson va qulay!
              </p>

              <div className="space-y-6 pt-4">
                {[
                  {
                    step: "01",
                    title: "Eng yaqin pediatrni topish",
                    icon: Search,
                  },
                  {
                    step: "02",
                    title: "Xizmatlarni tanlash     ",
                    icon: ClipboardCheck,
                  },
                  { step: "03", title: "Navbat olish", icon: Calendar },
                  { step: "04", title: "Shifokor bilan uchrashish", icon: Users },
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
  );
};

export default Appointment;
