"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RefundPage() {
  const sections = [
    { title: "Consultation Refund Eligibility", content: "A full refund will be issued if your booked doctor fails to attend the scheduled consultation without prior notice, or if the consultation could not be conducted due to a technical issue on our platform." },
    { title: "Non-Refundable Cases", content: "Refunds will not be provided for consultations that have already been completed, or if you fail to attend a scheduled consultation without cancelling at least 12 hours in advance." },
    { title: "Cancellation Policy", content: "You may cancel a consultation up to 12 hours before the scheduled time for a full refund. Cancellations made within 12 hours of the appointment will not be eligible for a refund." },
    { title: "How to Request a Refund", content: "To request a refund, please contact our support team at support@sociveda.com within 48 hours of the scheduled consultation, with your booking ID and reason for the refund." },
    { title: "Refund Processing Time", content: "Approved refunds will be processed within 5–7 business days and credited back to your original payment method." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-custom">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-white mb-4">Refund Policy</h1>
          <p className="text-sm text-muted-text dark:text-[#71806c] mb-12">Last updated: January 1, 2025</p>
          <div className="flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={i} className="border-b border-line-custom dark:border-[#1d2a1a] pb-8">
                <h2 className="text-lg font-bold text-ink dark:text-white mb-3">{i + 1}. {s.title}</h2>
                <p className="text-sm text-body-text dark:text-[#aebba8] leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
