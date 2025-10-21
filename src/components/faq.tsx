"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

interface FAQProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQ({ questions }: FAQProps) {
  return (
    <Accordion type="single" defaultValue="item-0" collapsible className="space-y-4">
      {questions.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="rounded-2xl overflow-hidden border-0 shadow-sm">
          <AccordionTrigger className="p-6 bg-gray-50 text-gray-800 hover:bg-gray-100 hover:no-underline rounded-2xl [&[data-state=open]]:rounded-b-none group">
            <div className="flex items-center gap-4 w-full">
              <div className="w-8 h-8 rounded-full bg-gray-300 group-hover:bg-emerald-500 flex items-center justify-center flex-shrink-0 transition-colors">
                <Plus className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <span className="font-semibold text-left">{faq.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 bg-white border-l-4 border-emerald-500 rounded-b-2xl">
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}


