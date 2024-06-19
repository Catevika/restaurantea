import "@/app/globals.css";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { josefinSans } from '@/fonts';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurantea",
  description: "Delicious food at your fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
