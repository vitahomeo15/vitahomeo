import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieBanner } from "@/components/CookieBanner";
import Script from "next/script";


const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VitaHomeo | Homeopathic Treatment",
  description: "Consult experienced homeopathic doctors online in India. Book secure video consultations, receive digital homeopathy prescriptions, and get personalized holistic treatment from the comfort of home.",
  icons: {
    icon: [
      { url: "/vitahomeo-favicon-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/vitahomeo-favicon-512.png",
    apple: "/vitahomeo-favicon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/png" sizes="512x512" href="/vitahomeo-favicon-512.png" />
        <link rel="apple-touch-icon" href="/vitahomeo-favicon-512.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', savedTheme);
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-P35QTQE4MY"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P35QTQE4MY');
            `,
          }}
        />
        
        <ThemeProvider>
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
