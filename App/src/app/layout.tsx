import React from "react";
import "../styles/globals.css";
import type { Metadata } from "next";
import { ShowNav } from "@/components/sharedLayouts";
import { AuthProvider } from "@/context/userContext";
import ShowFooter from "@/components/sharedLayouts/showFooter";
import { CartProvider } from "@/context";

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
          <CartProvider>
            <ShowNav />

            {children}
            <ShowFooter />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
