// app/layout.js

import Navbar from "./_components/shared/Navbar";
import "./globals.css";
import { Raleway as RalewayFont } from "next/font/google";

const raleway = RalewayFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "NEXAUS FORM BUILDER",
  description: "DEVELOPED BY NEXAUS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-4">{children}</main>
      </body>
    </html>
  );
}
