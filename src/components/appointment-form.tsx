"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface AppointmentFormProps {
  translations: {
    fullName: string;
    namePlaceholder: string;
    phoneNumber: string;
    phonePlaceholder: string;
    service: string;
    selectService: string;
    date: string;
    additionalRequest: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    services: string[];
  };
}

export default function AppointmentForm({ translations }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
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
          name: formData.name,
          phoneNumber: formData.phoneNumber,
          service: formData.service,
          date: formData.date,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phoneNumber: "",
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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={translations.namePlaceholder} 
                className="h-12" 
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">
                {translations.phoneNumber}
              </label>
              <Input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                type="tel"
                placeholder={translations.phonePlaceholder}
                className="h-12"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {translations.service}
            </label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            >
              <option value="">{translations.selectService}</option>
              {translations.services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {translations.date}
            </label>
            <Input 
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              type="date" 
              className="h-12" 
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">
              {translations.additionalRequest}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm min-h-[200px] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={translations.messagePlaceholder}
            />
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg"
          >
            {isSubmitting ? translations.submitting : translations.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}


