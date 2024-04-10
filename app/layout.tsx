import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import SidebarToggle from "@/components/SidebarToggle";
import Sidebar from "@/components/Sidebar";
import ContentLayout from "@/components/ContentLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-900 text-white"}>
        <SidebarToggle />
        <Sidebar />
        <div className="w-full min-h-screen p-0 xl:pl-72">
          <ContentLayout>
            {children}
          </ContentLayout>
        </div>
        <PrelineScript />
      </body>
    </html>
  );
}
