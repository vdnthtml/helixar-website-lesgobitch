import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helixar — AI Marketing Workspace for Mac & Windows",
  description:
    "Helixar researches competitors, plans campaigns, generates content, and tracks performance — all in one workspace that gets smarter every time you use it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body style={{ fontFamily: GeistSans.style.fontFamily }}>
        {children}
      </body>
    </html>
  );
}
