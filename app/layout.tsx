import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/components/pages/AuthProvider";

import localFont from 'next/font/local'

const myFont = localFont({
  src: './fonts/IRYekan.woff',
})
 

export const metadata: Metadata = {
  title: "LuxeAccess - Premium Accessories Shop",
  description: "Discover premium accessories with AI-powered recommendations and glass morphism design",
  robots: "index,follow",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased ${myFont.className}`}>
        <AuthProvider>
          <ToastContainer />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
