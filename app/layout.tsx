import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/components/pages/AuthProvider";
import { ThemeProvider } from "@/context/ThemeContext";

import localFont from 'next/font/local'

const myFont = localFont({
  src: './fonts/Vazirmatn.ttf',
})
 

export const metadata: Metadata = {
  title: "اکسسوری یوتاب | فروشگاه اینترنتی اکسسوری",
  description: "فروشگاه اینترنتی اکسسوری یوتاب، ارائه دهنده انواع زیورآلات، ساعت‌ها و عینک‌های آفتابی با کیفیت بالا و طراحی‌های منحصر به فرد. خرید آسان و سریع با ارسال رایگان در سراسر کشور.",
  robots: "index, follow",
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
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased ${myFont.className}`}>
        <ThemeProvider>
          <AuthProvider>
            <ToastContainer />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
