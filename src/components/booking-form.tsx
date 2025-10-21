"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';

interface BookingFormProps {
  translations: {
    name: string;
    email: string;
    service: string;
    date: string;
    yourName: string;
    yourEmail: string;
    selectService: string;
    childCare: string;
    vaccination: string;
    allergyTest: string;
    screening: string;
    pathology: string;
    cardiology: string;
    acupuncture: string;
    bookAppointmentNow: string;
  };
}

export default function BookingForm({ translations }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phoneNumber: formData.email, // Using email field as phone for home form
          service: formData.service,
          date: formData.date,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "",
          date: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative -mt-20 z-20">
      <Card className="shadow-2xl border-0 bg-white max-w-6xl mx-auto rounded-2xl">
        <CardContent className="p-6">
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✅ So&apos;rovingiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog&apos;lanamiz.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ❌ Xatolik yuz berdi. Iltimos, qaytadan urinib ko&apos;ring.
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">
                {translations.name}
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={translations.yourName}
                className="h-12 border-border/50 focus:border-primary rounded-lg"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">
                {translations.email}
              </label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder={translations.yourEmail}
                className="h-12 border-border/50 focus:border-primary rounded-lg"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">
                {translations.service}
              </label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full h-12 rounded-lg border border-border/50 bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              >
                <option value="">{translations.selectService}</option>
                <option value={translations.childCare}>{translations.childCare}</option>
                <option value={translations.vaccination}>{translations.vaccination}</option>
                <option value={translations.allergyTest}>{translations.allergyTest}</option>
                <option value={translations.screening}>{translations.screening}</option>
                <option value={translations.pathology}>{translations.pathology}</option>
                <option value={translations.cardiology}>{translations.cardiology}</option>
                <option value={translations.acupuncture}>{translations.acupuncture}</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">
                {translations.date}
              </label>
              <Input
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                type="date"
                className="h-12 border-border/50 focus:border-primary rounded-lg"
                required
              />
            </div>
            <div className="flex items-end">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all rounded-lg"
              >
                {isSubmitting ? "Yuborilmoqda..." : translations.bookAppointmentNow}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
