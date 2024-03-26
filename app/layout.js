import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuickMark",
  description: "A simple Markdown editor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:px-10 px-3">
          <Navbar />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
