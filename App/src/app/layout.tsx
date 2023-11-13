import React from "react";
import "../styles/globals.css";
import type { Metadata } from "next";
import { ShowNav } from "@/components/sharedLayouts";
import ShowFooter from "@/components/sharedLayouts/showFooter";
import { AuthProvider, CartProvider, GeneralProvider } from "@/context";

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
            <GeneralProvider>
              <ShowNav />

              {children}
            </GeneralProvider>
            <ShowFooter />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
