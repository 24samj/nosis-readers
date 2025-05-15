import type { Metadata } from "next";
import "./globals.css";
import { FadedFooter, Header, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Nosis Readers",
  description: "A book reading app for Nosis folks",
  icons: {
    icon: "/nosis-icon.ico",
    shortcut: "/nosis-icon.ico",
    apple: "/nosis-icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex h-screen w-full overflow-hidden">
          <Navbar />
          <div className="flex w-full flex-1 flex-col overflow-hidden">
            <Header />
            <main className="w-full flex-1 overflow-y-auto">
              {children}
              <FadedFooter />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
