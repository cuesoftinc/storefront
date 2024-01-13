
import React from "react";
import "../styles/globals.css";
import type { Metadata } from "next";

import { AuthProvider } from "@/context/loginContectrafce";

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

              {children}
        </AuthProvider>
      </body>
    </html>
  );
}
