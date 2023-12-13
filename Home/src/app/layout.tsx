import "../styles/globals.css";
import { Footer, Nav } from "@/components/sharedLayoutsrafce";
import { HomeProvider } from "@/contextrafce";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is the home page",
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
          <Nav />
          {children}
          <Footer />
        </HomeProvider>
      </body>
    </html>
  );
}
