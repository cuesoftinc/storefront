import React from "react";
import "../styles/globals.css";
import { CartProvider, HomeProvider } from "@/context";
import type { Metadata } from "next";
import Footer from "../components/sharedLayouts/footer/footer";
import { ShowNav } from "@/components/sharedLayouts";

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
        <HomeProvider>
          <CartProvider>
            <ShowNav />
            {children}
            <Footer />
          </CartProvider>
        </HomeProvider>
      </body>
    </html>
  );
}
