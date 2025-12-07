export const metadata = {
  title: "Balamurugan Subburaj | Full Stack & Mobile Architect",
  description:
    "Portfolio of Balamurugan — Project Manager & Senior Mobile App Developer with 12+ years experience in Mobile, Full Stack, Cloud, DevOps, AI/ML.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
