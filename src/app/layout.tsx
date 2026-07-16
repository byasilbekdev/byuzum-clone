import React from "react";
import { inter, poppins } from "@/config/fonts";
import { metadata } from "../config/metadata";
import { viewport } from "../config/viewport";
import "./globals.css";

export { metadata, viewport };
export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
