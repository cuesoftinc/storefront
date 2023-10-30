import React from "react";
import "../styles/globals.css";
import type { Metadata } from "next";
import Footer from "../components/sharedLayouts/footer/footer";
import { ShowNav } from "@/components/sharedLayouts";
import { AuthProvider } from "@/context/userContext";

export const metadata: Metadata = {
  title: "Home",
  description: "StoreFront Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ShowNav />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
