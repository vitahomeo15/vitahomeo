import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homeopathy & Holistic Health Blog | VitaHomeo",
  description:
    "Explore evidence-informed articles on constitutional homeopathy, lifestyle care, hormonal balance, and holistic wellness from verified practitioners.",
  alternates: {
    canonical: "https://www.vitahomeo.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
