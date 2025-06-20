import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/components/pages/AuthProvider";
import Logo from "@/components/globals/Logo";
import DashboardMenu from "@/components/pages/dashboard/DashboardMenu";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <body className={`antialiased`}>
        <AuthProvider>
          <ToastContainer />
          <section className="w-full max-w-[1800px] m-auto mt-10 flex gap-10 p-10 ">
            <div className="bg-white h-[80vh] flex flex-col items-start justify-between w-1/4 shadow-lg rounded-2xl p-5">
              <Logo height={50} isShowTitle width={50} />
              <DashboardMenu />
            </div>
            <div>{children}</div>
          </section>
        </AuthProvider>
      </body>
    </html>
  );
}
