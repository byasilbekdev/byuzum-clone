import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const SITE_NAME = "ByUzum clone";
const SITE_URL = "https://byuzumclone.vercel.app";
const DESCRIPTION =
  "ByUzum Clone is a modern e-commerce application inspired by Uzum Market. Built with Next.js 16, TypeScript and Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: SITE_NAME,

  title: {
    default: SITE_NAME,
    template: "%s | ByUzum Clone",
  },

  description: DESCRIPTION,

  keywords: [
    "ByUzum Clone",
    "Uzum Market Clone",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "E-commerce",
    "Online Shopping",
    "Frontend Portfolio",
    "Next.js Portfolio",
    "Modern Web App",
    "JavaScript",
    "Responsive Design",
  ],

  creator: "Asilbek Egamnazarov",

  publisher: "Asilbek Egamnazarov",

  generator: "Next.js",

  category: "shopping",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: SITE_URL,

    siteName: SITE_NAME,

    title: SITE_NAME,

    description: DESCRIPTION,

    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_NAME,

    description: DESCRIPTION,

    images: [`${SITE_URL}/og-image.png`],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],

    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],

    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  verification: {
    google: "UgXB6Yx7FfwHOj3O2z-nYdmBFa0WbjglMexWTg4RPCA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "light",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
