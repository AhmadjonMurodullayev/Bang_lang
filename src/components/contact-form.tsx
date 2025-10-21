"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

interface ContactFormProps {
  translations: {
    sendMessage: string;
    sendMessageDesc: string;
    fullName: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    messageText: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
  };
}

export default function ContactForm({ translations }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          service: formData.subject,
          date: new Date().toISOString().split('T')[0],
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          subject: "",
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
    <Card>
      <CardContent className="p-8">
        <h3 className="mb-6 text-2xl font-bold">{translations.sendMessage}</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          {translations.sendMessageDesc}
        </p>
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                {translations.fullName}
              </label>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={translations.namePlaceholder} 
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                {translations.phone}
              </label>
              <Input 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                type="tel" 
                placeholder={translations.phonePlaceholder} 
                required
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                {translations.emailLabel}
              </label>
              <Input 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email" 
                placeholder={translations.emailPlaceholder} 
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                {translations.subject}
              </label>
              <Input 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={translations.subjectPlaceholder} 
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">
              {translations.messageText}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[120px]"
              placeholder={translations.messagePlaceholder}
            />
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            {isSubmitting ? translations.submitting : translations.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}


