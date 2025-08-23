import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/components/pages/AuthProvider";

import localFont from 'next/font/local'

const myFont = localFont({
  src: './fonts/IRYekan.woff',
})
 

export const metadata: Metadata = {
  title: "Z DEV dashboard",
  description: "Ecommerce dashboard",
  robots: "noindex,nofollow",
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
