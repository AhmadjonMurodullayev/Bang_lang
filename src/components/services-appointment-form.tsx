"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

interface ServicesAppointmentFormProps {
  translations: {
    fullName: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    selectService: string;
    selectServicePlaceholder: string;
    date: string;
    message: string;
    messagePlaceholder: string;
    bookAppointment: string;
    childMassage: string;
    lfk: string;
    cme: string;
    trainer: string;
    logoped: string;
    orthoped: string;
    pediatrician: string;
    neurologist: string;
    acupuncture: string;
    successMessage: string;
    errorMessage: string;
    loadingMessage: string;
  };
}

export default function ServicesAppointmentForm({ translations }: ServicesAppointmentFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
          name: formData.fullName,
          phoneNumber: formData.phone,
          service: formData.service,
          date: formData.date,
          message: formData.message || "",
          email: formData.email,
          type: 'service_appointment'
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          message: ""
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
    <Card className="shadow-2xl border-0">
      <CardContent className="p-10">
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✅ {translations.successMessage}
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            ❌ {translations.errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                {translations.fullName}
              </label>
              <Input 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder={translations.namePlaceholder} 
                className="h-12" 
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">
                {translations.phone}
              </label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={translations.phonePlaceholder}
                className="h-12"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {translations.email}
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={translations.emailPlaceholder}
              className="h-12"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {translations.selectService}
            </label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            >
              <option value="">{translations.selectServicePlaceholder}</option>
              <option value="childMassage">{translations.childMassage}</option>
              <option value="lfk">{translations.lfk}</option>
              <option value="cme">{translations.cme}</option>
              <option value="trainer">{translations.trainer}</option>
              <option value="logoped">{translations.logoped}</option>
              <option value="orthoped">{translations.orthoped}</option>
              <option value="pediatrician">{translations.pediatrician}</option>
              <option value="neurologist">{translations.neurologist}</option>
              <option value="acupuncture">{translations.acupuncture}</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {translations.date}
            </label>
            <Input 
              name="date"
              type="date" 
              value={formData.date}
              onChange={handleInputChange}
              className="h-12" 
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {translations.message}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm min-h-[100px] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={translations.messagePlaceholder}
            />
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? translations.loadingMessage : translations.bookAppointment}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
