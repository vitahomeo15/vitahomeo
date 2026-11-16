import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VitaHomeo | Patient Support & Inquiries",
  description:
    "Reach our patient coordination desk for appointment assistance, order tracking, and doctor onboarding inquiries.",
  alternates: {
    canonical: "https://www.vitahomeo.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
