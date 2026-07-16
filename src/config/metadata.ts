import { Metadata } from "next";
import { siteConfig } from "./site";

const ogImage = `${siteConfig.url}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.name,

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  authors: [{ name: `${siteConfig.author}` }],

  keywords: [
    "ByMall",
    "E-commerce",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shopping",
    "Online Store",
    "Frontend",
  ],

  creator: `${siteConfig.author}`,

  publisher: `${siteConfig.author}`,

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

    url: siteConfig.url,

    siteName: siteConfig.name,

    title: siteConfig.name,

    description: siteConfig.description,

    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.name,

    description: siteConfig.description,

    images: [ogImage],
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
    title: siteConfig.name,
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
