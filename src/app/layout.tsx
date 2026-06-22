import type { Metadata, Viewport } from "next";
import { clashDisplay, gilroy } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "chlorophyll × Yuvabe — Direction (Mobile)",
  description:
    "AI transformation direction. Yuvabe Studios × chlorophyll.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${gilroy.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
